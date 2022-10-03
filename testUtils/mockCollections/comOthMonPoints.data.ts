import { firstWeekMonthDays } from "../../src/utils";

const { firstMonthDay } = firstWeekMonthDays();

const collection = "comOthMonPoints";

const data: any[] = [
  {
    createdAt: new Date(),
    updatedAt: new Date(),
    firstMonthDay,
    aChooseUname: false,
    aFullname: "Iman YeckehZaare",
    aImgUrl:
      "https://firebasestorage.googleapis.com/v0/b/onecademy-1.appspot.com/o/ProfilePictures%2Fa2m8BaOOO2OrIhKGIOmz7Ly1v8q1%2FWed%2C%2009%20Dec%202020%2002%3A37%3A12%20GMT.jpg?alt=media&token=db5b7e1b-8545-4cb7-b3ee-c5d37ed62ac0",
    admin: "1man",
    tagId: "r98BjyFDCe4YyLA3U8ZE",
    tag: "1Cademy",
    lterm: 0.0,
    ltermDay: 0,
    cnCorrects: 0.0,
    cnInst: 0.0,
    cdCorrects: 0.0,
    cdInst: 0.0,
    qCorrects: 0.0,
    qInst: 0.0,
    pCorrects: 0.0,
    pInst: 0.0,
    sCorrects: 0.0,
    sInst: 0.0,
    aCorrects: 0.0,
    aInst: 0.0,
    rfCorrects: 0.0,
    rfInst: 0.0,
    nCorrects: 0.0,
    nInst: 0.0,
    iCorrects: 0.0,
    iInst: 0.0,
    mCorrects: 0.0,
    mInst: 0.0,
    cnWrongs: 0.0,
    cdWrongs: 0.0,
    qWrongs: 0.0,
    pWrongs: 0.0,
    sWrongs: 0.0,
    aWrongs: 0.0,
    rfWrongs: 0.0,
    nWrongs: 0.0,
    iWrongs: 0.0,
    mWrongs: 0.0,
    negatives: 0.0,
    positives: 0.0,
    totalPoints: 0.0,
  },
  {
    documentId: "2rV4j4bQUjoW3JZ7It6X",
    pWrongs: 0,
    ltermDay: 0,
    mWrongs: 0,
    qWrongs: 0,
    createdAt: new Date(),
    aChooseUname: false,
    tag: "1Cademy",
    mCorrects: 0,
    cdWrongs: 0,
    positives: 1,
    totalPoints: 1,
    qInst: 0,
    nInst: 0,
    nCorrects: 0,
    cnInst: 0,
    qCorrects: 0,
    iCorrects: 0,
    rfInst: 0,
    sWrongs: 0,
    cnWrongs: 0,
    negatives: 0,
    aInst: 0,
    aFullname: "David Sohn",
    tagId: "FJfzAX7zbgQS8jU5XcEk",
    iInst: 0,
    aCorrects: 0,
    sInst: 0,
    rfWrongs: 0,
    aImgUrl:
      "https://firebasestorage.googleapis.com/v0/b/onecademy-1.appspot.com/o/ProfilePictures%2FAEeN67xP5cUpwxYUIUA0ZnUuaHw2%2FFri%2C%2026%20Jun%202020%2019%3A57%3A11%20GMT.jpg?alt=media&token=8a2aa859-d5f3-4ecd-8d5f-85f409bc7260",
    cnCorrects: 1,
    adminPoints: 1,
    rfCorrects: 0,
    lterm: 0,
    nWrongs: 0,
    cdCorrects: 0,
    pInst: 0,
    aWrongs: 0,
    iWrongs: 0,
    pCorrects: 0,
    sCorrects: 0,
    cdInst: 0,
    mInst: 0,
    updatedAt: new Date(),
    admin: "dsohn",
  },
  {
    documentId: "DOWNrwkmEo",
    nCorrects: 0,
    positives: 6,
    sWrongs: 0,
    qCorrects: 0,
    tagId: "FJfzAX7zbgQS8jU5XcEk",
    mInst: 0,
    admin: "A_wei",
    iCorrects: 0,
    cdCorrects: 0,
    aChooseUname: false,
    cnInst: 0,
    negatives: 0,
    cnCorrects: 0,
    pWrongs: 0,
    totalPoints: 6,
    tag: "1Cademy",
    sCorrects: 0,
    sInst: 0,
    adminPoints: 3,
    cdInst: 0,
    rfCorrects: 0,
    rfInst: 0,
    qWrongs: 0,
    iWrongs: 0,
    aCorrects: 0,
    pCorrects: 0,
    iInst: 0,
    rfWrongs: 0,
    cdWrongs: 0,
    aInst: 0,
    aWrongs: 0,
    mWrongs: 0,
    pInst: 0,
    lterm: 0,
    firstMonthDay: "9-1-2022",
    cnWrongs: 0,
    nWrongs: 0,
    createdAt: new Date(),
    aImgUrl:
      "https://firebasestorage.googleapis.com/v0/b/onecademy-1.appspot.com/o/ProfilePictures%2FbofdYnPC8EU7nkxM6x9NjSQq6UQ2%2FTue%2C%2030%20Jun%202020%2020%3A22%3A05%20GMT.jpeg?alt=media&token=49ec9a76-e84b-4583-9685-a9e22a5d25a6",
    nInst: 0,
    ltermDay: 0,
    updatedAt: new Date(),
    mCorrects: 6,
    qInst: 0,
    aFullname: "Alvin Wei",
  },
  {
    documentId: "DOTENrwkmEo",
    nCorrects: 0,
    positives: 6,
    sWrongs: 0,
    qCorrects: 0,
    tagId: "kAyHgnb1ou6YNfv36K6a",
    mInst: 0,
    admin: "A_wei",
    iCorrects: 0,
    cdCorrects: 0,
    aChooseUname: false,
    cnInst: 0,
    negatives: 0,
    cnCorrects: 0,
    pWrongs: 0,
    totalPoints: 6,
    tag: "1Cademy",
    sCorrects: 0,
    sInst: 0,
    adminPoints: 3,
    cdInst: 0,
    rfCorrects: 0,
    rfInst: 0,
    qWrongs: 0,
    iWrongs: 0,
    aCorrects: 0,
    pCorrects: 0,
    iInst: 0,
    rfWrongs: 0,
    cdWrongs: 0,
    aInst: 0,
    aWrongs: 0,
    mWrongs: 0,
    pInst: 0,
    lterm: 0,
    firstMonthDay: "9-1-2022",
    cnWrongs: 0,
    nWrongs: 0,
    createdAt: new Date(),
    aImgUrl:
      "https://firebasestorage.googleapis.com/v0/b/onecademy-1.appspot.com/o/ProfilePictures%2FbofdYnPC8EU7nkxM6x9NjSQq6UQ2%2FTue%2C%2030%20Jun%202020%2020%3A22%3A05%20GMT.jpeg?alt=media&token=49ec9a76-e84b-4583-9685-a9e22a5d25a6",
    nInst: 0,
    ltermDay: 0,
    updatedAt: new Date(),
    mCorrects: 6,
    qInst: 0,
    aFullname: "Alvin Wei",
  },
];
const comOthMonPointsData = {
  data,
  collection,
};

export default comOthMonPointsData;
