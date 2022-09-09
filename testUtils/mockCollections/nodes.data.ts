const collection = "nodes";

const data: any[] = [
  {
    documentId: "FJfzAX7zbgQS8jU5XcEk",
    aFullname: "Iman YeckehZaare",
    tags: [],
    viewers: -236,
    tagIds: [],
    references: [
      {
        label: "Page 1",
        title: "Data science and prediction",
        node: "rcCwvHX3l8eDLNzhduRd",
      },
    ],
    createdAt: new Date(),
    contributors: {
      "1man": {
        chooseUname: false,
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/onecademy-1.appspot.com/o/ProfilePictures%2F1man_Thu%2C%2006%20Feb%202020%2016%3A26%3A40%20GMT.png?alt=media&token=94459dbb-81f9-462a-83ef-62d1129f5851",
        fullname: "Iman YeckehZaare",
        reputation: 87.92,
      },
      TirdadBarghi: {
        fullname: "Tirdad Barghi",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/onecademy-1.appspot.com/o/ProfilePictures%2FTirdadBarghi_Fri%2C%2014%20Feb%202020%2017%3A28%3A11%20GMT.jpg?alt=media&token=90d05f1b-e896-4a73-b204-1a8ad30eba95",
        chooseUname: false,
        reputation: 26.440000000000026,
      },
      Tirdad: {
        chooseUname: false,
        imageUrl: "https://storage.googleapis.com/onecademy-1.appspot.com/ProfilePictures/Tirdad_294736370460.jpg",
        fullname: "Tirdad Barghi",
        reputation: 43.96,
      },
    },
    closedHeight: 95,
    nodeImage: "",
    aImgUrl:
      "https://firebasestorage.googleapis.com/v0/b/onecademy-1.appspot.com/o/ProfilePictures%2F1man_Thu%2C%2006%20Feb%202020%2016%3A26%3A40%20GMT.png?alt=media&token=94459dbb-81f9-462a-83ef-62d1129f5851",
    changedAt: new Date(),
    parents: [],
    maxVersionRating: 43.96,
    deleted: false,
    contribNames: ["TirdadBarghi", "Tirdad", "1man"],
    children: [],
    isTag: true,
    wrongs: 10,
    versions: 23,
    updatedAt: new Date(),
    referenceIds: ["rcCwvHX3l8eDLNzhduRd"],
    title: "Data Science & something",
    nodeType: "Concept",
    content:
      "Science is a systematic effort to build and organize knowledge as testable statements and predictions. Data science, as an interdisciplinary field, involves data and, by extension, statistics, or the systematic study of the organization, properties, and analysis of data and its role in inference, including our confidence in the inference. It uses scientific methods, processes, and algorithms to extract knowledge and infer insights from structured and unstructured data.",
    admin: "1man",
    comments: 0,
    aChooseUname: false,
    studied: 2,
    bookmarks: 18,
    height: 270,
    corrects: 48,
    institNames: ["University of Michigan - Ann Arbor"],
    institutions: {
      "University of Michigan - Ann Arbor": {
        reputation: 158.32000000000005,
      },
    },
  },

  ////
  {
    documentId: "00NwvYhgES9mjNQ9LRhG",
    maxVersionRating: 1,
    wrongs: 0,
    viewers: -1,
    content: "Cocaine as well as amphetamines inhibit reuptake mechanisms, thus prolonging synaptic activity ",
    deleted: false,
    nodeType: "Relation",
    versions: 1,
    children: [],
    referenceIds: ["U7X12efaHueuSC7mB5yt"],
    height: 168,
    tagIds: ["FJfzAX7zbgQS8jU5XcEk"],
    institutions: {},
    createdAt: new Date(),
    parents: [],
    nodeImage: "",
    contribNames: [],
    referenceLabels: ["109"],
    aChooseUname: false,
    aImgUrl: "https://storage.googleapis.com/onecademy-1.appspot.com/ProfilePictures/no-img.png",
    studied: 0,
    institNames: [],
    corrects: 1,
    updatedAt: new Date(),
    references: ["Behavioral Neuroscience 8th Edition"],
    contributors: {},
    title: "Cocaine",
    admin: "BridgetFunk",
    closedHeight: 110,
    changedAt: new Date(),
    comments: 0,
    aFullname: "Bridget Funk",
    tags: ["Data Science & something"],
  },
];

const nodesData = {
  data,
  collection,
};

export default nodesData;
