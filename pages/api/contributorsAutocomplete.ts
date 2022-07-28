import { NextApiRequest, NextApiResponse } from "next";
import Typesense from "typesense";
import { SearchParams } from "typesense/lib/Typesense/Documents";

import { getQueryParameter } from "../../lib/utils";
import { FilterValue, ResponseAutocompleteFilter } from "../../src/knowledgeTypes";

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseAutocompleteFilter>) {
  const q = getQueryParameter(req.query.q) || "";

  const client = new Typesense.Client({
    nodes: [
      {
        host: process.env.ONECADEMYCRED_TYPESENSE_HOST as string,
        port: parseInt(process.env.ONECADEMYCRED_TYPESENSE_PORT as string),
        protocol: process.env.ONECADEMYCRED_TYPESENSE_PROTOCOL as string
      }
    ],
    apiKey: process.env.ONECADEMYCRED_TYPESENSE_APIKEY as string
  });

  if (q.length === 0) {
    const response: ResponseAutocompleteFilter = {
      results: defaultContributors
    };
    res.status(200).json(response);
    return;
  }

  try {
    const searchParameters: SearchParams = { q, query_by: "name,username" };
    const searchResults = await client
      .collections<{ name: string; username: string; imageUrl: string }>("users")
      .documents()
      .search(searchParameters);

    const contributors: FilterValue[] | undefined = searchResults.hits?.map(el => ({
      id: el.document.username,
      name: el.document.name,
      imageUrl: el.document.imageUrl
    }));
    const response: ResponseAutocompleteFilter = {
      results: contributors || []
    };
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errorMessage: "Cannot get contributors" });
  }
}

const defaultContributors = [
  {
    id: "1man",
    name: "Iman YeckehZaare",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/onecademy-1.appspot.com/o/ProfilePictures%2F1man_Thu%2C%2006%20Feb%202020%2016%3A26%3A40%20GMT.png?alt=media&token=94459dbb-81f9-462a-83ef-62d1129f5851"
  },
  {
    id: "AmeliaHenriques00",
    name: "Amelia Henriques",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/onecademy-1.appspot.com/o/ProfilePictures%2Fundefined%2FSat%2C%2027%20Mar%202021%2022%3A32%3A04%20GMT.jpg?alt=media&token=8c631bc5-31c0-423b-965f-1008aefe8c28"
  },
  {
    id: "Grae",
    name: "Gail Grot",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/onecademy-1.appspot.com/o/ProfilePictures%2Fa2m8BaOOO2OrIhKGIOmz7Ly1v8q1%2FWed%2C%2009%20Dec%202020%2002%3A37%3A12%20GMT.jpg?alt=media&token=db5b7e1b-8545-4cb7-b3ee-c5d37ed62ac0"
  },
  {
    id: "Gzhang",
    name: "Ge Zhang",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/onecademy-1.appspot.com/o/ProfilePictures%2F5L6ruePFjHRqYZNX4AvioUgc6h23%2FTue%2C%2016%20Mar%202021%2013%3A53%3A33%20GMT.jpg?alt=media&token=68644439-e594-423f-b729-a28037136397"
  },
  {
    id: "Shabana L. Gupta",
    name: "Shabana Gupta",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/onecademy-1.appspot.com/o/ProfilePictures%2FjSAwR5i7XbSRY29qMQVCJRUxNsQ2%2FTue%2C%2019%20Jan%202021%2021%3A48%3A12%20GMT.JPG?alt=media&token=7de1fb26-fd34-44aa-b8ad-277136f119a7"
  },
  {
    id: "brk1112",
    name: "Ben Kessler",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/onecademy-1.appspot.com/o/ProfilePictures%2FBWR3EEVNIdX7V3IqT57yAGj7tdX2%2FWed%2C%2001%20Jul%202020%2018%3A16%3A16%20GMT.jpg?alt=media&token=05d30bce-edda-4a1b-8720-6b1ae1bbd080"
  },
  {
    id: "elijah-fox",
    name: "Elijah Fox",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/onecademy-1.appspot.com/o/ProfilePictures%2Felijah-fox_Sun%2C%2016%20Feb%202020%2018%3A07%3A47%20GMT.JPG?alt=media&token=e733b6ca-8930-4801-ad33-37b7cee0c7a4"
  },
  {
    id: "graceramstad",
    name: "Grace Ramstad",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/onecademy-1.appspot.com/o/ProfilePictures%2FHZGNX2AkW8OOxyuiIlrVWSeIJSn2%2FMon%2C%2017%20May%202021%2012%3A39%3A36%20GMT.jpg?alt=media&token=d624e4df-867e-4f1f-bb48-c21a541678e1"
  },
  {
    id: "mandyabok",
    name: "Mandy Abokhair",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/onecademy-1.appspot.com/o/ProfilePictures%2FoKaKGYW8HjNe26myi39OXHGLEM43%2FSun%2C%2016%20May%202021%2002%3A46%3A20%20GMT.jpg?alt=media&token=2bd708a9-3c99-492f-a8b7-fdcce3d03d11"
  },
  {
    id: "winnifer",
    name: "Winnifer Chen",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/onecademy-1.appspot.com/o/ProfilePictures%2F01yzm5kPNuP8r2XEY0TzdfeLxRw2%2FWed%2C%2030%20Dec%202020%2020%3A13%3A00%20GMT.jpg?alt=media&token=8b5a28a1-35df-4114-bd6a-460da8b7efca"
  }
];

export default handler;
