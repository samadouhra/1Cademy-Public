import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"

import { admin, db } from "../lib/firestoreServer/admin"

interface AuthenticatedRequest extends NextApiRequest {
  user: any
}

const retrieveAuthenticatedUser = async ({ uname, uid }: { uname: string | null; uid: string }) => {
  try {
    let userData: any = {}
    let query: any
    let errorMessage = ""
    if (uname) {
      query = db.doc(`/users/${uname}`)
    } else if (uid) {
      query = db.collection("users").where("userId", "==", uid).limit(1)
    }
    const userDoc = await query.get()
    let creditsData, reputationsData
    if ((uname && userDoc.exists) || (uid && userDoc.docs.length !== 0)) {
      if (uname) {
        userData = userDoc.data()
      } else if (uid) {
        userData = userDoc.docs[0].data()
      }
      userData = {
        uid,
        deCourse: userData.deCourse,
        deInstit: userData.deInstit,
        deMajor: userData.deMajor,
        tag: userData.tag,
        tagId: userData.tagId,
        deCredits: userData.deCredits,
        practicing: userData.practicing,
        fName: userData.fName,
        lName: userData.lName,
        imageUrl: userData.imageUrl,
        chooseUname: userData.chooseUname,
        lang: userData.lang,
        uname: userData.uname,
        theme: "theme" in userData ? userData.theme : "Dark",
        background: "background" in userData ? userData.background : "Image",
        clickedTOS: userData.clickedTOS,
        clickedPP: userData.clickedPP,
        clickedCP: userData.clickedCP,
        createdAt: userData.createdAt.toDate(),
      }
      try {
        creditsData = await db
          .collection("credits")
          .where("credits", "==", userData.deCredits)
          .where("tagId", "==", userData.tagId)
          .limit(1)
          .get()
      } catch (err) {
        errorMessage = "The credits object does not exist!"
        console.error(errorMessage)
        return { status: 500, data: errorMessage }
      }
    } else {
      errorMessage = "The user does not exist!"
      console.error(errorMessage)
      return { status: 500, data: errorMessage }
    }
    if (creditsData.docs.length !== 0) {
      const credits = creditsData.docs[0].data()
      delete credits.createdAt
      delete credits.credits
      delete credits.tag
      userData = {
        ...userData,
        ...credits,
      }
      try {
        reputationsData = await db
          .collection("reputations")
          .where("uname", "==", userData.uname)
          .where("tagId", "==", userData.tagId)
          .limit(1)
          .get()
      } catch (err) {
        errorMessage = "The user " + userData.uname + " does not have reputations for the tag " + userData.tag
        console.error(errorMessage)
        return { status: 500, data: errorMessage }
      }
    } else {
      errorMessage = "The credits object does not exist!"
      console.error(errorMessage)
      return { status: 500, data: errorMessage }
    }
    if (reputationsData.docs.length !== 0) {
      const reputations = reputationsData.docs[0].data()
      delete reputations.createdAt
      delete reputations.updatedAt
      delete reputations.tag
      delete reputations.uname
      userData = {
        ...userData,
        ...reputations,
      }
      return { status: 200, data: userData }
    }
    errorMessage = "The user " + userData.uname + " does not have reputations for the tag " + userData.tag.title
    console.error(errorMessage)
    return { status: 500, data: errorMessage }
  } catch (err: any) {
    console.error(err)
    return { status: 500, data: err.code }
  }
}

const fbAuth = (handler: NextApiHandler) => {
  return async (req: AuthenticatedRequest, res: NextApiResponse) => {
    try {
      const decodedToken = await admin.auth().verifyIdToken(req.headers.authorization!)
      if (!decodedToken) return res.status(401).send({ error: "UnAuthorized" })
      req.user = decodedToken

      const { status, data } = await retrieveAuthenticatedUser({ uname: null, uid: req.user.uid })

      if (status !== 200) return res.status(status).send({ error: data })

      //authenticated
      req.user.userData = data
      await handler(req, res)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}

export default fbAuth
