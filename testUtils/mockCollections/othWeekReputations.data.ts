import { firstWeekMonthDays } from "../../src/utils";

const { firstWeekDay } = firstWeekMonthDays();

const collection = "othWeekReputations";

const data: any[] = [
  {
    documentId: "09OHHeQrxkXSHMmCFIsB",
    createdAt: new Date(),
    firstWeekDay,
    isAdmin: true,
    tagId: "r98BjyFDCe4YyLA3U8ZE",
    uname: "1man",
    updatedAt: new Date(),
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
    documentId: "09OHHeQrxkXSHMmCFIjB",
    aInst: 0,
    pWrongs: 0,
    isAdmin: false,
    mInst: 0,
    negatives: 0,
    firstWeekDay: "8-28-2022",
    mWrongs: 0,
    aWrongs: 0,
    cdWrongs: 0,
    createdAt: new Date(),
    iWrongs: 0,
    sCorrects: 0,
    positives: 1,
    nCorrects: 0,
    tagId: "FJfzAX7zbgQS8jU5XcEk",
    nInst: 0,
    iInst: 0,
    ltermDay: 0,
    nWrongs: 0,
    rfInst: 0,
    rfCorrects: 0,
    tag: "1Cademy",
    lterm: 0,
    qWrongs: 0,
    iCorrects: 0,
    cdInst: 0,
    mCorrects: 0,
    cnInst: 0,
    sInst: 0,
    qInst: 0,
    qCorrects: 0,
    updatedAt: new Date(),
    rfWrongs: 0,
    sWrongs: 0,
    cdCorrects: 0,
    pCorrects: 0,
    cnWrongs: 0,
    cnCorrects: 1,
    pInst: 0,
    totalPoints: 1,
    aCorrects: 0,
  },
  {
    documentId: "1kMfUDQkXTBYhNI6InPw",
    lterm: 0,
    iWrongs: 0,
    mInst: 0,
    qInst: 0,
    negatives: 0,
    totalPoints: 1,
    cnWrongs: 0,
    pWrongs: 0,
    aInst: 0,
    aCorrects: 0,
    isAdmin: false,
    updatedAt: new Date(),
    firstWeekDay: "8-28-2022",
    nInst: 0,
    qCorrects: 0,
    mWrongs: 0,
    nCorrects: 0,
    aWrongs: 0,
    nWrongs: 0,
    pCorrects: 0,
    rfInst: 0,
    pInst: 0,
    cdInst: 0,
    cdWrongs: 0,
    iInst: 0,
    iCorrects: 0,
    mCorrects: 0,
    tag: "Biomedical Sciences",
    positives: 1,
    sCorrects: 0,
    createdAt: new Date(),
    ltermDay: 0,
    tagId: "JvMjw4kbgeqNA7sRQjfZ",
    rfCorrects: 0,
    cnCorrects: 1,
    cnInst: 0,
    sWrongs: 0,
    rfWrongs: 0,
    sInst: 0,
    cdCorrects: 0,
    qWrongs: 0,
  },
  {
    documentId: "5Ukozldzt9tXv3B38Kat",
    aWrongs: 0,
    pWrongs: 0,
    qInst: 0,
    cdWrongs: 0,
    tagId: "FJfzAX7zbgQS8jU5XcEk",
    lterm: 0,
    ltermDay: 0,
    sInst: 0,
    cnInst: 0,
    sWrongs: 0,
    mWrongs: 0,
    updatedAt: new Date(),
    createdAt: new Date(),
    nInst: 0,
    rfCorrects: 0,
    aInst: 0,
    mInst: 0,
    positives: 1,
    aCorrects: 0,
    iWrongs: 0,
    cdInst: 0,
    negatives: 0,
    iInst: 0,
    qCorrects: 0,
    sCorrects: 0,
    rfInst: 0,
    isAdmin: false,
    totalPoints: 1,
    pCorrects: 0,
    cnWrongs: 0,
    rfWrongs: 0,
    cnCorrects: 1,
    nWrongs: 0,
    cdCorrects: 0,
    pInst: 0,
    nCorrects: 0,
    firstWeekDay: "8-28-2022",
    mCorrects: 0,
    iCorrects: 0,
    tag: "1Cademy",
    qWrongs: 0,
  },
  {
    documentId: "NPBOVieyIg",
    admin: "A_wei",
    aWrongs: 0,
    pWrongs: 0,
    qInst: 0,
    cdWrongs: 0,
    tagId: "FJfzAX7zbgQS8jU5XcEk",
    lterm: 0,
    ltermDay: 0,
    sInst: 0,
    cnInst: 0,
    sWrongs: 0,
    mWrongs: 0,
    updatedAt: new Date(),
    createdAt: new Date(),
    nInst: 0,
    rfCorrects: 0,
    aInst: 0,
    mInst: 0,
    positives: 1,
    aCorrects: 0,
    iWrongs: 0,
    cdInst: 0,
    negatives: 0,
    iInst: 0,
    qCorrects: 0,
    sCorrects: 0,
    rfInst: 0,
    isAdmin: false,
    totalPoints: 1,
    pCorrects: 0,
    cnWrongs: 0,
    rfWrongs: 0,
    cnCorrects: 1,
    nWrongs: 0,
    cdCorrects: 0,
    pInst: 0,
    nCorrects: 0,
    firstWeekDay: "8-28-2022",
    mCorrects: 0,
    iCorrects: 0,
    tag: "1Cademy",
    qWrongs: 0,
  },
];

const othWeekReputationsData = {
  data,
  collection,
};

export default othWeekReputationsData;
