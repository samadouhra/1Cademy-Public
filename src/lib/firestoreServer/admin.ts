import { getAuth } from "firebase/auth";
import admin from "firebase-admin";
import { cert, initializeApp } from "firebase-admin/app";
import { getFirestore, WriteBatch } from "firebase-admin/firestore";

require("dotenv").config();

if (!admin.apps.length) {
  initializeApp({
    credential: cert({
      type: process.env.ONECADEMYCRED_TYPE,
      project_id: process.env.NEXT_PUBLIC_PROJECT_ID,
      private_key_id: process.env.ONECADEMYCRED_PRIVATE_KEY_ID,
      private_key: process.env.ONECADEMYCRED_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      client_email: process.env.ONECADEMYCRED_CLIENT_EMAIL,
      client_id: process.env.ONECADEMYCRED_CLIENT_ID,
      auth_uri: process.env.ONECADEMYCRED_AUTH_URI,
      token_uri: process.env.ONECADEMYCRED_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.ONECADEMYCRED_AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: process.env.ONECADEMYCRED_CLIENT_X509_CERT_URL,
      storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
      databaseURL: process.env.NEXT_PUBLIC_DATA_BASE_URL
    } as any)
  });
  getFirestore().settings({ ignoreUndefinedProperties: true });
}
const MAX_TRANSACTION_WRITES = 499;
const db = getFirestore();
const auth = getAuth();

const makeCommitBatch = async (batch: WriteBatch) => {
  await batch.commit();
  batch = db.batch();
  return [batch, 0];
};

const isFirestoreDeadlineError = (err: any) => {
  const errString = err.toString();
  return (
    errString.includes("Error: 13 INTERNAL: Received RST_STREAM") ||
    errString.includes("Error: 4 DEADLINE_EXCEEDED: Deadline exceeded")
  );
};

export const commitBatch = async (batch: WriteBatch) => {
  try {
    await makeCommitBatch(batch);
  } catch (err) {
    if (isFirestoreDeadlineError(err)) {
      const theInterval = setInterval(async () => {
        try {
          await makeCommitBatch(batch);
          clearInterval(theInterval);
        } catch (err) {
          if (!isFirestoreDeadlineError(err)) {
            clearInterval(theInterval);
            throw err;
          }
        }
      }, 4000);
    }
  }
};

const checkRestartBatchWriteCounts = async (batch: WriteBatch, writeCounts: number): Promise<[WriteBatch, number]> => {
  writeCounts += 1;
  if (writeCounts >= MAX_TRANSACTION_WRITES) {
    await commitBatch(batch);
  }
  return [batch, writeCounts];
};

export { admin, db, auth, checkRestartBatchWriteCounts };
