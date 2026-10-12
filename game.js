const stageOrder = ["find", "restore", "book", "transfer"];
const STAGE_THREE_NARRATIONS = {
  word: "在词类知识中，“的”的语法意义是表示某样东西是谁的，或者它长什么样；其语法规则可以概括为：先说谁或什么样，再说“的”，最后说东西或人；而在使用时，它通常用来特别说明某样东西是谁的，或者它有什么特别之处。",
  phrase: "在短语知识中，动宾短语的语法意义是表示动作做了什么、与什么事物有关；其语法规则可概括为“动作 + 对象”；在语法使用上，它可以把一件事怎么做、涉及什么事物说清楚。",
  sentence: "在句子知识中，“被”字句的语法意义是：人或物是动作的承受者，强调承受者受到的影响或结果；其语法规则可概括为“承受者 + 被 + 施加者（可省略）+ 动作结果”；在语法使用上，它通常用来特别说明人或物受到的影响或结果。"
};
const STAGE_ENTRY_NARRATIONS = {
  "word:find": "请根据任务描述找到对应的物品",
  "word:restore": "观察左侧物品，点击资源将右侧对应物品归位",
  "phrase:phrase-find": "完成“做一做”中的小任务",
  "phrase:phrase-restore": "点击资源，为小朋友们分配任务吧！",
  "sentence:sentence-find": "先找到并点击任务中的动物，再让动物们达到相应的状态",
  "sentence:sentence-care": "找到并点击任务中的动物，利用资源，让动物们达到相应的状态"
};
const STAGE_FOUR_FEEDBACK_ASSET = encodeURI("./assets/word-stage4/Group 460.png");
const STAGE_FOUR_CLOSE_ASSET = encodeURI("./assets/close-circle.png");
const SECOND_STAGE_LESSON_AUTO_EXIT_MS = 3000;
const STAGE_INSTRUCTION_ASSETS = {
  three: encodeURI("./assets/instructions/Group 476.png"),
  four: encodeURI("./assets/instructions/Group 477.png")
};
const PHRASE_STAGE_INSTRUCTION_ASSETS = {
  one: encodeURI("./assets/instructions/phrase-stage-one-instruction.png"),
  two: encodeURI("./assets/instructions/phrase-stage-two-instruction.png")
};
const HOME_INSTRUCTION_ASSET = encodeURI("./assets/home-instruction.png");
const WORD_STAGE_ONE_ASSETS = {
  reference: encodeURI("./assets/word-stage1/iPad Pro1_ - 81.png"),
  findInstruction: encodeURI("./assets/word-stage1/Group 474.png"),
  back: encodeURI("./assets/word-stage1/Group 103.png"),
  book: encodeURI("./assets/word-stage1/Group 101.png"),
  wordBook: encodeURI("./assets/word-stage1/grammar-book-word.png"),
  sound: encodeURI("./assets/word-stage1/Group 99.png"),
  resourceDock: encodeURI("./assets/word-stage1/Group 351.png"),
  taskFrame: encodeURI("./assets/word-stage1/Group 516.png"),
  yellowPencil: encodeURI("./assets/word-stage1/图片 6 2.png"),
  redPencil: encodeURI("./assets/word-stage1/图片 6 3.png"),
  redBox: encodeURI("./assets/word-stage1/图片 6 4.png"),
  blueBox: encodeURI("./assets/word-stage1/图片 6 5.png"),
  ball: encodeURI("./assets/word-stage1/图片 6 6.png"),
  sisterCup: encodeURI("./assets/word-stage1/图片 6 7.png"),
  cleanClothes: encodeURI("./assets/word-stage1/图片 6 8.png"),
  dirtyClothes: encodeURI("./assets/word-stage1/图片 6 9.png"),
  doll: encodeURI("./assets/word-stage1/sister-doll.png"),
  momCup: encodeURI("./assets/word-stage1/图片 6 11.png"),
  fafaBook: encodeURI("./assets/word-stage1/图片 6 12.png"),
  magazine: encodeURI("./assets/word-stage1/图片 6 13.png"),
  sticker: encodeURI("./assets/word-stage1/图片 6 14.png")
};
const WORD_STAGE_ONE_RESOURCE_ASSETS = {
  modifier: {
    yellow: encodeURI("./assets/word-stage1/resource-icons/yellow.png"),
    red: encodeURI("./assets/word-stage1/resource-icons/red.png"),
    mom: encodeURI("./assets/word-stage1/resource-icons/mom.png"),
    sister: encodeURI("./assets/word-stage1/resource-icons/sister.png"),
    clean: encodeURI("./assets/word-stage1/resource-icons/clean.png"),
    pretty: encodeURI("./assets/word-stage1/resource-icons/pretty.png"),
    fafa: encodeURI("./assets/word-stage1/resource-icons/fafa.png")
  },
  object: {
    pencil: encodeURI("./assets/word-stage1/resource-icons/pencil.png"),
    box: encodeURI("./assets/word-stage1/resource-icons/box.png"),
    clothes: encodeURI("./assets/word-stage1/resource-icons/clothes.png"),
    doll: encodeURI("./assets/word-stage1/resource-icons/doll.png"),
    cup: encodeURI("./assets/word-stage1/resource-icons/cup.png"),
    book: encodeURI("./assets/word-stage1/resource-icons/book.png"),
    sticker: encodeURI("./assets/word-stage1/resource-icons/sticker.png")
  }
};
const WORD_STAGE_TWO_ASSETS = {
  background: encodeURI("./assets/word-stage2/background.png"),
  restoreInstruction: encodeURI("./assets/word-stage2/restore-instruction.png"),
  questionSlot: encodeURI("./assets/word-stage2/question-slot.png"),
  answerFrame: encodeURI("./assets/word-stage2/answer-frame.png")
};
const WORD_STAGE_THREE_ASSETS = {
  background: WORD_STAGE_TWO_ASSETS.background,
  dock: encodeURI("./assets/word-stage1/Group 351.png"),
  back: encodeURI("./assets/word-stage1/Group 103.png"),
  book: encodeURI("./assets/word-stage3/grammar-book.png"),
  sound: encodeURI("./assets/word-stage1/Group 99.png"),
  scroll: encodeURI("./assets/word-stage3/Group 507.png"),
  next: encodeURI("./assets/word-stage3/next.png")
};
const WORD_STAGE_FOUR_ASSETS = {
  background: encodeURI("./assets/word-stage4/background.png"),
  grammarBook: encodeURI("./assets/word-stage3/Group 507.png"),
  complete: encodeURI("./assets/word-stage4/complete.png"),
  questionArt: {
    "fafa-bottle": encodeURI("./assets/word-stage4/references/question-fafa-cup.png"),
    "blue-notebook": encodeURI("./assets/word-stage4/references/question-green-notebook.png"),
    "clean-towel-choice": encodeURI("./assets/word-stage4/references/question-clean-towel.png"),
    "wood-pencil-case-choice": encodeURI("./assets/word-stage4/references/question-wood-pencil-case.png"),
    "handsome-badge-choice": encodeURI("./assets/word-stage4/references/question-handsome-badge.png"),
    "pretty-postcard-order": encodeURI("./assets/word-stage4/references/question-pretty-postcard.png"),
    "red-keychain-choice": encodeURI("./assets/word-stage4/references/question-red-keychain.png")
  },
  optionArt: {
    "clean-towel-choice": encodeURI("./assets/word-stage4/references/options-clean-towel.png"),
    "wood-pencil-case-choice": encodeURI("./assets/word-stage4/references/options-wood-pencil-case.png"),
    "handsome-badge-choice": encodeURI("./assets/word-stage4/references/options-handsome-badge.png"),
    "pretty-postcard-order": encodeURI("./assets/word-stage4/references/options-pretty-postcard.png"),
    "red-keychain-choice": encodeURI("./assets/word-stage4/references/options-red-keychain.png")
  },
  resourceDock: encodeURI("./assets/word-stage4/references/resource-dock.png"),
  next: encodeURI("./assets/word-stage3/next.png"),
  objects: {
    "fafa-bottle": encodeURI("./assets/word-stage4/fafa-cup.png"),
    "blue-notebook": encodeURI("./assets/word-stage4/notebook.png"),
    "clean-towel-choice": encodeURI("./assets/word-stage4/books.png"),
    "wood-pencil-case-choice": encodeURI("./assets/word-stage4/pencil-case.png"),
    "handsome-badge-choice": encodeURI("./assets/word-stage4/badge.png"),
    "red-keychain-choice": encodeURI("./assets/word-stage4/keychain.png"),
    "pretty-postcard-order": encodeURI("./assets/word-stage4/pictures.png")
  },
  resources: {
    modifier: {
      mom: { label: "妈妈", src: encodeURI("./assets/word-stage4/resource-mom.png") },
      fafa: { label: "法法", src: encodeURI("./assets/word-stage4/resource-fafa.png") },
      blue: { label: "蓝色", src: encodeURI("./assets/word-stage4/resource-green.png") },
      green: { label: "绿色", src: encodeURI("./assets/word-stage4/resource-green.png") },
      red: { label: "红色", src: encodeURI("./assets/word-stage4/resource-red.png") }
    },
    object: {
      cup: { label: "水杯", src: encodeURI("./assets/word-stage4/resource-cup.png") },
      backpack: { label: "书包", src: encodeURI("./assets/word-stage4/resource-backpack.png") },
      notebook: { label: "笔记本", src: encodeURI("./assets/word-stage4/resource-notebook.png") },
      fileFolder: { label: "文件夹", src: encodeURI("./assets/word-stage4/resource-folder.png") }
    }
  }
};
const PHRASE_STAGE_ONE_ASSETS = {
  background: encodeURI("./assets/phrase-stage1/iPad Pro 11_ - 88.png"),
  before: encodeURI("./assets/phrase-stage1/iPad Pro 11_ - 85.png"),
  after: encodeURI("./assets/phrase-stage1/iPad Pro 11_ - 86.png"),
  lockedBook: encodeURI("./assets/phrase-stage1/grammar-book-locked.png"),
  bottom: encodeURI("./assets/phrase-stage1/Group 374.png"),
  scene: {
    artwork: encodeURI("./assets/phrase-stage1/图片 3 3.png"),
    boardMarks: encodeURI("./assets/phrase-stage1/图片 2 1.png"),
    fallenChair: encodeURI("./assets/phrase-stage1/图 1 1.png"),
    debris: encodeURI("./assets/phrase-stage1/图片 3 15.png"),
    broom: encodeURI("./assets/phrase-stage1/图片 3 2.png"),
    eraser: encodeURI("./assets/phrase-stage1/图片 3 8.png"),
    box: encodeURI("./assets/phrase-stage1/图片 3 7.png"),
    label: encodeURI("./assets/phrase-stage1/Group 372.png"),
    wateringCan: encodeURI("./assets/phrase-stage1/图片 3 5.png"),
    flowerProblem: encodeURI("./assets/phrase-stage1/图片 1 3.png"),
    flowerComplete: encodeURI("./assets/phrase-stage1/图片 1 (1) 1.png")
  },
  questions: [
    encodeURI("./assets/phrase-stage1/Group 191.png"),
    encodeURI("./assets/phrase-stage1/Group 518.png"),
    encodeURI("./assets/phrase-stage1/Group 519.png"),
    encodeURI("./assets/phrase-stage1/Group 523.png"),
    encodeURI("./assets/phrase-stage1/Group 521.png"),
    encodeURI("./assets/phrase-stage1/Group 520.png"),
    encodeURI("./assets/phrase-stage1/Group 522.png")
  ],
  resources: {
    actions: {
      wipe: encodeURI("./assets/phrase-stage1/Group 174.png"),
      arrange: encodeURI("./assets/phrase-stage1/Group 175.png"),
      hang: encodeURI("./assets/phrase-stage1/Group 176.png"),
      stick: encodeURI("./assets/phrase-stage1/Group 177.png"),
      water: encodeURI("./assets/phrase-stage1/Group 178.png"),
      sweep: encodeURI("./assets/phrase-stage1/Group 179.png"),
      move: encodeURI("./assets/phrase-stage1/Group 180.png")
    },
    objects: {
      blackboard: encodeURI("./assets/phrase-stage1/Group 183.png"),
      desks: encodeURI("./assets/phrase-stage1/Group 184.png"),
      works: encodeURI("./assets/phrase-stage1/Group 185.png"),
      labels: encodeURI("./assets/phrase-stage1/Group 186.png"),
      flower: encodeURI("./assets/phrase-stage1/Group 187.png"),
      floor: encodeURI("./assets/phrase-stage1/Group 188.png"),
      boxes: encodeURI("./assets/phrase-stage1/Group 189.png")
    }
  }
};
const PHRASE_STAGE_TWO_ASSETS = {
  background: encodeURI("./assets/phrase-stage2/background.png"),
  lockedBook: encodeURI("./assets/phrase-stage2/grammar-book-locked.png"),
  answerFrame: encodeURI("./assets/phrase-stage2/Goup 461.png"),
  answerQuestion: encodeURI("./assets/phrase-stage2/Group 454.png"),
  resourceFrame: encodeURI("./assets/phrase-stage2/Group 463.png"),
  actions: {
    wipe: encodeURI("./assets/phrase-stage1/Group 174.png"),
    arrange: encodeURI("./assets/phrase-stage1/Group 175.png"),
    hang: encodeURI("./assets/phrase-stage1/Group 176.png"),
    stick: encodeURI("./assets/phrase-stage1/Group 177.png"),
    water: encodeURI("./assets/phrase-stage1/Group 178.png"),
    sweep: encodeURI("./assets/phrase-stage1/Group 179.png"),
    move: encodeURI("./assets/phrase-stage1/Group 180.png")
  },
  objects: {
    blackboard: encodeURI("./assets/phrase-stage1/Group 183.png"),
    desks: encodeURI("./assets/phrase-stage2/table-chairs.png"),
    works: encodeURI("./assets/phrase-stage2/framed-artwork.png"),
    labels: encodeURI("./assets/phrase-stage2/fafa.png"),
    flower: encodeURI("./assets/phrase-stage2/flower.png"),
    flowerComplete: PHRASE_STAGE_ONE_ASSETS.scene.flowerComplete,
    floor: encodeURI("./assets/phrase-stage2/debris.png"),
    boxes: encodeURI("./assets/phrase-stage2/box.png")
  },
  characters: [
    encodeURI("./assets/phrase-stage2/character-1.png"),
    encodeURI("./assets/phrase-stage2/character-2.png"),
    encodeURI("./assets/phrase-stage2/character-3.png"),
    encodeURI("./assets/phrase-stage2/character-4.png"),
    encodeURI("./assets/phrase-stage2/character-5.png"),
    encodeURI("./assets/phrase-stage2/character-6.png"),
    encodeURI("./assets/phrase-stage2/character-7.png")
  ],
  scene: {
    board: encodeURI("./assets/phrase-stage2/board.png"),
    marks: encodeURI("./assets/phrase-stage2/board-marks.png"),
    eraser: encodeURI("./assets/phrase-stage2/eraser.png"),
    table: encodeURI("./assets/phrase-stage2/table.png"),
    tableChairs: encodeURI("./assets/phrase-stage2/table-chairs.png"),
    fallenChair: encodeURI("./assets/phrase-stage2/fallen-chair.png"),
    artwork: encodeURI("./assets/phrase-stage2/artwork.png"),
    framedArtwork: encodeURI("./assets/phrase-stage2/framed-artwork.png"),
    flower: encodeURI("./assets/phrase-stage2/flower.png"),
    flowerComplete: PHRASE_STAGE_ONE_ASSETS.scene.flowerComplete,
    wateringCan: encodeURI("./assets/phrase-stage2/watering-can.png"),
    cabinet: encodeURI("./assets/phrase-stage2/cabinet.png"),
    broom: encodeURI("./assets/phrase-stage2/broom.png"),
    debris: encodeURI("./assets/phrase-stage2/debris.png"),
    door: encodeURI("./assets/phrase-stage2/door.png"),
    box: encodeURI("./assets/phrase-stage2/box.png"),
    fafa: encodeURI("./assets/phrase-stage2/fafa.png"),
    questionMark: encodeURI("./assets/phrase-stage2/question-mark.png")
  }
};
const PHRASE_STAGE_THREE_ASSETS = {
  background: encodeURI("./assets/phrase-stage2/background.png"),
  dock: encodeURI("./assets/phrase-stage1/Group 374.png"),
  back: encodeURI("./assets/word-stage1/Group 103.png"),
  book: encodeURI("./assets/word-stage3/grammar-book.png"),
  sound: encodeURI("./assets/word-stage1/Group 99.png"),
  scroll: encodeURI("./assets/phrase-stage3/Group 508.png"),
  next: encodeURI("./assets/word-stage3/next.png")
};
const PHRASE_STAGE_FOUR_ASSETS = {
  background: encodeURI("./assets/phrase-stage4/Group 456.png"),
  resourceDock: encodeURI("./assets/phrase-stage4/Group 388.png"),
  singleResourceDock: encodeURI("./assets/phrase-stage4/Group 229.png"),
  questionMark: encodeURI("./assets/phrase-stage4/Group 110.png"),
  actions: {
    wash: encodeURI("./assets/phrase-stage4/Group 395.png"),
    cut: encodeURI("./assets/phrase-stage4/Group 394.png"),
    peel: encodeURI("./assets/phrase-stage4/Group 393.png"),
    juice: encodeURI("./assets/phrase-stage4/Group 396.png"),
    take: encodeURI("./assets/phrase-stage4/Group 400.png")
  },
  objects: {
    watermelon: encodeURI("./assets/phrase-stage4/Group 390.png"),
    apple: encodeURI("./assets/phrase-stage4/Group 391.png"),
    banana: encodeURI("./assets/phrase-stage4/Group 392.png"),
    pear: encodeURI("./assets/phrase-stage4/图片 9 (2) 2.png"),
    orange: encodeURI("./assets/phrase-stage4/Group 397.png"),
    grape: encodeURI("./assets/phrase-stage4/Group 398.png"),
    strawberry: encodeURI("./assets/phrase-stage4/Group 399.png"),
    "grape-dirty": encodeURI("./assets/phrase-stage4/Group 401.png"),
    "grape-cut": encodeURI("./assets/phrase-stage4/Group 402.png"),
    "grape-clean": encodeURI("./assets/phrase-stage4/Group 403.png")
  },
  taskArt: {
    "wash-apple": encodeURI("./assets/phrase-stage4/Group 380.png"),
    "cut-watermelon": encodeURI("./assets/phrase-stage4/Group 381.png"),
    "take-banana": encodeURI("./assets/phrase-stage4/Group 384.png"),
    "take-strawberry": encodeURI("./assets/phrase-stage4/Group 404.png"),
    "wash-grape-result": encodeURI("./assets/phrase-stage4/Group 228.png"),
    "juice-orange-result": encodeURI("./assets/phrase-stage4/Group 230.png"),
    "cut-pear-text": encodeURI("./assets/phrase-stage4/Group 387.png")
  },
  finalFruits: {
    apple: encodeURI("./assets/phrase-stage4/图片 10 12.png"),
    watermelon: encodeURI("./assets/phrase-stage4/图片 1 (3) 3.png"),
    banana: encodeURI("./assets/phrase-stage4/图片 8 90.png"),
    strawberry: encodeURI("./assets/phrase-stage4/Group 226.png"),
    orange: encodeURI("./assets/phrase-stage4/图片 8 91.png"),
    grape: encodeURI("./assets/phrase-stage4/图片 2 (3) 3.png"),
    pear: encodeURI("./assets/phrase-stage4/图片 9 (2) 7.png")
  },
  initialFruits: {
    apple: encodeURI("./assets/phrase-stage4/图片 8 3.png"),
    watermelon: encodeURI("./assets/phrase-stage4/图片 8 89.png"),
    banana: encodeURI("./assets/phrase-stage4/图片 8 6.png"),
    strawberry: encodeURI("./assets/phrase-stage4/Group 225.png"),
    orange: encodeURI("./assets/phrase-stage4/图片 8 9.png"),
    grape: encodeURI("./assets/phrase-stage4/图片 10 (1) 4.png"),
    pear: encodeURI("./assets/phrase-stage4/图片 8 8.png")
  },
  optionArt: {
    orange: encodeURI("./assets/phrase-stage4/Group 389.png"),
    pear: encodeURI("./assets/phrase-stage4/Group 231.png")
  }
};
const SENTENCE_STAGE_ONE_ASSETS = {
  background: encodeURI("./assets/sentence-stage1/iPad Pro 11_ - 91.png"),
  instruction: encodeURI("./assets/instructions/Group 482.png"),
  book: encodeURI("./assets/sentence-stage1/grammar-book.png"),
  resourceDock: encodeURI("./assets/sentence-stage1/Group 405.png"),
  choiceFrame: encodeURI("./assets/sentence-stage1/Group 406.png"),
  taskCards: {
    panda: encodeURI("./assets/sentence-stage1/question-panda.png"),
    giraffe: encodeURI("./assets/sentence-stage1/question-sheep.png"),
    seal: encodeURI("./assets/sentence-stage1/question-seal.png"),
    deer: encodeURI("./assets/sentence-stage1/question-deer.png"),
    zebra: encodeURI("./assets/sentence-stage1/question-zebra.png"),
    fish: encodeURI("./assets/sentence-stage1/question-fish.png"),
    penguin: encodeURI("./assets/sentence-stage1/question-penguin.png")
  },
  animals: {
    panda: { initial: encodeURI("./assets/sentence-stage1/图片 7 3.png"), complete: encodeURI("./assets/sentence-stage1/图片 8 13.png") },
    giraffe: { initial: encodeURI("./assets/sentence-stage1/sheep-before.png"), complete: encodeURI("./assets/sentence-stage1/sheep-after.png") },
    seal: { initial: encodeURI("./assets/sentence-stage1/图片 7 5.png"), complete: encodeURI("./assets/sentence-stage1/图片 8 15.png") },
    deer: { initial: encodeURI("./assets/sentence-stage1/injured-deer.png"), complete: encodeURI("./assets/sentence-stage1/图片 8 16.png") },
    zebra: { initial: encodeURI("./assets/sentence-stage1/图片 8 17.png"), complete: encodeURI("./assets/sentence-stage1/图片 7 7.png") },
    fish: { initial: encodeURI("./assets/sentence-stage1/图片 8 (3) 1.png"), complete: encodeURI("./assets/sentence-stage1/图片 7 8.png") },
    penguin: { initial: encodeURI("./assets/sentence-stage1/图片 8 18.png"), complete: encodeURI("./assets/sentence-stage1/图片 7 9.png") }
  },
  results: {
    soothe: encodeURI("./assets/sentence-stage1/Group 252.png"), lead: encodeURI("./assets/sentence-stage1/Group 243.png"),
    groom: encodeURI("./assets/sentence-stage1/resource-groom.png"),
    feed: encodeURI("./assets/sentence-stage1/Group 247.png"), bandage: encodeURI("./assets/sentence-stage1/Group 249.png"),
    rinse: encodeURI("./assets/sentence-stage1/Group 251.png"), pool: encodeURI("./assets/sentence-stage1/Group 245.png"),
    dry: encodeURI("./assets/sentence-stage1/Group 254.png")
  },
  distractors: {
    peacock: encodeURI("./assets/sentence-stage1/图片 9 (3) 2.png"),
    elephant: encodeURI("./assets/sentence-stage1/图片 9 (3) 3.png")
  }
};
const SENTENCE_STAGE_TWO_ASSETS = {
  background: encodeURI("./assets/sentence-stage2/竹林地图_元素重排 1.png"),
  instruction: encodeURI("./assets/instructions/Group 486.png"),
  resourceDock: encodeURI("./assets/sentence-stage2/Group 423.png"),
  lockedBook: encodeURI("./assets/sentence-stage2/grammar-book-locked.png"),
  fafa: encodeURI("./assets/sentence-stage2/图片 5 (1) 2.png"),
  animals: {
    lion: {
      resource: encodeURI("./assets/sentence-stage2/Group 440.png"),
      initial: encodeURI("./assets/sentence-stage2/图片 9 9.png"),
      complete: encodeURI("./assets/sentence-stage2/图片 10 6.png")
    },
    kangaroo: {
      resource: encodeURI("./assets/sentence-stage2/Group 442.png"),
      initial: encodeURI("./assets/sentence-stage2/图片 10 11.png"),
      complete: encodeURI("./assets/sentence-stage2/图片 9 15.png")
    },
    duck: {
      resource: encodeURI("./assets/sentence-stage2/Group 444.png"),
      initial: encodeURI("./assets/sentence-stage2/图片 9 14.png"),
      complete: encodeURI("./assets/sentence-stage2/图片 12 4.png")
    },
    otter: {
      resource: encodeURI("./assets/sentence-stage2/Group 445.png"),
      initial: encodeURI("./assets/sentence-stage2/图片 9 11.png"),
      complete: encodeURI("./assets/sentence-stage2/图片 10 8.png")
    },
    rabbit: {
      resource: encodeURI("./assets/sentence-stage2/Group 446.png"),
      initial: encodeURI("./assets/sentence-stage2/injured-rabbit.png"),
      complete: encodeURI("./assets/sentence-stage2/图片 10 9.png")
    },
    elephant: {
      resource: encodeURI("./assets/sentence-stage2/Group 443.png"),
      initial: encodeURI("./assets/sentence-stage2/图片 10 10.png"),
      complete: encodeURI("./assets/sentence-stage2/图片 9 13.png")
    },
    alpaca: {
      resource: encodeURI("./assets/sentence-stage2/Group 441.png"),
      initial: encodeURI("./assets/sentence-stage2/alpaca-before-grooming.png"),
      complete: encodeURI("./assets/sentence-stage2/alpaca-after-grooming.png")
    }
  },
  resultResources: {
    soothe: encodeURI("./assets/sentence-stage2/Group 447.png"),
    dry: encodeURI("./assets/sentence-stage2/Group 448.png"),
    lead: encodeURI("./assets/sentence-stage2/Group 449.png"),
    groom: encodeURI("./assets/sentence-stage2/resource-groom.png"),
    pool: encodeURI("./assets/sentence-stage2/Group 450.png"),
    feed: encodeURI("./assets/sentence-stage2/Group 451.png"),
    bandage: encodeURI("./assets/sentence-stage2/Group 452.png"),
    rinse: encodeURI("./assets/sentence-stage2/Group 453.png")
  },
  taskCards: {
    lion: encodeURI("./assets/sentence-stage2/Group 298-1.png"),
    alpaca: encodeURI("./assets/sentence-stage2/question-alpaca-groomed.png"),
    otter: encodeURI("./assets/sentence-stage2/Group 299.png"),
    rabbit: encodeURI("./assets/sentence-stage2/Group 300.png"),
    elephant: encodeURI("./assets/sentence-stage2/Group 301.png"),
    duck: encodeURI("./assets/sentence-stage2/Group 303.png"),
    kangaroo: encodeURI("./assets/sentence-stage2/Group 302.png")
  },
  fixedScene: {
    fox: encodeURI("./assets/sentence-stage2/图片 10 (1) 7.png"),
    bird: encodeURI("./assets/sentence-stage2/图片 10 (1) 8.png")
  }
};
const SENTENCE_CARE_TASK_LABEL_ASSET = encodeURI("./assets/instructions/sentence-care-task-label.png");
const SENTENCE_STAGE_THREE_ASSETS = {
  scroll: encodeURI("./assets/sentence-stage3/Group 512.png"),
  next: encodeURI("./assets/word-stage3/next.png")
};
const SENTENCE_STAGE_FOUR_ASSETS = {
  backgrounds: {
    bread: encodeURI("./assets/sentence-stage4/iPad Pro 11_ - 94.png"),
    shelves: encodeURI("./assets/sentence-stage4/iPad Pro 11_ - 95.png"),
    checkout: encodeURI("./assets/sentence-stage4/iPad Pro 11_ - 96.png")
  },
  question: {
    bread: encodeURI("./assets/sentence-stage4/task-bread-base.png"),
    milk: encodeURI("./assets/sentence-stage4/task-milk-base.png"),
    apple: encodeURI("./assets/sentence-stage4/task-apple-base.png"),
    iceCream: encodeURI("./assets/sentence-stage4/task-ice-cream-base.png"),
    juice: encodeURI("./assets/sentence-stage4/Group 344.png"),
    receipt: encodeURI("./assets/sentence-stage4/Group 345.png"),
    bag: encodeURI("./assets/sentence-stage4/Group 349.png")
  },
  questionPlaceholder: encodeURI("./assets/sentence-stage4/question-placeholder.png"),
  resourceFrame: encodeURI("./assets/sentence-stage4/Group 425.png"),
  combineFrame: encodeURI("./assets/sentence-stage4/Group 331.png"),
  optionArt: {
    juice: encodeURI("./assets/sentence-stage4/Group 428.png"),
    receipt: encodeURI("./assets/sentence-stage4/Group 346.png"),
    bag: encodeURI("./assets/sentence-stage4/Group 347.png")
  },
  resources: {
    bread: encodeURI("./assets/sentence-stage4/Group 317.png"),
    milk: encodeURI("./assets/sentence-stage4/Group 318.png"),
    apple: encodeURI("./assets/sentence-stage4/Group 319.png"),
    cart: encodeURI("./assets/sentence-stage4/Group 321.png"),
    shelf: encodeURI("./assets/sentence-stage4/Group 322.png"),
    counter: encodeURI("./assets/sentence-stage4/Group 323.png"),
    "ice-cream": encodeURI("./assets/sentence-stage4/Group 432.png"),
    bag: encodeURI("./assets/sentence-stage4/Group 429.png"),
    trolley: encodeURI("./assets/sentence-stage4/Group 430.png"),
    wipe: encodeURI("./assets/sentence-stage4/Group 431.png"),
    freezer: encodeURI("./assets/sentence-stage4/Group 433.png"),
    filled: encodeURI("./assets/sentence-stage4/Group 434.png"),
    arranged: encodeURI("./assets/sentence-stage4/Group 435.png")
  },
  employee: encodeURI("./assets/sentence-stage4/图片 1 9.png")
};
const SENTENCE_STAGE_TWO_ANIMAL_ORDER = ["lion", "kangaroo", "duck", "otter", "rabbit", "elephant", "alpaca"];
const SENTENCE_STAGE_TWO_RESULT_ORDER = ["feed", "pool", "bandage", "dry", "rinse", "groom", "soothe"];
const WORD_STAGE_RESOURCE_SLOTS = {
  modifier: ["yellow", "red", "mom", "sister", "clean", "pretty", "fafa"],
  object: ["pencil", "box", "clothes", "doll", "cup", "book", "sticker"]
};
const RESTORE_BRIDGE_SECONDS = 20;
const WORD_STAGE_ONE_HINT_DELAY_MS = 30_000;
const SENTENCE_FIND_HINT_DELAY_MS = 30_000;
const PHRASE_RESTORE_HINT_DELAY_MS = 15_000;
const PHRASE_RESTORE_HINT_SECONDS = PHRASE_RESTORE_HINT_DELAY_MS / 1000;
const SENTENCE_CARE_HINT_DELAY_MS = 15_000;
const SENTENCE_CARE_HINT_SECONDS = SENTENCE_CARE_HINT_DELAY_MS / 1000;
const REFLECTION_FEEDBACK_DURATION_MS = 1_600;
const STAGE_FOUR_ERROR_FEEDBACK_DURATION_MS = 5_000;
// Keep the sweeping gesture forgiving: each broad pass visibly clears part
// of the debris, mirroring the blackboard-cleaning progression.
const PHRASE_FLOOR_SWEEP_PASSES = 3;
const RESTORE_HINTS = [
  { id: "modifier", label: "说明资源" },
  { id: "de", label: "“的”字" },
  { id: "object", label: "物品资源" }
];

const modifiers = {
  yellow: { id: "yellow", kind: "modifier", label: "黄色", type: "color", color: "#ffd33f" },
  red: { id: "red", kind: "modifier", label: "红色", type: "color", color: "#f36464" },
  blue: { id: "blue", kind: "modifier", label: "蓝色", type: "color", color: "#4f8bd8" },
  green: { id: "green", kind: "modifier", label: "绿色", type: "color", color: "#6ebf71" },
  clean: { id: "clean", kind: "modifier", label: "干净", type: "state" },
  dirty: { id: "dirty", kind: "modifier", label: "脏脏", type: "state" },
  wet: { id: "wet", kind: "modifier", label: "湿漉漉", type: "state" },
  sister: { id: "sister", kind: "modifier", label: "妹妹", type: "owner", color: "#f48aaa" },
  mom: { id: "mom", kind: "modifier", label: "妈妈", type: "owner", color: "#6ebf71" },
  fafa: { id: "fafa", kind: "modifier", label: "法法", type: "owner", color: "#4f8bd8" },
  wood: { id: "wood", kind: "modifier", label: "木纹", type: "material", color: "#a86d35" },
  pretty: { id: "pretty", kind: "modifier", label: "漂亮", type: "feeling" },
  ordinary: { id: "ordinary", kind: "modifier", label: "普通", type: "feeling" }
};

const objects = {
  pencil: { id: "pencil", kind: "object", label: "铅笔" },
  crayon: { id: "crayon", kind: "object", label: "蜡笔" },
  box: { id: "box", kind: "object", label: "收纳盒" },
  ball: { id: "ball", kind: "object", label: "皮球" },
  clothes: { id: "clothes", kind: "object", label: "衣服" },
  towel: { id: "towel", kind: "object", label: "毛巾" },
  hairpin: { id: "hairpin", kind: "object", label: "发卡" },
  hairclip: { id: "hairclip", kind: "object", label: "玩具发夹" },
  doll: { id: "doll", kind: "object", label: "玩偶" },
  cup: { id: "cup", kind: "object", label: "水杯" },
  bottle: { id: "bottle", kind: "object", label: "水壶" },
  book: { id: "book", kind: "object", label: "书" },
  pictureBook: { id: "pictureBook", kind: "object", label: "绘本" },
  magazine: { id: "magazine", kind: "object", label: "杂志" },
  sticker: { id: "sticker", kind: "object", label: "贴纸" },
  label: { id: "label", kind: "object", label: "标签纸" },
  album: { id: "album", kind: "object", label: "画册" },
  workbook: { id: "workbook", kind: "object", label: "练习册" },
  notebook: { id: "notebook", kind: "object", label: "笔记本" },
  fileFolder: { id: "fileFolder", kind: "object", label: "文件夹" },
  backpack: { id: "backpack", kind: "object", label: "背包" },
  pencilCase: { id: "pencilCase", kind: "object", label: "笔盒" },
  badge: { id: "badge", kind: "object", label: "徽章" },
  keychain: { id: "keychain", kind: "object", label: "钥匙扣" },
  postcard: { id: "postcard", kind: "object", label: "明信片" },
  umbrella: { id: "umbrella", kind: "object", label: "雨伞" },
  hat: { id: "hat", kind: "object", label: "帽子" },
  scarf: { id: "scarf", kind: "object", label: "围巾" },
  gloves: { id: "gloves", kind: "object", label: "手套" },
  poster: { id: "poster", kind: "object", label: "海报" },
  map: { id: "map", kind: "object", label: "地图" },
  books: { id: "books", kind: "object", label: "本子" },
  pictures: { id: "pictures", kind: "object", label: "照片" }
};

const findTasks = [
  {
    id: "yellow-pencil",
    targetLabel: "黄色的铅笔",
    sceneLabel: "黄色铅笔",
    displayPhrase: "黄色的铅笔",
    modId: "yellow",
    objId: "pencil",
    clueText: "书桌与床边之间",
    intent: "区分颜色与物品类别",
    success: "找到了！黄色这个线索帮助你找到了铅笔。",
    hint: "再看一看任务卡前面的颜色。你要找的是这个颜色的物品。",
    position: { left: 548, top: 356 },
    distractors: [
      { id: "red-pencil", label: "红色铅笔", modId: "red", objId: "pencil", position: { left: 642, top: 348 } }
    ],
    restore: {
      title: "还原学习用品",
      leftCue: "书桌笔筒里放着黄色铅笔",
      rightCue: "空笔筒",
      placement: "黄色铅笔放入笔筒",
      focus: "颜色修饰物品",
      spot: { left: 166, top: 142 },
      wrong: { left: 70, top: 170 },
      stageSpot: { left: 936, top: 308 }
    }
  },
  {
    id: "red-box",
    targetLabel: "红色的收纳盒",
    sceneLabel: "红色收纳盒",
    displayPhrase: "红色的收纳盒",
    modId: "red",
    objId: "box",
    clueText: "床底收纳区",
    intent: "区分红色的与盒子",
    success: "找到了！红色这个线索帮你认出了收纳盒。",
    hint: "再看一看任务卡，颜色和物品剪影都要一样。",
    position: { left: 128, top: 392 },
    distractors: [
      { id: "blue-box", label: "蓝色收纳盒", modId: "blue", objId: "box", position: { left: 76, top: 306 } },
      { id: "red-ball", label: "红色皮球", modId: "red", objId: "ball", position: { left: 282, top: 368 } }
    ],
    restore: {
      title: "还原收纳架",
      leftCue: "收纳架中层放着红色收纳盒",
      rightCue: "收纳架中层空位",
      placement: "红色收纳盒放上收纳架",
      focus: "颜色修饰物品",
      spot: { left: 160, top: 48 },
      wrong: { left: 80, top: 180 },
      stageSpot: { left: 934, top: 134 }
    }
  },
  {
    id: "clean-clothes",
    targetLabel: "干净的衣服",
    sceneLabel: "干净衣服",
    displayPhrase: "干净的衣服",
    modId: "clean",
    objId: "clothes",
    clueText: "椅背衣物堆",
    intent: "理解状态可以说明物品",
    success: "找到了！闪亮图标表示这件衣服是干净的。",
    hint: "看看任务卡前面的闪亮线索，要找干净的那一件。",
    position: { left: 350, top: 146 },
    distractors: [
      { id: "dirty-clothes", label: "脏衣服", modId: "dirty", objId: "clothes", position: { left: 444, top: 146 } }
    ],
    restore: {
      title: "还原衣柜",
      leftCue: "衣柜挂杆挂着干净衣服",
      rightCue: "衣柜挂杆空位",
      placement: "干净衣服挂入衣柜",
      focus: "状态修饰物品",
      spot: { left: 20, top: 42 },
      wrong: { left: 160, top: 176 },
      stageSpot: { left: 320, top: 124 }
    }
  },
  {
    id: "sister-doll",
    targetLabel: "妹妹的玩偶",
    sceneLabel: "妹妹玩偶",
    displayPhrase: "妹妹的玩偶",
    modId: "sister",
    objId: "doll",
    clueText: "地毯与玩具篮旁",
    intent: "理解人物信息表示归属",
    success: "找到了！妹妹头像表示这件东西和妹妹有关。",
    hint: "妹妹头像说明东西属于妹妹。再找找妹妹要的是哪件东西。",
    position: { left: 704, top: 392 },
    distractors: [],
    restore: {
      title: "还原妹妹的小盒子",
      leftCue: "妹妹的小盒子里放着玩偶",
      rightCue: "妹妹的小盒子空位",
      placement: "玩偶放入妹妹的小盒子",
      focus: "人物表示所属",
      spot: { left: 42, top: 176 },
      wrong: { left: 158, top: 64 },
      stageSpot: { left: 684, top: 442 }
    }
  },
  {
    id: "mom-cup",
    targetLabel: "妈妈的水杯",
    sceneLabel: "妈妈水杯",
    displayPhrase: "妈妈的水杯",
    modId: "mom",
    objId: "cup",
    clueText: "书桌一角",
    intent: "区分是谁的与是什么东西",
    success: "找到了！妈妈头像告诉你，这是妈妈的水杯。",
    hint: "先看是谁的，再看是什么东西。",
    position: { left: 940, top: 270 },
    distractors: [
      { id: "sister-cup", label: "妹妹的水杯", modId: "sister", objId: "cup", position: { left: 818, top: 326 } }
    ],
    restore: {
      title: "还原杯垫区",
      leftCue: "妈妈的水杯放在杯垫上",
      rightCue: "杯垫空位",
      placement: "水杯放到杯垫上",
      focus: "人物表示所属",
      spot: { left: 164, top: 154 },
      wrong: { left: 35, top: 48 },
      stageSpot: { left: 1030, top: 306 }
    }
  },
  {
    id: "fafa-book",
    targetLabel: "法法的书",
    sceneLabel: "法法的书",
    displayPhrase: "法法的书",
    modId: "fafa",
    objId: "book",
    clueText: "地板书堆",
    intent: "理解主角头像所代表的我的",
    success: "找到了！法法头像在这里表示我的东西。",
    hint: "法法头像代表你自己，要找属于你的那本书。",
    position: { left: 382, top: 430 },
    distractors: [
      { id: "mom-magazine", label: "妈妈的杂志", modId: "mom", objId: "magazine", position: { left: 474, top: 422 } }
    ],
    restore: {
      title: "还原主角书架",
      leftCue: "主角书架区域放着一本书",
      rightCue: "书架空位",
      placement: "书放入主角书架区域",
      focus: "“我”的所属表达",
      spot: { left: 34, top: 162 },
      wrong: { left: 162, top: 150 },
      stageSpot: { left: 704, top: 420 }
    }
  },
  {
    id: "pretty-sticker",
    targetLabel: "漂亮的贴纸",
    sceneLabel: "漂亮贴纸",
    displayPhrase: "漂亮的贴纸",
    modId: "pretty",
    objId: "sticker",
    clueText: "收纳架下层",
    intent: "体验主观描写也能说明物品",
    success: "找到了！星星线索表示漂亮、喜欢的感觉。",
    hint: "找一找带星星感觉，又像贴纸的东西。",
    position: { left: 918, top: 132 },
    distractors: [],
    restore: {
      title: "还原贴纸收纳册",
      leftCue: "贴纸收纳册中夹着漂亮贴纸",
      rightCue: "收纳册夹层空位",
      placement: "贴纸收入收纳册",
      focus: "主观描写修饰物品",
      spot: { left: 54, top: 170 },
      wrong: { left: 158, top: 60 },
      stageSpot: { left: 1028, top: 190 }
    }
  }
];

const transferTasks = [
  {
    id: "fafa-bottle",
    type: "drag-resources",
    title: "组合资源",
    prompt: "法法水杯图像",
    targetMod: "fafa",
    targetObj: "cup",
    phrase: "法法的水杯",
    success: "选对啦！",
    hint: "把说明资源和物品资源组合起来。",
    destination: "书包侧袋",
    modifierOptions: ["mom", "fafa", "green"],
    objectOptions: ["cup", "backpack"],
    questionPosition: { left: 796, top: 169, width: 185, height: 254 }
  },
  {
    id: "blue-notebook",
    type: "drag-resources",
    title: "组合资源",
    prompt: "蓝色笔记本图像",
    targetMod: "blue",
    targetObj: "notebook",
    phrase: "蓝色的笔记本",
    success: "选对啦！",
    hint: "把说明资源和物品资源组合起来。",
    destination: "书包主袋",
    modifierOptions: ["mom", "blue", "red"],
    objectOptions: ["fileFolder", "notebook"],
    questionPosition: { left: 796, top: 169, width: 185, height: 254 }
  },
  {
    id: "clean-towel-choice",
    type: "image-choice",
    title: "看图选一句",
    prompt: "干净的毛巾",
    targetMod: "clean",
    targetObj: "towel",
    phrase: "干净的毛巾",
    success: "选对啦，干净的毛巾放进书包。",
    options: ["干净毛巾", "毛巾的干净", "干净的毛巾", "毛巾干净的"],
    correctOption: 2,
    questionPosition: { left: 796, top: 320, width: 185, height: 82 },
    optionPosition: { left: 98, top: 719, width: 998, height: 91 },
    destination: "书包前袋"
  },
  {
    id: "wood-pencil-case-choice",
    type: "image-choice",
    title: "看图选一句",
    prompt: "木纹的笔盒",
    targetMod: "wood",
    targetObj: "pencilCase",
    phrase: "木纹的笔盒",
    success: "选对啦，木纹的笔盒放进书包。",
    options: ["木纹的笔盒", "笔盒的木纹", "笔盒木纹的", "木纹笔盒"],
    correctOption: 0,
    questionPosition: { left: 808, top: 254, width: 162, height: 167 },
    optionPosition: { left: 98, top: 719, width: 998, height: 91 },
    destination: "书包前袋"
  },
  {
    id: "handsome-badge-choice",
    type: "text-choice",
    title: "读句子选一选",
    prompt: "大家都觉得这个徽章很帅气。",
    targetMod: "pretty",
    targetObj: "badge",
    phrase: "帅气的徽章",
    success: "选对啦，帅气的徽章放进书包。",
    options: ["帅气徽章", "徽章的帅气", "帅气地徽章", "帅气的徽章"],
    correctOption: 3,
    questionPosition: { left: 732, top: 169, width: 320, height: 254 },
    optionPosition: { left: 98, top: 719, width: 998, height: 91 },
    destination: "书包前袋"
  },
  {
    id: "red-keychain-choice",
    type: "text-choice",
    title: "读句子选一选",
    prompt: "这个钥匙扣是红色的，要放回书包的大袋里。",
    targetMod: "red",
    targetObj: "keychain",
    phrase: "红色的钥匙扣",
    success: "选对啦，红色的钥匙扣放进书包。",
    options: ["红色钥匙扣", "钥匙扣的红色", "红色得钥匙扣", "红色的钥匙扣"],
    correctOption: 3,
    questionPosition: { left: 732, top: 169, width: 320, height: 254 },
    optionPosition: { left: 98, top: 719, width: 998, height: 91 },
    destination: "书包侧袋"
  },
  {
    id: "pretty-postcard-order",
    type: "reorder",
    title: "词卡排一排",
    prompt: "漂亮的明信片",
    targetMod: "pretty",
    targetObj: "postcard",
    phrase: "漂亮的明信片",
    success: "排对啦，漂亮的明信片放进书包。",
    cards: ["明信片", "漂亮", "的"],
    initialOrder: ["明信片", "漂亮", "的"],
    correctOrder: ["漂亮", "的", "明信片"],
    questionPosition: { left: 808, top: 254, width: 162, height: 167 },
    optionPosition: { left: 255, top: 719, width: 610, height: 91 },
    destination: "书包夹层"
  }
];

const grammarMetaFeedback = {
  word: {
    意义: "东西是谁的，或它长什么样。",
    规则: "谁/什么样＋的＋东西/人。",
    使用: "特别说明东西是谁的，或它有什么特别的地方。"
  },
  phrase: {
    意义: "说明动作做了什么，或和什么事物有关。",
    规则: "动词放前面，后面跟对象。",
    使用: "把一件事怎么做说清楚。"
  },
  sentence: {
    意义: "人或物是动作的承受者，强调承受者受到的影响或结果。",
    规则: "承受者 + 被 + 施加者 + 动作结果。",
    使用: "特别说明人或物受到了什么影响或结果，强调动作对承受者的作用。"
  }
};

const stageFourFeedbackHints = {
  word: {
    意义: "再想想：东西是谁的，或它长什么样。",
    规则: "再想想：谁/什么样 + 的 + 物品。",
    使用: "再想想：这里要突出谁的或什么样。"
  },
  phrase: {
    意义: "再想想：动作做了什么，和什么有关？",
    规则: "再想想：动作在前面，对象在后面。",
    使用: "再想想：把这件事怎么做说清楚。"
  },
  sentence: {
    意义: "再想想：谁是受到动作影响的人或物？",
    规则: "再想想：承受者 + 被 + 施加者 + 结果。",
    使用: "再想想：要突出谁受到了什么影响。"
  }
};

const transferMetaFeedback = {
  "fafa-bottle": { topic: "意义" },
  "blue-notebook": { topic: "意义" },
  "clean-towel-choice": { topic: "规则" },
  "wood-pencil-case-choice": { topic: "规则" },
  "handsome-badge-choice": { topic: "使用" },
  "red-keychain-choice": { topic: "使用" },
  "pretty-postcard-order": { topic: "规则" }
};

const phraseTransferMetaTopics = {
  "wash-apple": "使用",
  "cut-watermelon": "使用",
  "take-banana": "使用",
  "take-strawberry": "使用",
  "wash-grape-result": "意义",
  "juice-orange-result": "意义",
  "cut-pear-text": "规则",
  "juice-orange-text": "使用",
  "take-grape-order": "规则"
};

const sentenceTransferMetaFeedback = {
  "bread-receiver": { topic: "意义" },
  "milk-result": { topic: "意义" },
  "apple-bag": { topic: "规则" },
  "ice-cream": { topic: "规则" },
  "juice-result": { topic: "使用" },
  "receipt-text": { topic: "使用" },
  "bag-order": { topic: "规则" }
};

function grammarMetaMessage(category, topic) {
  return grammarMetaFeedback[category]?.[topic] || grammarMetaFeedback[category]?.规则 || "再看一看这道题考查的语法知识。";
}

function stageFourFeedbackHtml(category, topic) {
  const hint = stageFourFeedbackHints[category]?.[topic] || stageFourFeedbackHints[category]?.规则 || "再想想：看看这道题考查的语法知识。";
  return `<div class="stage-four-feedback" role="alert"><img src="${STAGE_FOUR_FEEDBACK_ASSET}" alt=""><p>${hint}</p></div>`;
}

const phraseActions = {
  wipe: { id: "wipe", label: "擦", color: "#5d9bd2" },
  arrange: { id: "arrange", label: "摆", color: "#56b887" },
  hang: { id: "hang", label: "挂", color: "#e6a34d" },
  stick: { id: "stick", label: "贴", color: "#e17f9d" },
  water: { id: "water", label: "浇", color: "#6dbbd2" },
  sweep: { id: "sweep", label: "扫", color: "#9a83d7" },
  move: { id: "move", label: "搬", color: "#d8904d" }
};

const phraseObjects = {
  blackboard: { id: "blackboard", label: "黑板" },
  desks: { id: "desks", label: "桌椅" },
  works: { id: "works", label: "作品" },
  labels: { id: "labels", label: "标签" },
  flower: { id: "flower", label: "花" },
  floor: { id: "floor", label: "纸屑" },
  boxes: { id: "boxes", label: "纸箱" }
};

const phraseFruits = {
  apple: { id: "apple", label: "苹果" },
  banana: { id: "banana", label: "香蕉" },
  watermelon: { id: "watermelon", label: "西瓜" },
  grape: { id: "grape", label: "葡萄" },
  pear: { id: "pear", label: "梨" },
  strawberry: { id: "strawberry", label: "草莓" },
  orange: { id: "orange", label: "橙子" }
};

const phraseFindTasks = [
  { id: "wipe-blackboard", action: "wipe", object: "blackboard", phrase: "擦黑板", problem: "黑板有污渍和旧字", result: "干净的黑板" },
  { id: "hang-works", action: "hang", object: "works", phrase: "挂作品", problem: "画作放在地上", result: "挂到展墙上的画作" },
  { id: "stick-labels", action: "stick", object: "labels", phrase: "贴标签", problem: "标签放在讲台上", result: "贴上标签的说明牌" },
  { id: "water-flower", action: "water", object: "flower", phrase: "浇花", problem: "花朵垂下头", result: "新鲜的花朵" },
  { id: "sweep-floor", action: "sweep", object: "floor", phrase: "扫纸屑", problem: "地面有纸屑", result: "纸屑被扫干净" },
  { id: "move-boxes", action: "move", object: "boxes", phrase: "搬纸箱", problem: "纸箱挡在过道上", result: "呆在门口的纸箱" },
  { id: "arrange-desks", action: "arrange", object: "desks", phrase: "摆桌椅", problem: "桌椅歪倒了", result: "整齐的桌椅" }
];

const PHRASE_RAG_WIPE_STEPS = 1;

const phraseTransferTasks = [
  {
    id: "wash-apple", type: "select-pair", prompt: "干净苹果", action: "wash", object: "apple", phrase: "洗苹果", result: "苹果变干净",
    actionOptions: ["wash", "cut", "peel"], objectOptions: ["apple", "banana", "watermelon"]
  },
  {
    id: "cut-watermelon", type: "select-pair", prompt: "切开的西瓜", action: "cut", object: "watermelon", phrase: "切西瓜", result: "西瓜变成小块",
    actionOptions: ["cut", "wash", "take"], objectOptions: ["watermelon", "grape", "pear"]
  },
  {
    id: "take-banana", type: "drag-resources", prompt: "妹妹想剥香蕉", action: "peel", object: "banana", phrase: "剥香蕉", result: "香蕉皮打开，果肉出现",
    actionOptions: ["wash", "cut", "peel"], objectOptions: ["banana", "strawberry", "orange"]
  },
  {
    id: "take-strawberry", type: "drag-resources", prompt: "大家要把草莓放到餐垫上分享", action: "take", object: "strawberry", phrase: "拿草莓", result: "草莓放到野餐垫",
    actionOptions: ["take", "cut", "wash"], objectOptions: ["strawberry", "apple", "grape"]
  },
  {
    id: "wash-grape-result", type: "result-choice", prompt: "洗葡萄", action: "wash", object: "grape", phrase: "洗葡萄", result: "干净葡萄",
    options: ["还带泥点的葡萄", "切开的葡萄", "干净葡萄"], correctOption: 2
  },
  {
    id: "juice-orange-result", type: "result-choice", prompt: "榨橙汁", action: "juice", object: "orange", phrase: "榨橙汁", result: "一杯橙汁",
    options: ["完整橙子", "一杯橙汁", "切开的西瓜"], correctOption: 1
  },
  {
    id: "cut-pear-text", type: "text-choice", prompt: "野餐开始前，妈妈说：把梨分成小块。", phrase: "切梨", result: "规则", options: ["切梨", "梨切", "洗梨"], correctOption: 0
  }
];

// The clean picnic background is composed with these independently supplied
// fruit states. Coordinates keep both states aligned with the reference scene.
const phraseStage4FruitStates = {
  apple: {
    initial: { left: 505, top: 568, width: 89, height: 92 },
    final: { left: 501, top: 568, width: 106, height: 83 },
    initialAsset: PHRASE_STAGE_FOUR_ASSETS.initialFruits.apple,
    asset: PHRASE_STAGE_FOUR_ASSETS.finalFruits.apple
  },
  watermelon: {
    initial: { left: 445, top: 477, width: 120, height: 133 },
    final: { left: 432, top: 520, width: 151, height: 80 },
    initialAsset: PHRASE_STAGE_FOUR_ASSETS.initialFruits.watermelon,
    asset: PHRASE_STAGE_FOUR_ASSETS.finalFruits.watermelon
  },
  banana: {
    initial: { left: 608.5, top: 469, width: 120, height: 117.5 },
    final: { left: 616, top: 493, width: 104, height: 105 },
    initialAsset: PHRASE_STAGE_FOUR_ASSETS.initialFruits.banana,
    asset: PHRASE_STAGE_FOUR_ASSETS.finalFruits.banana
  },
  strawberry: {
    initial: { left: 185, top: 503, width: 44.5, height: 50 },
    final: { left: 584, top: 509.3, width: 57, height: 57 },
    initialAsset: PHRASE_STAGE_FOUR_ASSETS.initialFruits.strawberry,
    asset: PHRASE_STAGE_FOUR_ASSETS.finalFruits.strawberry
  },
  grape: {
    initial: { left: 352.5, top: 551, width: 117.5, height: 112 },
    final: { left: 351, top: 551, width: 83, height: 79 },
    initialAsset: PHRASE_STAGE_FOUR_ASSETS.initialFruits.grape,
    asset: PHRASE_STAGE_FOUR_ASSETS.finalFruits.grape
  },
  orange: {
    initial: { left: 582, top: 548, width: 70, height: 75 },
    final: { left: 615, top: 602, width: 52, height: 74 },
    initialAsset: PHRASE_STAGE_FOUR_ASSETS.initialFruits.orange,
    asset: PHRASE_STAGE_FOUR_ASSETS.finalFruits.orange
  },
  pear: {
    initial: { left: 389, top: 462.5, width: 80, height: 106 },
    final: { left: 386, top: 475, width: 101, height: 84 },
    initialAsset: PHRASE_STAGE_FOUR_ASSETS.initialFruits.pear,
    asset: PHRASE_STAGE_FOUR_ASSETS.finalFruits.pear
  }
};

const phraseStage4TaskFruit = {
  "wash-apple": "apple",
  "cut-watermelon": "watermelon",
  "take-banana": "banana",
  "take-strawberry": "strawberry",
  "wash-grape-result": "grape",
  "juice-orange-result": "orange",
  "cut-pear-text": "pear"
};

const state = {
  stage: "home",
  category: "word",
  findIndex: 0,
  foundIds: [],
  resources: [],
  wordStageOneHintTarget: null,
  restoreIndex: 0,
  restoreSlots: { modifier: null, object: null },
  restoreSlotEntities: { modifier: null, object: null },
  restoreSelectedResourceKey: null,
  restoreReady: false,
  restoreReflection: null,
  restoreReflectionSelection: null,
  restoreReflectionError: null,
  restoreLesson: null,
  carryingRestore: false,
  restoreBridgeSeconds: RESTORE_BRIDGE_SECONDS,
  restoreBridgeReady: false,
  restoreHint: null,
  restoreHintQueue: [],
  restoreLastHint: null,
  restoreResourceOrder: { modifier: [], object: [] },
  wordStageTwoResourceOrder: { modifier: [], object: [] },
  restoredIds: [],
  restoreCompleteView: false,
  bookVisited: false,
  transferIndex: 0,
  transferSelections: { modifier: null, object: null },
  transferSingleSelection: null,
  transferOption: null,
  transferOrder: [],
  transferCardOrder: [],
  transferReady: false,
  transferBookOpen: false,
  carryingTransfer: false,
  transferAttempts: {},
  transferError: null,
  transferErrorTopic: null,
  transferErrorTargets: [],
  transferredIds: [],
  phraseFindIndex: 0,
  phraseFoundIds: [],
  phraseRagWipeCount: 0,
  phraseFloorSweepCount: 0,
  phraseResources: { actions: [], objects: [] },
  phraseRestoreIndex: 0,
  phraseRestoreSelections: { action: null, object: null },
  phraseRestoreReady: false,
  phraseRestoreShowingComplete: false,
  phraseRestoreReflection: null,
  phraseRestoreReflectionSelection: null,
  phraseRestoreReflectionError: null,
  phraseRestoreLesson: null,
  phraseRestoreHint: null,
  phraseRestoreHintSeconds: PHRASE_RESTORE_HINT_SECONDS,
  phraseRestoreResourceOrder: { actions: [], objects: [] },
  phraseRestoreCompletedIds: [],
  phraseBookVisited: false,
  phraseBookReturnStage: null,
  phraseTransferIndex: 0,
  phraseTransferSelections: { action: null, object: null },
  phraseTransferOption: null,
  phraseTransferCardOrder: [],
  phraseTransferReady: false,
  phraseTransferBookOpen: false,
  phraseTransferredIds: [],
  phraseError: null,
  phraseErrorTopic: null,
  phraseErrorTargets: [],
  sentenceFindIndex: 0,
  sentenceFindSelectedAnimal: null,
  sentenceFindKeeperAnimal: null,
  sentenceFindKeeperPosition: null,
  sentenceFindKidPosition: null,
  sentenceFindChoiceOrders: {},
  sentenceFindResolved: false,
  sentenceFindResources: [],
  sentenceFindHintTarget: null,
  sentenceCareIndex: 0,
  sentenceCareSelectedAnimal: null,
  sentenceCareKeeperArrived: false,
  sentenceCareKeeperAnimal: null,
  sentenceCareKeeperPosition: null,
  sentenceCareLesson: null,
  sentenceCareReflection: null,
  sentenceCareReflectionSelection: null,
  sentenceCareReflectionError: null,
  sentenceCareSpots: null,
  sentenceCareAnimalOrder: [],
  sentenceCareResourceOrder: [],
  sentenceCareHint: null,
  sentenceCareHintSeconds: SENTENCE_CARE_HINT_SECONDS,
  sentenceCareHintQueue: [],
  sentenceCareLastHint: null,
  sentenceCareSelections: { animal: null, care: null },
  sentenceCareReady: false,
  sentenceCareCompletedIds: [],
  sentenceBookVisited: false,
  sentenceBookReturnStage: null,
  sentenceTransferIndex: 0,
  sentenceTransferSelections: { value: null, object: null, result: null },
  sentenceTransferOrder: [],
  sentenceTransferOrderSelectedIndex: null,
  sentenceTransferReady: false,
  sentenceTransferBookOpen: false,
  sentenceTransferredIds: [],
  sentenceError: null,
  sentenceErrorTopic: null,
  sentenceErrorTargets: [],
  sound: true
};

const view = document.getElementById("view");
const storyLine = document.getElementById("storyLine");
const feedbackText = document.getElementById("feedbackText");
const progressFill = document.getElementById("progressFill");
const soundToggle = document.getElementById("soundToggle");
const restartBtn = document.getElementById("restartBtn");
const tabs = Array.from(document.querySelectorAll("[data-stage-tab]"));
let restoreBridgeTimer = null;
let transferCompleteTimer = null;
let restoreLessonTimer = null;
let wordStageOneHintTimer = null;
let phraseRestoreHintTimer = null;
let phraseRestoreLessonTimer = null;
let sentenceFindHintTimer = null;
let sentenceCareHintTimer = null;
let sentenceCareArrivalTimer = null;
let sentenceCareLessonTimer = null;
let sentenceCareErrorTimer = null;
const stageFourErrorTimers = {
  word: null,
  phrase: null,
  sentence: null,
};
let audioContext = null;
let stageThreeNarrationKey = null;
let stageEntryNarrationKey = null;
let stageEntryNarrationTimer = null;
const FEEDBACK_SOUND_GAIN = 1.8;

function getAudioContext() {
  if (audioContext) return audioContext;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  audioContext = new AudioContextClass();
  return audioContext;
}

function playSound(effect) {
  if (!state.sound) return;
  const context = getAudioContext();
  if (!context) return;
  if (context.state === "suspended") context.resume().catch(() => {});

  const sequences = {
    click: [{ frequency: 560, duration: 0.045, volume: 0.035 }],
    pick: [{ frequency: 420, duration: 0.06, volume: 0.03 }],
    drop: [
      { frequency: 520, duration: 0.07, volume: 0.035 },
      { frequency: 700, duration: 0.09, delay: 0.055, volume: 0.03 }
    ],
    success: [
      { frequency: 660, duration: 0.1, volume: 0.045 },
      { frequency: 880, duration: 0.16, delay: 0.09, volume: 0.05 }
    ],
    wrong: [
      { frequency: 250, duration: 0.1, volume: 0.035, type: "triangle" },
      { frequency: 190, duration: 0.13, delay: 0.08, volume: 0.03, type: "triangle" }
    ],
    stage: [
      { frequency: 523, duration: 0.12, volume: 0.045 },
      { frequency: 659, duration: 0.12, delay: 0.1, volume: 0.045 },
      { frequency: 784, duration: 0.22, delay: 0.2, volume: 0.05 }
    ],
    reward: [
      { frequency: 784, duration: 0.1, volume: 0.045 },
      { frequency: 988, duration: 0.1, delay: 0.09, volume: 0.045 },
      { frequency: 1175, duration: 0.24, delay: 0.18, volume: 0.05 }
    ]
  };
  const notes = sequences[effect] || sequences.click;
  const start = context.currentTime + 0.01;

  notes.forEach((note) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const noteStart = start + (note.delay || 0);
    const noteEnd = noteStart + note.duration;
    oscillator.type = note.type || "sine";
    oscillator.frequency.setValueAtTime(note.frequency, noteStart);
    gain.gain.setValueAtTime(Math.min(note.volume * FEEDBACK_SOUND_GAIN, 0.12), noteStart);
    gain.gain.exponentialRampToValueAtTime(0.0001, noteEnd);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(noteStart);
    oscillator.stop(noteEnd + 0.02);
  });
}

function render() {
  syncStageThreeNarrationState();
  const game = document.getElementById("game");
  game.classList.toggle("home-layout", state.stage === "home");
  game.classList.toggle("scene-layout", state.stage === "find" || state.stage === "restore");
  game.classList.toggle("find-layout", state.stage === "find");
  game.classList.toggle("restore-layout", state.stage === "restore");
  game.classList.toggle("book-layout", state.stage === "book");
  game.classList.toggle("transfer-layout", state.stage === "transfer");
  game.classList.toggle("word-transfer-layout", state.stage === "transfer" && state.category === "word");
  game.classList.toggle("phrase-find-layout", state.stage === "phrase-find");
  game.classList.toggle("phrase-restore-layout", state.stage === "phrase-restore");
  game.classList.toggle("phrase-book-layout", state.stage === "phrase-book");
  game.classList.toggle("phrase-transfer-layout", state.stage === "phrase-transfer");
  game.classList.toggle("sentence-find-layout", state.stage === "sentence-find");
  game.classList.toggle("sentence-care-layout", state.stage === "sentence-care");
  game.classList.toggle("sentence-book-layout", state.stage === "sentence-book");
  game.classList.toggle("sentence-transfer-layout", state.stage === "sentence-transfer");
  game.classList.toggle("word-find-layout", state.stage === "find" && state.category === "word");
  syncStageLocks();
  updateProgress();
  updateStory();

  if (state.stage === "home") renderHome();
  if (state.stage === "find") renderFind();
  if (state.stage === "restore") renderRestore();
  if (state.stage === "book") renderBook();
  if (state.stage === "transfer") renderTransfer();
  if (state.stage === "phrase-find") renderPhraseFind();
  if (state.stage === "phrase-restore") renderPhraseRestore();
  if (state.stage === "phrase-book") renderPhraseBook();
  if (state.stage === "phrase-transfer") renderPhraseTransfer();
  if (state.stage === "sentence-find") renderSentenceFind();
  if (state.stage === "sentence-care") renderSentenceCare();
  if (state.stage === "sentence-book") renderSentenceBook();
  if (state.stage === "sentence-transfer") renderSentenceTransfer();
  playStageEntryNarration();
}

function syncStageLocks() {
  const unlocks = {
    find: true,
    restore: state.foundIds.length === findTasks.length,
    book: state.restoredIds.length === findTasks.length,
    transfer: state.bookVisited || state.transferredIds.length > 0
  };

  tabs.forEach((tab) => {
    const target = tab.dataset.stageTab;
    tab.disabled = !unlocks[target];
    tab.classList.toggle("is-active", state.stage === target);
    tab.classList.toggle("is-complete", isStageComplete(target));
  });
}

function isStageComplete(stage) {
  if (stage === "find") return state.foundIds.length === findTasks.length;
  if (stage === "restore") return state.restoredIds.length === findTasks.length;
  if (stage === "book") return state.bookVisited;
  if (stage === "transfer") return state.transferredIds.length === transferTasks.length;
  return false;
}

function updateProgress() {
  const total = findTasks.length + findTasks.length + 1 + transferTasks.length;
  const current = state.foundIds.length + state.restoredIds.length + (state.bookVisited ? 1 : 0) + state.transferredIds.length;
  progressFill.style.width = `${Math.round((current / total) * 100)}%`;
}

function updateStory() {
  const lines = {
    home: "",
    find: "根据视觉卡片，帮法法找出房间里的对应物品。",
    restore: "用找到的资源组合短语，再把物品放回原位。",
    book: "看看整理行动拼出的“的”小桥规则。",
    transfer: "整理书包，把物品放进对应口袋。"
  };
  storyLine.textContent = lines[state.stage] || "校园开放日准备任务。";
}

function renderHome() {
  view.innerHTML = `
    <section class="home-canvas" aria-label="知识分类首页">
      <img class="home-top-instruction" src="${HOME_INSTRUCTION_ASSET}" alt="跟着小主人公法法，一起学习语法知识" />
      <div class="home-category-grid">
        <button class="home-category-card is-active" type="button" data-home-category="word" aria-label="进入词类知识：助动词-的">
          <span class="home-category-icon home-category-icon-word" aria-hidden="true">词</span>
          <span class="home-category-text"><span class="home-category-label">词类知识</span><span class="home-category-topic">助动词-的</span></span>
        </button>
        <button class="home-category-card is-active" type="button" data-home-category="phrase" aria-label="进入短语知识：动宾短语">
          <span class="home-category-icon home-category-icon-phrase" aria-hidden="true">短</span>
          <span class="home-category-text"><span class="home-category-label">短语知识</span><span class="home-category-topic">动宾短语</span></span>
        </button>
        <button class="home-category-card is-active" type="button" data-home-category="sentence" aria-label="进入句子知识：被字句">
          <span class="home-category-icon home-category-icon-sentence" aria-hidden="true">句</span>
          <span class="home-category-text"><span class="home-category-label">句子知识</span><span class="home-category-topic">被字句</span></span>
        </button>
      </div>
    </section>
  `;

  view.querySelectorAll("[data-home-category]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.homeCategory === "word") {
        state.category = "word";
        setStage("find");
      }
      if (button.dataset.homeCategory === "phrase") startPhraseLevel();
      if (button.dataset.homeCategory === "sentence") startSentenceLevel();
    });
  });
}

function startPhraseLevel() {
  state.category = "phrase";
  state.stage = "phrase-find";
  state.phraseFindIndex = 0;
  state.phraseFoundIds = [];
  state.phraseRagWipeCount = 0;
  state.phraseFloorSweepCount = 0;
  state.phraseResources = { actions: [], objects: [] };
  state.phraseRestoreIndex = 0;
  state.phraseRestoreSelections = { action: null, object: null };
  state.phraseRestoreReady = false;
  state.phraseRestoreShowingComplete = false;
  state.phraseRestoreReflection = null;
  state.phraseRestoreReflectionSelection = null;
  state.phraseRestoreReflectionError = null;
  state.phraseRestoreLesson = null;
  state.phraseRestoreHint = null;
  state.phraseRestoreHintSeconds = PHRASE_RESTORE_HINT_SECONDS;
  state.phraseRestoreResourceOrder = { actions: [], objects: [] };
  stopPhraseRestoreHintTimer();
  state.phraseRestoreCompletedIds = [];
  state.phraseBookVisited = false;
  state.phraseBookReturnStage = null;
  state.phraseTransferIndex = 0;
  state.phraseTransferSelections = { action: null, object: null };
  state.phraseTransferOption = null;
  state.phraseTransferCardOrder = [];
  state.phraseTransferReady = false;
  state.phraseTransferredIds = [];
  clearPhraseError();
  render();
}

function startSentenceLevel() {
  stopSentenceFindHintTimer();
  stopSentenceCareHintCountdown();
  stopSentenceCareArrivalTimer();
  stopSentenceCareLessonTimer();
  state.category = "sentence";
  state.stage = "sentence-find";
  state.sentenceFindIndex = 0;
  state.sentenceFindSelectedAnimal = null;
  state.sentenceFindKeeperAnimal = null;
  state.sentenceFindKeeperPosition = null;
  state.sentenceFindKidPosition = null;
  state.sentenceFindChoiceOrders = createSentenceFindChoiceOrders();
  state.sentenceFindResolved = false;
  state.sentenceFindResources = [];
  state.sentenceFindHintTarget = null;
  state.sentenceCareIndex = 0;
  state.sentenceCareSelectedAnimal = null;
  state.sentenceCareKeeperArrived = false;
  state.sentenceCareKeeperAnimal = null;
  state.sentenceCareKeeperPosition = null;
  state.sentenceCareLesson = null;
  state.sentenceCareReflection = null;
  state.sentenceCareReflectionSelection = null;
  state.sentenceCareReflectionError = null;
  state.sentenceCareSpots = createSentenceCareSpots();
  state.sentenceCareAnimalOrder = [...SENTENCE_STAGE_TWO_ANIMAL_ORDER];
  state.sentenceCareResourceOrder = [...SENTENCE_STAGE_TWO_RESULT_ORDER];
  state.sentenceCareHint = null;
  state.sentenceCareHintSeconds = SENTENCE_CARE_HINT_SECONDS;
  state.sentenceCareHintQueue = [];
  state.sentenceCareLastHint = null;
  state.sentenceCareSelections = { animal: null, care: null };
  state.sentenceCareReady = false;
  state.sentenceCareCompletedIds = [];
  state.sentenceBookVisited = false;
  state.sentenceBookReturnStage = null;
  state.sentenceTransferIndex = 0;
  state.sentenceTransferSelections = { value: null, object: null, result: null };
  state.sentenceTransferOrder = [];
  state.sentenceTransferOrderSelectedIndex = null;
  state.sentenceTransferReady = false;
  state.sentenceTransferredIds = [];
  clearSentenceError();
  setFeedback("看结果图，找到需要照顾的动物。");
  render();
}

function createSentenceFindChoiceOrders() {
  const orders = {};
  sentenceDemoTasks.forEach((task) => {
    const order = [...task.choices];
    if (Math.random() < 0.5) order.reverse();
    orders[task.id] = order;
  });
  const correctFirstTasks = sentenceDemoTasks.filter((task) => orders[task.id][0] === task.care);
  if (correctFirstTasks.length > sentenceDemoTasks.length - 2) {
    const swapCount = correctFirstTasks.length - (sentenceDemoTasks.length - 2);
    correctFirstTasks.slice(0, swapCount).forEach((task) => {
      [orders[task.id][0], orders[task.id][1]] = [orders[task.id][1], orders[task.id][0]];
    });
  }
  return orders;
}

function shuffledSentenceIds(ids) {
  const original = [...ids];
  const shuffled = [...original];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  if (shuffled.length > 1 && shuffled.every((id, index) => id === original[index])) {
    shuffled.push(shuffled.shift());
  }

  return shuffled;
}

function nextSentenceCareHint() {
  if (!state.sentenceCareHintQueue.length) {
    state.sentenceCareHintQueue = shuffledSentenceIds(["animal", "care", "agent"]);
    if (state.sentenceCareLastHint && state.sentenceCareHintQueue[0] === state.sentenceCareLastHint) {
      [state.sentenceCareHintQueue[0], state.sentenceCareHintQueue[1]] = [state.sentenceCareHintQueue[1], state.sentenceCareHintQueue[0]];
    }
  }

  const hint = state.sentenceCareHintQueue.shift();
  state.sentenceCareLastHint = hint;
  return hint;
}

function stopSentenceCareHintCountdown() {
  if (!sentenceCareHintTimer) return;
  window.clearInterval(sentenceCareHintTimer);
  sentenceCareHintTimer = null;
}

function stopSentenceCareArrivalTimer() {
  if (!sentenceCareArrivalTimer) return;
  window.clearTimeout(sentenceCareArrivalTimer);
  sentenceCareArrivalTimer = null;
}

function stopSentenceCareLessonTimer() {
  if (!sentenceCareLessonTimer) return;
  window.clearTimeout(sentenceCareLessonTimer);
  sentenceCareLessonTimer = null;
}

function stopRestoreLessonTimer() {
  if (!restoreLessonTimer) return;
  window.clearTimeout(restoreLessonTimer);
  restoreLessonTimer = null;
}

function stopPhraseRestoreLessonTimer() {
  if (!phraseRestoreLessonTimer) return;
  window.clearTimeout(phraseRestoreLessonTimer);
  phraseRestoreLessonTimer = null;
}

function startSentenceCareHintCountdown() {
  if (sentenceCareHintTimer || state.sentenceCareHint || state.sentenceCareReady || state.stage !== "sentence-care" || !state.sentenceCareSelectedAnimal || !state.sentenceCareKeeperArrived) return;
  state.sentenceCareHintSeconds = SENTENCE_CARE_HINT_SECONDS;
  sentenceCareHintTimer = window.setInterval(() => {
    if (state.stage !== "sentence-care") {
      stopSentenceCareHintCountdown();
      return;
    }

    state.sentenceCareHintSeconds -= 1;
    if (state.sentenceCareHintSeconds <= 0) {
      state.sentenceCareHintSeconds = 0;
      state.sentenceCareHint = nextSentenceCareHint();
      stopSentenceCareHintCountdown();
      setFeedback("小提示出现啦，看看半透明的提示。 ");
    }
    renderSentenceCare();
  }, 1000);
}

function sentenceCareCountdownHtml() {
  if (state.sentenceCareHint || state.sentenceCareReady) return "";
  const progress = ((SENTENCE_CARE_HINT_SECONDS - state.sentenceCareHintSeconds) / SENTENCE_CARE_HINT_SECONDS) * 360;
  return `<i class="sentence-care-countdown" style="--countdown-progress:${progress}deg" aria-label="提示倒计时${state.sentenceCareHintSeconds}秒"></i>`;
}

function setFeedback(text) {
  feedbackText.textContent = text;
  const sceneMessage = document.getElementById("sceneMessage");
  if (sceneMessage) sceneMessage.textContent = text;
}

function toggleSound(afterRender) {
  state.sound = !state.sound;
  soundToggle.setAttribute("aria-pressed", String(state.sound));
  soundToggle.querySelector("span").textContent = state.sound ? "♪" : "×";
  if (!state.sound && "speechSynthesis" in window) window.speechSynthesis.cancel();
  if (state.sound && currentStageThreeCategory()) stageThreeNarrationKey = null;
  afterRender();
  refreshStageEntryNarrationForSound();
}

function setTransferError(task, targets) {
  const feedback = transferMetaFeedback[task.id] || { topic: "规则" };
  state.transferError = grammarMetaMessage("word", feedback.topic);
  state.transferErrorTopic = feedback.topic;
  state.transferErrorTargets = targets;
  setFeedback(`${feedback.topic}：${state.transferError}`);
  scheduleStageFourErrorDismiss("word");
}

function clearTransferError() {
  stopStageFourErrorDismiss("word");
  state.transferError = null;
  state.transferErrorTopic = null;
  state.transferErrorTargets = [];
}

function stopStageFourErrorDismiss(category) {
  const timer = stageFourErrorTimers[category];
  if (!timer) return;
  clearTimeout(timer);
  stageFourErrorTimers[category] = null;
}

function scheduleStageFourErrorDismiss(category) {
  stopStageFourErrorDismiss(category);
  stageFourErrorTimers[category] = setTimeout(() => {
    stageFourErrorTimers[category] = null;

    if (category === "word" && state.transferError) {
      clearTransferError();
      if (state.stage === "transfer") renderTransfer();
      return;
    }

    if (category === "phrase" && state.phraseError) {
      clearPhraseError();
      if (state.stage === "phrase-transfer") renderPhraseTransfer();
      return;
    }

    if (category === "sentence" && state.sentenceError) {
      clearSentenceError();
      if (state.stage === "sentence-transfer") renderSentenceTransfer();
    }
  }, STAGE_FOUR_ERROR_FEEDBACK_DURATION_MS);
}

function setStage(stage) {
  if (state.stage === "find" && state.category === "word" && stage !== "find") {
    stopWordStageOneHintTimer();
    state.wordStageOneHintTarget = null;
  }
  if (state.stage === "sentence-find" && stage !== "sentence-find") {
    stopSentenceFindHintTimer();
    state.sentenceFindHintTarget = null;
  }
  if (state.stage === "sentence-care" && stage !== "sentence-care") {
    stopSentenceCareHintCountdown();
    stopSentenceCareArrivalTimer();
    stopSentenceCareLessonTimer();
  }
  if (stage === "home") {
    stopRestoreLessonTimer();
    stopPhraseRestoreLessonTimer();
    stopSentenceCareLessonTimer();
    if (window.phraseRestoreTimer) {
      window.clearTimeout(window.phraseRestoreTimer);
      window.phraseRestoreTimer = null;
    }
    if (window.phraseTransferTimer) {
      window.clearTimeout(window.phraseTransferTimer);
      window.phraseTransferTimer = null;
    }
    stopPhraseRestoreHintTimer();
    state.phraseRestoreHint = null;
    state.stage = "home";
    render();
    return;
  }
  if (stage === "restore" && state.foundIds.length !== findTasks.length) return;
  if (stage === "book" && state.restoredIds.length !== findTasks.length) return;
  if (stage === "transfer" && !state.bookVisited && state.transferredIds.length === 0) return;
  if (state.stage !== stage) playSound("click");
  state.stage = stage;
  render();
}

function stopWordStageOneHintTimer() {
  if (!wordStageOneHintTimer) return;
  window.clearTimeout(wordStageOneHintTimer);
  wordStageOneHintTimer = null;
}

function startWordStageOneHintTimer() {
  const task = findTasks[state.findIndex];
  if (!task || state.stage !== "find" || state.category !== "word") return;
  if (state.wordStageOneHintTarget === task.id || wordStageOneHintTimer) return;

  state.wordStageOneHintTarget = null;
  const taskId = task.id;
  wordStageOneHintTimer = window.setTimeout(() => {
    wordStageOneHintTimer = null;
    const currentTask = findTasks[state.findIndex];
    if (state.stage !== "find" || state.category !== "word" || currentTask?.id !== taskId || state.foundIds.includes(taskId)) return;

    state.wordStageOneHintTarget = taskId;
    setFeedback("小提示出现啦，看看发光的目标物品。");
    renderFind();
  }, WORD_STAGE_ONE_HINT_DELAY_MS);
}

function stopSentenceFindHintTimer() {
  if (!sentenceFindHintTimer) return;
  window.clearTimeout(sentenceFindHintTimer);
  sentenceFindHintTimer = null;
}

function startSentenceFindHintTimer() {
  const task = sentenceDemoTasks[state.sentenceFindIndex];
  if (!task || state.stage !== "sentence-find" || state.sentenceFindSelectedAnimal || state.sentenceFindResolved) return;
  if (state.sentenceFindHintTarget === task.animal || sentenceFindHintTimer) return;

  state.sentenceFindHintTarget = null;
  const taskIndex = state.sentenceFindIndex;
  const animalId = task.animal;
  sentenceFindHintTimer = window.setTimeout(() => {
    sentenceFindHintTimer = null;
    const currentTask = sentenceDemoTasks[state.sentenceFindIndex];
    if (state.stage !== "sentence-find" || state.sentenceFindIndex !== taskIndex || currentTask?.animal !== animalId || state.sentenceFindSelectedAnimal || state.sentenceFindResolved) return;

    state.sentenceFindHintTarget = animalId;
    setFeedback("小提示出现啦，看看发光的目标动物。");
    renderSentenceFindReference();
  }, SENTENCE_FIND_HINT_DELAY_MS);
}

const phraseTransferActionInfo = {
  wash: { label: "洗", color: "#5d9bd2" },
  cut: { label: "切", color: "#e17f62" },
  peel: { label: "剥", color: "#e6a34d" },
  take: { label: "拿", color: "#56b887" },
  arrange: { label: "摆", color: "#9a83d7" },
  juice: { label: "榨", color: "#e58b62" }
};

const phraseSceneSpots = {
  blackboard: { left: 438, top: 110 },
  desks: { left: 632, top: 334 },
  works: { left: 118, top: 452 },
  labels: { left: 870, top: 342 },
  flower: { left: 892, top: 155 },
  floor: { left: 340, top: 448 },
  boxes: { left: 1018, top: 424 }
};

const phraseRagSpot = { left: 466, top: 110 };

function stopPhraseRestoreHintTimer() {
  if (!phraseRestoreHintTimer) return;
  window.clearInterval(phraseRestoreHintTimer);
  phraseRestoreHintTimer = null;
}

function startPhraseRestoreHintTimer() {
  if (phraseRestoreHintTimer || state.phraseRestoreHint || state.phraseRestoreReady || state.stage !== "phrase-restore") return;
  if (!Number.isFinite(state.phraseRestoreHintSeconds)) {
    state.phraseRestoreHintSeconds = PHRASE_RESTORE_HINT_SECONDS;
  }
  phraseRestoreHintTimer = window.setInterval(() => {
    if (state.stage !== "phrase-restore" || state.phraseRestoreReady) {
      stopPhraseRestoreHintTimer();
      return;
    }

    state.phraseRestoreHintSeconds -= 1;
    if (state.phraseRestoreHintSeconds <= 0) {
      state.phraseRestoreHintSeconds = 0;
      const task = phraseFindTasks[state.phraseRestoreIndex];
      const emptyKinds = ["action", "object"].filter((kind) => !state.phraseRestoreSelections[kind]);
      const candidates = emptyKinds.length ? emptyKinds : ["action", "object"];
      const kind = candidates[Math.floor(Math.random() * candidates.length)];
      state.phraseRestoreHint = { kind, id: kind === "action" ? task.action : task.object };
      stopPhraseRestoreHintTimer();
      setFeedback("小提示出现啦，看看半透明的资源卡。");
    }
    renderPhraseRestore();
  }, 1000);
}

function phraseRestoreHintEntity(task, kind) {
  if (!state.phraseRestoreHint || state.phraseRestoreHint.kind !== kind) return null;
  return kind === "action" ? phraseActions[task.action] : phraseObjects[task.object];
}

function openPhraseBook(returnStage) {
  state.phraseBookReturnStage = returnStage;
  state.stage = "phrase-book";
  render();
}

function returnFromPhraseBook() {
  const returnStage = state.phraseBookReturnStage;
  state.phraseBookReturnStage = null;
  if (!returnStage) {
    setStage("home");
    return;
  }
  state.stage = returnStage;
  const messages = {
    "phrase-find": "看结果图，找到能完成这件事的对象。",
    "phrase-restore": "拖动动作和对象资源，组成正确指令。",
    "phrase-transfer": "根据野餐任务，选出或组成正确短语。"
  };
  setFeedback(messages[returnStage] || "继续完成任务吧。");
  render();
}

function phraseActionVisualHtml(id, className = "phrase-action-visual") {
  const info = phraseActions[id] || phraseTransferActionInfo[id] || { label: id, color: "#9a83d7" };
  return `<span class="${className} phrase-action-icon" style="--action-color:${info.color}" aria-label="${info.label}">${phraseActionSvg(id)}</span>`;
}

function phraseActionSvg(id) {
  if (id === "wipe") return phraseRagSvg("phrase-action-svg");
  if (id === "arrange") return phraseClassroomChairSvg("phrase-action-svg");
  if (id === "hang") return phraseArtworkSvg("phrase-action-svg");
  if (id === "stick") return phraseLabelSvg("phrase-action-svg");
  if (["water", "wash"].includes(id)) return phraseWateringCanSvg("phrase-action-svg");
  if (id === "sweep") return phraseBroomSvg("phrase-action-svg");
  if (id === "move") return phraseBoxSvg("phrase-action-svg");
  if (id === "cut") return `<svg class="phrase-action-svg" viewBox="0 0 100 100" role="img" aria-label="剪切"><circle cx="33" cy="72" r="12" fill="#e17f9d" stroke="#263142" stroke-width="5"/><circle cx="67" cy="72" r="12" fill="#e17f9d" stroke="#263142" stroke-width="5"/><path d="M39 63 L76 20 M61 63 L24 20" fill="none" stroke="#c7d8e2" stroke-width="8" stroke-linecap="round"/><path d="M39 63 L76 20 M61 63 L24 20" fill="none" stroke="#263142" stroke-width="3" stroke-linecap="round"/></svg>`;
  if (id === "peel") return `<svg class="phrase-action-svg" viewBox="0 0 100 100" role="img" aria-label="剥开"><path d="M26 28 C45 17, 69 23, 76 42 C82 59, 68 78, 48 78 C28 78, 20 61, 26 28 Z" fill="#ffd33f" stroke="#a66c28" stroke-width="5"/><path d="M67 27 C53 39, 52 54, 65 66" fill="none" stroke="#fff2b6" stroke-width="7" stroke-linecap="round"/><path d="M25 20 C44 9, 65 13, 77 25" fill="none" stroke="#56b887" stroke-width="7" stroke-linecap="round"/><path d="M72 70 L86 84 M86 84 H70 M86 84 V68" fill="none" stroke="#e17f62" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  if (id === "take") return `<svg class="phrase-action-svg" viewBox="0 0 100 100" role="img" aria-label="拿取"><path d="M24 77 C22 62, 26 46, 34 40 C40 35, 45 39, 44 49 L46 26 C46 19, 56 18, 57 27 L57 48 L60 22 C61 15, 70 16, 70 25 L69 49 L73 29 C74 22, 83 24, 81 34 L77 57 C75 72, 66 82, 52 84 Z" fill="#f4b98b" stroke="#704c35" stroke-width="5" stroke-linejoin="round"/><path d="M24 77 L18 86 H72" fill="none" stroke="#5d9bd2" stroke-width="6" stroke-linecap="round"/></svg>`;
  if (id === "juice") return `<svg class="phrase-action-svg" viewBox="0 0 100 100" role="img" aria-label="榨汁"><path d="M29 22 H72 L66 82 H35 Z" fill="#9edfff" stroke="#31576b" stroke-width="5"/><path d="M29 22 H72" stroke="#e17f9d" stroke-width="10" stroke-linecap="round"/><path d="M39 49 H61" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/><circle cx="55" cy="15" r="10" fill="#f6a448" stroke="#a85e2e" stroke-width="4"/><path d="M55 6 C59 2, 65 3, 68 7" fill="none" stroke="#39704d" stroke-width="4" stroke-linecap="round"/></svg>`;
  return `<svg class="phrase-action-svg" viewBox="0 0 100 100" role="img" aria-label="${id}"><circle cx="50" cy="50" r="30" fill="${info.color}" stroke="#263142" stroke-width="5"/><path d="M34 50 H66 M50 34 V66" stroke="#ffffff" stroke-width="7" stroke-linecap="round"/></svg>`;
}

function phraseRagSvg(sizeClass = "icon-svg") {
  return `<svg class="${sizeClass}" viewBox="0 0 100 76" role="img" aria-label="抹布"><path d="M13 23 L77 10 L90 51 L25 66 Z" fill="#7ec0de" stroke="#263142" stroke-width="5" stroke-linejoin="round"/><path d="M24 25 L38 61 M45 19 L59 56 M65 14 L79 51" stroke="#dff6ff" stroke-width="5" opacity=".92"/><path d="M15 48 L88 33" stroke="#dff6ff" stroke-width="5" opacity=".92"/><path d="M22 27 L75 16" stroke="#4f8eb5" stroke-width="3" opacity=".55"/></svg>`;
}

function phraseObjectSvg(id, sizeClass = "icon-svg", stateName = "resource") {
  const object = phraseObjects[id] || phraseFruits[id] || { label: id };
  const common = `class="${sizeClass}" viewBox="0 0 92 92" role="img" aria-label="${object.label}"`;
  const isProblem = stateName === "problem";
  const isComplete = stateName === "complete";

  if (phraseFruits[id]) return phraseFruitSvg(id, sizeClass);
  if (id === "blackboard") {
    const marks = isProblem
      ? `<text x="23" y="39" fill="#d6e7dc" font-size="14" font-weight="900" transform="rotate(-7 23 39)">旧字</text><path d="M24 51 C34 44,43 58,54 49" fill="none" stroke="#b58359" stroke-width="6" stroke-linecap="round" opacity=".88"/><circle cx="68" cy="28" r="6" fill="#bc8657" opacity=".88"/>`
      : `<path d="M21 34 H66 M21 47 H58" stroke="#d8f2df" stroke-width="4" stroke-linecap="round" opacity=".72"/>${isComplete ? `<path d="M70 23 l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="#ffd55b" stroke="#c58b22" stroke-width="2"/>` : ""}`;
    return `<svg ${common}><rect x="9" y="16" width="74" height="51" rx="6" fill="#314554" stroke="#263142" stroke-width="4"/>${marks}<path d="M19 73 H73" stroke="#9a693d" stroke-width="6" stroke-linecap="round"/></svg>`;
  }
  if (id === "desks") {
    if (isProblem) return `<svg ${common}><g transform="rotate(-12 47 49)"><path d="M13 37 H79 L71 58 H21 Z" fill="#d8904d" stroke="#263142" stroke-width="4"/><path d="M24 58 L18 78 M68 58 L76 78" stroke="#6b4b35" stroke-width="5" stroke-linecap="round"/><path d="M18 24 H51 V45 H18 Z" fill="#8bc5df" stroke="#263142" stroke-width="4"/><path d="M24 45 V65 M45 45 V65" stroke="#6b4b35" stroke-width="4"/></g></svg>`;
    return `<svg ${common}><path d="M12 34 H80 L73 51 H19 Z" fill="#d8904d" stroke="#263142" stroke-width="4"/><path d="M23 51 L19 77 M69 51 L73 77" stroke="#6b4b35" stroke-width="5" stroke-linecap="round"/><path d="M17 20 H48 V37 H17 Z M51 20 H78 V37 H51 Z" fill="#8bc5df" stroke="#263142" stroke-width="4"/><path d="M24 37 V54 M42 37 V54 M58 37 V54 M72 37 V54" stroke="#6b4b35" stroke-width="4"/></svg>`;
  }
  if (id === "works") {
    const work = `<rect x="18" y="16" width="56" height="58" rx="5" fill="#f7e6b0" stroke="#7a5e42" stroke-width="4"/><path d="M24 62 L39 43 L50 54 L62 36 L69 62 Z" fill="#7fc7b3" stroke="#34566a" stroke-width="3"/><circle cx="58" cy="29" r="7" fill="#ffd33f" stroke="#a66c28" stroke-width="3"/>`;
    return `<svg ${common}>${isProblem ? `<path d="M12 77 H80" stroke="#b68556" stroke-width="6" stroke-linecap="round"/><g transform="rotate(12 46 49)">${work}</g>` : `<path d="M46 7 V15" stroke="#596d7a" stroke-width="3"/>${work}`}</svg>`;
  }
  if (id === "labels") {
    const label = `<path d="M16 24 H62 L76 46 L62 68 H16 Z" fill="#fff6bd" stroke="#9b743a" stroke-width="4"/><circle cx="27" cy="46" r="5" fill="#e17f9d" stroke="#754234" stroke-width="2"/><path d="M38 40 H62 M38 52 H58" stroke="#7a5e42" stroke-width="4" stroke-linecap="round"/>`;
    return `<svg ${common}>${isProblem ? `<rect x="12" y="66" width="68" height="10" rx="3" fill="#b77e4d"/><g transform="rotate(-7 46 45)">${label}</g>` : `<rect x="11" y="16" width="70" height="60" rx="7" fill="#f6efe0" stroke="#8f6d48" stroke-width="4"/>${label}`}</svg>`;
  }
  if (id === "flower") {
    if (isProblem) return `<svg ${common}><path d="M30 57 H63 L58 78 H35 Z" fill="#e17f62" stroke="#6b4035" stroke-width="4"/><path d="M47 57 C45 44,62 39,60 26" fill="none" stroke="#638c5a" stroke-width="5" stroke-linecap="round"/><circle cx="59" cy="23" r="10" fill="#d9aa63" stroke="#976e3d" stroke-width="3"/><circle cx="48" cy="31" r="9" fill="#d98ba1" stroke="#9e4e68" stroke-width="3"/><circle cx="68" cy="31" r="9" fill="#d98ba1" stroke="#9e4e68" stroke-width="3"/></svg>`;
    return `<svg ${common}><path d="M30 54 H63 L58 78 H35 Z" fill="#e17f62" stroke="#6b4035" stroke-width="4"/><path d="M47 54 V25" stroke="#4f986a" stroke-width="5" stroke-linecap="round"/><circle cx="47" cy="21" r="10" fill="#ffd33f" stroke="#b87824" stroke-width="3"/><circle cx="35" cy="29" r="9" fill="#f48aaa" stroke="#9e4e68" stroke-width="3"/><circle cx="59" cy="29" r="9" fill="#f48aaa" stroke="#9e4e68" stroke-width="3"/></svg>`;
  }
  if (id === "floor") {
    const debris = isProblem ? `<path d="M23 54 L32 47 M45 61 L53 53 M66 48 L73 41" stroke="#cfaa78" stroke-width="5" stroke-linecap="round"/><circle cx="29" cy="69" r="4" fill="#e7b96e"/><circle cx="57" cy="68" r="4" fill="#d88972"/>` : `<path d="M23 54 L32 47 M45 61 L53 53" stroke="#cfaa78" stroke-width="4" opacity=".4"/>${isComplete ? `<path d="M69 27 l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#fff7c6" stroke="#d2a33e" stroke-width="2"/>` : ""}`;
    return `<svg ${common}><path d="M15 70 H77" stroke="#a87748" stroke-width="7" stroke-linecap="round"/>${debris}</svg>`;
  }
  return `<svg ${common}>${isProblem ? `<path d="M15 75 H77" stroke="#d3ad79" stroke-width="5" stroke-linecap="round"/>` : `<path d="M14 17 H28 V69 H14" fill="#83a7be" stroke="#476779" stroke-width="4"/><circle cx="23" cy="43" r="2" fill="#fff4ce"/>`}<path d="M18 31 L37 19 H74 V66 H18 Z" fill="#d8904d" stroke="#6b4b35" stroke-width="4"/><path d="M18 31 H55 L74 19 M55 31 V66" fill="none" stroke="#6b4b35" stroke-width="4"/><path d="M39 41 H58" stroke="#fff1c5" stroke-width="5" stroke-linecap="round"/></svg>`;
}

function phraseFruitSvg(id, sizeClass = "icon-svg", stateName = "resource") {
  const common = `class="${sizeClass}" viewBox="0 0 92 92" role="img" aria-label="${phraseFruits[id]?.label || id}"`;
  if (id === "apple") return `<svg ${common}><path d="M46 30 C29 16, 14 31, 18 52 C22 76, 41 79, 46 64 C51 79, 70 76, 74 52 C78 31, 63 16, 46 30 Z" fill="#e75d5d" stroke="#263142" stroke-width="4"/><path d="M46 29 C50 18, 59 14, 67 17" fill="none" stroke="#4d9765" stroke-width="5" stroke-linecap="round"/><path d="M52 19 C61 9, 73 12, 77 18 C67 22, 59 24, 52 19 Z" fill="#72bd7d" stroke="#39704d" stroke-width="3"/>${stateName === "clean" ? `<path d="M22 43 l3 6 7 2-6 3-2 7-3-7-6-3 6-2z" fill="#fff7bd" stroke="#d1a53c" stroke-width="1.5"/><path d="M67 53 l2 4 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#fff7bd" stroke="#d1a53c" stroke-width="1.5"/>` : ""}</svg>`;
  if (id === "banana") return `<svg ${common}><path d="M22 29 C24 56, 42 68, 66 53 C72 49, 74 39, 70 31 C65 45, 54 48, 44 42 C35 37, 31 29, 22 29 Z" fill="#ffd33f" stroke="#a66c28" stroke-width="4"/><path d="M23 28 L18 24 M69 31 L75 27" stroke="#6b4b35" stroke-width="5" stroke-linecap="round"/></svg>`;
  if (id === "watermelon") return `<svg ${common}><path d="M14 39 H78 C74 63, 60 76, 46 76 C31 76, 18 63, 14 39 Z" fill="#e87474" stroke="#2f5f4d" stroke-width="4"/><path d="M14 39 H78" stroke="#72b879" stroke-width="9"/><path d="M26 51 L29 55 M43 49 L45 55 M60 51 L62 55" stroke="#263142" stroke-width="3" stroke-linecap="round"/></svg>`;
  if (id === "grape") {
    const grapeMarks = stateName === "cut"
      ? `<path d="M27 27 L66 72 M67 28 L30 71" stroke="#fff0c3" stroke-width="3" stroke-linecap="round"/><path d="M23 23 L72 76" stroke="#70486e" stroke-width="2" opacity=".8"/>`
      : stateName === "dirty"
        ? `<circle cx="28" cy="42" r="4" fill="#8c643e"/><circle cx="58" cy="35" r="3.5" fill="#8c643e"/><circle cx="47" cy="62" r="4" fill="#8c643e"/><path d="M22 73 C38 78,58 78,72 69" fill="none" stroke="#8c643e" stroke-width="4" stroke-linecap="round" opacity=".82"/>`
        : stateName === "clean"
          ? `<path d="M73 30 l3 6 6 2-6 2-3 6-2-6-6-2 6-2z" fill="#fff7bd" stroke="#d1a53c" stroke-width="1.5"/>`
          : "";
    return `<svg ${common}><path d="M46 17 C52 11, 63 12, 69 18 C60 24, 53 24, 46 17 Z" fill="#72bd7d" stroke="#39704d" stroke-width="3"/><circle cx="39" cy="34" r="10" fill="#9a64bd" stroke="#533b70" stroke-width="3"/><circle cx="57" cy="34" r="10" fill="#9a64bd" stroke="#533b70" stroke-width="3"/><circle cx="32" cy="51" r="10" fill="#9a64bd" stroke="#533b70" stroke-width="3"/><circle cx="50" cy="51" r="10" fill="#9a64bd" stroke="#533b70" stroke-width="3"/><circle cx="68" cy="51" r="10" fill="#9a64bd" stroke="#533b70" stroke-width="3"/><circle cx="41" cy="68" r="10" fill="#9a64bd" stroke="#533b70" stroke-width="3"/><circle cx="59" cy="68" r="10" fill="#9a64bd" stroke="#533b70" stroke-width="3"/>${grapeMarks}</svg>`;
  }
  if (id === "pear") return `<svg ${common}><path d="M48 18 C41 25, 43 32, 34 42 C20 58, 31 75, 48 75 C66 75, 75 58, 61 42 C52 32, 55 24, 48 18 Z" fill="#b9d96b" stroke="#52704e" stroke-width="4"/><path d="M48 20 C53 13, 61 12, 66 15" fill="none" stroke="#6b4b35" stroke-width="5" stroke-linecap="round"/></svg>`;
  if (id === "strawberry") return `<svg ${common}><path d="M20 31 H72 L62 70 C59 80, 33 80, 30 70 Z" fill="#e75d5d" stroke="#8d3f46" stroke-width="4"/><path d="M23 30 C33 21, 59 21, 69 30 C59 36, 34 36, 23 30 Z" fill="#72bd7d" stroke="#39704d" stroke-width="3"/><circle cx="35" cy="45" r="2.5" fill="#fff1c5"/><circle cx="48" cy="54" r="2.5" fill="#fff1c5"/><circle cx="59" cy="43" r="2.5" fill="#fff1c5"/></svg>`;
  return `<svg ${common}><circle cx="46" cy="47" r="29" fill="#f6a448" stroke="#a85e2e" stroke-width="4"/><path d="M46 18 C52 11, 63 12, 69 18 C60 23, 53 23, 46 18 Z" fill="#72bd7d" stroke="#39704d" stroke-width="3"/><path d="M46 25 V68 M26 47 H66" stroke="#fff1c5" stroke-width="3" opacity=".7"/></svg>`;
}

function phraseClassroomDeskSvg(sizeClass = "phrase-floor-table-svg") {
  return `<svg class="${sizeClass}" viewBox="0 0 260 170" role="img" aria-label="桌子"><path d="M20 58 H240 L220 98 H40 Z" fill="#d9934e" stroke="#263142" stroke-width="7" stroke-linejoin="round"/><path d="M42 98 L30 154 M214 98 L228 154" stroke="#704c35" stroke-width="11" stroke-linecap="round"/><path d="M20 58 H240" stroke="#f4c474" stroke-width="10" stroke-linecap="round" opacity=".86"/><path d="M82 75 H178" stroke="#b97039" stroke-width="7" stroke-linecap="round" opacity=".72"/><path d="M130 75 V94" stroke="#b97039" stroke-width="5" opacity=".72"/></svg>`;
}

function phraseClassroomChairSvg(sizeClass = "phrase-floor-chair-svg") {
  return `<svg class="${sizeClass}" viewBox="0 0 150 160" role="img" aria-label="椅子"><path d="M38 42 H112 V90 H38 Z" fill="#8bc5df" stroke="#263142" stroke-width="7" stroke-linejoin="round"/><path d="M27 88 H123 L111 112 H39 Z" fill="#d8904d" stroke="#263142" stroke-width="7" stroke-linejoin="round"/><path d="M46 112 L36 152 M104 112 L116 152" stroke="#704c35" stroke-width="10" stroke-linecap="round"/><path d="M47 57 H102" stroke="#dff5ff" stroke-width="5" opacity=".84" stroke-linecap="round"/></svg>`;
}

function phraseArtworkSvg(sizeClass = "phrase-artwork-svg") {
  return `<svg class="${sizeClass}" viewBox="0 0 130 120" role="img" aria-label="画框"><rect x="9" y="9" width="112" height="102" rx="7" fill="#c4894f" stroke="#704c35" stroke-width="6"/><rect x="20" y="20" width="90" height="80" rx="3" fill="#f6e6ad" stroke="#fff6cf" stroke-width="4"/><path d="M27 88 L49 61 L66 78 L87 49 L103 88 Z" fill="#77bea9" stroke="#31576b" stroke-width="4" stroke-linejoin="round"/><circle cx="87" cy="42" r="10" fill="#ffd33f" stroke="#ad7626" stroke-width="4"/></svg>`;
}

function phraseLabelSvg(sizeClass = "phrase-label-svg") {
  return `<svg class="${sizeClass}" viewBox="0 0 116 78" role="img" aria-label="标签"><path d="M12 18 H78 L104 39 L78 60 H12 Z" fill="#fff2ad" stroke="#9b743a" stroke-width="5" stroke-linejoin="round"/><circle cx="27" cy="39" r="6" fill="#df7e9e" stroke="#754234" stroke-width="3"/><path d="M42 32 H76 M42 45 H69" stroke="#765d42" stroke-width="5" stroke-linecap="round"/></svg>`;
}

function phraseWateringCanSvg(sizeClass = "phrase-watering-can-svg") {
  return `<svg class="${sizeClass}" viewBox="0 0 124 104" role="img" aria-label="花洒"><path d="M39 33 H86 C95 33,101 41,99 51 L92 78 H36 L27 51 C25 41,31 33,39 33 Z" fill="#6db9d3" stroke="#263142" stroke-width="6" stroke-linejoin="round"/><path d="M39 36 C34 14,54 8,64 27" fill="none" stroke="#263142" stroke-width="7" stroke-linecap="round"/><path d="M91 42 L115 28 L120 41 L97 57" fill="#86cce4" stroke="#263142" stroke-width="6" stroke-linejoin="round"/><path d="M108 31 L117 49 M113 29 L122 44" stroke="#dff6ff" stroke-width="3" stroke-linecap="round"/><path d="M44 49 H81" stroke="#dff6ff" stroke-width="5" opacity=".8" stroke-linecap="round"/></svg>`;
}

function phraseBroomSvg(sizeClass = "phrase-broom-svg") {
  return `<svg class="${sizeClass}" viewBox="0 0 100 176" role="img" aria-label="扫把"><path d="M55 12 L37 126" stroke="#a77546" stroke-width="11" stroke-linecap="round"/><path d="M29 116 H78 L88 163 H18 Z" fill="#d99b4d" stroke="#704c35" stroke-width="6" stroke-linejoin="round"/><path d="M28 132 H80 M24 147 H84" stroke="#f5cc7d" stroke-width="4" opacity=".86" stroke-linecap="round"/></svg>`;
}

function phraseBoxSvg(sizeClass = "phrase-box-svg") {
  return `<svg class="${sizeClass}" viewBox="0 0 120 104" role="img" aria-label="纸箱"><path d="M17 33 L43 16 H104 V84 H17 Z" fill="#db9548" stroke="#704c35" stroke-width="6" stroke-linejoin="round"/><path d="M17 33 H76 L104 16 M76 33 V84" fill="none" stroke="#704c35" stroke-width="6" stroke-linejoin="round"/><path d="M50 50 H83" stroke="#fff0bf" stroke-width="7" stroke-linecap="round"/></svg>`;
}

function phraseClassroomDeskSetHtml(task) {
  const isFound = state.phraseFoundIds.includes("arrange-desks");
  const isArrangeTask = task.object === "desks" && !isFound;
  return `
    <div class="phrase-floor-desk-set ${isArrangeTask ? "is-arrange-task" : ""} ${isFound ? "is-arranged" : ""}" aria-label="桌子和椅子">
      <div class="phrase-floor-table" aria-label="桌子">${phraseClassroomDeskSvg()}</div>
      <div class="phrase-chair-drop-zone" ${isArrangeTask ? "data-phrase-chair-target=true" : ""} aria-hidden="true"></div>
      ${isArrangeTask
        ? `<button class="phrase-floor-chair is-tilted" type="button" data-phrase-chair="true" aria-label="歪倒的椅子">${phraseClassroomChairSvg()}<span class="sr-only">把歪倒的椅子拖到桌子旁</span></button>`
        : `<div class="phrase-floor-chair ${isFound ? "is-arranged" : "is-tilted"}" aria-label="${isFound ? "摆好的椅子" : "歪倒的椅子"}">${phraseClassroomChairSvg()}</div>`}
    </div>
  `;
}

function phraseArtworkTaskHtml(task) {
  const isFound = state.phraseFoundIds.includes("hang-works");
  const isActive = task.object === "works" && !isFound;
  const source = isActive
    ? `<button class="phrase-task-prop phrase-artwork-source" type="button" data-phrase-scene-drag="works" aria-label="画框">${phraseArtworkSvg()}<span class="sr-only">把画框拖到墙上</span></button>`
    : !isFound ? `<div class="phrase-task-prop phrase-artwork-source is-static" aria-hidden="true">${phraseArtworkSvg()}</div>` : "";
  return `
    <div class="phrase-artwork-target phrase-scene-drag-target ${isActive ? "is-active" : ""} ${isFound ? "is-filled" : ""}" ${isActive ? "data-phrase-scene-target=works" : ""} aria-hidden="true">${isFound ? phraseArtworkSvg() : ""}</div>
    ${source}
  `;
}

function phraseLabelTaskHtml(task) {
  const isFound = state.phraseFoundIds.includes("stick-labels");
  const isActive = task.object === "labels" && !isFound;
  const source = isActive
    ? `<button class="phrase-task-prop phrase-label-source" type="button" data-phrase-scene-drag="labels" aria-label="标签">${phraseLabelSvg()}<span class="sr-only">把标签贴到画框上</span></button>`
    : !isFound ? `<div class="phrase-task-prop phrase-label-source is-static" aria-hidden="true">${phraseLabelSvg()}</div>` : "";
  return `
    <div class="phrase-label-target phrase-scene-drag-target ${isActive ? "is-active" : ""} ${isFound ? "is-filled" : ""}" ${isActive ? "data-phrase-scene-target=labels" : ""} aria-hidden="true">${isFound ? phraseLabelSvg() : ""}</div>
    ${source}
  `;
}

function phraseFlowerTaskHtml(task) {
  const isFound = state.phraseFoundIds.includes("water-flower");
  const isActive = task.object === "flower" && !isFound;
  const wateringCan = isActive
    ? `<button class="phrase-task-prop phrase-watering-can" type="button" data-phrase-scene-drag="flower" aria-label="花洒">${phraseWateringCanSvg()}<span class="sr-only">用花洒给花浇水</span></button>`
    : !isFound ? `<div class="phrase-task-prop phrase-watering-can is-static" aria-hidden="true">${phraseWateringCanSvg()}</div>` : "";
  return `
    <div class="phrase-flower-pot phrase-scene-drag-target ${isActive ? "is-active" : ""} ${isFound ? "is-healthy" : ""}" ${isActive ? "data-phrase-scene-target=flower" : ""} aria-hidden="true">${phraseObjectSvg("flower", "phrase-flower-svg", isFound ? "complete" : "problem")}</div>
    ${wateringCan}
  `;
}

function phraseFloorTaskHtml(task) {
  const isFound = state.phraseFoundIds.includes("sweep-floor");
  const isActive = task.object === "floor" && !isFound;
  const broom = isActive
    ? `<button class="phrase-task-prop phrase-broom" type="button" data-phrase-scene-drag="floor" aria-label="扫把">${phraseBroomSvg()}<span class="sr-only">用扫把扫纸屑</span></button>`
    : !isFound ? `<div class="phrase-task-prop phrase-broom is-static" aria-hidden="true">${phraseBroomSvg()}</div>` : "";
  return `
    <div class="phrase-floor-debris phrase-scene-drag-target ${isActive ? "is-active" : ""} ${isFound ? "is-swept" : ""}" data-sweep-step="${isFound ? PHRASE_FLOOR_SWEEP_PASSES : state.phraseFloorSweepCount}" ${isActive ? "data-phrase-scene-target=floor" : ""} aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>
    ${broom}
  `;
}

function phraseBoxTaskHtml(task) {
  const isFound = state.phraseFoundIds.includes("move-boxes");
  const isActive = task.object === "boxes" && !isFound;
  const source = isActive
    ? `<button class="phrase-task-prop phrase-box-source" type="button" data-phrase-scene-drag="boxes" aria-label="纸箱">${phraseBoxSvg()}<span class="sr-only">把纸箱拖到门口</span></button>`
    : !isFound ? `<div class="phrase-task-prop phrase-box-source is-static" aria-hidden="true">${phraseBoxSvg()}</div>` : "";
  return `
    <div class="phrase-door-box-target phrase-scene-drag-target ${isActive ? "is-active" : ""} ${isFound ? "is-filled" : ""}" ${isActive ? "data-phrase-scene-target=boxes" : ""} aria-hidden="true">${isFound ? phraseBoxSvg() : ""}</div>
    ${source}
  `;
}

function phraseSceneObjectHtml(id, task) {
  const spot = phraseSceneSpots[id];
  const isTarget = task.object === id;
  const isFound = state.phraseFoundIds.some((taskId) => phraseFindTasks.find((item) => item.id === taskId)?.object === id);
  if (id === "blackboard") {
    if (isFound) return "";
    return isTarget
      ? `<button class="phrase-rag-tool" type="button" data-phrase-rag="true" style="left:${phraseRagSpot.left}px;top:${phraseRagSpot.top}px" aria-label="抹布">${phraseRagSvg("phrase-rag-svg")}<span class="sr-only">拖动抹布擦黑板</span></button>`
      : `<div class="phrase-rag-tool is-static" style="left:${phraseRagSpot.left}px;top:${phraseRagSpot.top}px" aria-hidden="true">${phraseRagSvg("phrase-rag-svg")}</div>`;
  }
  if (id === "desks") return phraseClassroomDeskSetHtml(task);
  if (id === "works") return phraseArtworkTaskHtml(task);
  if (id === "labels") return phraseLabelTaskHtml(task);
  if (id === "flower") return phraseFlowerTaskHtml(task);
  if (id === "floor") return phraseFloorTaskHtml(task);
  if (id === "boxes") return phraseBoxTaskHtml(task);
  return `<button class="phrase-scene-object ${isTarget ? "is-target" : ""} ${isFound ? "is-found" : ""}" type="button" data-phrase-find-item="${id}" style="left:${spot.left}px;top:${spot.top}px" aria-label="${phraseObjects[id].label}">${phraseObjectSvg(id, "icon-svg", "problem")}<span class="sr-only">${phraseObjects[id].label}</span></button>`;
}

function phraseClassroomDecorHtml() {
  const isBoardClean = state.phraseFoundIds.includes("wipe-blackboard");
  const wipeStep = Math.min(state.phraseRagWipeCount, PHRASE_RAG_WIPE_STEPS);
  return `
    <div class="phrase-classroom-window" aria-hidden="true"></div>
    <div class="phrase-classroom-board ${isBoardClean ? "is-clean" : ""}" data-wipe-step="${wipeStep}" aria-hidden="true"><span class="phrase-board-old-text">旧 字</span><span class="phrase-board-stain phrase-board-stain-large"></span><span class="phrase-board-stain phrase-board-stain-small"></span></div>
    <div class="phrase-classroom-shelf" aria-hidden="true"></div>
    <div class="phrase-classroom-podium" aria-hidden="true"></div>
    <div class="phrase-classroom-door" aria-hidden="true"></div>
    <div class="phrase-classroom-table" aria-hidden="true"></div>
    <div class="phrase-classroom-rug" aria-hidden="true"></div>
  `;
}

function phraseResultVisualHtml(task, className = "phrase-result-visual") {
  return `<div class="${className}" aria-label="${task.result}">${phraseObjectSvg(task.object, "icon-svg", "complete")}<span class="phrase-result-check" aria-hidden="true">✓</span></div>`;
}

function phraseFindResourceDockHtml() {
  return `
    <div class="phrase-resource-groups" aria-label="资源栏">
      <section class="phrase-resource-group"><h3>动作资源</h3><div class="phrase-resource-row">${state.phraseResources.actions.map((id) => phraseResourceCardHtml("action", id)).join("") || `<span class="phrase-resource-empty">完成任务后出现</span>`}</div></section>
      <section class="phrase-resource-group"><h3>对象资源</h3><div class="phrase-resource-row">${state.phraseResources.objects.map((id) => phraseResourceCardHtml("object", id)).join("") || `<span class="phrase-resource-empty">完成任务后出现</span>`}</div></section>
    </div>
  `;
}

function phraseResourceCardHtml(kind, id, draggable = false) {
  const entity = kind === "action" ? phraseActions[id] || phraseTransferActionInfo[id] : phraseObjects[id] || phraseFruits[id];
  const visual = kind === "action" ? phraseActionVisualHtml(id, "phrase-resource-art") : phraseObjectSvg(id, "small-svg");
  return `<button class="phrase-resource-card" type="button" ${draggable ? "draggable=\"true\"" : ""} data-phrase-resource-kind="${kind}" data-phrase-resource-id="${id}" aria-label="${draggable ? "拖动" : "查看"}${entity.label}"><span class="phrase-resource-art-wrap">${visual}</span><span>${entity.label}</span></button>`;
}

function phraseFindObjectTask(id) {
  return phraseFindTasks.find((item) => item.object === id);
}

function phraseFindSceneAsset(className, src, alt = "") {
  return `<img class="phrase-scene-asset ${className}" src="${src}" alt="${alt}" draggable="false" />`;
}

function phraseBoardMarkOpacity() {
  return Math.max(0, 1 - state.phraseRagWipeCount / PHRASE_RAG_WIPE_STEPS);
}

function phraseFindClickableAsset(id, className, src, label) {
  return `<button class="phrase-scene-asset-button ${className}" type="button" data-phrase-find-item="${id}" aria-label="${label}">${phraseFindSceneAsset("", src, label)}</button>`;
}

function phraseFindDropTarget(attribute, className, src) {
  return `<div class="phrase-scene-drop-target is-native-target ${className}" ${attribute}>${phraseFindSceneAsset("", src)}</div>`;
}

function phraseFindDragAsset(id, className, src, label, attribute = "data-phrase-scene-drag") {
  return `<button class="phrase-scene-asset-button phrase-scene-drag-asset phrase-task-guidance ${className}" type="button" draggable="true" ${attribute}="${id}" aria-label="${label}">${phraseFindSceneAsset("", src, label)}<span class="sr-only">${label}</span></button>`;
}

function phraseFindSceneAssetsHtml(task) {
  const scene = PHRASE_STAGE_ONE_ASSETS.scene;
  const isFound = (id) => Boolean(phraseFindObjectTask(id) && state.phraseFoundIds.includes(phraseFindObjectTask(id).id));
  const isActive = (id) => task.object === id && !isFound(id);
  const boardFound = isFound("blackboard");
  const desksFound = isFound("desks");
  const worksFound = isFound("works");
  const labelsFound = isFound("labels");
  const flowerFound = isFound("flower");
  const floorFound = isFound("floor");
  const boxesFound = isFound("boxes");

  const board = `
    <div class="phrase-classroom-board phrase-asset-board-target is-native-target ${isActive("blackboard") ? "is-active" : ""}" ${isActive("blackboard") ? "data-phrase-scene-target=blackboard" : ""} aria-hidden="true"></div>
    ${boardFound ? "" : isActive("blackboard") ? `<img class="phrase-scene-asset phrase-board-markings" src="${scene.boardMarks}" alt="黑板上的图案" draggable="false" style="opacity:${phraseBoardMarkOpacity()}" />` : phraseFindClickableAsset("blackboard", "phrase-board-markings", scene.boardMarks, "黑板")}
    ${boardFound || !isActive("blackboard") ? "" : phraseFindDragAsset("blackboard", "phrase-rag-tool phrase-asset-eraser phrase-active-tool", scene.eraser, "黑板擦", "data-phrase-rag")}
  `;

  const desks = desksFound
    ? phraseFindSceneAsset("phrase-arranged-chair", scene.fallenChair)
    : isActive("desks")
      ? `${phraseFindDropTarget("data-phrase-chair-target", "phrase-chair-drop-target", scene.fallenChair)}${phraseFindDragAsset("desks", "phrase-fallen-chair", scene.fallenChair, "歪倒的椅子", "data-phrase-chair")}`
      : phraseFindClickableAsset("desks", "phrase-fallen-chair", scene.fallenChair, "歪倒的椅子");

  const works = worksFound
    ? phraseFindSceneAsset("phrase-artwork-complete", scene.artwork)
    : isActive("works")
      ? `${phraseFindDropTarget("data-phrase-scene-target=\"works\"", "phrase-artwork-drop-target", scene.artwork)}${phraseFindDragAsset("works", "phrase-artwork-source", scene.artwork, "画作")}`
      : phraseFindClickableAsset("works", "phrase-artwork-source", scene.artwork, "画作");

  const labels = labelsFound
    ? phraseFindSceneAsset("phrase-label-complete", scene.label)
    : isActive("labels")
      ? `${phraseFindDropTarget("data-phrase-scene-target=\"labels\"", "phrase-label-drop-target", scene.label)}${phraseFindDragAsset("labels", "phrase-label-source", scene.label, "标签")}`
      : phraseFindClickableAsset("labels", "phrase-label-source", scene.label, "标签");

  const flower = flowerFound
    ? phraseFindSceneAsset("phrase-flower-complete", scene.flowerComplete)
    : `${isActive("flower") ? phraseFindDropTarget("data-phrase-scene-target=\"flower\"", "phrase-flower-drop-target", scene.flowerProblem) : phraseFindClickableAsset("flower", "phrase-flower-problem", scene.flowerProblem, "花")}${isActive("flower") ? phraseFindDragAsset("flower", "phrase-watering-can", scene.wateringCan, "花洒") : `<div class="phrase-watering-can-static" aria-hidden="true">${phraseFindSceneAsset("", scene.wateringCan)}</div>`}`;

  const floor = floorFound
    ? ""
    : isActive("floor")
      ? `${phraseFindDropTarget(`data-phrase-scene-target="floor" data-sweep-step="${state.phraseFloorSweepCount}"`, "phrase-debris-drop-target", scene.debris)}${phraseFindDragAsset("floor", "phrase-broom", scene.broom, "扫帚")}`
      : `${phraseFindClickableAsset("floor", "phrase-debris", scene.debris, "纸屑")}<div class="phrase-broom-static" aria-hidden="true">${phraseFindSceneAsset("", scene.broom)}</div>`;

  const boxes = boxesFound
    ? phraseFindSceneAsset("phrase-box-complete", scene.box)
    : isActive("boxes")
      ? `${phraseFindDropTarget("data-phrase-scene-target=\"boxes\"", "phrase-box-drop-target", scene.box)}${phraseFindDragAsset("boxes", "phrase-box-source", scene.box, "纸箱")}`
      : phraseFindClickableAsset("boxes", "phrase-box-source", scene.box, "纸箱");

  return `${board}${phraseFindSceneAsset("phrase-eraser", scene.eraser)}${desks}${works}${labels}${flower}${floor}${boxes}`;
}

function phraseFindResourceAssetHtml(kind, id) {
  const src = PHRASE_STAGE_ONE_ASSETS.resources[kind][id];
  const label = kind === "actions" ? phraseActions[id]?.label : phraseObjects[id]?.label;
  return `<div class="phrase-find-earned-resource" aria-label="${label}">${phraseFindSceneAsset("phrase-earned-resource-image", src)}<span>${label}</span></div>`;
}

function phraseFindBottomHtml(task) {
  const questionSrc = PHRASE_STAGE_ONE_ASSETS.questions[state.phraseFindIndex];
  const hasEarnedResources = state.phraseResources.actions.length > 0
    && state.phraseResources.objects.length > 0;
  return `
    <div class="phrase-find-bottom ${hasEarnedResources ? "" : "is-resources-hidden"}" aria-label="资源栏和题目">
      ${phraseFindSceneAsset("phrase-find-bottom-frame", PHRASE_STAGE_ONE_ASSETS.bottom)}
      <div class="phrase-find-earned-list phrase-find-earned-actions">${state.phraseResources.actions.map((id) => phraseFindResourceAssetHtml("actions", id)).join("")}</div>
      <div class="phrase-find-earned-list phrase-find-earned-objects">${state.phraseResources.objects.map((id) => phraseFindResourceAssetHtml("objects", id)).join("")}</div>
      <div class="phrase-find-question-art" aria-label="题目">${phraseFindSceneAsset("phrase-find-question-image", questionSrc, task.result)}</div>
      <p id="sceneMessage" class="scene-message sr-only">${feedbackText.textContent}</p>
    </div>
  `;
}

function renderPhraseFind() {
  if (state.phraseFoundIds.length === phraseFindTasks.length) {
    state.stage = "phrase-restore";
    state.phraseRestoreIndex = 0;
    state.phraseRestoreSelections = { action: null, object: null };
    state.phraseRestoreReady = false;
    state.phraseRestoreShowingComplete = false;
    state.phraseRestoreReflection = null;
    state.phraseRestoreReflectionSelection = null;
    state.phraseRestoreReflectionError = null;
    state.phraseRestoreLesson = null;
    state.phraseRestoreResourceOrder = shuffledPhraseResourcePairOrders(
      state.phraseResources.actions,
      state.phraseResources.objects
    );
    render();
    return;
  }

  const task = phraseFindTasks[state.phraseFindIndex];
  view.innerHTML = `
    <div class="phrase-find-canvas">
      <section class="phrase-classroom-scene" aria-label="校园开放日准备教室">
        ${phraseFindSceneAssetsHtml(task)}
        ${wordStageOneToolsHtml("phrase-find", { bookSrc: PHRASE_STAGE_ONE_ASSETS.lockedBook, bookDisabled: true })}
        ${phraseStageInstructionHtml("one")}
        ${phraseFindBottomHtml(task)}
      </section>
    </div>
  `;

  view.querySelectorAll("[data-phrase-find-item]").forEach((button) => button.addEventListener("click", () => handlePhraseFindClick(button.dataset.phraseFindItem)));
  bindPhraseRagTask(task);
  bindPhraseChairTask(task);
  bindPhraseSceneDragTask(task);
  view.querySelectorAll("[data-phrase-find-action]").forEach((button) => button.addEventListener("click", () => {
    const action = button.dataset.phraseFindAction;
    if (action === "home") setStage("home");
    if (action === "book") openPhraseBook("phrase-find");
    if (action === "sound") toggleSound(renderPhraseFind);
  }));
}

function completePhraseFindTask(task, message = null) {
  if (state.phraseFoundIds.includes(task.id)) return;
  const scene = view.querySelector(".phrase-classroom-scene");
  scene?.classList.add("is-task-completing");
  scene?.setAttribute("aria-busy", "true");
  state.phraseFoundIds.push(task.id);
  state.phraseResources.actions.push(task.action);
  state.phraseResources.objects.push(task.object);
  setFeedback(message || `${task.phrase}。准备完成！`);
  playSound("success");
  speakPhrase(task.phrase);
  state.phraseFindIndex += 1;
  // Keep the completed action on screen briefly before showing the next task.
  window.setTimeout(render, 680);
}

function handlePhraseFindClick(objectId) {
  const task = phraseFindTasks[state.phraseFindIndex];
  if (objectId === task.object) {
    if (task.object === "blackboard") {
      setFeedback("用抹布在黑板上擦掉旧字和污渍。 ");
      playSound("wrong");
      return;
    }
    if (task.object === "desks") {
      setFeedback("把歪倒的椅子拖到桌子旁。 ");
      playSound("wrong");
      return;
    }
    completePhraseFindTask(task);
    return;
  }
  const wrong = view.querySelector(`[data-phrase-find-item="${objectId}"]`);
  wrong?.classList.add("is-wrong");
  window.setTimeout(() => wrong?.classList.remove("is-wrong"), 320);
  playSound("wrong");
  setFeedback("再看看结果图，想一想这个动作会作用在哪个对象上。");
}

function bindPhraseRagTask(task) {
  const rag = view.querySelector("[data-phrase-rag]");
  if (!rag || task.object !== "blackboard") return;

  let pointerId = null;
  let lastPoint = null;
  let dragOrigin = null;
  let wipeDistance = 0;
  let touchedBoard = false;
  let mouseWipeActive = false;
  let mouseLastPoint = null;
  let mouseWipeOrigin = null;
  const board = view.querySelector(".phrase-classroom-board");
  const stopGlobalDrag = () => {
    window.removeEventListener("pointerup", finishWipe);
    window.removeEventListener("mouseup", finishWipe);
  };

  const resetRag = () => {
    rag.classList.remove("is-dragging");
    rag.style.removeProperty("--rag-translate-x");
    rag.style.removeProperty("--rag-translate-y");
    board?.classList.remove("is-wiping");
  };

  const advanceWipe = () => {
    state.phraseRagWipeCount = Math.min(state.phraseRagWipeCount + 1, PHRASE_RAG_WIPE_STEPS);
    view.querySelector(".phrase-board-markings")?.style.setProperty("opacity", String(phraseBoardMarkOpacity()));
    if (state.phraseRagWipeCount < PHRASE_RAG_WIPE_STEPS) {
      const messages = [
        "旧字擦掉啦，还要再擦两处污渍。",
        "大污渍擦掉啦，还剩一处小污渍。"
      ];
      setFeedback(messages[state.phraseRagWipeCount - 1]);
      playSound("drop");
      board?.setAttribute("data-wipe-step", String(state.phraseRagWipeCount));
      return;
    }
    board?.classList.add("is-clean");
    rag.classList.add("is-complete");
    setFeedback("旧字和污渍都擦干净啦！");
    completePhraseFindTask(task);
  };

  const finishWipe = () => {
    if (pointerId === null) return;
    stopGlobalDrag();
    pointerId = null;
    dragOrigin = null;
    resetRag();
    if (touchedBoard && wipeDistance >= 32) {
      advanceWipe();
      return;
    }
    setFeedback("把抹布拖到黑板上，多擦一擦旧字和污渍。 ");
    playSound("wrong");
  };

  const moveMouseWipe = (event) => {
    if (!mouseWipeActive || !mouseLastPoint || !mouseWipeOrigin) return;
    wipeDistance += Math.hypot(event.clientX - mouseLastPoint.x, event.clientY - mouseLastPoint.y);
    mouseLastPoint = { x: event.clientX, y: event.clientY };
    rag.style.setProperty("--rag-translate-x", `${event.clientX - mouseWipeOrigin.x}px`);
    rag.style.setProperty("--rag-translate-y", `${event.clientY - mouseWipeOrigin.y}px`);
    const rect = board?.getBoundingClientRect();
    if (rect && event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom) {
      touchedBoard = true;
      board.classList.add("is-wiping");
    }
  };

  const finishMouseWipe = () => {
    if (!mouseWipeActive) return;
    mouseWipeActive = false;
    window.removeEventListener("mousemove", moveMouseWipe);
    window.removeEventListener("mouseup", finishMouseWipe);
    mouseWipeOrigin = null;
    mouseLastPoint = null;
    resetRag();
    if (touchedBoard && wipeDistance >= 32) {
      advanceWipe();
      return;
    }
    setFeedback("把抹布拖到黑板上，多擦一擦旧字和污渍。 ");
    playSound("wrong");
  };

  rag.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    pointerId = event.pointerId;
    lastPoint = { x: event.clientX, y: event.clientY };
    dragOrigin = { x: event.clientX, y: event.clientY };
    wipeDistance = 0;
    touchedBoard = false;
    rag.setPointerCapture?.(pointerId);
    window.addEventListener("pointerup", finishWipe);
    window.addEventListener("mouseup", finishWipe);
    rag.classList.add("is-dragging");
    setFeedback("拖动抹布，在黑板上擦掉旧字和污渍。 ");
    playSound("pick");
  });

  rag.addEventListener("pointermove", (event) => {
    if (event.pointerId !== pointerId || !lastPoint || !dragOrigin) return;
    const dx = event.clientX - lastPoint.x;
    const dy = event.clientY - lastPoint.y;
    wipeDistance += Math.hypot(dx, dy);
    lastPoint = { x: event.clientX, y: event.clientY };
    rag.style.setProperty("--rag-translate-x", `${event.clientX - dragOrigin.x}px`);
    rag.style.setProperty("--rag-translate-y", `${event.clientY - dragOrigin.y}px`);
    const rect = board?.getBoundingClientRect();
    if (rect && event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom) {
      touchedBoard = true;
      board.classList.add("is-wiping");
    }
  });

  rag.addEventListener("pointerup", finishWipe);
  rag.addEventListener("pointercancel", finishWipe);
  rag.addEventListener("click", () => {
    if (pointerId !== null || mouseWipeActive) return;
    advanceWipe();
  });
  rag.addEventListener("mousedown", (event) => {
    if (pointerId !== null) return;
    event.preventDefault();
    mouseWipeActive = true;
    mouseWipeOrigin = { x: event.clientX, y: event.clientY };
    mouseLastPoint = mouseWipeOrigin;
    wipeDistance = 0;
    touchedBoard = false;
    rag.classList.add("is-dragging");
    window.addEventListener("mousemove", moveMouseWipe);
    window.addEventListener("mouseup", finishMouseWipe);
    setFeedback("拖动黑板擦，在黑板上擦掉旧字和污渍。 ");
    playSound("pick");
  });
  rag.addEventListener("dragstart", (event) => {
    event.dataTransfer?.setData("text/plain", task.object);
    rag.classList.add("is-dragging");
    setFeedback("把黑板擦拖到黑板上。 ");
  });
  rag.addEventListener("dragend", () => rag.classList.remove("is-dragging"));
  board?.addEventListener("dragover", (event) => event.preventDefault());
  board?.addEventListener("drop", (event) => {
    event.preventDefault();
    if (event.dataTransfer?.getData("text/plain") !== task.object) return;
    rag.classList.remove("is-dragging");
    advanceWipe();
  });
}

function bindPhraseChairTask(task) {
  const chair = view.querySelector("[data-phrase-chair]");
  const target = view.querySelector("[data-phrase-chair-target]");
  if (!chair || !target || task.object !== "desks") return;

  let pointerId = null;
  let dragOrigin = null;
  let lastPoint = null;
  let latestPoint = null;
  let dragDistance = 0;

  const isOverTarget = (point) => {
    const rect = target.getBoundingClientRect();
    const tolerance = 42;
    return point
      && point.x >= rect.left - tolerance
      && point.x <= rect.right + tolerance
      && point.y >= rect.top - tolerance
      && point.y <= rect.bottom + tolerance;
  };

  const resetChair = () => {
    chair.classList.remove("is-dragging");
    target.classList.remove("is-over");
    chair.style.removeProperty("--chair-translate-x");
    chair.style.removeProperty("--chair-translate-y");
  };

  const settleChair = () => {
    const chairRect = chair.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const currentX = Number.parseFloat(chair.style.getPropertyValue("--chair-translate-x")) || 0;
    const currentY = Number.parseFloat(chair.style.getPropertyValue("--chair-translate-y")) || 0;
    const centerOffsetX = targetRect.left + targetRect.width / 2 - (chairRect.left + chairRect.width / 2);
    const centerOffsetY = targetRect.top + targetRect.height / 2 - (chairRect.top + chairRect.height / 2);

    chair.classList.remove("is-dragging");
    chair.classList.add("is-settling");
    target.classList.remove("is-over");
    target.classList.add("is-settled");
    window.requestAnimationFrame(() => {
      chair.style.setProperty("--chair-translate-x", `${currentX + centerOffsetX}px`);
      chair.style.setProperty("--chair-translate-y", `${currentY + centerOffsetY}px`);
      chair.classList.add("is-settled");
    });
  };

  const finishDrag = () => {
    if (pointerId === null) return;
    window.removeEventListener("pointermove", moveChair);
    window.removeEventListener("pointerup", finishDrag);
    window.removeEventListener("pointercancel", finishDrag);
    pointerId = null;
    const droppedInPlace = dragDistance >= 16 && isOverTarget(latestPoint);
    dragOrigin = null;

    if (droppedInPlace) {
      settleChair();
      setFeedback("椅子摆回桌子旁啦！");
      completePhraseFindTask(task);
      return;
    }

    resetChair();
    setFeedback("再试试，把歪倒的椅子拖到桌子旁。 ");
    playSound("wrong");
  };

  const moveChair = (event) => {
    if (event.pointerId !== pointerId || !dragOrigin) return;
    latestPoint = { x: event.clientX, y: event.clientY };
    dragDistance += Math.hypot(event.clientX - lastPoint.x, event.clientY - lastPoint.y);
    lastPoint = latestPoint;
    chair.style.setProperty("--chair-translate-x", `${event.clientX - dragOrigin.x}px`);
    chair.style.setProperty("--chair-translate-y", `${event.clientY - dragOrigin.y}px`);
    target.classList.toggle("is-over", isOverTarget(latestPoint));
  };

  chair.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    pointerId = event.pointerId;
    dragOrigin = { x: event.clientX, y: event.clientY };
    latestPoint = dragOrigin;
    lastPoint = dragOrigin;
    dragDistance = 0;
    chair.setPointerCapture?.(pointerId);
    chair.classList.add("is-dragging");
    window.addEventListener("pointermove", moveChair);
    window.addEventListener("pointerup", finishDrag);
    window.addEventListener("pointercancel", finishDrag);
    setFeedback("拖动歪倒的椅子，摆到桌子旁。 ");
    playSound("pick");
  });

  chair.addEventListener("pointerup", finishDrag);
  chair.addEventListener("pointercancel", finishDrag);
  chair.addEventListener("dragstart", (event) => {
    event.dataTransfer?.setData("text/plain", task.object);
    chair.classList.add("is-dragging");
    setFeedback("把歪倒的椅子拖到桌子旁。 ");
  });
  chair.addEventListener("dragend", () => chair.classList.remove("is-dragging"));
  target.addEventListener("dragover", (event) => event.preventDefault());
  target.addEventListener("drop", (event) => {
    event.preventDefault();
    if (event.dataTransfer?.getData("text/plain") !== task.object) return;
    chair.classList.remove("is-dragging");
    settleChair();
    setFeedback("椅子摆回桌子旁啦！");
    completePhraseFindTask(task);
  });
}

const phraseSceneDragInstructions = {
  works: { start: "拖动画框，把它挂到墙上的虚线框里。", retry: "把画框拖到墙上的虚线框里。", complete: "画框挂到墙上啦！" },
  labels: { start: "拖动标签，贴到画框下面。", retry: "把标签贴到画框上。", complete: "标签贴好啦！" },
  flower: { start: "拖动花洒，给花浇浇水。", retry: "把花洒拖到花盆旁的花上。", complete: "花喝饱水，又精神啦！" },
  floor: { start: "拖着扫帚，横着或竖着扫过纸屑。", retry: "把扫帚移到纸屑上，横向或纵向扫一趟。", complete: "纸屑扫干净啦！" },
  boxes: { start: "拖动纸箱，把它搬到门口。", retry: "把纸箱拖到门口的虚线框里。", complete: "纸箱搬到门口啦！" }
};

function bindPhraseFloorSweepTask(task) {
  const source = view.querySelector('[data-phrase-scene-drag="floor"]');
  const target = view.querySelector('[data-phrase-scene-target="floor"]');
  if (!source || !target || task.object !== "floor") return;

  let pointerId = null;
  let dragOrigin = null;
  let lastSweepSide = null;
  let sweepDistance = 0;

  const resetSource = () => {
    source.classList.remove("is-dragging");
    target.classList.remove("is-over");
    source.style.removeProperty("--scene-drag-x");
    source.style.removeProperty("--scene-drag-y");
  };

  const stopSweep = () => {
    window.removeEventListener("pointermove", moveSweep);
    window.removeEventListener("pointerup", finishSweep);
    window.removeEventListener("pointercancel", finishSweep);
  };

  const showSweepProgress = () => {
    target.dataset.sweepStep = String(state.phraseFloorSweepCount);
    target.classList.remove("is-sweeping-left", "is-sweeping-right");
    // Restart the dust movement whenever the broom completes another pass.
    void target.offsetWidth;
    target.classList.add(["right", "bottom"].includes(lastSweepSide) ? "is-sweeping-right" : "is-sweeping-left");

    if (state.phraseFloorSweepCount === PHRASE_FLOOR_SWEEP_PASSES) {
      stopSweep();
      pointerId = null;
      source.classList.remove("is-dragging");
      source.classList.add("is-swept");
      target.classList.remove("is-over");
      target.classList.add("is-swept");
      completePhraseFindTask(task, phraseSceneDragInstructions.floor.complete);
      return;
    }

    setFeedback(`扫掉一些纸屑啦，再扫 ${PHRASE_FLOOR_SWEEP_PASSES - state.phraseFloorSweepCount} 趟。`);
    playSound("drop");
  };

  const trackSweep = (point) => {
    const rect = target.getBoundingClientRect();
    const inside = point.x >= rect.left && point.x <= rect.right && point.y >= rect.top && point.y <= rect.bottom;
    target.classList.toggle("is-over", inside);
    if (state.phraseFloorSweepCount >= PHRASE_FLOOR_SWEEP_PASSES) return;
    if (sweepDistance < 24) return;

    // The broom only needs to reach the debris; precise edge-to-edge strokes
    // make this scene unnecessarily difficult on touch screens.
    const distanceX = Math.max(rect.left - point.x, 0, point.x - rect.right);
    const distanceY = Math.max(rect.top - point.y, 0, point.y - rect.bottom);
    if (Math.hypot(distanceX, distanceY) <= 72) {
      state.phraseFloorSweepCount = PHRASE_FLOOR_SWEEP_PASSES;
      lastSweepSide = lastSweepSide || "right";
      showSweepProgress();
      return;
    }
    if (!inside) return;

    const leftEdge = rect.left + rect.width * 0.2;
    const rightEdge = rect.right - rect.width * 0.2;
    const topEdge = rect.top + rect.height * 0.2;
    const bottomEdge = rect.bottom - rect.height * 0.2;
    const side = point.x <= leftEdge
      ? "left"
      : point.x >= rightEdge
        ? "right"
        : point.y <= topEdge
          ? "top"
          : point.y >= bottomEdge
            ? "bottom"
            : null;
    if (!side) return;
    if (!lastSweepSide) {
      lastSweepSide = side;
      return;
    }
    const oppositeSides = {
      left: "right",
      right: "left",
      top: "bottom",
      bottom: "top"
    };
    if (side !== oppositeSides[lastSweepSide]) {
      const hasChangedAxis = (side === "left" || side === "right") !== (lastSweepSide === "left" || lastSweepSide === "right");
      if (hasChangedAxis) lastSweepSide = side;
      return;
    }

    lastSweepSide = side;
    state.phraseFloorSweepCount += 1;
    showSweepProgress();
  };

  const moveSweep = (event) => {
    if (event.pointerId !== pointerId || !dragOrigin) return;
    const point = { x: event.clientX, y: event.clientY };
    sweepDistance = Math.hypot(point.x - dragOrigin.x, point.y - dragOrigin.y);
    source.style.setProperty("--scene-drag-x", `${point.x - dragOrigin.x}px`);
    source.style.setProperty("--scene-drag-y", `${point.y - dragOrigin.y}px`);
    trackSweep(point);
  };

  const finishSweep = () => {
    if (pointerId === null) return;
    stopSweep();
    pointerId = null;
    dragOrigin = null;
    resetSource();
    if (state.phraseFloorSweepCount > 0) {
      setFeedback(`还剩一点纸屑，继续扫 ${PHRASE_FLOOR_SWEEP_PASSES - state.phraseFloorSweepCount} 趟。`);
      return;
    }
    setFeedback(phraseSceneDragInstructions.floor.retry);
    playSound("wrong");
  };

  source.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    pointerId = event.pointerId;
    dragOrigin = { x: event.clientX, y: event.clientY };
    lastSweepSide = null;
    sweepDistance = 0;
    source.setPointerCapture?.(pointerId);
    source.classList.add("is-dragging");
    window.addEventListener("pointermove", moveSweep);
    window.addEventListener("pointerup", finishSweep);
    window.addEventListener("pointercancel", finishSweep);
    setFeedback(phraseSceneDragInstructions.floor.start);
    playSound("pick");
  });

  source.addEventListener("pointerup", finishSweep);
  source.addEventListener("pointercancel", finishSweep);
  source.addEventListener("dragstart", (event) => {
    event.dataTransfer?.setData("text/plain", task.object);
    source.classList.add("is-dragging");
    setFeedback(phraseSceneDragInstructions.floor.start);
  });
  source.addEventListener("dragend", () => source.classList.remove("is-dragging"));
  target.addEventListener("dragover", (event) => event.preventDefault());
  target.addEventListener("drop", (event) => {
    event.preventDefault();
    if (event.dataTransfer?.getData("text/plain") !== task.object || state.phraseFloorSweepCount >= PHRASE_FLOOR_SWEEP_PASSES) return;
    state.phraseFloorSweepCount = PHRASE_FLOOR_SWEEP_PASSES;
    source.classList.remove("is-dragging");
    showSweepProgress();
  });
}

function bindPhraseSceneDragTask(task) {
  if (task.object === "floor") {
    bindPhraseFloorSweepTask(task);
    return;
  }
  const source = view.querySelector(`[data-phrase-scene-drag="${task.object}"]`);
  const target = view.querySelector(`[data-phrase-scene-target="${task.object}"]`);
  const instructions = phraseSceneDragInstructions[task.object];
  if (!source || !target || !instructions) return;

  let pointerId = null;
  let dragOrigin = null;
  let lastPoint = null;
  let latestPoint = null;
  let dragDistance = 0;
  let clickArmed = false;
  let suppressNextClick = false;

  const isOverTarget = (point) => {
    const rect = target.getBoundingClientRect();
    return point && point.x >= rect.left && point.x <= rect.right && point.y >= rect.top && point.y <= rect.bottom;
  };

  const resetSource = () => {
    source.classList.remove("is-dragging");
    target.classList.remove("is-over");
    source.style.removeProperty("--scene-drag-x");
    source.style.removeProperty("--scene-drag-y");
  };

  const armClickPlacement = () => {
    if (clickArmed || state.phraseFoundIds.includes(task.id)) return;
    clickArmed = true;
    source.classList.add("is-click-armed");
    setFeedback("已拿起物品，点击绿色虚线框放下。 ");
    playSound("pick");
  };

  const settleSource = () => {
    const sourceRect = source.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const currentX = Number.parseFloat(source.style.getPropertyValue("--scene-drag-x")) || 0;
    const currentY = Number.parseFloat(source.style.getPropertyValue("--scene-drag-y")) || 0;
    const centerOffsetX = targetRect.left + targetRect.width / 2 - (sourceRect.left + sourceRect.width / 2);
    const centerOffsetY = targetRect.top + targetRect.height / 2 - (sourceRect.top + sourceRect.height / 2);

    source.classList.remove("is-dragging");
    source.classList.add("is-settling");
    target.classList.remove("is-over");
    target.classList.add("is-settled");
    window.requestAnimationFrame(() => {
      source.style.setProperty("--scene-drag-x", `${currentX + centerOffsetX}px`);
      source.style.setProperty("--scene-drag-y", `${currentY + centerOffsetY}px`);
      source.classList.add("is-settled");
    });
  };

  const finishDrag = () => {
    if (pointerId === null) return;
    window.removeEventListener("pointermove", moveDrag);
    window.removeEventListener("pointerup", finishDrag);
    window.removeEventListener("pointercancel", finishDrag);
    pointerId = null;
    const droppedInPlace = dragDistance >= 32 && isOverTarget(latestPoint);
    const wasClick = dragDistance < 8;
    dragOrigin = null;
    if (wasClick) {
      source.classList.remove("is-dragging");
      armClickPlacement();
      return;
    }
    suppressNextClick = true;
    window.setTimeout(() => { suppressNextClick = false; }, 0);
    if (droppedInPlace) {
      settleSource();
      completePhraseFindTask(task, instructions.complete);
      return;
    }
    resetSource();
    setFeedback(instructions.retry);
    playSound("wrong");
  };

  const finishNativeDrag = (event) => {
    event.preventDefault();
    if (event.dataTransfer?.getData("text/plain") !== task.object) return;
    source.classList.remove("is-dragging");
    target.classList.remove("is-over");
    target.classList.add("is-settled");
    setFeedback(instructions.complete);
    completePhraseFindTask(task, instructions.complete);
  };

  const moveDrag = (event) => {
    if (event.pointerId !== pointerId || !dragOrigin) return;
    latestPoint = { x: event.clientX, y: event.clientY };
    dragDistance += Math.hypot(event.clientX - lastPoint.x, event.clientY - lastPoint.y);
    lastPoint = latestPoint;
    source.style.setProperty("--scene-drag-x", `${event.clientX - dragOrigin.x}px`);
    source.style.setProperty("--scene-drag-y", `${event.clientY - dragOrigin.y}px`);
    target.classList.toggle("is-over", isOverTarget(latestPoint));
  };

  source.addEventListener("pointerdown", (event) => {
    pointerId = event.pointerId;
    dragOrigin = { x: event.clientX, y: event.clientY };
    lastPoint = dragOrigin;
    latestPoint = dragOrigin;
    dragDistance = 0;
    source.setPointerCapture?.(pointerId);
    source.classList.add("is-dragging");
    window.addEventListener("pointermove", moveDrag);
    window.addEventListener("pointerup", finishDrag);
    window.addEventListener("pointercancel", finishDrag);
    setFeedback(instructions.start);
    playSound("pick");
  });

  source.addEventListener("pointerup", finishDrag);
  source.addEventListener("pointercancel", finishDrag);
  source.addEventListener("click", () => { if (!suppressNextClick) armClickPlacement(); });
  target.addEventListener("click", () => {
    if (!clickArmed || state.phraseFoundIds.includes(task.id)) return;
    clickArmed = false;
    source.classList.remove("is-click-armed");
    settleSource();
    completePhraseFindTask(task, instructions.complete);
  });
  source.addEventListener("dragstart", (event) => {
    event.dataTransfer?.setData("text/plain", task.object);
    source.classList.add("is-dragging");
    setFeedback(instructions.start);
  });
  source.addEventListener("dragend", () => source.classList.remove("is-dragging"));
  target.addEventListener("dragover", (event) => event.preventDefault());
  target.addEventListener("drop", finishNativeDrag);
}

function renderFind() {
  if (state.foundIds.length === findTasks.length) {
    stopWordStageOneHintTimer();
    state.wordStageOneHintTarget = null;
    playSound("stage");
    state.stage = "restore";
    state.restoreIndex = 0;
    state.wordStageTwoResourceOrder = {
      modifier: shuffledPhraseResourceIds(WORD_STAGE_RESOURCE_SLOTS.modifier),
      object: shuffledPhraseResourceIds(WORD_STAGE_RESOURCE_SLOTS.object)
    };
    state.restoreSlots = { modifier: null, object: null };
    state.restoreSlotEntities = { modifier: null, object: null };
    state.restoreSelectedResourceKey = null;
    state.restoreReady = false;
    state.restoreReflection = null;
    state.restoreReflectionSelection = null;
    state.restoreReflectionError = null;
    state.restoreLesson = null;
    startRestoreBridgeCountdown();
    setFeedback("第一阶段完成。现在用资源继续整理房间。");
    render();
    return;
  }

  const task = findTasks[state.findIndex];
  const items = findCanvasItems();
  const isWordStageOne = state.category === "word";
  view.innerHTML = `
    <div class="find-canvas ${isWordStageOne ? "word-stage-one-canvas" : ""}">
      <section class="scene room-scene find-room ${isWordStageOne ? "word-stage-one-room" : ""}" aria-label="杂乱房间">
        ${isWordStageOne ? "" : roomDecor()}
        ${isWordStageOne ? wordStageOneScenePropsHtml() : ""}
        ${items.map((item) => roomItem(item, task.id)).join("")}
        ${isWordStageOne ? wordStageOneToolsHtml("find", { bookSrc: WORD_STAGE_ONE_ASSETS.wordBook }) : findToolsHtml()}
        ${isWordStageOne ? wordStageOneFindInstructionHtml() : ""}
        ${isWordStageOne ? wordStageOneQuestionHtml(task) : findQuestionHtml(task)}
        ${isWordStageOne ? wordStageOneResourceDockHtml() : findResourceDockHtml()}
      </section>
    </div>
  `;

  view.querySelectorAll("[data-find-item]").forEach((button) => {
    button.addEventListener("click", () => handleFindClick(button.dataset.findItem));
  });
  bindFindTools();
  if (isWordStageOne) startWordStageOneHintTimer();
}

function findToolsHtml() {
  return `
    <div class="find-corner-tools" aria-label="第一阶段工具">
      <button class="find-tool-button" type="button" data-find-action="home" aria-label="返回首页">
        <span class="find-tool-icon" aria-hidden="true">↩</span>
        <span>返回</span>
      </button>
      <div class="find-tool-right">
        <button class="find-tool-button" type="button" data-find-action="book" aria-label="语法宝典">
          <span class="find-tool-icon" aria-hidden="true">的</span>
          <span>语法宝典</span>
        </button>
        <button class="find-tool-button" type="button" data-find-action="sound" aria-label="音乐按钮">
          <span class="find-tool-icon" aria-hidden="true">${state.sound ? "♪" : "×"}</span>
          <span>音乐</span>
        </button>
      </div>
    </div>
  `;
}

function findQuestionHtml(task) {
  return `
    <aside class="find-question-panel" aria-label="题目">
      <div class="find-question-title"><span>题目</span></div>
      <div class="visual-card" aria-label="任务视觉描述卡">
        <div class="visual-pair">
          ${tileFor(modifiers[task.modId], "clue-tile")}
          <span class="plus-mark" aria-hidden="true">+</span>
          ${tileFor(objects[task.objId], "object-tile")}
        </div>
      </div>
    </aside>
  `;
}

function findResourceDockHtml() {
  return `
    <aside class="find-resource-dock" aria-label="资源栏">
      <div class="find-resource-title"><span>资源栏</span></div>
      ${resourceGroupsHtml("basket")}
      <p id="sceneMessage" class="scene-message">${feedbackText.textContent}</p>
    </aside>
  `;
}

function wordStageOneToolsHtml(actionPrefix = "find", options = {}) {
  const actionAttribute = `data-${actionPrefix}-action`;
  const bookSrc = options.bookSrc || WORD_STAGE_ONE_ASSETS.book;
  const bookDisabled = options.bookDisabled ? "disabled" : "";
  return `
    <div class="find-corner-tools word-stage-one-tools" aria-label="第一阶段工具">
      <button class="find-tool-button" type="button" ${actionAttribute}="home" aria-label="返回首页">
        <img src="${WORD_STAGE_ONE_ASSETS.back}" alt="" />
        <span class="sr-only">返回首页</span>
      </button>
      <div class="find-tool-right">
        <button class="find-tool-button" type="button" ${actionAttribute}="book" aria-label="语法宝典" ${bookDisabled}>
          <img src="${bookSrc}" alt="" />
          <span class="sr-only">语法宝典</span>
        </button>
        <button class="find-tool-button" type="button" ${actionAttribute}="sound" aria-label="音乐按钮">
          <img src="${WORD_STAGE_ONE_ASSETS.sound}" alt="" class="${state.sound ? "" : "is-muted"}" />
          <span class="sr-only">音乐</span>
        </button>
      </div>
    </div>
  `;
}

function wordStageOneFindInstructionHtml() {
  const label = STAGE_ENTRY_NARRATIONS["word:find"];
  return `
    <div class="word-stage-one-find-instruction" aria-label="${label}">
      <img src="${WORD_STAGE_ONE_ASSETS.findInstruction}" alt="${label}" />
    </div>
  `;
}

function stageInstructionHtml(stage) {
  const isThirdStage = stage === "three";
  const label = isThirdStage
    ? "请认真学习这个这个知识点哦"
    : "运用学到的知识，继续完成新任务吧";
  return `
    <div class="stage-top-instruction" aria-label="${label}">
      <img src="${STAGE_INSTRUCTION_ASSETS[stage]}" alt="${label}" />
    </div>
  `;
}

function phraseStageInstructionHtml(stage) {
  const isFirstStage = stage === "one";
  const label = STAGE_ENTRY_NARRATIONS[isFirstStage ? "phrase:phrase-find" : "phrase:phrase-restore"];
  return `
    <div class="stage-top-instruction" aria-label="${label}">
      <img src="${PHRASE_STAGE_INSTRUCTION_ASSETS[stage]}" alt="${label}" />
    </div>
  `;
}

function wordStageOneQuestionHtml(task) {
  return `
    <aside class="word-stage-one-question" aria-label="找一找题目">
      <img class="word-stage-one-question-frame" src="./assets/word-stage1/Group 516.png" alt="" aria-hidden="true">
      <div class="word-stage-one-question-content">
        ${wordStageOneModifierVisual(task.modId)}
        <span class="word-stage-one-plus" aria-hidden="true">+</span>
        ${wordStageOneObjectVisual(task.id, task.objId)}
        <span class="word-stage-one-equals" aria-hidden="true">=</span>
        <span class="word-stage-one-question-mark" aria-hidden="true">?</span>
      </div>
    </aside>
  `;
}

function wordStageOneScenePropsHtml() {
  const props = [
    ["yellow-pencil", WORD_STAGE_ONE_ASSETS.yellowPencil, "黄色铅笔"],
    ["red-pencil", WORD_STAGE_ONE_ASSETS.redPencil, "红色铅笔"],
    ["red-box", WORD_STAGE_ONE_ASSETS.redBox, "红色收纳盒"],
    ["blue-box", WORD_STAGE_ONE_ASSETS.blueBox, "蓝色收纳盒"],
    ["red-ball", WORD_STAGE_ONE_ASSETS.ball, "红色皮球"],
    ["sister-cup", WORD_STAGE_ONE_ASSETS.momCup, "妹妹的水杯"],
    ["clean-clothes", WORD_STAGE_ONE_ASSETS.cleanClothes, "干净的衣服"],
    ["dirty-clothes", WORD_STAGE_ONE_ASSETS.dirtyClothes, "脏衣服"],
    ["sister-doll", WORD_STAGE_ONE_ASSETS.doll, "妹妹的玩偶"],
    ["mom-cup", WORD_STAGE_ONE_ASSETS.sisterCup, "妈妈的水杯"],
    ["fafa-book", WORD_STAGE_ONE_ASSETS.fafaBook, "法法的书"],
    ["mom-magazine", WORD_STAGE_ONE_ASSETS.magazine, "妈妈的杂志"],
    ["pretty-sticker", WORD_STAGE_ONE_ASSETS.sticker, "漂亮的贴纸"]
  ];
  return `
    <div class="word-stage-one-props" aria-hidden="true">
      ${props.map(([id, src, label]) => `<img class="word-stage-one-prop word-stage-one-prop-${id}${state.foundIds.includes(id) ? " is-found" : ""}" src="${src}" alt="${label}" />`).join("")}
    </div>
  `;
}

function wordStageOneResourceDockHtml({ interactive = false } = {}) {
  // On the first task, keep the resource area out of view until the player
  // has earned their first explanation and object resources.
  if (!interactive && state.resources.length === 0) return "";

  const renderResource = (kind, id) => {
    const resource = state.resources.find((item) => item.kind === kind && item.id === id);
    if (!resource) return `<span class="word-stage-one-resource word-stage-one-resource-empty" aria-hidden="true"></span>`;
    const tagName = interactive ? "button" : "div";
    const interactionAttributes = interactive
      ? `type="button" draggable="true" data-resource-key="${resource.resourceKey}" data-kind="${kind}"`
      : "";
    return `
      <${tagName} class="word-stage-one-resource ${interactive ? "word-stage-two-resource-card" : ""}" ${interactionAttributes} aria-label="${resource.label}">
        ${wordStageOneResourceVisual(resource)}
        <span>${resource.label}</span>
      </${tagName}>
    `;
  };
  const renderGroup = (kind) => restoreResourcesForDisplay(kind, true).map((resource) => renderResource(kind, resource.id)).join("");

  return `
    <aside class="word-stage-one-resource-dock ${interactive ? "word-stage-two-resource-dock" : ""}" aria-label="资源栏">
      <section class="word-stage-one-resource-group word-stage-one-modifiers" aria-label="说明资源">
        <h3 class="sr-only">说明资源</h3>
        <div>${renderGroup("modifier")}</div>
      </section>
      <section class="word-stage-one-resource-group word-stage-one-objects" aria-label="物品资源">
        <h3 class="sr-only">物品资源</h3>
        <div>${renderGroup("object")}</div>
      </section>
    </aside>
  `;
}

function wordStageResourceIds(kind) {
  const order = state.wordStageTwoResourceOrder[kind];
  if (order.length) return order;
  state.wordStageTwoResourceOrder[kind] = shuffledPhraseResourceIds(WORD_STAGE_RESOURCE_SLOTS[kind]);
  return state.wordStageTwoResourceOrder[kind];
}

function wordStageTwoResourceDockHtml() {
  const renderResource = (kind, id) => {
    const resource = state.resources.find((item) => item.kind === kind && item.id === id);
    if (!resource) return `<span class="word-stage-one-resource word-stage-one-resource-empty" aria-hidden="true"></span>`;
    return `
      <button class="word-stage-one-resource word-stage-two-resource-card" type="button" data-resource-key="${resource.resourceKey}" data-kind="${kind}" aria-label="放入${resource.label}">
        ${wordStageOneResourceVisual(resource)}
        <span>${resource.label}</span>
      </button>
    `;
  };
  const renderGroup = (kind) => wordStageResourceIds(kind).map((id) => renderResource(kind, id)).join("");

  return `
    <aside class="word-stage-one-resource-dock word-stage-two-resource-dock" aria-label="资源栏">
      <section class="word-stage-one-resource-group word-stage-one-modifiers" aria-label="说明资源">
        <h3 class="sr-only">说明资源</h3>
        <div>${renderGroup("modifier")}</div>
      </section>
      <section class="word-stage-one-resource-group word-stage-one-objects" aria-label="物品资源">
        <h3 class="sr-only">物品资源</h3>
        <div>${renderGroup("object")}</div>
      </section>
    </aside>
  `;
}

function wordStageOneModifierVisual(id) {
  const src = WORD_STAGE_ONE_RESOURCE_ASSETS.modifier[id];
  return src
    ? `<img class="word-stage-one-modifier-visual" src="${src}" alt="${modifiers[id]?.label || id}" />`
    : `<span class="word-stage-one-modifier-visual">${svgForModifier(id, "word-stage-one-svg")}</span>`;
}

function wordStageOneObjectVisual(_taskId, objectId) {
  const src = WORD_STAGE_ONE_RESOURCE_ASSETS.object[objectId];
  return src
    ? `<img class="word-stage-one-object-visual" src="${src}" alt="${objects[objectId]?.label || objectId}" />`
    : tileFor(objects[objectId], "object-tile");
}

const WORD_STAGE_ONE_SCENE_OBJECT_ASSETS = {
  pencil: WORD_STAGE_ONE_ASSETS.yellowPencil,
  box: WORD_STAGE_ONE_ASSETS.redBox,
  clothes: WORD_STAGE_ONE_ASSETS.cleanClothes,
  doll: WORD_STAGE_ONE_ASSETS.doll,
  cup: WORD_STAGE_ONE_ASSETS.sisterCup,
  book: WORD_STAGE_ONE_ASSETS.fafaBook,
  sticker: WORD_STAGE_ONE_ASSETS.sticker
};

function wordStageOneSceneObjectVisual(objectId) {
  const src = WORD_STAGE_ONE_SCENE_OBJECT_ASSETS[objectId];
  return src
    ? `<img class="word-stage-two-scene-object" src="${src}" alt="${objects[objectId]?.label || objectId}" />`
    : wordStageOneObjectVisual(objectId, objectId);
}

function wordStageOneResourceVisual(resource) {
  const src = WORD_STAGE_ONE_RESOURCE_ASSETS[resource.kind]?.[resource.id];
  return src
    ? `<img class="word-stage-one-resource-image" src="${src}" alt="" />`
    : resource.kind === "modifier"
      ? wordStageOneModifierVisual(resource.id)
      : tileFor(objects[resource.id], "object-tile");
}

function bindFindTools() {
  view.querySelectorAll("[data-find-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.findAction;
      if (action === "home") setStage("home");
      if (action === "book") setFeedback("完成整理后，语法宝典会打开。");
      if (action === "sound") {
        state.sound = !state.sound;
        soundToggle.setAttribute("aria-pressed", String(state.sound));
        soundToggle.querySelector("span").textContent = state.sound ? "♪" : "×";
        if (!state.sound && "speechSynthesis" in window) window.speechSynthesis.cancel();
        renderFind();
        refreshStageEntryNarrationForSound();
      }
    });
  });
}

function findCanvasItems() {
  return findTasks.flatMap((task) => [
    {
      id: task.id,
      label: task.sceneLabel,
      targetLabel: task.targetLabel,
      modId: task.modId,
      objId: task.objId,
      position: task.position
    },
    ...task.distractors
  ]);
}

function roomDecor() {
  return `
    <div class="wall-line"></div>
    <div class="poster-window"></div>
    <div class="wardrobe"></div>
    <div class="shelf"></div>
    <div class="desk"></div>
    <div class="bed"></div>
    <div class="rug"></div>
    <div class="toy-basket"></div>
  `;
}

function roomItem(item, currentTargetId) {
  const isTarget = item.id === currentTargetId;
  const isFound = state.foundIds.includes(item.id);
  const pos = item.position;
  const isWordStageOne = state.stage === "find" && state.category === "word";
  const isHinted = isWordStageOne && state.wordStageOneHintTarget === item.id;
  const style = isWordStageOne
    ? `${wordStageOneHotspotStyle(item.id)};z-index:${isTarget ? 9 : 4}`
    : `left:${pos.left}px;top:${pos.top}px`;
  return `
    <button class="target-item ${isWordStageOne ? "word-stage-one-hotspot" : ""} ${isFound ? "is-found" : ""} ${isHinted ? "is-hinted" : ""}" type="button" data-find-item="${item.id}" style="${style}" aria-label="${item.targetLabel || item.label}">
      ${isWordStageOne ? "" : svgForObject(item.objId, item.modId, "icon-svg")}
      <span class="sr-only">${item.label || item.targetLabel || "找一找"}</span>
      <span class="sr-only">${isTarget ? "目标物品" : "干扰物"}</span>
    </button>
  `;
}

function wordStageOneHotspotStyle(id) {
  const positions = {
    "yellow-pencil": { hit: [608, 430, 102, 84], hint: [-11, 5, 71, 60] },
    "red-pencil": { hit: [530, 427, 76, 84] },
    "red-box": { hit: [858, 478, 150, 112], hint: [17, 4, 119, 102] },
    "blue-box": { hit: [484, 225, 130, 100] },
    "red-ball": { hit: [207, 403, 112, 116] },
    "clean-clothes": { hit: [169, 498, 160, 150], hint: [19, 16, 135, 117] },
    "dirty-clothes": { hit: [842, 576, 172, 158] },
    "sister-doll": { hit: [514, 143, 106, 118], hint: [17, 10, 72, 96] },
    "mom-cup": { hit: [674, 386, 106, 110], hint: [18, 18, 70, 66] },
    "sister-cup": { hit: [436, 378, 104, 106] },
    "fafa-book": { hit: [378, 428, 132, 128], hint: [13, 8, 112, 109] },
    "mom-magazine": { hit: [579, 493, 132, 126] },
    "pretty-sticker": { hit: [674, 458, 150, 122], hint: [20, 16, 116, 88] }
  };
  const spot = positions[id] || { hit: [0, 0, 80, 80] };
  const [left, top, width, height] = spot.hit;
  const [hintLeft, hintTop, hintWidth, hintHeight] = spot.hint || [0, 0, width, height];
  return `left:${left}px;top:${top}px;width:${width}px;height:${height}px;--word-stage-one-hint-left:${hintLeft}px;--word-stage-one-hint-top:${hintTop}px;--word-stage-one-hint-width:${hintWidth}px;--word-stage-one-hint-height:${hintHeight}px`;
}

function handleFindClick(itemId) {
  const task = findTasks[state.findIndex];
  if (itemId === task.id) {
    stopWordStageOneHintTimer();
    state.wordStageOneHintTarget = null;
    state.foundIds.push(task.id);
    view.querySelector(`[data-find-item="${itemId}"]`)?.classList.add("is-found");
    view.querySelector(`.word-stage-one-prop-${itemId}`)?.classList.add("is-found");
    state.resources.push({ ...modifiers[task.modId], resourceKey: `${task.id}-mod` });
    state.resources.push({ ...objects[task.objId], resourceKey: `${task.id}-obj` });
    setFeedback(task.success);
    playSound("success");
    speakPhrase(task.displayPhrase);
    state.findIndex += 1;
    setTimeout(render, 520);
    return;
  }

  const wrong = view.querySelector(`[data-find-item="${itemId}"]`);
  const wrongProp = view.querySelector(`.word-stage-one-prop-${itemId}`);
  wrong?.classList.add("is-wrong");
  wrongProp?.classList.add("is-wrong");
  playSound("wrong");
  setTimeout(() => {
    wrong?.classList.remove("is-wrong");
    wrongProp?.classList.remove("is-wrong");
  }, 320);
  setFeedback(task.hint);
}

function phraseRestoreSlotHtml(kind, label, task) {
  const selectedId = state.phraseRestoreSelections[kind];
  const entity = selectedId ? (kind === "action" ? phraseActions[selectedId] : phraseObjects[selectedId]) : null;
  const hintEntity = !entity ? phraseRestoreHintEntity(task, kind) : null;
  const resourceSrc = (id) => kind === "action"
    ? PHRASE_STAGE_ONE_ASSETS.resources.actions[id]
    : PHRASE_STAGE_ONE_ASSETS.resources.objects[id];
  const visual = entity
    ? `<img class="phrase-stage2-slot-image" src="${resourceSrc(selectedId)}" alt="${entity.label}" draggable="false">`
    : hintEntity
      ? `<img class="phrase-stage2-slot-image" src="${resourceSrc(hintEntity.id)}" alt="${hintEntity.label}" draggable="false">`
      : state.stage === "phrase-restore"
        ? `<img class="phrase-stage2-question-mark" src="${PHRASE_STAGE_TWO_ASSETS.answerQuestion}" alt="${label}待选" draggable="false">`
        : `<span class="phrase-slot-placeholder">${label}</span>`;
  const cardClass = `${entity ? "is-filled" : ""} ${hintEntity ? "is-hint" : ""} ${state.phraseErrorTargets.includes(kind) ? "is-wrong" : ""}`;
  const cardLabel = entity ? `${label}：${entity.label}` : hintEntity ? `${label}提示：${hintEntity.label}` : `点击${label}资源放到这里`;
  return `<button class="phrase-restore-slot phrase-restore-slot-${kind} ${cardClass}" type="button" data-phrase-drop-slot="${kind}" aria-label="${cardLabel}">${visual}${hintEntity ? `<span>${hintEntity.label}</span><i class="phrase-slot-hint" aria-hidden="true">提示</i>` : ""}</button>`;
}

function phraseRestoreResourceDockHtml() {
  const actions = phraseRestoreResourceIds("actions");
  const objects = phraseRestoreResourceIds("objects");
  return `
    <img class="phrase-stage2-resource-frame" src="${PHRASE_STAGE_TWO_ASSETS.resourceFrame}" alt="动作资源和对象资源" draggable="false">
    <div class="phrase-restore-resource-strip" aria-label="动作和对象资源">
      <section class="phrase-restore-resource-group"><h3>动作资源</h3><div class="phrase-resource-row">${actions.map((id) => phraseStageTwoResourceCardHtml("action", id)).join("")}</div></section>
      <i class="phrase-resource-divider" aria-hidden="true"></i>
      <section class="phrase-restore-resource-group"><h3>对象资源</h3><div class="phrase-resource-row">${objects.map((id) => phraseStageTwoResourceCardHtml("object", id)).join("")}</div></section>
    </div>
  `;
}

function phraseRestoreResourceIds(group) {
  const available = state.phraseResources[group];
  const saved = state.phraseRestoreResourceOrder[group];

  if (!saved.length) {
    state.phraseRestoreResourceOrder[group] = shuffledPhraseResourceIds(available);
  }

  return state.phraseRestoreResourceOrder[group].filter((id) => available.includes(id));
}

function shuffledPhraseResourceIds(ids) {
  const original = [...ids];
  const shuffled = [...original];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  if (shuffled.length > 1 && shuffled.every((id, index) => id === original[index])) {
    shuffled.push(shuffled.shift());
  }

  return shuffled;
}

function shuffledPhraseResourcePairOrders(actionIds, objectIds) {
  const actions = shuffledPhraseResourceIds(actionIds);
  let objects = shuffledPhraseResourceIds(objectIds);
  const isAligned = () => objects.some((id, index) => (
    actionIds.indexOf(actions[index]) === objectIds.indexOf(id)
  ));

  // Keep the two columns independently shuffled, but avoid placing the
  // action/object pair from the same task at the same horizontal position.
  let attempts = 0;
  while (isAligned() && attempts < 80) {
    objects = shuffledPhraseResourceIds(objectIds);
    attempts += 1;
  }

  // A deterministic fallback keeps the rule true even if a random sequence
  // happens to produce too many aligned permutations.
  if (isAligned()) {
    for (let index = 0; index < objects.length && isAligned(); index += 1) {
      if (actionIds.indexOf(actions[index]) !== objectIds.indexOf(objects[index])) continue;
      for (let swapIndex = index + 1; swapIndex < objects.length; swapIndex += 1) {
        [objects[index], objects[swapIndex]] = [objects[swapIndex], objects[index]];
        if (!isAligned()) break;
        [objects[index], objects[swapIndex]] = [objects[swapIndex], objects[index]];
      }
    }
  }

  return { actions, objects };
}

function phraseRestoreTaskSceneHtml(task, isComplete) {
  const scene = PHRASE_STAGE_TWO_ASSETS.scene;
  const character = PHRASE_STAGE_TWO_ASSETS.characters[state.phraseRestoreIndex] || PHRASE_STAGE_TWO_ASSETS.characters[0];
  const image = (src, className, alt = "") => `<img class="phrase-stage2-scene-image ${className}" src="${src}" alt="${alt}" draggable="false">`;
  const breathe = (className) => `${className}${isComplete ? "" : " phrase-stage2-breathe"}`;
  const parts = [];

  if (task.object === "blackboard") {
    parts.push(image(scene.board, breathe("phrase-stage2-board"), "黑板"));
    if (!isComplete) {
      parts.push(image(scene.marks, "phrase-stage2-board-marks", "黑板上的图案"));
      parts.push(image(scene.eraser, breathe("phrase-stage2-eraser"), "黑板擦"));
    } else {
      parts.push(image(scene.marks, "phrase-stage2-board-marks phrase-stage2-complete-fading", "黑板上的图案"));
      parts.push(image(scene.eraser, "phrase-stage2-eraser phrase-stage2-complete-fading", "黑板擦"));
    }
  } else if (task.object === "desks") {
    parts.push(image(isComplete ? scene.tableChairs : scene.table, breathe("phrase-stage2-table"), "桌子"));
    if (!isComplete) parts.push(image(scene.fallenChair, breathe("phrase-stage2-fallen-chair"), "歪倒的椅子"));
    if (isComplete) parts.push(image(scene.fallenChair, "phrase-stage2-fallen-chair phrase-stage2-complete-fading", "歪倒的椅子"));
    if (isComplete) parts.push(image(scene.fallenChair, "phrase-stage2-arranged-chair", "摆好的椅子"));
  } else if (task.object === "works") {
    parts.push(image(isComplete ? scene.framedArtwork : scene.artwork, breathe(`phrase-stage2-artwork ${isComplete ? "is-hung" : ""}`), "画作"));
  } else if (task.object === "labels") {
    parts.push(image(scene.framedArtwork, breathe("phrase-stage2-label-artwork"), "画作"));
    parts.push(image(scene.fafa, breathe(`phrase-stage2-fafa-label ${isComplete ? "is-placed" : ""}`), "法法"));
  } else if (task.object === "flower") {
    parts.push(image(scene.cabinet, "phrase-stage2-cabinet", "柜子"));
    parts.push(image(isComplete ? scene.flowerComplete : scene.flower, breathe(`phrase-stage2-flower ${isComplete ? "is-complete" : ""}`), "花"));
    parts.push(image(scene.wateringCan, breathe(`phrase-stage2-watering-can ${isComplete ? "phrase-stage2-complete-fading" : ""}`), "浇水壶"));
  } else if (task.object === "floor") {
    parts.push(image(scene.broom, breathe(`phrase-stage2-broom ${isComplete ? "phrase-stage2-complete-fading" : ""}`), "扫帚"));
    parts.push(image(scene.debris, breathe(`phrase-stage2-debris ${isComplete ? "phrase-stage2-complete-fading" : ""}`), "纸团"));
  } else {
    parts.push(image(scene.door, breathe("phrase-stage2-door"), "门"));
    parts.push(image(scene.table, "phrase-stage2-door-table", "桌子"));
    parts.push(image(scene.box, breathe(`phrase-stage2-box ${isComplete ? "is-moved" : ""}`), "纸箱"));
  }

  return `<div class="phrase-stage2-scene-art phrase-stage2-task-${task.object} ${isComplete ? "is-complete" : ""}">${parts.join("")}<img class="phrase-stage2-scene-image phrase-stage2-character" src="${character}" alt="接取任务的同学" draggable="false"></div>`;
}

function secondStageLessonCountdownHtml() {
  return `<span class="second-stage-lesson-countdown" aria-label="3秒后自动关闭"></span>`;
}

function phraseRestoreLessonHtml(task) {
  const actionAsset = PHRASE_STAGE_TWO_ASSETS.actions[task.action];
  const objectAsset = PHRASE_STAGE_TWO_ASSETS.objects[task.object];
  const result = task.object === "flower" ? "浇花" : phraseHtml(task.phrase);
  return `
    <div class="restore-lesson-overlay phrase-restore-lesson-overlay" role="dialog" aria-modal="true" aria-label="动词和对象搭配提示">
        <section class="restore-lesson-card phrase-restore-lesson-card">
        ${secondStageLessonCountdownHtml()}
        <div class="lesson-bridge-row" aria-label="动作和对象组成动宾短语">
          <div class="lesson-card-piece"><img class="phrase-restore-lesson-image" src="${actionAsset}" alt="${phraseActions[task.action].label}"></div>
          <div class="lesson-de phrase-lesson-plus" aria-hidden="true">+</div>
          <div class="lesson-card-piece"><img class="phrase-restore-lesson-image" src="${objectAsset}" alt="${phraseObjects[task.object].label}"></div>
          <div class="lesson-equals" aria-hidden="true">=</div>
          <strong class="phrase-restore-lesson-phrase">${result}</strong>
        </div>
      </section>
    </div>
  `;
}

const phraseRestoreReflectionPrompts = {
  "wipe-blackboard": {
    prompt: "“黑板”在短语中表示什么？",
    options: [
      { id: "object", label: "对象" },
      { id: "action", label: "动作" }
    ],
    correct: "object",
    feedback: "意义：动宾短语说明动作做了什么，或和什么事物有关。"
  },
  "arrange-desks": {
    prompt: "“桌椅”在短语中表示什么？",
    options: [
      { id: "action", label: "动作" },
      { id: "object", label: "对象" }
    ],
    correct: "object",
    feedback: "意义：动宾短语说明动作做了什么，或和什么事物有关。"
  },
  "hang-works": {
    prompt: "“挂”和“作品”谁在前？",
    options: [
      { id: "action", label: "动作“挂”" },
      { id: "object", label: "对象“作品”" }
    ],
    correct: "action",
    feedback: "规则：动词放在前面，后面跟着对象。"
  },
  "stick-labels": {
    prompt: "“标签”回答了什么问题？",
    options: [
      { id: "what", label: "贴什么" },
      { id: "who", label: "谁在贴" }
    ],
    correct: "what",
    feedback: "使用：讲清楚一件事怎么做时，要把动作和对象搭配好。"
  },
  "water-flower": {
    prompt: "“浇花”后谁变化了？",
    options: [
      { id: "flower", label: "花" },
      { id: "fafa", label: "法法" }
    ],
    correct: "flower",
    feedback: "使用：讲清楚一件事怎么做时，要把动作和对象搭配好。"
  },
  "sweep-floor": {
    prompt: "“纸屑”在短语中表示什么？",
    options: [
      { id: "object", label: "对象" },
      { id: "action", label: "动作" }
    ],
    correct: "object",
    feedback: "意义：动宾短语说明动作做了什么，或和什么事物有关。"
  },
  "move-boxes": {
    prompt: "“搬”的对象需要有什么特点？",
    options: [
      { id: "movable", label: "能移动" },
      { id: "colorful", label: "颜色好看" }
    ],
    correct: "movable",
    feedback: "使用：讲清楚一件事怎么做时，要把动作和对象搭配好。"
  }
};

function phraseRestoreReflectionPrompt(task) {
  return phraseRestoreReflectionPrompts[task.id] || phraseRestoreReflectionPrompts["wipe-blackboard"];
}

function phraseRestoreReflectionPromptHtml(task, reflection) {
  if (["wipe-blackboard", "arrange-desks", "stick-labels", "sweep-floor"].includes(task.id)) {
    const objectSrc = PHRASE_STAGE_ONE_ASSETS.resources.objects[task.object];
    const promptTail = task.id === "stick-labels" ? "回答了什么问题？" : "在短语中表示什么？";
    return `
      <span class="phrase-reflection-prompt-icon"><img src="${objectSrc}" alt="${task.id === "wipe-blackboard" ? "黑板" : task.id === "arrange-desks" ? "桌椅" : task.id === "stick-labels" ? "标签" : "纸屑"}"></span>
      <span>${promptTail}</span>
    `;
  }
  if (task.id === "move-boxes") {
    const actionSrc = PHRASE_STAGE_ONE_ASSETS.resources.actions[task.action];
    return `
      <span class="phrase-reflection-prompt-icon"><img src="${actionSrc}" alt="搬"></span>
      <span>的对象需要有什么特点？</span>
    `;
  }
  if (task.id !== "hang-works") return reflection.prompt;
  const actionSrc = PHRASE_STAGE_ONE_ASSETS.resources.actions[task.action];
  const objectSrc = PHRASE_STAGE_ONE_ASSETS.resources.objects[task.object];
  return `
    <span class="phrase-reflection-prompt-icon"><img src="${actionSrc}" alt="挂"></span>
    <span aria-hidden="true">和</span>
    <span class="phrase-reflection-prompt-icon"><img src="${objectSrc}" alt="作品"></span>
    <span>谁在前？</span>
  `;
}

function phraseRestoreReflectionHtml(task) {
  const reflection = phraseRestoreReflectionPrompt(task);
  const promptLabel = task.id === "hang-works"
    ? "挂和作品谁在前？"
    : task.id === "stick-labels"
      ? "标签回答了什么问题？"
      : task.id === "sweep-floor"
        ? "纸屑在短语中表示什么？"
      : reflection.prompt;
  return `
    <div class="restore-lesson-overlay phrase-restore-reflection-overlay" role="dialog" aria-modal="true" aria-label="短语反思题">
      <section class="phrase-restore-reflection-card">
        <p class="phrase-restore-reflection-prompt" aria-label="${promptLabel}">${phraseRestoreReflectionPromptHtml(task, reflection)}</p>
        <div class="phrase-restore-reflection-options">
          ${reflection.options.map((option, index) => `
            <button class="phrase-restore-reflection-option ${state.phraseRestoreReflectionSelection === option.id ? "is-selected" : ""} ${state.phraseRestoreReflectionError === option.id ? "is-wrong" : ""}" type="button" data-phrase-restore-reflection-choice="${option.id}">
              <span class="phrase-restore-reflection-letter">${String.fromCharCode(65 + index)}.</span>
              <span>${option.label}</span>
            </button>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function phraseRestoreCountdownHtml() {
  if (state.phraseRestoreHint || state.phraseRestoreReady) return "";
  const progress = ((PHRASE_RESTORE_HINT_SECONDS - state.phraseRestoreHintSeconds) / PHRASE_RESTORE_HINT_SECONDS) * 360;
  return `<i class="phrase-restore-countdown" style="--countdown-progress:${progress}deg" aria-label="提示倒计时${state.phraseRestoreHintSeconds}秒"></i>`;
}

function phraseStageTwoResourceCardHtml(kind, id) {
  const entity = kind === "action" ? phraseActions[id] : phraseObjects[id];
  // Stage two uses the same compact resource artwork as stage one; the larger
  // stage-two assets remain reserved for assembling each task scene.
  const src = kind === "action" ? PHRASE_STAGE_ONE_ASSETS.resources.actions[id] : PHRASE_STAGE_ONE_ASSETS.resources.objects[id];
  if (!entity || !src) return "";
  return `<button class="phrase-resource-card phrase-stage2-resource-card" type="button" data-phrase-resource-kind="${kind}" data-phrase-resource-id="${id}" aria-label="放入${entity.label}"><span class="phrase-resource-art-wrap"><img class="phrase-stage2-resource-image" src="${src}" alt="${entity.label}" draggable="false"></span><span>${entity.label}</span></button>`;
}

function renderPhraseRestore() {
  if (state.phraseRestoreCompletedIds.length === phraseFindTasks.length
    || state.phraseRestoreIndex >= phraseFindTasks.length) {
    state.stage = "phrase-book";
    state.phraseBookVisited = true;
    render();
    return;
  }

  const task = phraseFindTasks[state.phraseRestoreIndex];
  const isComplete = state.phraseRestoreShowingComplete;
  const isReflecting = state.phraseRestoreReflection === task.id;
  view.innerHTML = `
    <div class="phrase-restore-canvas">
      <section class="phrase-restore-wire-scene" aria-label="修复班级任务">
        ${wordStageOneToolsHtml("phrase-restore", { bookSrc: PHRASE_STAGE_ONE_ASSETS.lockedBook, bookDisabled: true })}
        ${phraseStageInstructionHtml("two")}
        <section class="phrase-restore-task-panel phrase-stage2-task-${task.object} ${isComplete ? "is-complete" : ""}" aria-label="任务场景和答题区">
          <div class="phrase-restore-task-scene">
            <div class="phrase-restore-mini-scene">${phraseRestoreTaskSceneHtml(task, isComplete)}</div>
            <strong class="phrase-restore-scene-caption">${isComplete ? task.result : ""}</strong>
          </div>
          <section class="phrase-restore-instruction-panel" aria-label="答题区和接取任务的同学">
            <h2>接取任务</h2>
            <div class="phrase-restore-slots">
              <img class="phrase-stage2-answer-frame" src="${PHRASE_STAGE_TWO_ASSETS.answerFrame}" alt="" draggable="false">
              ${phraseRestoreSlotHtml("action", "动作", task)}
              ${phraseRestoreSlotHtml("object", "对象", task)}
              ${phraseRestoreCountdownHtml()}
            </div>
            <div class="phrase-restore-phrase">${state.phraseRestoreReady || isComplete ? phraseHtml(task.phrase) : ""}</div>
            ${state.phraseError ? `<p class="phrase-error-feedback" role="alert"><strong>${state.phraseErrorTopic}</strong>${state.phraseError}</p>` : ""}
            <div class="phrase-restore-student-zone">
              <div class="phrase-mini-student" aria-hidden="true"><i></i><b></b></div>
            </div>
          </section>
        </section>
        <aside class="phrase-restore-resource-dock" aria-label="资源栏">
          ${phraseRestoreResourceDockHtml()}
        </aside>
        ${state.phraseRestoreLesson === task.id ? phraseRestoreLessonHtml(task) : ""}
        ${isReflecting ? phraseRestoreReflectionHtml(task) : ""}
      </section>
    </div>
  `;
  bindPhraseRestoreEvents();
  startPhraseRestoreHintTimer();
}

function bindPhraseRestoreEvents() {
  view.querySelectorAll("[data-phrase-restore-reflection-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      const task = phraseFindTasks[state.phraseRestoreIndex];
      if (!task || state.phraseRestoreReflection !== task.id) return;
      const reflection = phraseRestoreReflectionPrompt(task);
      const choice = button.dataset.phraseRestoreReflectionChoice;
      state.phraseRestoreReflectionSelection = choice;
      if (choice !== reflection.correct) {
        state.phraseRestoreReflectionError = choice;
        playSound("wrong");
        renderPhraseRestore();
        window.setTimeout(() => {
          if (state.phraseRestoreReflection === task.id && state.phraseRestoreReflectionError === choice) {
            state.phraseRestoreReflectionError = null;
            state.phraseRestoreReflectionSelection = null;
            renderPhraseRestore();
          }
        }, REFLECTION_FEEDBACK_DURATION_MS);
        return;
      }
      state.phraseRestoreReflection = null;
      state.phraseRestoreReflectionError = null;
      state.phraseRestoreReflectionSelection = choice;
      state.phraseRestoreLesson = task.id;
      setFeedback("现在看语法讲解。");
      playSound("success");
      renderPhraseRestore();
      schedulePhraseRestoreLessonAutoExit(task);
    });
  });
  if (state.phraseRestoreShowingComplete) return;
  view.querySelectorAll("[data-phrase-resource-kind]").forEach((button) => {
    button.addEventListener("click", () => {
      const kind = button.dataset.phraseResourceKind;
      const id = button.dataset.phraseResourceId;
      const slot = view.querySelector(`[data-phrase-drop-slot="${kind}"]`);
      if (!slot) return;
      phraseRestoreDropResource(slot, kind, id);
    });
  });
  view.querySelectorAll("[data-phrase-drop-slot]").forEach((slot) => {
    slot.addEventListener("click", () => {
      if (!state.phraseRestoreSelections[slot.dataset.phraseDropSlot]) return;
      state.phraseRestoreSelections[slot.dataset.phraseDropSlot] = null;
      state.phraseRestoreReady = false;
      clearPhraseError();
      renderPhraseRestore();
    });
  });
  view.querySelectorAll("[data-phrase-restore-action]").forEach((button) => button.addEventListener("click", () => {
    const action = button.dataset.phraseRestoreAction;
    if (action === "home") setStage("home");
    if (action === "book") openPhraseBook("phrase-restore");
    if (action === "sound") toggleSound(renderPhraseRestore);
  }));
}

function phraseRestoreDropResource(slot, kind, id) {
  const expectedKind = slot?.dataset?.phraseDropSlot;
  if (!slot || expectedKind !== kind) return;
  state.phraseRestoreSelections[kind] = id;
  state.phraseRestoreReady = false;
  clearPhraseError();
  playSound("drop");
  checkPhraseRestoreCombination();
}

function shakePhraseRestoreAnswerSlot(kind) {
  const slot = view.querySelector(`[data-phrase-drop-slot="${kind}"]`);
  if (!slot) return;
  slot.classList.remove("is-wrong");
  void slot.offsetWidth;
  slot.classList.add("is-wrong");
  window.setTimeout(() => slot.classList.remove("is-wrong"), 380);
}

function checkPhraseRestoreCombination() {
  const task = phraseFindTasks[state.phraseRestoreIndex];
  const action = state.phraseRestoreSelections.action;
  const object = state.phraseRestoreSelections.object;
  if (!action || !object) {
    setFeedback(action
      ? "动作放好啦，再点击一个对象资源。"
      : object
        ? "对象放好啦，再点击一个动作资源。"
        : "请选择动作资源和对象资源。");
    renderPhraseRestore();
    return;
  }
  if (action === task.action && object === task.object) {
    state.phraseRestoreReady = true;
    stopPhraseRestoreHintTimer();
    clearPhraseError();
    setFeedback(`${task.phrase}，同学开始准备！`);
    playSound("success");
    renderPhraseRestore();
    schedulePhraseRestoreCompletion();
    return;
  }
  const wrongTargets = [];
  if (action !== task.action) wrongTargets.push("action");
  if (object !== task.object) wrongTargets.push("object");
  setFeedback(action === task.action
    ? "动作对了，再看看这个动作应该作用在哪个对象上。"
    : object === task.object
      ? "对象对了，再看看应该搭配哪个动作。"
      : "前面的动作资源和后面的对象资源还没有配好。");
  clearPhraseError();
  playSound("wrong");
  wrongTargets.forEach((kind) => {
    state.phraseRestoreSelections[kind] = null;
  });
  renderPhraseRestore();
  wrongTargets.forEach(shakePhraseRestoreAnswerSlot);
}

function schedulePhraseRestoreCompletion() {
  if (window.phraseRestoreTimer) window.clearTimeout(window.phraseRestoreTimer);
  window.phraseRestoreTimer = window.setTimeout(completePhraseRestoreTask, 720);
}

function dismissPhraseRestoreLesson() {
  if (!state.phraseRestoreShowingComplete) return;
  stopPhraseRestoreLessonTimer();
  if (window.phraseRestoreTimer) {
    window.clearTimeout(window.phraseRestoreTimer);
    window.phraseRestoreTimer = null;
  }
  completePhraseRestoreTask();
}

function schedulePhraseRestoreLessonAutoExit(task) {
  stopPhraseRestoreLessonTimer();
  phraseRestoreLessonTimer = window.setTimeout(() => {
    phraseRestoreLessonTimer = null;
    if (state.stage === "phrase-restore" && state.phraseRestoreLesson === task.id) {
      dismissPhraseRestoreLesson();
    }
  }, SECOND_STAGE_LESSON_AUTO_EXIT_MS);
}

function completePhraseRestoreTask() {
  const task = phraseFindTasks[state.phraseRestoreIndex];
  if (!task || (!state.phraseRestoreReady && !state.phraseRestoreShowingComplete)) return;
  stopPhraseRestoreLessonTimer();
  window.phraseRestoreTimer = null;
  stopPhraseRestoreHintTimer();

  if (!state.phraseRestoreShowingComplete) {
    state.phraseRestoreShowingComplete = true;
    state.phraseRestoreReflection = null;
    state.phraseRestoreReflectionSelection = null;
    state.phraseRestoreReflectionError = null;
    state.phraseRestoreLesson = null;
    setFeedback(`${task.phrase}，任务完成啦！`);
    playSound("success");
    renderPhraseRestore();
    window.phraseRestoreReflectionTimer = window.setTimeout(() => {
      if (!state.phraseRestoreShowingComplete || state.phraseRestoreIndex >= phraseFindTasks.length) return;
      state.phraseRestoreReflection = task.id;
      renderPhraseRestore();
    }, 680);
    return;
  }

  state.phraseResources.actions = state.phraseResources.actions.filter((id) => id !== task.action);
  state.phraseResources.objects = state.phraseResources.objects.filter((id) => id !== task.object);
  state.phraseRestoreCompletedIds.push(task.id);
  state.phraseRestoreIndex += 1;
  state.phraseRestoreSelections = { action: null, object: null };
  state.phraseRestoreReady = false;
  state.phraseRestoreHintSeconds = PHRASE_RESTORE_HINT_SECONDS;
  state.phraseRestoreShowingComplete = false;
  state.phraseRestoreReflection = null;
  state.phraseRestoreReflectionSelection = null;
  state.phraseRestoreReflectionError = null;
  state.phraseRestoreLesson = null;
  state.phraseRestoreHint = null;
  clearPhraseError();
  setFeedback(`${task.phrase}，教室变整齐了。`);
  render();
}

function renderRestore() {
  if (state.category === "word") {
    renderWordRestore();
    return;
  }

  if (state.restoredIds.length === findTasks.length && !state.restoreLesson && !state.restoreReflection) {
    if (state.restoreCompleteView) {
      state.restoreCompleteView = false;
      renderRestoreComplete();
      return;
    }
    playSound("stage");
    state.stage = "book";
    state.bookVisited = true;
    setFeedback("房间整理好了，语法宝典也完成了。");
    render();
    return;
  }

  const task = findTasks[state.restoreIndex];
  const isPlaced = state.restoreReady || state.restoredIds.includes(task.id);
  const isReflecting = state.restoreReflection === task.id
    && state.restoreReady
    && restoreComboMatchesTask(task);
  const restoreStyle = restoreSpotStyle(task);
  const questionHtml = state.restoreLesson === task.id ? "" : `
            <section class="restore-question-card ${isPlaced ? "is-complete" : ""}" style="${restoreStyle}" aria-label="还原题目">
              ${restoreHintBadgeHtml(task)}
              <div class="combo-slots">
                ${comboSlot("modifier", "说明资源", task)}
                <div class="de-bridge ${restoreBridgeClass()}" aria-label="${restoreBridgeAnnouncement(task)}">
                  ${restoreBridgeHtml()}
                </div>
                ${comboSlot("object", "物品资源", task)}
              </div>
              ${isPlaced ? `<div class="phrase-box">${phraseHtml(task.displayPhrase)}</div>` : ""}
            </section>
          `;
  view.innerHTML = `
    <div class="restore-canvas">
      <section class="restore-wire-scene" aria-label="第二阶段还原房间">
        <div class="restore-split restore-original-area">
          <div class="restore-room-title restore-original-label">原来</div>
          <div class="restore-room-illustration" aria-label="${task.restore.leftCue}">
            ${restoreRoomDecor()}
            ${restoreOriginalObjectsHtml(task.id)}
          </div>
        </div>
        <div class="restore-split restore-pending-area">
          <div class="restore-room-title restore-pending-label">现在</div>
          <div class="restore-room-illustration" aria-label="${task.restore.rightCue}">
            ${restoreRoomDecor()}
            ${restorePersistentObjectsHtml(task.id)}
            ${questionHtml}
            <div class="restore-pending-card ${isPlaced ? "is-ready" : ""}" style="${restoreStyle}" aria-label="${task.restore.rightCue}">
              ${isPlaced ? svgForObject(task.objId, task.modId, "small-svg") : ""}
            </div>
          </div>
        </div>
        <div class="restore-corner-tools" aria-label="第二阶段工具">
          <button class="restore-tool-button restore-back-button" type="button" data-restore-action="home" aria-label="返回首页">
            <span class="restore-tool-icon" aria-hidden="true">↩</span>
            <span class="sr-only">返回首页</span>
          </button>
          <button class="restore-tool-button restore-book-button" type="button" data-restore-action="book" aria-label="语法宝典">
            <span class="restore-tool-icon" aria-hidden="true">的</span>
            <span class="sr-only">语法宝典</span>
          </button>
          <button class="restore-tool-button restore-sound-button" type="button" data-restore-action="sound" aria-label="音乐按钮">
            <span class="restore-tool-icon" aria-hidden="true">${state.sound ? "♪" : "×"}</span>
            <span class="sr-only">音乐</span>
          </button>
        </div>
        <aside class="restore-resource-dock" aria-label="资源栏">
          <div class="restore-resource-title sr-only">资源栏</div>
          <div class="restore-dock-content">
            <section class="restore-resource-panel" aria-label="选择资源">
              ${resourceGroupsHtml("bank")}
            </section>
          </div>
        </aside>
        ${state.restoreLesson === task.id ? restoreLessonHtml(task) : ""}
        ${isReflecting ? restoreReflectionHtml(task) : ""}
      </section>
    </div>
  `;

  bindResourceEvents();
  bindRestoreReflection();
  bindRestoreTools();
  bindRestoreLesson();
}

function renderWordRestore() {
  if (state.restoredIds.length === findTasks.length && !state.restoreLesson && !state.restoreReflection) {
    if (state.restoreCompleteView) {
      state.restoreCompleteView = false;
      renderWordRestoreComplete();
      return;
    }
    playSound("stage");
    state.stage = "book";
    state.bookVisited = true;
    setFeedback("房间整理好了，语法宝典也完成了。");
    render();
    return;
  }

  const task = findTasks[state.restoreIndex];
  const isPlaced = state.restoreReady || state.restoredIds.includes(task.id);
  const isReflecting = state.restoreReflection === task.id
    && state.restoreReady
    && restoreComboMatchesTask(task);

  view.innerHTML = `
    <div class="word-stage-two-canvas">
      <div class="word-stage-two-background" aria-label="整理房间的左右对照场景"></div>
      ${wordStageTwoReferenceObjectsHtml()}
      ${wordStageTwoPlacedObjectsHtml()}
      ${wordStageOneToolsHtml("restore", { bookSrc: WORD_STAGE_ONE_ASSETS.wordBook })}
      ${wordStageTwoInstructionHtml()}
      ${wordStageTwoQuestionHtml(task, isPlaced)}
      ${wordStageTwoResourceDockHtml()}
      ${state.restoreLesson === task.id ? wordStageTwoLessonHtml(task) : ""}
      ${isReflecting ? wordStageTwoReflectionHtml(task) : ""}
    </div>
  `;

  bindResourceEvents();
  bindRestoreReflection();
  bindRestoreTools();
  bindRestoreLesson();
}

function wordStageTwoInstructionHtml() {
  const label = STAGE_ENTRY_NARRATIONS["word:restore"];
  return `
    <div class="word-stage-two-instruction" aria-label="${label}">
      <img src="${WORD_STAGE_TWO_ASSETS.restoreInstruction}" alt="${label}" />
    </div>
  `;
}

function wordStageTwoQuestionHtml(task, isPlaced) {
  const placedClass = isPlaced ? "is-complete" : "";
  const spot = wordStageTwoQuestionSpots[task.id] || { left: 637, top: 379 };
  return `
    <section class="restore-question-card word-stage-two-question ${placedClass}" style="left:${spot.left}px;top:${spot.top}px" aria-label="组合题目">
      <img class="word-stage-two-answer-frame" src="${WORD_STAGE_TWO_ASSETS.answerFrame}" alt="" />
      <div class="word-stage-two-answer-slots">
        ${wordStageTwoAnswerSlotHtml("modifier", task)}
        <div class="word-stage-two-de-bridge ${restoreBridgeClass()}" aria-label="${restoreBridgeAnnouncement(task)}">${restoreBridgeHtml()}</div>
        ${wordStageTwoAnswerSlotHtml("object", task)}
      </div>
    </section>
  `;
}

function wordStageTwoReflectionPrompt(task) {
  const reflection = restoreReflectionPrompt(task);
  const objectLabel = objects[task.objId].label;
  const modifier = modifiers[task.modId];
  const taskIndex = findTasks.findIndex((item) => item.id === task.id);
  // Keep the two choices stable for a question, but alternate the correct
  // position across the stage so it is not always the first answer.
  const options = taskIndex % 2 === 0
    ? [...reflection.options].reverse()
    : reflection.options;
  return {
    ...reflection,
    options,
    prompt: modifier.type === "owner"
      ? `表示${objectLabel}是谁的？`
      : `表示${objectLabel}的什么？`
  };
}

function wordStageTwoReflectionHtml(task) {
  const reflection = wordStageTwoReflectionPrompt(task);
  const isOwnerQuestion = modifiers[task.modId]?.type === "owner";
  const visual = isOwnerQuestion
    ? `<div class="word-stage-two-reflection-relation" aria-hidden="true"><div class="word-stage-two-reflection-visual">${wordStageOneModifierVisual(task.modId)}</div><span class="word-stage-two-reflection-and">和</span><div class="word-stage-two-reflection-visual">${wordStageOneObjectVisual(task.id, task.objId)}</div></div>`
    : `<div class="word-stage-two-reflection-visual">${wordStageOneModifierVisual(task.modId)}</div>`;
  const prompt = isOwnerQuestion
    ? "是什么关系？"
    : reflection.prompt;
  return `
    <div class="restore-lesson-overlay word-stage-two-reflection-overlay" role="dialog" aria-modal="true" aria-label="词类知识反思题">
      <section class="word-stage-two-reflection-card">
        ${visual}
        <p class="word-stage-two-reflection-prompt ${isOwnerQuestion ? "is-owner-question" : ""}">${prompt}</p>
        <div class="word-stage-two-reflection-options">
          ${reflection.options.map((option, index) => `
            <button class="word-stage-two-reflection-option ${state.restoreReflectionSelection === option.id ? "is-selected" : ""} ${state.restoreReflectionError === option.id ? "is-wrong" : ""}" type="button" data-restore-reflection-choice="${option.id}">
              <span>${String.fromCharCode(65 + index)}.${option.label}</span>
            </button>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function wordStageTwoAnswerSlotHtml(kind, task) {
  const selectedKey = state.restoreSlots[kind];
  const selectedEntity = selectedKey
    ? state.restoreSlotEntities[kind] || getResourceEntity(selectedKey)
    : null;
  const placement = restoreHintPlacement(task);
  const hintEntity = !selectedEntity && placement?.kind === kind ? placement.entity : null;
  const entity = selectedEntity || hintEntity;
  const image = entity
    ? wordStageTwoEntityVisualHtml(kind, entity)
    : `<img class="word-stage-two-question-slot" src="${WORD_STAGE_TWO_ASSETS.questionSlot}" alt="" />`;
  return `
    <button class="combo-slot ${selectedEntity ? "is-filled" : hintEntity ? "is-hint" : ""} ${state.restoreReflectionError === kind ? "is-wrong" : ""}" type="button" data-slot="${kind}" aria-label="${selectedEntity ? entity.label : `${kind === "modifier" ? "说明资源" : "物品资源"}位置`}">
      ${image}
    </button>
  `;
}

function wordStageTwoEntityVisualHtml(kind, entity) {
  const src = kind === "modifier"
    ? WORD_STAGE_ONE_RESOURCE_ASSETS.modifier[entity.id]
    : WORD_STAGE_ONE_RESOURCE_ASSETS.object[entity.id];
  return src
    ? `<img class="word-stage-two-selected-image" src="${src}" alt="" />`
    : tileContent(entity, "small-svg");
}

const wordStageTwoReferenceSpots = {
  "yellow-pencil": { left: 140, top: 431, width: 25, height: 58, transform: "rotate(-8deg)" },
  "red-box": { left: 237, top: 320, width: 80, height: 50 },
  "clean-clothes": { left: 322, top: 226, width: 75, height: 99 },
  "sister-doll": { left: 175, top: 399, width: 70, height: 93 },
  "mom-cup": { left: 378, top: 441, width: 68, height: 72 },
  "fafa-book": { left: 270, top: 266, width: 49, height: 76 },
  "pretty-sticker": { left: 287, top: 473, width: 100, height: 68 }
};

const wordStageTwoObjectSpots = {
  "yellow-pencil": { left: 710, top: 447, width: 33, height: 58, transform: "rotate(-8deg)" },
  "red-box": { left: 805, top: 365, width: 93, height: 50 },
  "clean-clothes": { left: 904, top: 266, width: 87, height: 99 },
  "sister-doll": { left: 753, top: 438, width: 74, height: 99 },
  "mom-cup": { left: 968, top: 441, width: 79, height: 72 },
  "fafa-book": { left: 843, top: 266, width: 57, height: 76 },
  "pretty-sticker": { left: 871, top: 473, width: 100, height: 68 }
};

const wordStageTwoQuestionSpots = {
  "yellow-pencil": { left: 590, top: 350 },
  "red-box": { left: 610, top: 338 },
  "clean-clothes": { left: 1000, top: 332 },
  "sister-doll": { left: 600, top: 520 },
  "mom-cup": { left: 994, top: 520 },
  "fafa-book": { left: 620, top: 244 },
  "pretty-sticker": { left: 812, top: 542 }
};

function wordStageTwoReferenceObjectsHtml() {
  return findTasks
    .map((task) => {
      const spot = wordStageTwoReferenceSpots[task.id];
      if (!spot) return "";
      const isCurrent = task.id === findTasks[state.restoreIndex]?.id && !state.restoreReady;
      const transform = spot.transform ? `;transform:${spot.transform}` : "";
      return `
        <div class="word-stage-two-reference-object ${isCurrent ? "is-current" : ""}" style="left:${spot.left}px;top:${spot.top}px;width:${spot.width}px;height:${spot.height}px${transform}" aria-label="${task.displayPhrase}">
          ${wordStageOneSceneObjectVisual(task.objId)}
        </div>
      `;
    })
    .join("");
}

function wordStageTwoPlacedObjectsHtml() {
  return findTasks
    .filter((task) => state.restoredIds.includes(task.id))
    .map((task) => {
      const spot = wordStageTwoObjectSpots[task.id];
      if (!spot) return "";
      const transform = spot.transform ? `;transform:${spot.transform}` : "";
      return `
        <div class="word-stage-two-placed-object" style="left:${spot.left}px;top:${spot.top}px;width:${spot.width}px;height:${spot.height}px${transform}" aria-label="${task.displayPhrase}">
          ${wordStageOneSceneObjectVisual(task.objId)}
        </div>
      `;
    })
    .join("");
}

function renderWordRestoreComplete() {
  view.innerHTML = `
    <div class="word-stage-two-canvas">
      <div class="word-stage-two-background" aria-label="整理完成的房间"></div>
      ${wordStageTwoReferenceObjectsHtml()}
      ${wordStageTwoPlacedObjectsHtml()}
      ${wordStageOneToolsHtml("restore", { bookSrc: WORD_STAGE_ONE_ASSETS.wordBook })}
    </div>
  `;
  bindRestoreTools();
  setFeedback("房间整理完成。可以打开语法宝典。");
}

function renderRestoreComplete() {
  view.innerHTML = `
    <div class="restore-canvas">
      <section class="book-room-background restore-complete-room" aria-label="整理完成的房间">
        ${restoreRoomDecor()}
        ${restorePersistentObjectsHtml("", "complete")}
      </section>
      <div class="restore-corner-tools" aria-label="第二阶段工具">
        <button class="restore-tool-button restore-back-button" type="button" data-restore-action="home" aria-label="返回首页">
          <span class="restore-tool-icon" aria-hidden="true">↩</span>
          <span class="sr-only">返回首页</span>
        </button>
        <button class="restore-tool-button restore-book-button" type="button" data-restore-action="book" aria-label="语法宝典">
          <span class="restore-tool-icon" aria-hidden="true">的</span>
          <span class="sr-only">语法宝典</span>
        </button>
        <button class="restore-tool-button restore-sound-button" type="button" data-restore-action="sound" aria-label="音乐按钮">
          <span class="restore-tool-icon" aria-hidden="true">${state.sound ? "♪" : "×"}</span>
          <span class="sr-only">音乐</span>
        </button>
      </div>
    </div>
  `;
  bindRestoreTools();
  setFeedback("房间整理完成。可以打开语法宝典。");
}

function bindRestoreTools() {
  view.querySelectorAll("[data-restore-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.restoreAction;
      if (action === "home") setStage("home");
      if (action === "book") setStage("book");
      if (action === "sound") {
        state.sound = !state.sound;
        soundToggle.setAttribute("aria-pressed", String(state.sound));
        soundToggle.querySelector("span").textContent = state.sound ? "♪" : "×";
        if (!state.sound && "speechSynthesis" in window) window.speechSynthesis.cancel();
        renderRestore();
        refreshStageEntryNarrationForSound();
      }
    });
  });
}

function bindRestoreLesson() {
  view.querySelectorAll("[data-lesson-action]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.lessonAction === "close") advanceRestoreAfterLesson();
    });
  });
}

function restoreReflectionPrompt(task) {
  const modifier = modifiers[task.modId];
  if (modifier.type === "owner") {
    return {
      prompt: `“${modifier.label}”表示${objects[task.objId].label}是谁的？`,
      options: [
        { id: "owner", label: "谁的" },
        { id: "color", label: "颜色" }
      ],
      correct: "owner",
      summary: "意义：说明东西是谁的，或它和谁有关。",
      feedback: "意义：说明东西是谁的，或它和谁有关。"
    };
  }
  if (modifier.type === "state") {
    return {
      prompt: `“${modifier.label}”表示${objects[task.objId].label}的什么？`,
      options: [
        { id: "state", label: "状态" },
        { id: "place", label: "位置" }
      ],
      correct: "state",
      summary: "意义：说明东西现在是什么状态。",
      feedback: "意义：说明东西现在是什么状态。"
    };
  }
  if (modifier.type === "feeling") {
    return {
      prompt: `“${modifier.label}”表示${objects[task.objId].label}的什么？`,
      options: [
        { id: "appearance", label: "样子" },
        { id: "owner", label: "谁的" }
      ],
      correct: "appearance",
      summary: "意义：说明东西长什么样。",
      feedback: "意义：说明东西长什么样。"
    };
  }
  return {
    prompt: `“${modifier.label}”表示${objects[task.objId].label}的什么？`,
    options: [
      { id: "color", label: "颜色" },
      { id: "action", label: "动作" }
    ],
    correct: "color",
    summary: "意义：说明东西是什么颜色。",
    feedback: "意义：说明东西是什么颜色。"
  };
}

function restoreReflectionHtml(task) {
  const reflection = restoreReflectionPrompt(task);
  return `
    <div class="restore-lesson-overlay phrase-restore-reflection-overlay" role="dialog" aria-modal="true" aria-label="词类知识反思题">
      <section class="phrase-restore-reflection-card restore-word-reflection-card">
        <p class="phrase-restore-reflection-prompt">${reflection.prompt}</p>
        <div class="phrase-restore-reflection-options">
          ${reflection.options.map((option, index) => `
            <button class="phrase-restore-reflection-option ${state.restoreReflectionSelection === option.id ? "is-selected" : ""} ${state.restoreReflectionError === option.id ? "is-wrong" : ""}" type="button" data-restore-reflection-choice="${option.id}">
              <span class="phrase-restore-reflection-letter">${String.fromCharCode(65 + index)}.</span>
              <span>${option.label}</span>
            </button>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function bindRestoreReflection() {
  const task = findTasks[state.restoreIndex];
  if (!state.restoreReflection || !state.restoreReady || !task || !restoreComboMatchesTask(task)) return;
  view.querySelectorAll("[data-restore-reflection-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      const task = findTasks[state.restoreIndex];
      if (!task || !state.restoreReady || !restoreComboMatchesTask(task)) return;
      const reflection = state.category === "word"
        ? wordStageTwoReflectionPrompt(task)
        : restoreReflectionPrompt(task);
      const choice = button.dataset.restoreReflectionChoice;
      state.restoreReflectionSelection = choice;
      if (choice !== reflection.correct) {
        state.restoreReflectionError = choice;
        playSound("wrong");
        renderRestore();
        window.setTimeout(() => {
          if (state.restoreReflection === task.id && state.restoreReflectionError === choice) {
            state.restoreReflectionError = null;
            state.restoreReflectionSelection = null;
            renderRestore();
          }
        }, REFLECTION_FEEDBACK_DURATION_MS);
        return;
      }
      state.restoreReflection = null;
      state.restoreReflectionError = null;
      state.restoreReflectionSelection = choice;
      state.restoreLesson = task.id;
      setFeedback("现在看看语法提示。");
      playSound("success");
      renderRestore();
      scheduleRestoreLessonAutoExit(task);
    });
  });
}

function restoreRoomDecor() {
  return `
    <div class="restore-window"></div>
    <div class="restore-wall-art"></div>
    <div class="restore-wardrobe"></div>
    <div class="restore-shelf-unit"></div>
    <div class="restore-desk-unit"></div>
    <div class="restore-bed-unit"></div>
    <div class="restore-rug-unit"></div>
    <div class="restore-toy-box"></div>
  `;
}

function restoreSpotStyle(task) {
  const spot = restoreOriginalSpots[task.id] || task.restore.spot;
  const left = Math.round(spot.left);
  const top = Math.round(spot.top);
  const questionSpot = restoreQuestionSpot(task);
  const questionLeft = questionSpot.left;
  const questionTop = questionSpot.top;
  return `--slot-left:${left}px;--slot-top:${top}px;--question-left:${questionLeft}px;--question-top:${questionTop}px`;
}

function restoreQuestionSpot(task) {
  const scene = { width: 600, height: 454 };
  const card = state.restoreReflection === task.id
    && state.restoreReady
    && restoreComboMatchesTask(task)
    ? { width: 238, height: 146 }
    : { width: 220, height: 96 };
  const target = restoreOriginalSpots[task.id] || task.restore.spot;
  const nearbyCandidates = [
    { left: target.left + 90, top: target.top - 9 },
    { left: target.left - card.width - 12, top: target.top - 9 },
    { left: target.left - (card.width - 78) / 2, top: target.top - card.height - 12 },
    { left: target.left - (card.width - 78) / 2, top: target.top + 78 + 12 }
  ];
  const fallbackCandidates = [
    { left: 12, top: 12 },
    { left: scene.width - card.width - 12, top: 12 },
    { left: 12, top: scene.height - card.height - 12 },
    { left: scene.width - card.width - 12, top: scene.height - card.height - 12 }
  ];
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const candidates = [...nearbyCandidates, ...fallbackCandidates]
    .map((candidate) => ({
      left: clamp(Math.round(candidate.left), 12, scene.width - card.width - 12),
      top: clamp(Math.round(candidate.top), 12, scene.height - card.height - 12)
    }))
    .filter((candidate, index, list) => (
      list.findIndex((item) => item.left === candidate.left && item.top === candidate.top) === index
    ));
  const occupied = [...new Set([...state.restoredIds, task.id])]
    .map((id) => restoreOriginalSpots[id])
    .filter(Boolean)
    .map((spot) => ({ ...spot, width: 78, height: 78 }));

  const overlaps = (first, second) => (
    first.left < second.left + second.width
    && first.left + first.width > second.left
    && first.top < second.top + second.height
    && first.top + first.height > second.top
  );

  return candidates.find((candidate) => !occupied.some((spot) => overlaps({ ...candidate, ...card }, spot))) || candidates[0];
}

const restoreOriginalSpots = {
  "yellow-pencil": { left: 310, top: 55 },
  "red-box": { left: 390, top: 55 },
  "clean-clothes": { left: 218, top: 144 },
  "sister-doll": { left: 336, top: 338 },
  "mom-cup": { left: 420, top: 286 },
  "fafa-book": { left: 116, top: 320 },
  "pretty-sticker": { left: 390, top: 132 }
};

function restoreOriginalObjectsHtml(currentTaskId = "") {
  return findTasks
    .map((task) => {
      const spot = restoreOriginalSpots[task.id];
      return `
        <div class="restore-original-placed-object ${task.id === currentTaskId ? "is-current-target" : ""}" style="left:${spot.left}px;top:${spot.top}px" aria-label="${task.displayPhrase}">
          ${svgForObject(task.objId, task.modId, "small-svg")}
        </div>
      `;
    })
    .join("");
}

function restorePersistentObjectsHtml(excludeId = "", mode = "pending") {
  return findTasks
    .filter((task) => state.restoredIds.includes(task.id) && task.id !== excludeId)
    .map((task) => {
      const spot = mode === "complete"
        ? task.restore.stageSpot
        : restoreOriginalSpots[task.id];
      if (!spot) return "";
      return `
        <div class="restore-persistent-object ${mode === "complete" ? "is-complete-room" : ""}" style="left:${spot.left}px;top:${spot.top}px" aria-label="${task.displayPhrase}">
          ${svgForObject(task.objId, task.modId, "small-svg")}
        </div>
      `;
    })
    .join("");
}

function restoreLessonHtml(task) {
  return `
    <div class="restore-lesson-overlay" role="dialog" aria-modal="true" aria-label="语法讲解">
      <section class="restore-lesson-card">
        ${secondStageLessonCountdownHtml()}
        <h2>${restoreLessonMeaning(task)}</h2>
        <div class="lesson-bridge-row" aria-label="说明资源和物品资源合成完整物品">
          <div class="lesson-card-piece">
            ${tileFor(modifiers[task.modId], "mini-object")}
          </div>
          <div class="lesson-de">的</div>
          <div class="lesson-card-piece">
            ${tileFor(objects[task.objId], "mini-object")}
          </div>
          <div class="lesson-equals" aria-hidden="true">=</div>
          <div class="lesson-result-piece" aria-label="合成后的${task.targetLabel}">
            ${svgForObject(task.objId, task.modId, "small-svg")}
          </div>
        </div>
        <p class="lesson-rule">${phraseHtml(task.displayPhrase)}</p>
      </section>
    </div>
  `;
}

function wordStageTwoLessonHtml(task) {
  return `
    <div class="restore-lesson-overlay word-stage-two-lesson-overlay" role="dialog" aria-modal="true" aria-label="语法小讲解">
      <section class="word-stage-two-lesson-card">
        ${secondStageLessonCountdownHtml()}
        <div class="word-stage-two-lesson-row">
          <div class="word-stage-two-lesson-piece">${wordStageOneModifierVisual(task.modId)}</div>
          <div class="word-stage-two-lesson-de" aria-hidden="true">的</div>
          <div class="word-stage-two-lesson-piece">${wordStageOneObjectVisual(task.id, task.objId)}</div>
          <div class="word-stage-two-lesson-equals" aria-hidden="true">=</div>
          <div class="word-stage-two-lesson-result" aria-label="合成后的${task.targetLabel}">${wordStageOneSceneObjectVisual(task.objId)}</div>
          <strong class="word-stage-two-lesson-phrase">${task.displayPhrase}</strong>
        </div>
      </section>
    </div>
  `;
}

function restoreLessonMeaning(task) {
  return modifiers[task.modId].type === "owner" ? "所属关系" : "修饰对象";
}

function restoreBridgeHtml() {
  if (state.restoreBridgeReady) {
    if (restoreSlotsFilled() || state.restoreHint === "de") return "的";
    return `<span class="restore-countdown restore-hint-ring" style="--countdown-progress:270deg"></span>`;
  }
  const progress = ((RESTORE_BRIDGE_SECONDS - state.restoreBridgeSeconds) / RESTORE_BRIDGE_SECONDS) * 360;
  return `<span class="restore-countdown" style="--countdown-progress:${progress}deg"></span>`;
}

function restoreSlotsFilled() {
  return Boolean(state.restoreSlots.modifier && state.restoreSlots.object);
}

function restoreBridgeClass() {
  if (!state.restoreBridgeReady) return "is-counting";
  return restoreSlotsFilled() || state.restoreHint === "de" ? "is-on" : "is-hint";
}

function restoreHintLabel() {
  return RESTORE_HINTS.find((hint) => hint.id === state.restoreHint)?.label || "提示";
}

function restoreHintPlacement(task) {
  if (restoreSlotsFilled()) return state.restoreBridgeReady ? { kind: "de", label: "“的”字" } : null;
  if (!state.restoreBridgeReady || !state.restoreHint) return null;
  if (state.restoreHint === "de") return { kind: "de", label: "“的”字" };

  const preferred = state.restoreHint;
  const fallback = preferred === "modifier" ? "object" : "modifier";
  const preferredEntity = preferred === "modifier" ? modifiers[task.modId] : objects[task.objId];
  const fallbackEntity = fallback === "modifier" ? modifiers[task.modId] : objects[task.objId];

  if (!state.restoreSlots[preferred]) return { kind: preferred, entity: preferredEntity, label: restoreHintLabel() };
  if (!state.restoreSlots[fallback]) return { kind: fallback, entity: fallbackEntity, label: fallback === "modifier" ? "说明资源" : "物品资源" };
  return { kind: "floating", entity: preferredEntity, label: restoreHintLabel() };
}

function restoreHintAnnouncement(task) {
  const placement = restoreHintPlacement(task);
  if (!placement) return "提示";
  if (placement.kind === "de") return "提示：“的”字出现了";
  if (placement.kind === "floating") return `提示：${placement.label}`;
  return `提示放在${placement.kind === "modifier" ? "说明资源框" : "物品资源框"}`;
}

function restoreHintBadgeHtml(task) {
  const placement = restoreHintPlacement(task);
  if (!placement || placement.kind !== "floating") return "";
  return `<div class="restore-floating-hint" aria-label="${restoreHintAnnouncement(task)}"><span>小提示</span>${placement.label}</div>`;
}

function restoreBridgeAnnouncement(task) {
  if (restoreSlotsFilled() && state.restoreBridgeReady) return "两个资源已放好，“的”字出现了";
  if (state.restoreBridgeReady) return restoreHintAnnouncement(task);
  return "倒计时进度";
}

function nextRestoreHint() {
  if (!state.restoreHintQueue.length) {
    const hints = RESTORE_HINTS.map((hint) => hint.id);
    for (let index = hints.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [hints[index], hints[randomIndex]] = [hints[randomIndex], hints[index]];
    }

    if (state.restoreLastHint && hints[0] === state.restoreLastHint) {
      [hints[0], hints[1]] = [hints[1], hints[0]];
    }
    state.restoreHintQueue = hints;
  }

  const hint = state.restoreHintQueue.shift();
  state.restoreLastHint = hint;
  return hint;
}

function stopRestoreBridgeCountdown() {
  if (!restoreBridgeTimer) return;
  window.clearInterval(restoreBridgeTimer);
  restoreBridgeTimer = null;
}

function startRestoreBridgeCountdown() {
  stopRestoreBridgeCountdown();
  state.restoreBridgeSeconds = RESTORE_BRIDGE_SECONDS;
  state.restoreBridgeReady = false;
  state.restoreHint = null;
  restoreBridgeTimer = window.setInterval(() => {
    if (state.stage !== "restore") {
      stopRestoreBridgeCountdown();
      return;
    }

    state.restoreBridgeSeconds -= 1;
    if (state.restoreBridgeSeconds <= 0) {
      state.restoreBridgeSeconds = 0;
      state.restoreBridgeReady = true;
      state.restoreHint = nextRestoreHint();
      stopRestoreBridgeCountdown();
      if (!state.restoreReady && state.restoreSlots.modifier && state.restoreSlots.object) {
        checkRestoreCombo();
      } else if (!state.restoreReady) {
        setFeedback("小提示出现啦，看看中间的提示。");
      }
    }
    renderRestore();
  }, 1000);
}

function comboSlot(kind, label, task) {
  const value = state.restoreSlots[kind];
  const placement = restoreHintPlacement(task);
  const hintEntity = !value && placement?.kind === kind ? placement.entity : null;
  const selectedEntity = value ? (state.restoreSlotEntities[kind] || getResourceEntity(value)) : null;
  const slotState = value ? "is-filled" : hintEntity ? "is-hint" : "";
  const slotLabel = hintEntity ? `${label}提示：${hintEntity.label}` : label;
  return `
    <button class="combo-slot ${slotState}" type="button" data-slot="${kind}" aria-label="${slotLabel}">
      ${value && selectedEntity ? tileFor(selectedEntity, "mini-object") : hintEntity ? tileFor(hintEntity, "mini-object") : label}
    </button>
  `;
}

function resourceCard(resource) {
  const entity = resource.kind === "modifier" ? modifiers[resource.id] : objects[resource.id];
  const selected = state.restoreSlots[resource.kind] === resource.resourceKey;
  return `
    <button class="resource-card ${selected ? "is-selected" : ""}" type="button" draggable="true" data-resource-key="${resource.resourceKey}" data-kind="${resource.kind}" aria-label="${entity.label}">
      ${tileContent(entity, "small-svg")}
      <span>${entity.label}</span>
    </button>
  `;
}

function shakeRestoreAnswerSlot(kind) {
  const slot = view.querySelector(`.restore-question-card [data-slot="${kind}"]`);
  if (!slot) return;
  slot.classList.remove("is-wrong");
  void slot.offsetWidth;
  slot.classList.add("is-wrong");
  window.setTimeout(() => slot.classList.remove("is-wrong"), 380);
}

function bindResourceEvents() {
  const task = findTasks[state.restoreIndex];
  if (state.restoreReflection && state.restoreReady && restoreComboMatchesTask(task)) return;

  if (state.category === "word") {
    view.querySelectorAll(".word-stage-two-resource-card[data-resource-key]").forEach((button) => {
      button.addEventListener("click", () => {
        const key = button.dataset.resourceKey;
        const resource = state.resources.find((item) => item.resourceKey === key);
        if (!resource) return;
        state.restoreSelectedResourceKey = null;
        playSound("drop");
        fillRestoreSlot(resource.kind, key);
      });
    });
    view.querySelectorAll("[data-slot]").forEach((slot) => {
      slot.addEventListener("click", () => {
        const slotKind = slot.dataset.slot;
        if (!state.restoreSlots[slotKind]) return;
        playSound("click");
        state.restoreSelectedResourceKey = null;
        state.restoreSlots[slotKind] = null;
        state.restoreSlotEntities[slotKind] = null;
        state.restoreReady = false;
        renderRestore();
      });
    });
    return;
  }

  view.querySelectorAll("[data-resource-key]").forEach((button) => {
    button.addEventListener("dragstart", (event) => {
      playSound("pick");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", JSON.stringify({ kind: button.dataset.kind, key: button.dataset.resourceKey }));
    });
  });

  view.querySelectorAll("[data-slot]").forEach((slot) => {
    slot.addEventListener("click", () => {
      playSound("click");
      state.restoreSlots[slot.dataset.slot] = null;
      state.restoreSlotEntities[slot.dataset.slot] = null;
      state.restoreReady = false;
      renderRestore();
    });
    slot.addEventListener("dragover", (event) => event.preventDefault());
    slot.addEventListener("dragenter", (event) => {
      event.preventDefault();
      slot.classList.add("is-over");
    });
    slot.addEventListener("dragleave", () => slot.classList.remove("is-over"));
    slot.addEventListener("drop", (event) => {
      event.preventDefault();
      event.stopPropagation();
      slot.classList.remove("is-over");
      const data = safeDragData(event);
      if (!data) return;
      if (data.kind !== slot.dataset.slot) {
        playSound("wrong");
        shakeRestoreAnswerSlot(slot.dataset.slot);
        if (slot.dataset.slot === "modifier") {
          setFeedback("这里先放“说明它是谁的或什么样的”的资源。");
        } else {
          setFeedback("这里放物品剪影资源。");
        }
        return;
      }
      playSound("drop");
      fillRestoreSlot(data.kind, data.key);
    });
  });
}

function fillRestoreSlot(kind, key) {
  const resource = state.resources.find((item) => item.resourceKey === key);
  if (!resource) return;

  state.restoreSlots[kind] = key;
  state.restoreSlotEntities[kind] = resource.kind === "modifier" ? modifiers[resource.id] : objects[resource.id];
  state.restoreReady = false;
  checkRestoreCombo();
  const wrongCombo = Boolean(state.restoreSlots.modifier && state.restoreSlots.object && !state.restoreReady);
  const wrongSlotKinds = wrongCombo
    ? [
        getResourceEntity(state.restoreSlots.modifier)?.id !== findTasks[state.restoreIndex].modId ? "modifier" : null,
        getResourceEntity(state.restoreSlots.object)?.id !== findTasks[state.restoreIndex].objId ? "object" : null
      ].filter(Boolean)
    : [];
  wrongSlotKinds.forEach((slotKind) => {
    state.restoreSlots[slotKind] = null;
    state.restoreSlotEntities[slotKind] = null;
  });
  renderRestore();
  wrongSlotKinds.forEach(shakeRestoreAnswerSlot);
}

function checkRestoreCombo() {
  const task = findTasks[state.restoreIndex];
  const mod = getResourceEntity(state.restoreSlots.modifier);
  const obj = getResourceEntity(state.restoreSlots.object);
  const isWordStageTwo = state.category === "word";
  if (!mod || !obj) {
    if (mod && !obj) {
      setFeedback(isWordStageTwo
        ? `“${mod.label}”说明资源已放好，继续点击任意物品资源。`
        : `“${mod.label}”说明资源已放好，请把物品资源拖到右侧“？”框。`);
    } else if (!mod && obj) {
      setFeedback(isWordStageTwo
        ? `“${obj.label}”物品资源已放好，继续点击任意说明资源。`
        : `“${obj.label}”物品资源已放好，请先把说明资源拖到左侧“？”框。`);
    } else {
      setFeedback(isWordStageTwo
        ? "点击任意说明资源或物品资源开始组合。"
        : "先拖一张说明资源，再拖一张物品资源。");
    }
    return;
  }

  if (mod.id === task.modId && obj.id === task.objId) {
    autoPlaceRestoreTask(task);
    return;
  }

  playSound("wrong");
  state.restoreReady = false;
  if (mod.type === "owner" && obj.id !== task.objId) {
    setFeedback(`${mod.label}头像说明东西属于${mod.label}。再找找要的是哪件东西。`);
    return;
  }
  if (obj.id === task.objId && mod.id !== task.modId) {
    setFeedback("物品对了，再看看它是谁的或什么样的。");
    return;
  }
  setFeedback("前面的说明资源和后面的物品资源还没有配好。");
}

function restoreComboMatchesTask(task) {
  if (!task) return false;
  const modifier = state.restoreSlots.modifier
    ? (state.restoreSlotEntities.modifier || getResourceEntity(state.restoreSlots.modifier))
    : null;
  const object = state.restoreSlots.object
    ? (state.restoreSlotEntities.object || getResourceEntity(state.restoreSlots.object))
    : null;
  return Boolean(modifier && object && modifier.id === task.modId && object.id === task.objId);
}

function autoPlaceRestoreTask(task) {
  stopRestoreBridgeCountdown();
  state.restoreSlotEntities = {
    modifier: getResourceEntity(state.restoreSlots.modifier),
    object: getResourceEntity(state.restoreSlots.object)
  };
  const usedResourceKeys = new Set(Object.values(state.restoreSlots).filter(Boolean));
  state.resources = state.resources.filter((resource) => !usedResourceKeys.has(resource.resourceKey));
  if (!state.restoredIds.includes(task.id)) state.restoredIds.push(task.id);
  state.restoreReady = true;
  state.restoreReflection = task.id;
  state.restoreReflectionSelection = null;
  state.restoreReflectionError = null;
  state.restoreLesson = null;
  state.carryingRestore = false;
  setFeedback(`${task.displayPhrase}，放好啦！先看一看。`);
  playSound("success");
  updateProgress();
}

function advanceRestoreAfterLesson() {
  stopRestoreLessonTimer();
  const task = findTasks[state.restoreIndex];
  setFeedback(`${task.restore.title}完成。${task.restore.focus}。`);
  state.restoreIndex += 1;
  state.restoreSlots = { modifier: null, object: null };
  state.restoreSlotEntities = { modifier: null, object: null };
  state.restoreSelectedResourceKey = null;
  state.restoreReady = false;
  state.restoreReflection = null;
  state.restoreReflectionSelection = null;
  state.restoreReflectionError = null;
  state.restoreLesson = null;
  state.carryingRestore = false;
  if (state.restoreIndex < findTasks.length) {
    startRestoreBridgeCountdown();
  } else {
    stopRestoreBridgeCountdown();
  }
  render();
}

function scheduleRestoreLessonAutoExit(task) {
  stopRestoreLessonTimer();
  restoreLessonTimer = window.setTimeout(() => {
    restoreLessonTimer = null;
    if (state.stage === "restore" && state.restoreLesson === task.id) {
      advanceRestoreAfterLesson();
    }
  }, SECOND_STAGE_LESSON_AUTO_EXIT_MS);
}

function phraseBookExampleHtml(actionId, objectId) {
  return `<div class="phrase-book-example"><span>${(phraseActions[actionId] || phraseTransferActionInfo[actionId]).label}</span><strong>${phraseObjects[objectId]?.label || phraseFruits[objectId]?.label || objectId}</strong></div>`;
}

function renderPhraseBook() {
  renderPhraseBookReference();
  return;
  /* Legacy CSS book kept below as a fallback reference during development. */
  state.phraseBookVisited = true;
  const inPicnic = state.phraseBookReturnStage === "phrase-transfer";
  const closeAction = state.phraseBookReturnStage ? "return" : "home";
  const closeLabel = state.phraseBookReturnStage ? "返回游戏" : "返回首页";
  const background = inPicnic
    ? `<div class="phrase-book-background phrase-book-picnic-background" aria-label="公园野餐场景"><div class="phrase-picnic-sky" aria-hidden="true"></div><div class="phrase-picnic-tree" aria-hidden="true"></div><div class="phrase-picnic-blanket" aria-hidden="true"></div><div class="phrase-picnic-basket" aria-hidden="true"></div><div class="phrase-book-banner">野餐协作中</div></div>`
    : `<div class="phrase-book-background" aria-label="整理完成的教室">${phraseClassroomDecorHtml()}<div class="phrase-book-banner">校园开放日准备完成</div></div>`;
  view.innerHTML = `
    <div class="phrase-book-canvas">
      ${background}
      <div class="book-corner-tools" aria-label="短语关卡第三阶段工具">
        <button class="book-tool-button book-back-button" type="button" data-phrase-book-action="home" aria-label="返回首页"><span class="book-tool-icon" aria-hidden="true">↩</span><span>返回</span></button>
        <button class="book-tool-button book-book-button" type="button" data-phrase-book-action="stay" aria-label="语法宝典"><span class="book-tool-icon book-tool-de" aria-hidden="true">词</span><span>语法宝典</span></button>
        <button class="book-tool-button book-sound-button" type="button" data-phrase-book-action="sound" aria-label="音乐按钮"><span class="book-tool-icon" aria-hidden="true">${state.sound ? "♪" : "×"}</span><span>音乐</span></button>
      </div>
      <section class="book-modal phrase-book-modal" role="dialog" aria-modal="true" aria-label="动宾短语语法宝典">
        <button class="book-modal-close" type="button" data-phrase-book-action="${closeAction}" aria-label="${closeLabel}"><span aria-hidden="true">×</span></button>
        <h2 class="book-modal-title">动宾短语宝典</h2>
        <div class="book-modal-content">
          <div class="book-rule-flow phrase-book-rule-flow" aria-label="动作加对象">
            <div class="book-rule-card"><div class="phrase-book-action-large">${phraseActionVisualHtml("wipe", "phrase-book-action-visual")}</div><strong>动作</strong></div>
            <div class="book-rule-bridge">+</div>
            <div class="book-rule-card is-object"><div class="phrase-book-object-large">${phraseObjectSvg("blackboard", "small-svg")}</div><strong>对象</strong></div>
          </div>
          <div class="book-explanation-list">
            <div class="book-explanation-item"><span class="book-explanation-index">1.</span><p><strong>意义：</strong>说明动作做了什么，或和什么事物有关。</p></div>
            <div class="book-explanation-item"><span class="book-explanation-index">2.</span><p><strong>规则：</strong>动词放前面，后面跟对象。</p></div>
            <div class="book-explanation-item"><span class="book-explanation-index">3.</span><p><strong>使用：</strong>把一件事怎么做说清楚。</p></div>
          </div>
          <div class="book-examples-title">例句</div>
          <div class="book-example-row phrase-book-example-row" aria-label="动宾短语例句">
            ${phraseBookExampleHtml("wipe", "blackboard")}
            ${phraseBookExampleHtml("arrange", "desks")}
            ${phraseBookExampleHtml("water", "flower")}
            ${phraseBookExampleHtml("move", "boxes")}
          </div>
          <button class="book-next-button" type="button" data-phrase-book-action="transfer">${state.phraseBookReturnStage ? "返回游戏" : "去野餐"}</button>
        </div>
      </section>
    </div>
  `;
  view.querySelectorAll("[data-phrase-book-action]").forEach((button) => button.addEventListener("click", () => {
    const action = button.dataset.phraseBookAction;
    if (action === "home") {
      setStage("home");
    }
    if (action === "return") {
      returnFromPhraseBook();
    }
    if (action === "transfer") {
      if (state.phraseBookReturnStage) returnFromPhraseBook();
      else startPhraseTransfer();
    }
    if (action === "sound") toggleSound(renderPhraseBook);
  }));
  setFeedback("动词在前面，对象在后面。一起去野餐试一试吧！");
}

function renderPhraseBookReference() {
  state.phraseBookVisited = true;
  view.innerHTML = `
    <div class="phrase-reference-stage">
      <img class="phrase-reference-background" src="${PHRASE_STAGE_THREE_ASSETS.background}" alt="教室背景">
      <div class="phrase-reference-dim" aria-hidden="true"></div>
      <div class="phrase-reference-dock" aria-label="资源栏">
        <span class="phrase-reference-dock-part phrase-reference-dock-left" aria-hidden="true"></span>
        <span class="phrase-reference-dock-part phrase-reference-dock-right" aria-hidden="true"></span>
      </div>
      <div class="phrase-reference-tools" aria-label="第三阶段工具">
        <button class="phrase-reference-tool phrase-reference-tool-back" type="button" data-phrase-book-reference-action="home" aria-label="返回首页"><img src="${PHRASE_STAGE_THREE_ASSETS.back}" alt=""></button>
        <div class="phrase-reference-tool-right">
          <button class="phrase-reference-tool" type="button" data-phrase-book-reference-action="stay" aria-label="语法宝典"><img src="${PHRASE_STAGE_THREE_ASSETS.book}" alt=""></button>
          <button class="phrase-reference-tool" type="button" data-phrase-book-reference-action="sound" aria-label="音乐"><img src="${PHRASE_STAGE_THREE_ASSETS.sound}" alt=""></button>
        </div>
      </div>
      ${stageInstructionHtml("three")}
      <img class="phrase-reference-image phrase-reference-scroll" src="${PHRASE_STAGE_THREE_ASSETS.scroll}" alt="动宾短语语法宝典">
      <button class="phrase-reference-hit phrase-reference-next" type="button" data-phrase-book-reference-action="transfer" aria-label="进入下一阶段"><img src="${PHRASE_STAGE_THREE_ASSETS.next}" alt=""></button>
    </div>
  `;
  view.querySelectorAll("[data-phrase-book-reference-action]").forEach((button) => button.addEventListener("click", () => {
    const action = button.dataset.phraseBookReferenceAction;
    if (action === "home") setStage("home");
    if (action === "return") returnFromPhraseBook();
    if (action === "transfer") state.phraseBookReturnStage === "phrase-transfer" ? returnFromPhraseBook() : startPhraseTransfer();
    if (action === "sound") toggleSound(renderPhraseBookReference);
  }));
  setFeedback("动词在前面，对象在后面。一起去野餐试一试吧！");
  playStageThreeNarration("phrase");
}

function renderBook() {
  state.bookVisited = true;
  stopRestoreBridgeCountdown();
  view.innerHTML = `
    <div class="word-stage-three-canvas">
      <div class="word-stage-three-background" aria-label="整理完成的房间">
        <div class="word-stage-two-background" aria-hidden="true"></div>
        ${wordStageTwoReferenceObjectsHtml()}
        ${wordStageTwoPlacedObjectsHtml()}
      </div>
      <div class="word-stage-three-resource-dock" aria-hidden="true"></div>
      <div class="word-stage-three-dim" aria-hidden="true"></div>
      <div class="word-stage-three-tools" aria-label="第三阶段工具">
        <button class="word-stage-three-tool word-stage-three-back" type="button" data-book-action="home" aria-label="返回首页"><img src="${WORD_STAGE_THREE_ASSETS.back}" alt=""></button>
        <div class="word-stage-three-right-tools">
          <button class="word-stage-three-tool" type="button" data-book-action="stay" aria-label="语法宝典"><img src="${WORD_STAGE_THREE_ASSETS.book}" alt=""></button>
          <button class="word-stage-three-tool" type="button" data-book-action="sound" aria-label="音乐按钮"><img src="${WORD_STAGE_THREE_ASSETS.sound}" alt=""></button>
        </div>
      </div>
      ${stageInstructionHtml("three")}
      <img class="word-stage-three-scroll" src="${WORD_STAGE_THREE_ASSETS.scroll}" alt="语法宝典：说明词放在的前面，物品放在的后面">
      <button class="word-stage-three-next" type="button" data-book-action="next" aria-label="去整理书包"><img src="${WORD_STAGE_THREE_ASSETS.next}" alt=""></button>
    </div>
  `;
  view.querySelectorAll("[data-book-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.bookAction;
      if (action === "home") setStage("home");
      if (action === "next") setStage("transfer");
      if (action === "sound") {
        state.sound = !state.sound;
        soundToggle.setAttribute("aria-pressed", String(state.sound));
        soundToggle.querySelector("span").textContent = state.sound ? "♪" : "×";
        if (!state.sound && "speechSynthesis" in window) window.speechSynthesis.cancel();
        if (state.sound) stageThreeNarrationKey = null;
        renderBook();
      }
    });
  });
  setFeedback("看看“的”前后，拼出完整的短语。");
  playStageThreeNarration("word");
}

function bookLinesHtml() {
  const completed = state.restoredIds.length;
  const lines = [];

  if (completed >= 1) lines.push("黄色的铅笔");
  if (completed >= 2) lines.push("____ + 的 + ____");
  if (completed >= 3) lines.push("颜色/状态 + 的 + 物品");
  if (completed >= 4) lines.push("人物 + 的 + 物品");
  if (completed >= 7) {
    lines.push("修饰 + 的 + 物品");
    lines.push("“谁”或“什么样” + 的 + 对象");
  }

  if (!lines.length) return `<div class="book-empty">组合成功后，规则会写进宝典</div>`;
  return `<div class="book-list">${lines.map((line, index) => `<div class="book-line ${index === lines.length - 1 ? "is-new" : ""}">${phraseHtml(line)}</div>`).join("")}</div>`;
}

function phraseTransferResultVisualHtml(task, optionText = "", showLabel = !optionText) {
  const fruitId = task.object || "apple";
  const label = optionText || task.prompt;
  const isPrompt = !optionText;
  const grapeState = task.id === "wash-grape-result"
    ? optionText.includes("干净") ? "clean" : optionText.includes("切开") ? "cut" : optionText.includes("泥") ? "dirty" : "resource"
    : "resource";
  const visual = label.includes("橙汁") ? `<span class="phrase-juice-cup" aria-hidden="true"><i></i></span>`
    : label.includes("西瓜") ? phraseFruitSvg("watermelon", "small-svg")
      : label.includes("葡萄") ? phraseFruitSvg("grape", "small-svg", grapeState)
        : label.includes("苹果") ? phraseFruitSvg("apple", "small-svg", task.id === "wash-apple" && isPrompt ? "clean" : "resource")
          : label.includes("香蕉") ? phraseFruitSvg("banana", "small-svg")
            : label.includes("草莓") ? phraseFruitSvg("strawberry", "small-svg")
              : label.includes("梨") ? phraseFruitSvg("pear", "small-svg")
                : phraseFruitSvg(fruitId, "small-svg");
  const internalLabel = showLabel && !(task.id === "wash-apple" && isPrompt) ? `<span>${label}</span>` : "";
  return `<div class="phrase-transfer-result-art" aria-label="${label}">${visual}${internalLabel}</div>`;
}

function phraseTransferSituationHtml(task) {
  if (task.id === "take-banana") {
    return `<div class="phrase-transfer-situation-art phrase-transfer-want-art" aria-label="妹妹想剥香蕉"><div class="phrase-transfer-person-art">${avatarSvg("sister", "small-svg")}</div><span class="phrase-transfer-situation-heart" aria-hidden="true">♥</span>${phraseFruitSvg("banana", "small-svg")}</div>`;
  }
  return "";
}

function phraseTransferActionOptionHtml(id, task) {
  const info = phraseTransferActionInfo[id] || phraseActions[id] || { label: id, color: "#9a83d7" };
  const selected = state.phraseTransferSelections.action === id;
  return `<button class="phrase-transfer-choice-card ${selected ? "is-selected" : ""}" type="button" data-phrase-transfer-choice-kind="action" data-phrase-transfer-choice-id="${id}" aria-label="选择动作${info.label}">${phraseActionVisualHtml(id, "phrase-choice-action")}<span>${info.label}</span></button>`;
}

function phraseTransferObjectOptionHtml(id, task) {
  const entity = phraseFruits[id];
  const selected = state.phraseTransferSelections.object === id;
  return `<button class="phrase-transfer-choice-card ${selected ? "is-selected" : ""}" type="button" data-phrase-transfer-choice-kind="object" data-phrase-transfer-choice-id="${id}" aria-label="选择水果${entity.label}">${phraseFruitSvg(id, "small-svg")}<span>${entity.label}</span></button>`;
}

function phraseTransferDropSlotHtml(kind, label) {
  const selectedId = state.phraseTransferSelections[kind];
  const entity = selectedId ? kind === "action" ? phraseTransferActionInfo[selectedId] || phraseActions[selectedId] : phraseFruits[selectedId] : null;
  const visual = entity ? kind === "action" ? phraseActionVisualHtml(selectedId, "phrase-slot-action") : phraseFruitSvg(selectedId, "small-svg") : "";
  return `<button class="phrase-transfer-drop-slot ${entity ? "is-filled" : ""} ${state.phraseErrorTargets.includes(kind) ? "is-wrong" : ""}" type="button" data-phrase-transfer-drop-slot="${kind}" aria-label="${entity ? `${label}：${entity.label}` : `把${label}拖到这里`}">${visual}${entity ? `<span>${entity.label}</span>` : ""}</button>`;
}

function sortingQuestionLabelHtml() {
  return `<span class="sorting-question-label">排序题</span>`;
}

function phraseTransferPromptHtml(task) {
  const situation = phraseTransferSituationHtml(task);
  if (situation) return situation;
  if (task.id === "take-strawberry") {
    return `<div class="transfer-text-prompt phrase-transfer-text-prompt">${task.prompt}</div>`;
  }
  if (["select-pair", "drag-resources"].includes(task.type)) {
    const showLabel = task.id !== "cut-watermelon";
    return `<div class="transfer-task-visual phrase-transfer-task-visual">${phraseTransferResultVisualHtml(task, "", showLabel)}</div>`;
  }
  return `<div class="transfer-text-prompt phrase-transfer-text-prompt">${task.prompt}</div>`;
}

function phraseTransferResourceAnswerHtml(task) {
  if (task.type === "select-pair") {
    return `<div class="phrase-transfer-pair-answer"><div class="phrase-transfer-option-groups"><section><h3>动作资源</h3><div class="phrase-transfer-choice-row">${task.actionOptions.map((id) => phraseTransferActionOptionHtml(id, task)).join("")}</div></section><section><h3>水果资源</h3><div class="phrase-transfer-choice-row">${task.objectOptions.map((id) => phraseTransferObjectOptionHtml(id, task)).join("")}</div></section></div></div>`;
  }
  return `<div class="phrase-transfer-drag-answer"><div class="phrase-transfer-option-groups"><section><h3>动作资源</h3><div class="phrase-transfer-choice-row">${task.actionOptions.map((id) => phraseTransferDragResourceHtml("action", id)).join("")}</div></section><section><h3>水果资源</h3><div class="phrase-transfer-choice-row">${task.objectOptions.map((id) => phraseTransferDragResourceHtml("object", id)).join("")}</div></section></div></div>`;
}

function phraseTransferMainCombinationHtml(task) {
  return `<div class="phrase-transfer-main-combination phrase-transfer-combination" aria-label="组合答题区"><div class="phrase-transfer-drop-row">${phraseTransferDropSlotHtml("action", "动作") }<span>+</span>${phraseTransferDropSlotHtml("object", "水果")}</div>${state.phraseTransferReady ? `<strong>${phraseHtml(task.phrase)}</strong>` : ""}</div>`;
}

function phraseTransferDragResourceHtml(kind, id) {
  const entity = kind === "action" ? phraseTransferActionInfo[id] || phraseActions[id] : phraseFruits[id];
  const visual = kind === "action" ? phraseActionVisualHtml(id, "phrase-choice-action") : phraseFruitSvg(id, "small-svg");
  return `<button class="phrase-transfer-drag-card" type="button" draggable="true" data-phrase-transfer-resource-kind="${kind}" data-phrase-transfer-resource-id="${id}" aria-label="拖动${entity.label}">${visual}<span>${entity.label}</span></button>`;
}

function phraseTransferResultChoiceHtml(task) {
  return `<div class="phrase-transfer-option-answer"><p class="transfer-answer-hint">选择动作完成后的结果</p><div class="phrase-transfer-result-options">${task.options.map((option, index) => `<button class="phrase-transfer-result-option ${state.phraseTransferOption === index ? "is-selected" : ""} ${state.phraseErrorTargets.includes(`option-${index}`) ? "is-wrong" : ""}" type="button" data-phrase-result-option="${index}"><span class="phrase-transfer-result-letter">${String.fromCharCode(65 + index)}</span>${phraseTransferResultVisualHtml(task, option)}<span>${option}</span></button>`).join("")}</div></div>`;
}

function phraseTransferTextChoiceHtml(task) {
  return `<div class="phrase-transfer-text-answer"><p class="transfer-answer-hint">选出正确的动宾短语</p><div class="phrase-transfer-text-options">${task.options.map((option, index) => `<button class="transfer-option ${state.phraseTransferOption === index ? "is-selected" : ""} ${state.phraseErrorTargets.includes(`option-${index}`) ? "is-wrong" : ""}" type="button" data-phrase-text-option="${index}"><span class="transfer-option-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span></button>`).join("")}</div></div>`;
}

function ensurePhraseTransferCardOrder(task) {
  const isCurrent = state.phraseTransferCardOrder.length === task.cards.length && task.cards.every((word) => state.phraseTransferCardOrder.includes(word));
  if (isCurrent) return;
  state.phraseTransferCardOrder = [...task.cards];
  for (let index = state.phraseTransferCardOrder.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [state.phraseTransferCardOrder[index], state.phraseTransferCardOrder[randomIndex]] = [state.phraseTransferCardOrder[randomIndex], state.phraseTransferCardOrder[index]];
  }
}

function phraseTransferReorderHtml(task) {
  ensurePhraseTransferCardOrder(task);
  return `<div class="phrase-transfer-reorder-answer">${sortingQuestionLabelHtml()}<div class="phrase-transfer-reorder-row ${state.phraseErrorTargets.includes("reorder") ? "is-wrong" : ""}">${state.phraseTransferCardOrder.map((word, index) => `<button class="transfer-word-card ${word === task.distractor ? "is-distractor" : ""}" type="button" draggable="true" data-phrase-reorder-index="${index}">${word}</button>`).join("")}</div><button class="transfer-check-button" type="button" data-phrase-submit-reorder="true">排好啦</button></div>`;
}

function renderPhraseTransfer() {
  renderPhraseTransferReference();
  return;
  if (state.phraseTransferredIds.length === phraseTransferTasks.length) {
    view.innerHTML = `<div class="transfer-complete-screen"><div class="transfer-complete-card"><h2>短语关卡完成</h2><p>你会把动作和对象说清楚啦！</p><button id="phraseFinishHome" class="primary-button" type="button">返回首页</button></div></div>`;
    document.getElementById("phraseFinishHome").addEventListener("click", () => setStage("home"));
    return;
  }
  const task = phraseTransferTasks[state.phraseTransferIndex];
  const isResourceTask = ["select-pair", "drag-resources"].includes(task.type);
  const isReorderTask = task.type === "reorder";
  const answer = task.type === "select-pair" || task.type === "drag-resources"
    ? phraseTransferResourceAnswerHtml(task)
    : task.type === "result-choice" ? phraseTransferResultChoiceHtml(task)
      : task.type === "text-choice" ? phraseTransferTextChoiceHtml(task)
        : phraseTransferReorderHtml(task);
  view.innerHTML = `
    <div class="transfer-canvas phrase-transfer-canvas">
      <div class="transfer-corner-tools" aria-label="短语关卡第四阶段工具">
        <button class="transfer-tool-button transfer-back-button" type="button" data-phrase-transfer-action="home" aria-label="返回首页"><span class="transfer-tool-icon" aria-hidden="true">↩</span><span>返回</span></button>
        <button class="transfer-tool-button transfer-book-button" type="button" data-phrase-transfer-action="book" aria-label="语法宝典"><span class="transfer-tool-icon transfer-tool-de" aria-hidden="true">词</span><span>语法宝典</span></button>
        <button class="transfer-tool-button transfer-sound-button" type="button" data-phrase-transfer-action="sound" aria-label="音乐按钮"><span class="transfer-tool-icon" aria-hidden="true">${state.sound ? "♪" : "×"}</span><span>音乐</span></button>
      </div>
      <section class="transfer-scene phrase-picnic-scene" aria-label="公园野餐场景">
        <div class="phrase-picnic-sky" aria-hidden="true"></div><div class="phrase-picnic-tree" aria-hidden="true"></div><div class="phrase-picnic-blanket" aria-hidden="true"></div><div class="phrase-picnic-basket" aria-hidden="true"></div>
        <section class="transfer-task-panel phrase-transfer-task-panel ${isResourceTask ? "has-combination" : ""} ${isReorderTask ? "has-reorder-answer" : ""}" aria-label="野餐任务">
          ${phraseTransferPromptHtml(task)}
          ${isResourceTask ? phraseTransferMainCombinationHtml(task) : ""}
          ${isReorderTask ? answer : ""}
        </section>
      </section>
      ${isReorderTask ? "" : `<section class="transfer-answer-zone phrase-transfer-answer-zone ${state.phraseError ? "has-error" : ""}" aria-label="答题区">${answer}${state.phraseError ? `<p class="transfer-error-feedback phrase-transfer-error" role="alert"><span>${state.phraseErrorTopic}：</span>${state.phraseError}</p>` : ""}</section>`}
    </div>
  `;
  bindPhraseTransferEvents();
}

function phraseReferenceHotspot(className, action, label, extra = "") {
  return `<button class="phrase-stage4-hit ${className}" type="button" data-phrase-stage4-action="${action}" aria-label="${label}" ${extra}></button>`;
}

function phraseStage4FruitHtml(id, status = "initial", animate = false, isCurrent = false) {
  const stateInfo = phraseStage4FruitStates[id];
  if (!stateInfo) return "";
  const { initial, final } = stateInfo;
  const isInitial = status === "initial";
  const position = isInitial ? initial : final;
  const asset = isInitial ? stateInfo.initialAsset : stateInfo.asset;
  const width = position.width || 100;
  const height = position.height || 100;
  const style = `left:${position.left}px;top:${position.top}px;width:${width}px;height:${height}px;--fruit-from-x:${initial.left - final.left}px;--fruit-from-y:${initial.top - final.top}px;`;
  return `<div class="phrase-stage4-fruit phrase-stage4-fruit-${status} ${animate ? "is-animating" : ""} ${isCurrent ? "is-current" : ""}" data-phrase-stage4-fruit="${id}" style="${style}" aria-label="${phraseFruits[id]?.label || id}${isInitial ? "的初始状态" : "的完成状态"}"><img src="${asset}" alt="${phraseFruits[id]?.label || id}${isInitial ? "的初始状态" : "的完成状态"}"></div>`;
}

function phraseStage4ToolsHtml() {
  return `<div class="phrase-stage4-tools" aria-label="短语知识第四阶段工具">
    <button type="button" data-phrase-stage4-action="home" aria-label="返回首页"><img src="${WORD_STAGE_ONE_ASSETS.back}" alt=""></button>
    <div>
      <button type="button" data-phrase-stage4-action="book" aria-label="语法宝典"><img src="${WORD_STAGE_ONE_ASSETS.book}" alt=""></button>
      <button type="button" data-phrase-stage4-action="sound" aria-label="音乐按钮"><img src="${WORD_STAGE_ONE_ASSETS.sound}" alt=""></button>
    </div>
  </div>`;
}

function stageFourGrammarOverlayHtml(art, label, category) {
  const grammarArt = category === "sentence"
    ? `<div class="stage-four-grammar-sentence-art"><img src="${art}" alt="${label}"></div>`
    : `<img class="stage-four-grammar-art" src="${art}" alt="${label}">`;
  return `<div class="stage-four-grammar-overlay" role="dialog" aria-modal="true" aria-label="${label}">
    <button class="stage-four-grammar-dismiss" type="button" data-stage-four-book-close="${category}" aria-label="关闭语法宝典"></button>
    ${grammarArt}
    <button class="stage-four-grammar-close" type="button" data-stage-four-book-close="${category}" aria-label="关闭语法宝典"><img src="${STAGE_FOUR_CLOSE_ASSET}" alt=""></button>
  </div>`;
}

function phraseStage4ActionAsset(task, id) {
  return task?.id === "take-strawberry" && id === "take"
    ? PHRASE_STAGE_FOUR_ASSETS.actions.juice
    : PHRASE_STAGE_FOUR_ASSETS.actions[id];
}

function phraseStage4ResourceButtonHtml(kind, id, label, assetOverride = null) {
  const asset = assetOverride || (kind === "action" ? PHRASE_STAGE_FOUR_ASSETS.actions[id] : PHRASE_STAGE_FOUR_ASSETS.objects[id]);
  const pearClass = kind === "object" && id === "pear" ? " is-pear" : "";
  const selectedClass = state.phraseTransferSelections[kind] === id ? " is-selected" : "";
  return `<button class="phrase-stage4-resource${pearClass}${selectedClass}" type="button" data-phrase-stage4-resource-kind="${kind}" data-phrase-stage4-resource-id="${id}" aria-label="选择${label}"><img src="${asset}" alt="${label}"><span class="phrase-stage4-resource-name">${label}</span></button>`;
}

function phraseStage4ResourceDockHtml(task) {
  const actionIds = task.actionOptions || ["wash", "cut", "peel"];
  const objectIds = task.objectOptions || ["watermelon", "apple", "banana"];
  const actions = actionIds.map((id) => {
    const assetOverride = phraseStage4ActionAsset(task, id);
    return phraseStage4ResourceButtonHtml("action", id, phraseTransferActionInfo[id]?.label || id, assetOverride);
  }).join("");
  const objects = objectIds.map((id) => phraseStage4ResourceButtonHtml("object", id, phraseFruits[id]?.label || id)).join("");
  return `<div class="phrase-stage4-resource-dock" aria-label="动作资源和对象资源">
    <img class="phrase-stage4-resource-dock-frame" src="${PHRASE_STAGE_FOUR_ASSETS.resourceDock}" alt="动作资源和对象资源">
    <div class="phrase-stage4-resource-list phrase-stage4-action-list">${actions}</div>
    <div class="phrase-stage4-resource-list phrase-stage4-object-list">${objects}</div>
  </div>`;
}

function phraseStage4OptionStripHtml(asset, optionCount, label) {
  return `<div class="phrase-stage4-option-strip" aria-label="${label}">
    <img src="${asset}" alt="">
    <div class="phrase-stage4-option-strip-hits">${Array.from({ length: optionCount }, (_, index) => `<button class="phrase-stage4-option-hit ${state.phraseTransferOption === index ? "is-selected" : ""}" type="button" data-phrase-stage4-option-index="${index}" aria-label="选项${String.fromCharCode(65 + index)}"></button>`).join("")}</div>
  </div>`;
}

function phraseStage4SingleResultDockHtml() {
  const choices = [
    { id: "grape-dirty", label: "还带泥点的葡萄" },
    { id: "grape-cut", label: "切开的葡萄" },
    { id: "grape-clean", label: "干净葡萄" }
  ];
  return `<div class="phrase-stage4-single-result-dock" aria-label="葡萄结果资源">
    <img class="phrase-stage4-single-result-frame" src="${PHRASE_STAGE_FOUR_ASSETS.singleResourceDock}" alt="结果资源">
    <div class="phrase-stage4-single-result-list">${choices.map((choice, index) => `<button class="phrase-stage4-single-result-choice ${state.phraseTransferOption === index ? "is-selected" : ""}" type="button" data-phrase-stage4-option-index="${index}" aria-label="${choice.label}"><img src="${PHRASE_STAGE_FOUR_ASSETS.objects[choice.id]}" alt="${choice.label}"></button>`).join("")}</div>
  </div>`;
}

function phraseStage4PromptSlotHtml(kind, task) {
  const id = state.phraseTransferSelections[kind];
  const src = id
    ? kind === "action" ? phraseStage4ActionAsset(task, id) : PHRASE_STAGE_FOUR_ASSETS.objects[id]
    : PHRASE_STAGE_FOUR_ASSETS.questionMark;
  const label = id
    ? kind === "action" ? phraseTransferActionInfo[id]?.label : phraseFruits[id]?.label
    : "待选择";
  return `<button class="phrase-stage4-prompt-slot ${id ? "is-filled" : ""}" type="button" data-phrase-stage4-drop-kind="${kind}" aria-label="${label}"><img src="${src}" alt="${label}"></button>`;
}

function phraseStage4TaskArtHtml(task) {
  const art = PHRASE_STAGE_FOUR_ASSETS.taskArt[task.id];
  if (!art) return "";
  const pair = task.type === "select-pair" || task.type === "drag-resources";
  if (!pair) return `<div class="phrase-stage4-task-art phrase-stage4-task-art-text ${task.id}"><img src="${art}" alt="${task.prompt || task.phrase}"></div>`;
  return `<div class="phrase-stage4-task-art phrase-stage4-task-art-pair ${task.id}">
    <img src="${art}" alt="${task.prompt || task.phrase}">
    <div class="phrase-stage4-prompt-slots">${phraseStage4PromptSlotHtml("action", task)}${phraseStage4PromptSlotHtml("object", task)}</div>
  </div>`;
}

function phraseStage4ResultChoiceHtml(task) {
  if (task.id === "wash-grape-result") return phraseStage4SingleResultDockHtml();
  if (task.id === "juice-orange-result") return phraseStage4OptionStripHtml(PHRASE_STAGE_FOUR_ASSETS.optionArt.orange, 3, "榨橙汁选项");
  return "";
}

function phraseStage4TextChoiceHtml(task) {
  if (task.id === "cut-pear-text") return phraseStage4OptionStripHtml(PHRASE_STAGE_FOUR_ASSETS.optionArt.pear, 3, "切梨选项");
  return `<div class="phrase-stage4-choice-panel phrase-stage4-text-choice-panel" aria-label="选择正确短语">${task.options.map((option, index) => `<button class="phrase-stage4-choice ${state.phraseTransferOption === index ? "is-selected" : ""} ${state.phraseErrorTargets.includes("option-" + index) ? "is-wrong" : ""}" type="button" data-phrase-stage4-option-index="${index}"><span>${String.fromCharCode(65 + index)}</span><strong>${option}</strong></button>`).join("")}</div>`;
}

function phraseStage4OrderHtml(task) {
  ensurePhraseTransferCardOrder(task);
  return `<div class="phrase-stage4-order-panel">${sortingQuestionLabelHtml()}<div class="phrase-stage4-order-row ${state.phraseErrorTargets.includes("reorder") ? "is-wrong" : ""}">${state.phraseTransferCardOrder.map((word, index) => `<button class="phrase-stage4-order-card transfer-word-card ${word === task.distractor ? "is-distractor" : ""}" type="button" draggable="true" data-phrase-reorder-index="${index}">${word}</button>`).join("")}</div><button class="phrase-stage4-order-submit" type="button" data-phrase-submit-reorder="true">排好啦</button></div>`;
}

function phraseStage4AnswerHtml(task) {
  if (task.type === "result-choice") return phraseStage4ResultChoiceHtml(task);
  if (task.type === "text-choice") return phraseStage4TextChoiceHtml(task);
  if (task.type === "reorder") return phraseStage4OrderHtml(task);
  return "";
}

function renderPhraseTransferStage4Scene() {
  const index = state.phraseTransferIndex;
  if (state.phraseTransferredIds.length >= phraseTransferTasks.length || state.phraseTransferIndex >= phraseTransferTasks.length) {
    const finalFruitIds = Object.keys(phraseStage4FruitStates);
    view.innerHTML = `<div class="phrase-stage4-reference phrase-stage4-composed is-complete"><img class="phrase-stage4-background" src="${PHRASE_STAGE_FOUR_ASSETS.background}" alt="野餐场景">${finalFruitIds.map((id) => phraseStage4FruitHtml(id, "final")).join("")}${phraseStage4ToolsHtml()}${stageInstructionHtml("four")}${state.phraseTransferBookOpen ? stageFourGrammarOverlayHtml(PHRASE_STAGE_THREE_ASSETS.scroll, "动宾短语语法宝典", "phrase") : ""}</div>`;
    bindPhraseTransferReferenceEvents();
    return;
  }
  const task = phraseTransferTasks[index];
  const completedFruitIds = state.phraseTransferredIds.map((id) => phraseStage4TaskFruit[id]).filter(Boolean);
  const currentFruitId = state.phraseTransferReady ? phraseStage4TaskFruit[task.id] : null;
  const fruits = Object.keys(phraseStage4FruitStates).map((id) => {
    const isComplete = completedFruitIds.includes(id) || id === currentFruitId;
    const isCurrent = id === phraseStage4TaskFruit[task.id] && !isComplete;
    return phraseStage4FruitHtml(id, isComplete ? "final" : "initial", id === currentFruitId && !completedFruitIds.includes(id), isCurrent);
  }).join("");
  const answer = phraseStage4AnswerHtml(task);
  const resourceDock = task.type === "select-pair" || task.type === "drag-resources" ? phraseStage4ResourceDockHtml(task) : "";
  const feedback = state.phraseError ? stageFourFeedbackHtml("phrase", state.phraseErrorTopic) : "";
  const answerLayer = answer ? `<div class="phrase-stage4-answer-layer">${answer}</div>` : "";
  view.innerHTML = `<div class="phrase-stage4-reference phrase-stage4-composed phrase-stage4-task-${index + 1}"><img class="phrase-stage4-background" src="${PHRASE_STAGE_FOUR_ASSETS.background}" alt="野餐场景">${fruits}${phraseStage4ToolsHtml()}${stageInstructionHtml("four")}<div class="phrase-stage4-task-layer">${phraseStage4TaskArtHtml(task)}${answerLayer}</div>${resourceDock}${feedback}${state.phraseTransferBookOpen ? stageFourGrammarOverlayHtml(PHRASE_STAGE_THREE_ASSETS.scroll, "动宾短语语法宝典", "phrase") : ""}</div>`;
  bindPhraseTransferReferenceEvents();
}

function renderPhraseTransferReference() {
  return renderPhraseTransferStage4Scene();
  const index = state.phraseTransferIndex;
  if (state.phraseTransferredIds.length >= phraseTransferTasks.length) {
    view.innerHTML = `<div class="phrase-stage4-reference phrase-stage4-composed"><img class="phrase-stage4-background" src="${PHRASE_STAGE_FOUR_ASSETS.background}" alt="野餐场景"><div class="phrase-stage4-family">${avatarSvg("father", "small-svg")}${avatarSvg("brother", "small-svg")}${avatarSvg("sister", "small-svg")}${avatarSvg("mother", "small-svg")}</div><div class="phrase-stage4-complete-message">短语知识完成</div><button class="phrase-stage4-hit phrase-stage4-back-hit" type="button" data-phrase-stage4-action="home" aria-label="返回首页"></button></div>`;
    bindPhraseTransferReferenceEvents();
    return;
  }
  const task = phraseTransferTasks[index];
  const isPair = index < 4;
  const isResult = index === 4;
  const actionIds = index === 1 || index === 3 ? ["wash", "cut", "take"] : index === 2 ? ["wash", "cut", "peel"] : ["wash", "cut", "peel"];
  const actionHotspots = isPair ? actionIds.map((id, n) => phraseReferenceHotspot(`phrase-stage4-action-${n + 1}`, "resource-action", `动作${id}`, `data-resource-kind="action" data-resource-id="${id}" draggable="true"`)).join("") : "";
  const objectIds = index === 0 ? ["watermelon", "apple", "banana"] : index === 1 ? ["watermelon", "orange", "grape"] : ["strawberry", "orange", "banana"];
  const objectHotspots = isPair ? objectIds.map((id, n) => phraseReferenceHotspot(`phrase-stage4-object-${n + 1}`, "resource-object", `水果${id}`, `data-resource-kind="object" data-resource-id="${id}" draggable="true"`)).join("") : "";
  const pairDropSlots = isPair ? `${phraseReferenceHotspot("phrase-stage4-drop-action", "drop-action", "动作放置处", "data-drop-kind=\"action\"")} ${phraseReferenceHotspot("phrase-stage4-drop-object", "drop-object", "水果放置处", "data-drop-kind=\"object\"")}` : "";
  const optionHotspots = !isPair ? [0, 1, 2].map((n) => phraseReferenceHotspot(`phrase-stage4-option-${n + 1}`, "option", `选项${n + 1}`, `data-option-index="${n}"`)).join("") : "";
  const taskVisual = phraseTransferPromptHtml(task);
  view.innerHTML = `<div class="phrase-stage4-reference phrase-stage4-composed phrase-stage4-task-${index}"><img class="phrase-stage4-background" src="${PHRASE_STAGE_FOUR_ASSETS.background}" alt="野餐场景"><div class="phrase-stage4-family">${avatarSvg("father", "small-svg")}${avatarSvg("brother", "small-svg")}${avatarSvg("sister", "small-svg")}${avatarSvg("mother", "small-svg")}</div><div class="phrase-stage4-composed-task">${taskVisual}</div><div class="phrase-stage4-composed-dock"><strong>动作资源</strong><strong>对象资源</strong></div>${actionHotspots}${objectHotspots}${pairDropSlots}${optionHotspots}${phraseReferenceHotspot("phrase-stage4-back-hit", "home", "返回首页")}</div>`;
  bindPhraseTransferReferenceEvents();
}

function bindPhraseTransferStage4SceneEvents() {
  view.querySelectorAll('[data-stage-four-book-close="phrase"]').forEach((button) => button.addEventListener("click", () => {
    state.phraseTransferBookOpen = false;
    renderPhraseTransfer();
  }));
  view.querySelectorAll("[data-phrase-stage4-action]").forEach((button) => button.addEventListener("click", () => {
    const action = button.dataset.phraseStage4Action;
    if (action === "home") setStage("home");
    if (action === "book") {
      state.phraseTransferBookOpen = true;
      renderPhraseTransfer();
    }
    if (action === "sound") toggleSound(renderPhraseTransfer);
  }));
  view.querySelectorAll("[data-phrase-stage4-resource-kind]").forEach((button) => {
    button.addEventListener("click", () => {
      clearPhraseError();
      state.phraseTransferSelections[button.dataset.phraseStage4ResourceKind] = button.dataset.phraseStage4ResourceId;
      checkPhraseTransferPair();
    });
  });
  view.querySelectorAll("[data-phrase-stage4-drop-kind]").forEach((slot) => {
    slot.addEventListener("click", () => {
      const kind = slot.dataset.phraseStage4DropKind;
      if (!state.phraseTransferSelections[kind]) return;
      state.phraseTransferSelections[kind] = null;
      clearPhraseError();
      renderPhraseTransfer();
    });
  });
  view.querySelectorAll("[data-phrase-stage4-option-index]").forEach((button) => button.addEventListener("click", () => selectPhraseTransferOption(Number(button.dataset.phraseStage4OptionIndex))));
  bindPhraseTransferEvents();
}

function bindPhraseTransferReferenceEvents() {
  bindPhraseTransferStage4SceneEvents();
  return;
  view.querySelectorAll("[data-phrase-stage4-action=home]").forEach((button) => button.addEventListener("click", () => setStage("home")));
  view.querySelectorAll("[data-resource-kind]").forEach((button) => {
    button.addEventListener("click", () => {
      state.phraseTransferSelections[button.dataset.resourceKind] = button.dataset.resourceId;
      checkPhraseTransferPair();
    });
    button.addEventListener("dragstart", (event) => {
      event.dataTransfer.effectAllowed = "copy";
      event.dataTransfer.setData("text/plain", JSON.stringify({ kind: button.dataset.resourceKind, id: button.dataset.resourceId }));
      button.classList.add("is-dragging");
    });
    button.addEventListener("dragend", () => button.classList.remove("is-dragging"));
  });
  view.querySelectorAll("[data-drop-kind]").forEach((slot) => {
    slot.addEventListener("dragover", (event) => event.preventDefault());
    slot.addEventListener("drop", (event) => {
      event.preventDefault();
      const data = safeDragData(event);
      const kind = slot.dataset.dropKind;
      if (!data || data.kind !== kind) { playSound("wrong"); return; }
      state.phraseTransferSelections[kind] = data.id;
      checkPhraseTransferPair();
    });
  });
  view.querySelectorAll("[data-option-index]").forEach((button) => button.addEventListener("click", () => selectPhraseTransferOption(Number(button.dataset.optionIndex))));
}

function bindPhraseTransferEvents() {
  view.querySelectorAll("[data-phrase-transfer-choice-kind]").forEach((button) => button.addEventListener("click", () => {
    state.phraseTransferSelections[button.dataset.phraseTransferChoiceKind] = button.dataset.phraseTransferChoiceId;
    clearPhraseError();
    checkPhraseTransferPair();
  }));
  view.querySelectorAll("[data-phrase-transfer-resource-kind]").forEach((button) => {
    button.addEventListener("dragstart", (event) => {
      event.dataTransfer.effectAllowed = "copy";
      event.dataTransfer.setData("text/plain", JSON.stringify({ kind: button.dataset.phraseTransferResourceKind, id: button.dataset.phraseTransferResourceId }));
      button.classList.add("is-dragging");
      playSound("pick");
    });
    button.addEventListener("dragend", () => button.classList.remove("is-dragging"));
  });
  view.querySelectorAll("[data-phrase-transfer-drop-slot]").forEach((slot) => {
    slot.addEventListener("dragover", (event) => { event.preventDefault(); slot.classList.add("is-over"); });
    slot.addEventListener("dragleave", () => slot.classList.remove("is-over"));
    slot.addEventListener("drop", (event) => {
      event.preventDefault();
      slot.classList.remove("is-over");
      const data = safeDragData(event);
      const kind = slot.dataset.phraseTransferDropSlot;
      if (!data || data.kind !== kind) {
        setPhraseError("规则", grammarMetaMessage("phrase", "规则"), [kind]);
        playSound("wrong");
        renderPhraseTransfer();
        return;
      }
      state.phraseTransferSelections[kind] = data.id;
      clearPhraseError();
      checkPhraseTransferPair();
    });
  });
  view.querySelectorAll("[data-phrase-result-option]").forEach((button) => button.addEventListener("click", () => selectPhraseTransferOption(Number(button.dataset.phraseResultOption))));
  view.querySelectorAll("[data-phrase-text-option]").forEach((button) => button.addEventListener("click", () => selectPhraseTransferOption(Number(button.dataset.phraseTextOption))));
  view.querySelectorAll("[data-phrase-reorder-index]").forEach((card) => {
    card.addEventListener("dragstart", (event) => {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", JSON.stringify({ kind: "phrase-word", index: Number(card.dataset.phraseReorderIndex) }));
      card.classList.add("is-dragging");
    });
    card.addEventListener("dragend", () => card.classList.remove("is-dragging"));
    card.addEventListener("dragover", (event) => { event.preventDefault(); card.classList.add("is-over"); });
    card.addEventListener("dragleave", () => card.classList.remove("is-over"));
    card.addEventListener("drop", (event) => {
      event.preventDefault();
      card.classList.remove("is-over");
      const data = safeDragData(event);
      if (!data || data.kind !== "phrase-word") return;
      const [word] = state.phraseTransferCardOrder.splice(data.index, 1);
      state.phraseTransferCardOrder.splice(Number(card.dataset.phraseReorderIndex), 0, word);
      clearPhraseError();
      renderPhraseTransfer();
    });
  });
  view.querySelector("[data-phrase-submit-reorder]")?.addEventListener("click", submitPhraseReorder);
  view.querySelectorAll("[data-phrase-transfer-action]").forEach((button) => button.addEventListener("click", () => {
    const action = button.dataset.phraseTransferAction;
    if (action === "home") setStage("home");
    if (action === "book") openPhraseBook("phrase-transfer");
    if (action === "sound") toggleSound(renderPhraseTransfer);
  }));
}

function checkPhraseTransferPair() {
  const task = phraseTransferTasks[state.phraseTransferIndex];
  const action = state.phraseTransferSelections.action;
  const object = state.phraseTransferSelections.object;
  if (!action || !object) {
    setFeedback(action ? "动作选好了，再选一个水果。" : "先选一个动作，再选一个水果。");
    renderPhraseTransfer();
    return;
  }
  if (action === task.action && object === task.object) {
    state.phraseTransferReady = true;
    setFeedback(`${task.phrase}，做对啦！`);
    playSound("success");
    renderPhraseTransfer();
    schedulePhraseTransferCompletion();
    return;
  }
  const targets = [];
  if (action !== task.action) targets.push("action");
  if (object !== task.object) targets.push("object");
  const topic = phraseTransferMetaTopics[task.id] || "意义";
  setPhraseError(topic, grammarMetaMessage("phrase", topic), targets);
  playSound("wrong");
  renderPhraseTransfer();
}

function fillPhraseTransferPairFromDrop() {
  checkPhraseTransferPair();
}

function selectPhraseTransferOption(index) {
  const task = phraseTransferTasks[state.phraseTransferIndex];
  state.phraseTransferOption = index;
  if (index === task.correctOption) {
    state.phraseTransferReady = true;
    clearPhraseError();
    setFeedback(`${task.phrase}，选对啦！`);
    playSound("success");
    renderPhraseTransfer();
    schedulePhraseTransferCompletion();
    return;
  }
  const topic = phraseTransferMetaTopics[task.id] || "意义";
  setPhraseError(topic, grammarMetaMessage("phrase", topic), [`option-${index}`]);
  playSound("wrong");
  renderPhraseTransfer();
}

function submitPhraseReorder() {
  const task = phraseTransferTasks[state.phraseTransferIndex];
  const meaningful = state.phraseTransferCardOrder.filter((word) => word !== task.distractor);
  if (meaningful.join("|") === task.correctOrder.join("|")) {
    state.phraseTransferReady = true;
    clearPhraseError();
    setFeedback(`${task.phrase}，排对啦！`);
    playSound("success");
    renderPhraseTransfer();
    schedulePhraseTransferCompletion();
    return;
  }
  const topic = phraseTransferMetaTopics[task.id] || "规则";
  setPhraseError(topic, grammarMetaMessage("phrase", topic), ["reorder"]);
  playSound("wrong");
  renderPhraseTransfer();
}

function schedulePhraseTransferCompletion() {
  if (window.phraseTransferTimer) window.clearTimeout(window.phraseTransferTimer);
  window.phraseTransferTimer = window.setTimeout(completePhraseTransferTask, 720);
}

function completePhraseTransferTask() {
  const task = phraseTransferTasks[state.phraseTransferIndex];
  if (!task || !state.phraseTransferReady) return;
  window.phraseTransferTimer = null;
  state.phraseTransferredIds.push(task.id);
  state.phraseTransferIndex += 1;
  state.phraseTransferSelections = { action: null, object: null };
  state.phraseTransferOption = null;
  state.phraseTransferCardOrder = [];
  state.phraseTransferReady = false;
  clearPhraseError();
  renderPhraseTransfer();
}

function setPhraseError(topic, message, targets) {
  stopStageFourErrorDismiss("phrase");
  state.phraseErrorTopic = topic;
  state.phraseError = message;
  state.phraseErrorTargets = targets;
  setFeedback(`${topic}：${message}`);
  if (state.stage === "phrase-transfer") scheduleStageFourErrorDismiss("phrase");
}

function clearPhraseError() {
  stopStageFourErrorDismiss("phrase");
  state.phraseError = null;
  state.phraseErrorTopic = null;
  state.phraseErrorTargets = [];
}

function startPhraseTransfer() {
  state.phraseBookReturnStage = null;
  state.phraseTransferBookOpen = false;
  state.stage = "phrase-transfer";
  state.phraseTransferIndex = 0;
  state.phraseTransferSelections = { action: null, object: null };
  state.phraseTransferOption = null;
  state.phraseTransferCardOrder = [];
  state.phraseTransferReady = false;
  state.phraseTransferredIds = [];
  clearPhraseError();
  render();
}

// Sentence knowledge level: passive sentences in a zoo and supermarket setting.
const sentenceCareResources = {
  soothe: { id: "soothe", label: "哄睡着", color: "#6d9ed2" },
  lead: { id: "lead", label: "牵到草地", color: "#62b98a" },
  groom: { id: "groom", label: "梳理毛发", color: "#f08ba0" },
  feed: { id: "feed", label: "喂饱", color: "#e4a349" },
  bandage: { id: "bandage", label: "包上绷带", color: "#d9849f" },
  rinse: { id: "rinse", label: "冲洗干净", color: "#61b9cc" },
  pool: { id: "pool", label: "放进水池", color: "#5c9fd4" },
  dry: { id: "dry", label: "擦干", color: "#9a86cf" }
};

const sentenceAnimals = {
  panda: { label: "熊猫", color: "#f7f8f7", accent: "#283646", mark: "熊" },
  giraffe: { label: "绵羊", color: "#fff5df", accent: "#d69a75", mark: "羊" },
  seal: { label: "海豹", color: "#9ab4c6", accent: "#4c687b", mark: "豹" },
  deer: { label: "小鹿", color: "#d99d61", accent: "#875630", mark: "鹿" },
  zebra: { label: "斑马", color: "#f6f6f4", accent: "#33404f", mark: "马" },
  fish: { label: "小鱼", color: "#67bfe0", accent: "#247fa4", mark: "鱼" },
  penguin: { label: "企鹅", color: "#38495a", accent: "#f1b45d", mark: "企" },
  lion: { label: "小狮子", color: "#e6a54d", accent: "#a96830", mark: "狮" },
  alpaca: { label: "羊驼", color: "#efe1c9", accent: "#af8e63", mark: "驼" },
  otter: { label: "小水獭", color: "#a9724c", accent: "#6c422f", mark: "獭" },
  rabbit: { label: "小兔子", color: "#f7edf1", accent: "#d78fa6", mark: "兔" },
  elephant: { label: "小象", color: "#a8b7c4", accent: "#607887", mark: "象" },
  duck: { label: "小鸭子", color: "#f4cf4f", accent: "#e18a39", mark: "鸭" },
  kangaroo: { label: "小袋鼠", color: "#be8764", accent: "#814f3b", mark: "袋" }
};

const sentenceDemoTasks = [
  { id: "panda", animal: "panda", care: "soothe", result: "呼呼睡着", choices: ["soothe", "dry"], sentence: "熊猫被饲养员哄睡着。" },
  { id: "giraffe", animal: "giraffe", care: "groom", result: "毛发梳理整齐", choices: ["groom", "pool"], sentence: "绵羊被饲养员梳理好毛发。" },
  { id: "seal", animal: "seal", care: "feed", result: "肚子圆鼓鼓", choices: ["feed", "soothe"], sentence: "海豹被饲养员喂饱。" },
  { id: "deer", animal: "deer", care: "bandage", result: "绷带固定好", choices: ["bandage", "rinse"], sentence: "小鹿被饲养员包扎上绷带。" },
  { id: "zebra", animal: "zebra", care: "rinse", result: "泥水消失", choices: ["rinse", "feed"], sentence: "斑马被饲养员冲洗干净。" },
  { id: "fish", animal: "fish", care: "pool", result: "出现在水池中", choices: ["pool", "lead"], sentence: "小鱼被饲养员放进水池。" },
  { id: "penguin", animal: "penguin", care: "dry", result: "身上干了", choices: ["dry", "soothe"], sentence: "企鹅被饲养员擦干。" }
];

const sentenceCareTasks = [
  { id: "lion", animal: "lion", care: "soothe", result: "闭着眼睛睡觉", sentence: "小狮子被法法哄睡着。" },
  { id: "alpaca", animal: "alpaca", care: "groom", result: "毛发梳理整齐", sentence: "羊驼被法法梳理好毛发。" },
  { id: "otter", animal: "otter", care: "feed", result: "肚子圆鼓鼓", sentence: "小水獭被法法喂饱。" },
  { id: "rabbit", animal: "rabbit", care: "bandage", result: "腿上固定绷带", sentence: "小兔子被法法包扎好。" },
  { id: "elephant", animal: "elephant", care: "rinse", result: "身上没有泥水", sentence: "小象被法法冲洗干净。" },
  { id: "duck", animal: "duck", care: "pool", result: "出现在水池中", sentence: "小鸭子被法法放进水池。" },
  { id: "kangaroo", animal: "kangaroo", care: "dry", result: "身上的水分消失", sentence: "小袋鼠被法法擦干。" }
];

const sentenceCareReflectionPrompts = {
  lion: {
    prompt: "谁是被哄的对象？",
    options: [
      { id: "lion", label: "小狮子" },
      { id: "fafa", label: "法法" }
    ],
    correct: "lion",
    feedback: "意义：被字句强调谁受到了动作的影响。这里是小狮子。"
  },
  alpaca: {
    prompt: "羊驼的毛发最后怎么样？",
    options: [
      { id: "neat", label: "梳理整齐" },
      { id: "messy", label: "仍然凌乱" }
    ],
    correct: "neat",
    feedback: "意义：被字句强调承受者受到的影响或结果。羊驼的毛发被梳理整齐了。"
  },
  otter: {
    prompt: "谁吃饱了？",
    options: [
      { id: "otter", label: "小水獭" },
      { id: "fafa", label: "法法" }
    ],
    correct: "otter",
    feedback: "意义：被字句强调承受者受到的影响或结果。小水獭的肚子变圆鼓鼓了。"
  },
  rabbit: {
    prompt: "“包扎”的对象是谁？",
    options: [
      { id: "bandage", label: "用绷带固定好了" },
      { id: "rabbit", label: "小兔子" }
    ],
    correct: "rabbit",
    feedback: "使用：想说明承受者受到什么影响或结果时，可以使用被字句。"
  },
  elephant: {
    prompt: "谁被冲洗干净了？",
    options: [
      { id: "elephant", label: "小象" },
      { id: "fafa", label: "法法" }
    ],
    correct: "elephant",
    feedback: "意义：被字句强调承受者受到的影响。小象身上的泥水消失了。"
  },
  duck: {
    prompt: "小鸭子最后在哪里？",
    options: [
      { id: "pool", label: "水池里" },
      { id: "grass", label: "草地上" }
    ],
    correct: "pool",
    feedback: "规则：承受者后面用“被”，最后说动作结果。小鸭子最后在水池里。"
  },
  kangaroo: {
    prompt: "擦干后小袋鼠感觉怎样？",
    options: [
      { id: "comfortable", label: "干爽" },
      { id: "wet", label: "湿漉漉" }
    ],
    correct: "comfortable",
    feedback: "使用：想说明承受者受到的最后影响和感觉时，可以使用被字句。"
  }
};

const sentenceTransferTasks = [
  { id: "bread-receiver", type: "receiver", prompt: "____被店员摆整齐。", visual: "面包整齐排列在货架上", options: ["bread", "milk", "apple"], correct: "bread", sentence: "面包被店员摆整齐了。" },
  { id: "milk-result", type: "result", prompt: "牛奶被法法放进购物车了。", visual: "选择句子对应的结果", options: ["shelf", "cart", "counter"], correct: "cart", sentence: "牛奶被法法放进购物车了。" },
  { id: "apple-bag", type: "resource-combine", promptVisual: "apple-bag", agent: "妈妈", objectCorrect: "apple", resultCorrect: "bag", objectOptions: ["apple", "milk", "bread"], resultOptions: ["bag", "shelf", "counter"], sentence: "苹果被妈妈装进购物袋了。" },
  { id: "ice-cream", type: "resource-combine", promptVisual: "ice-cream-freezer", agent: "", objectCorrect: "ice-cream", resultCorrect: "freezer", objectOptions: ["ice-cream", "apple", "milk"], resultOptions: ["freezer", "shelf", "counter"], sentence: "冰淇淋被放进冰柜了。" },
  { id: "juice-result", type: "sentence-image-choice", promptVisual: "juice-spilled", options: ["果汁被妹妹碰倒了。", "妹妹被果汁碰倒了。", "果汁碰倒妹妹了。"], correct: 0, sentence: "果汁被妹妹碰倒了。" },
  { id: "receipt-text", type: "text", promptVisual: "receipt-printed", options: ["购物小票被机器打印出来了。", "收银员被小票打印了。", "购物小票打印收银员了。"], correct: 1, sentence: "购物小票被机器打印出来了。" },
  { id: "bag-order", type: "order", promptVisual: "bag-filled", cards: ["购物袋", "被", "装满了"], initialOrder: ["装满了", "购物袋", "被"], correctOrder: ["购物袋", "被", "装满了"], sentence: "购物袋被装满了。" }
];

const sentenceZooSpots = {
  panda: { left: 366, top: 122 }, giraffe: { left: 792, top: 134 }, seal: { left: 176, top: 372 }, deer: { left: 564, top: 348 }, zebra: { left: 920, top: 352 }, fish: { left: 336, top: 454 }, penguin: { left: 696, top: 450 }
};

const sentenceCubSpots = {
  lion: { left: 364, top: 130 }, alpaca: { left: 766, top: 140 }, otter: { left: 160, top: 370 }, rabbit: { left: 548, top: 352 }, elephant: { left: 920, top: 356 }, duck: { left: 334, top: 500 }, kangaroo: { left: 708, top: 492 }
};

const sentenceFindTaskSpots = {
  panda: { left: 836, top: 254 }, giraffe: { left: 352, top: 270 }, seal: { left: 760, top: 246 }, deer: { left: 854, top: 236 }, zebra: { left: 412, top: 250 }, fish: { left: 830, top: 260 }, penguin: { left: 322, top: 260 }
};

const sentenceCareTaskSpots = {
  lion: { left: 836, top: 254 }, alpaca: { left: 350, top: 262 }, otter: { left: 760, top: 246 }, rabbit: { left: 850, top: 236 }, elephant: { left: 412, top: 250 }, duck: { left: 820, top: 260 }, kangaroo: { left: 314, top: 260 }
};

// The supplied second-stage background is a 2x export of the 1194x834 game canvas.
const sentenceStageTwoSceneSpots = {
  lion: { left: 500, top: 143, width: 88, height: 103 },
  alpaca: { left: 802, top: 201, width: 82, height: 105 },
  otter: { left: 898, top: 400, width: 91, height: 99 },
  rabbit: { left: 379, top: 237, width: 68, height: 99 },
  elephant: { left: 697, top: 561, width: 130, height: 134 },
  duck: { left: 204, top: 560, width: 75, height: 109 },
  kangaroo: { left: 119, top: 319, width: 87, height: 108 },
  fox: { left: 1018, top: 194, width: 96, height: 105 },
  bird: { left: 508, top: 550, width: 61, height: 87 }
};

// Completed positions follow the supplied end-state reference for the moving animals.
const sentenceStageTwoCompletedSceneSpots = {
  duck: { left: 264, top: 516, width: 75, height: 109 }
};

// When an animal changes to a completed position, its caretaker follows to
// the same destination instead of remaining at the original interaction spot.
const sentenceStageTwoCompletedFafaSpots = {
  duck: { left: 346, top: 491 }
};

const sentenceStageTwoFafaSpots = {
  lion: { left: 575, top: 121 },
  alpaca: { left: 727, top: 190 },
  otter: { left: 814, top: 373 },
  rabbit: { left: 451, top: 207 },
  elephant: { left: 605, top: 529 },
  duck: { left: 286, top: 535 },
  kangaroo: { left: 211, top: 284 }
};

function createSentenceCareSpots() {
  return Object.fromEntries(Object.entries(sentenceStageTwoSceneSpots).map(([id, spot]) => [id, { ...spot }]));
}

function sentenceAnimalSvg(id, sizeClass = "icon-svg", sceneState = "", showMark = true, showStateText = true) {
  const item = sentenceAnimals[id];
  const zebra = id === "zebra";
  const fish = id === "fish" || id === "duck";
  const penguin = id === "penguin";
  const eyes = sceneState === "soothe"
    ? `<path d="M28 49 Q34 54 40 49 M52 49 Q58 54 64 49" fill="none" stroke="#304052" stroke-width="4" stroke-linecap="round"/>`
    : `<circle cx="34" cy="48" r="4" fill="#304052"/><circle cx="58" cy="48" r="4" fill="#304052"/>`;
  const stateDecor = {
    soothe: `<circle cx="72" cy="21" r="10" fill="#ffe39a"/><circle cx="77" cy="17" r="10" fill="#e8f5ef"/><path d="M17 72 H77" stroke="#6d8eb4" stroke-width="5" stroke-linecap="round"/><path d="M24 68 Q47 52 70 68" fill="none" stroke="#a9c9e4" stroke-width="7" stroke-linecap="round"/>${showStateText ? `<text x="68" y="39" font-size="16" font-weight="900" fill="#6f8eb8">Z</text><text x="78" y="31" font-size="11" font-weight="900" fill="#6f8eb8">z</text>` : ""}`,
    lead: `<path d="M20 80 L25 70 L30 80 M34 80 L39 68 L44 80 M49 80 L55 70 L60 80" fill="none" stroke="#5eaa62" stroke-width="4" stroke-linecap="round"/>`,
    feed: `<ellipse cx="46" cy="62" rx="19" ry="12" fill="rgba(255,227,143,.72)" stroke="#c88c31" stroke-width="3"/>`,
    bandage: `<path d="M21 42 L70 61" stroke="#ffffff" stroke-width="11" stroke-linecap="round"/><path d="M21 42 L70 61" stroke="#cfdae4" stroke-width="2" stroke-dasharray="4 3" stroke-linecap="round"/>`,
    rinse: `<path d="M22 30 L22 42 M16 36 H28 M69 25 L69 37 M63 31 H75" stroke="#79bfe0" stroke-width="4" stroke-linecap="round"/><circle cx="75" cy="54" r="4" fill="#8fd4ee"/>`,
    pool: `<path d="M17 72 C28 65 38 79 49 72 C60 65 70 79 78 72" fill="none" stroke="#5fbee0" stroke-width="5" stroke-linecap="round"/><circle cx="70" cy="35" r="4" fill="#a8e7f3"/><circle cx="77" cy="25" r="3" fill="#a8e7f3"/>`,
    dry: `<path d="M12 36 H27 M8 48 H24 M13 60 H28" stroke="#d7a34a" stroke-width="4" stroke-linecap="round"/>`
  }[sceneState] || "";
  return `<svg class="${sizeClass}" viewBox="0 0 92 92" role="img" aria-label="${item.label}">
    <circle cx="46" cy="47" r="32" fill="${item.color}" stroke="#304052" stroke-width="4"/>
    ${fish ? `<path d="M18 48 L7 36 V60 Z" fill="${item.accent}" stroke="#304052" stroke-width="4" stroke-linejoin="round"/>` : `<circle cx="25" cy="22" r="12" fill="${item.accent}" stroke="#304052" stroke-width="4"/><circle cx="67" cy="22" r="12" fill="${item.accent}" stroke="#304052" stroke-width="4"/>`}
    ${penguin ? `<ellipse cx="46" cy="55" rx="19" ry="25" fill="#f8f5e8"/><path d="M37 44 L46 34 L55 44 L46 52 Z" fill="#f3b652" stroke="#304052" stroke-width="2"/>` : ""}
    ${zebra ? `<path d="M23 33 L34 39 M19 48 L32 51 M60 34 L70 28 M58 51 L74 50" stroke="#304052" stroke-width="5" stroke-linecap="round"/>` : ""}
    ${eyes}
    <path d="M35 62 C42 68,50 68,57 62" fill="none" stroke="#304052" stroke-width="4" stroke-linecap="round"/>
    ${showMark ? `<rect x="26" y="73" width="40" height="14" rx="7" fill="rgba(255,255,255,.82)"/><text x="46" y="84" text-anchor="middle" font-size="11" font-weight="900" fill="#304052">${item.mark}</text>` : ""}
    ${stateDecor}
  </svg>`;
}

function sentenceCaretakerHtml(kind = "keeper", className = "sentence-caretaker", inlineStyle = "") {
  const isFafa = kind === "fafa";
  return `<div class="${className} ${isFafa ? "is-fafa" : ""}"${inlineStyle ? ` style="${inlineStyle}"` : ""} aria-label="${isFafa ? "法法" : "饲养员"}"><i class="sentence-caretaker-head"></i><b class="sentence-caretaker-body"></b><span class="sentence-caretaker-badge">${isFafa ? "法" : "员"}</span></div>`;
}

function sentenceCareVisualHtml(id, className = "sentence-care-visual") {
  const resource = sentenceCareResources[id];
  return `<span class="${className}" style="--sentence-care-color:${resource.color}">${resource.label}</span>`;
}

function sentenceCareImageSvg(id, className = "sentence-care-image") {
  const resource = sentenceCareResources[id];
  const scenes = {
    soothe: `<circle cx="77" cy="18" r="10" fill="#ffe39a"/><path d="M18 57 Q48 42 78 57 V66 H18 Z" fill="#a9c9e4" stroke="#304052" stroke-width="3"/><path d="M28 50 Q48 42 68 50" fill="none" stroke="#fff8de" stroke-width="4" stroke-linecap="round"/><path d="M36 31 q5 -6 10 0 M52 31 q5 -6 10 0" fill="none" stroke="#6d8eb4" stroke-width="3" stroke-linecap="round"/>`,
    lead: `<path d="M8 59 Q30 45 53 58 Q68 67 88 53 V72 H8 Z" fill="#8bc77d" stroke="#4d9361" stroke-width="3"/><path d="M22 57 Q41 47 70 39" fill="none" stroke="#f7dfa2" stroke-width="8" stroke-linecap="round"/><path d="M22 60 l-4 -9 M31 56 l-2 -11 M74 47 l4 -10" stroke="#4d9361" stroke-width="3" stroke-linecap="round"/>`,
    groom: `<path d="M18 59 Q31 43 45 59 T73 59" fill="#fff3dc" stroke="#d7b48d" stroke-width="3"/><path d="M29 24 L73 50" stroke="#ed5272" stroke-width="8" stroke-linecap="round"/><path d="M47 39 L39 53 M54 43 L47 57 M61 47 L55 61 M68 50 L63 64" stroke="#ed5272" stroke-width="4" stroke-linecap="round"/>`,
    feed: `<path d="M22 44 H76 L69 64 Q48 73 29 64 Z" fill="#e9a74f" stroke="#304052" stroke-width="3"/><path d="M25 48 Q49 57 73 48" fill="none" stroke="#fff0bf" stroke-width="4"/><circle cx="39" cy="31" r="7" fill="#eb6f68" stroke="#304052" stroke-width="3"/><circle cx="57" cy="27" r="6" fill="#f0c452" stroke="#304052" stroke-width="3"/><path d="M47 20 V11 M43 15 H51" stroke="#70a96c" stroke-width="3" stroke-linecap="round"/>`,
    bandage: `<rect x="25" y="24" width="48" height="30" rx="12" transform="rotate(-18 49 39)" fill="#f4c6a7" stroke="#304052" stroke-width="3"/><path d="M42 25 L55 53 M34 29 L47 57" stroke="#e9a07b" stroke-width="3"/><path d="M45 35 V45 M40 40 H50" stroke="#fff" stroke-width="4" stroke-linecap="round"/>`,
    rinse: `<path d="M23 20 H54 L67 32 H45" fill="none" stroke="#304052" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M67 32 L56 50" fill="none" stroke="#304052" stroke-width="4" stroke-linecap="round"/><path d="M57 48 Q64 57 57 64 Q50 57 57 48 M74 43 Q80 50 74 56 Q68 50 74 43" fill="#7bc8e3" stroke="#4d9bbd" stroke-width="2"/>`,
    pool: `<path d="M10 48 Q23 40 36 48 T62 48 T88 48 V70 H10 Z" fill="#8bd7e8" stroke="#4dabc5" stroke-width="3"/><path d="M18 53 Q28 47 38 53 T58 53 T78 53" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/><circle cx="70" cy="28" r="5" fill="#a7e7f1"/><circle cx="80" cy="20" r="3" fill="#a7e7f1"/>`,
    dry: `<rect x="25" y="25" width="40" height="40" rx="7" transform="rotate(-8 45 45)" fill="#c1a6df" stroke="#304052" stroke-width="3"/><path d="M32 35 Q45 27 58 35 M30 47 Q44 39 59 47" fill="none" stroke="#f4e8ff" stroke-width="4"/><path d="M10 28 H24 M8 42 H20 M12 56 H25" stroke="#d9a24a" stroke-width="3" stroke-linecap="round"/>`
  };
  return `<svg class="${className}" viewBox="0 0 96 78" role="img" aria-label="${resource.label}"><rect x="3" y="3" width="90" height="72" rx="12" fill="${resource.color}" opacity=".16"/>${scenes[id] || ""}</svg>`;
}

function sentenceToolButtonsHtml(stage) {
  const bookUnlocked = stage === "sentence-transfer";
  return `<div class="find-corner-tools sentence-corner-tools" aria-label="被字句关卡工具">
    <button class="find-tool-button" type="button" data-sentence-tool="home" aria-label="返回首页"><span class="find-tool-icon" aria-hidden="true">↩</span><span>返回</span></button>
    <div class="find-tool-right">
      <button class="find-tool-button sentence-book-tool ${bookUnlocked ? "" : "is-locked"}" type="button" data-sentence-tool="book" aria-label="${bookUnlocked ? "语法宝典" : "语法宝典将在第三阶段开启"}" ${bookUnlocked ? "" : "disabled"}><span class="find-tool-icon sentence-book-icon" aria-hidden="true">被</span><span>语法宝典</span></button>
      <button class="find-tool-button" type="button" data-sentence-tool="sound" aria-label="音乐按钮"><span class="find-tool-icon" aria-hidden="true">${state.sound ? "♪" : "×"}</span><span>音乐</span></button>
    </div>
  </div>`;
}

function sentenceBindTools(renderStage, returnStage) {
  view.querySelectorAll('[data-stage-four-book-close="sentence"]').forEach((button) => button.addEventListener("click", () => {
    state.sentenceTransferBookOpen = false;
    renderSentenceTransfer();
  }));
  view.querySelectorAll("[data-sentence-tool]").forEach((button) => button.addEventListener("click", () => {
    const action = button.dataset.sentenceTool;
    if (action === "home") setStage("home");
    if (action === "book" && returnStage === "sentence-transfer") {
      state.sentenceTransferBookOpen = true;
      renderSentenceTransfer();
    }
    if (action === "sound") toggleSound(renderStage);
  }));
}

function sentenceResultCardHtml(task) {
  return `<div class="sentence-result-card sentence-image-result-card" aria-label="${task.result}">${sentenceAnimalSvg(task.animal, "sentence-state-animal-svg", task.care, false, false)}</div>`;
}

function sentenceFindChoicePanelStyle(animalId) {
  const spot = sentenceZooSpots[animalId];
  const panelWidth = 288;
  let left = Math.max(18, Math.min(826, spot.left + 47 - panelWidth / 2));
  if (spot.top < 180 && left + panelWidth > 900) left = 900 - panelWidth;
  const top = Math.max(16, spot.top - 112);
  return `left:${left}px;top:${top}px;transform:none;`;
}

function sentenceZooDecorHtml() {
  return `<div class="sentence-zoo-gate" aria-hidden="true">动物园</div><div class="sentence-zoo-hill" aria-hidden="true"></div><div class="sentence-zoo-path" aria-hidden="true"></div><div class="sentence-zoo-pond" aria-hidden="true"></div><div class="sentence-zoo-trees" aria-hidden="true"></div>`;
}

function sentenceFindKeeperHtml(selectedAnimalId) {
  const home = { left: 74, top: 290 };
  const animalSpot = selectedAnimalId ? sentenceZooSpots[selectedAnimalId] : null;
  const animalTarget = animalSpot
    ? {
        left: animalSpot.left > 650 ? animalSpot.left - 64 : animalSpot.left + 106,
        top: animalSpot.top > 430 ? animalSpot.top - 52 : animalSpot.top + 8
      }
    : null;
  const source = state.sentenceFindKeeperPosition || home;
  const target = animalTarget || source;
  const style = `left:${target.left}px;top:${target.top}px;--keeper-from-x:${source.left - target.left}px;--keeper-from-y:${source.top - target.top}px;`;
  return sentenceCaretakerHtml("keeper", `sentence-caretaker sentence-find-keeper ${selectedAnimalId ? "is-moving" : ""}`, style);
}

function sentenceFindKeeperTarget(animalId) {
  const spot = sentenceZooSpots[animalId];
  return spot
    ? {
        left: spot.left > 650 ? spot.left - 64 : spot.left + 106,
        top: spot.top > 430 ? spot.top - 52 : spot.top + 8
      }
    : null;
}

function sentenceAnimalButtonHtml(id, spots, currentId, selectedId, completeIds, dataKey, sceneState = "") {
  const spot = spots[id];
  const isCurrent = currentId === id;
  const isSelected = selectedId === id;
  const isDone = completeIds.includes(id);
  const stateClass = sceneState ? `has-state state-${sceneState}` : isSelected ? "is-awaiting-care" : "";
  return `<button class="sentence-animal-button ${isCurrent ? "is-current" : ""} ${isSelected ? "is-selected" : ""} ${isDone ? "is-done" : ""} ${stateClass}" type="button" data-${dataKey}="${id}" style="left:${spot.left}px;top:${spot.top}px" aria-label="${sentenceAnimals[id].label}">${sentenceAnimalSvg(id, "icon-svg", sceneState)}</button>`;
}

function sentenceFindResourceDockHtml() {
  return `<aside class="sentence-resource-dock sentence-find-resource-dock" aria-label="资源栏"><div class="sentence-resource-title">资源栏</div><section class="sentence-find-resource-group"><h3>动作结果资源</h3><div class="sentence-resource-row">${state.sentenceFindResources.map((id) => `<div class="sentence-earned-resource">${sentenceCareImageSvg(id)}<span>${sentenceCareResources[id].label}</span></div>`).join("") || `<span class="sentence-resource-empty">完成示范后出现</span>`}</div></section><p id="sceneMessage" class="scene-message">${feedbackText.textContent}</p></aside>`;
}

function renderSentenceFind() {
  renderSentenceFindReference();
  return;
  /* Legacy CSS zoo remains below for comparison while the supplied artwork is active. */
  const task = sentenceDemoTasks[state.sentenceFindIndex];
  if (!task) {
    stopSentenceCareHintCountdown();
    state.stage = "sentence-care";
    state.sentenceCareIndex = 0;
    state.sentenceCareSelectedAnimal = null;
    state.sentenceCareHint = null;
    state.sentenceCareHintSeconds = SENTENCE_CARE_HINT_SECONDS;
    state.sentenceCareSelections = { animal: null, care: null };
    state.sentenceCareSpots = createSentenceCareSpots();
    state.sentenceCareAnimalOrder = [...SENTENCE_STAGE_TWO_ANIMAL_ORDER];
    state.sentenceCareResourceOrder = [...SENTENCE_STAGE_TWO_RESULT_ORDER];
    render();
    return;
  }
  const choiceOrder = state.sentenceFindChoiceOrders[task.id] || task.choices;
  const animalButtons = sentenceDemoTasks.map((item) => sentenceAnimalButtonHtml(item.animal, sentenceZooSpots, task.animal, state.sentenceFindSelectedAnimal, state.sentenceFindResources.map((care) => sentenceDemoTasks.find((item) => item.care === care)?.animal), "sentence-find-animal", state.sentenceFindResolved && item.animal === task.animal ? task.care : "")).join("");
  view.innerHTML = `<div class="sentence-find-canvas"><section class="sentence-zoo-scene" aria-label="动物园示范照护场景">${sentenceZooDecorHtml()}${animalButtons}${sentenceFindKeeperHtml(state.sentenceFindSelectedAnimal)}${sentenceToolButtonsHtml("sentence-find")}
    <aside class="sentence-task-card sentence-find-task" aria-label="题目" style="left:${sentenceFindTaskSpots[task.animal].left}px;top:${sentenceFindTaskSpots[task.animal].top}px"><div class="sentence-task-title">题目</div>${sentenceResultCardHtml(task)}</aside>
    ${state.sentenceFindSelectedAnimal ? `<section class="sentence-result-choice-panel sentence-find-choice-panel" aria-label="选择照护结果" style="${sentenceFindChoicePanelStyle(task.animal)}"><div>${choiceOrder.map((id) => `<button class="sentence-choice-card sentence-image-choice" type="button" data-sentence-find-result="${id}" aria-label="${sentenceCareResources[id].label}" ${state.sentenceFindResolved ? "disabled" : ""}>${sentenceCareImageSvg(id)}</button>`).join("")}</div></section>` : ""}
    ${sentenceFindResourceDockHtml()}</section></div>`;
  if (!state.sentenceFindResolved) view.querySelectorAll("[data-sentence-find-animal]").forEach((button) => button.addEventListener("click", () => {
    const id = button.dataset.sentenceFindAnimal;
    if (id !== task.animal) {
      button.classList.add("is-wrong");
      window.setTimeout(() => button.classList.remove("is-wrong"), 360);
      setFeedback("结果图里的动物不是它，再找一找。 ");
      playSound("wrong");
      return;
    }
    state.sentenceFindSelectedAnimal = id;
    setFeedback("饲养员走过去啦，再选照护结果。 ");
    playSound("pick");
    renderSentenceFind();
  }));
  if (!state.sentenceFindResolved) view.querySelectorAll("[data-sentence-find-result]").forEach((button) => button.addEventListener("click", () => {
    const id = button.dataset.sentenceFindResult;
    if (id !== task.care) {
      button.classList.add("is-wrong");
      window.setTimeout(() => button.classList.remove("is-wrong"), 360);
      setFeedback("再看一看结果图，想想动物最后变成了什么样。 ");
      playSound("wrong");
      return;
    }
    state.sentenceFindResolved = true;
    setFeedback(`${task.sentence} 照护资源收好啦！`);
    playSound("success");
    renderSentenceFind();
    window.setTimeout(() => speakPhrase(task.sentence), 60);
    window.setTimeout(() => {
    state.sentenceFindResources.push(id);
    state.sentenceFindKeeperAnimal = task.animal;
      state.sentenceFindKeeperPosition = sentenceFindKeeperTarget(task.animal);
      state.sentenceFindSelectedAnimal = null;
      state.sentenceFindResolved = false;
      state.sentenceFindIndex += 1;
      render();
    }, 1700);
  }));
  sentenceBindTools(renderSentenceFind, "sentence-find");
}

const sentenceReferenceAnimalSpots = {
  zebra: [10.5, 14.5, 10.5, 15.5], penguin: [69.5, 11.5, 7.5, 13], panda: [53.8, 20.5, 8.5, 12],
  giraffe: [67.5, 43.5, 11, 16], seal: [84, 36, 10, 12], deer: [80.5, 63, 10, 15], fish: [8.5, 53.5, 7, 7]
};

const sentenceReferenceDistractorSpots = {
  peacock: { left: 5.7, top: 68.4, width: 10.6, height: 15.5 },
  elephant: { left: 31.4, top: 69.2, width: 10.4, height: 13.2 }
};

const sentenceReferenceCompletedSpots = {
  fish: [10.5, 47.5, 7, 7]
};

function sentenceReferenceAnimalSpot(id, isComplete) {
  return isComplete && sentenceReferenceCompletedSpots[id]
    ? sentenceReferenceCompletedSpots[id]
    : sentenceReferenceAnimalSpots[id];
}

function sentenceReferenceAnimalHitHtml(id) {
  const [left, top, width, height] = sentenceReferenceAnimalSpots[id];
  const hintClass = state.sentenceFindHintTarget === id ? " is-hinted" : "";
  return `<button class="sentence-reference-hit sentence-reference-animal-hit${hintClass}" type="button" data-sentence-reference-animal="${id}" style="left:${left}%;top:${top}%;width:${width}%;height:${height}%" aria-label="${sentenceAnimals[id].label}"></button>`;
}

function sentenceReferenceToolsHtml(bookUnlocked = false, bookSrc = WORD_STAGE_ONE_ASSETS.book) {
  return `<div class="sentence-reference-tools"><button type="button" data-sentence-tool="home" aria-label="返回首页"><img src="${WORD_STAGE_ONE_ASSETS.back}" alt=""></button><div><button type="button" data-sentence-tool="book" ${bookUnlocked ? "" : "disabled"} aria-label="${bookUnlocked ? "语法宝典" : "语法宝典未开启"}"><img src="${bookSrc}" alt=""></button><button type="button" data-sentence-tool="sound" aria-label="音乐按钮"><img src="${WORD_STAGE_ONE_ASSETS.sound}" alt=""></button></div></div>`;
}

function sentenceStageInstructionHtml(stage) {
  const isFirstStage = stage === "one";
  const src = isFirstStage ? SENTENCE_STAGE_ONE_ASSETS.instruction : SENTENCE_STAGE_TWO_ASSETS.instruction;
  const label = STAGE_ENTRY_NARRATIONS[isFirstStage ? "sentence:sentence-find" : "sentence:sentence-care"];
  return `<div class="sentence-stage-instruction" aria-label="${label}"><img src="${src}" alt="${label}"></div>`;
}

function sentenceReferenceChoicePanelStyle(animalId) {
  const spot = sentenceReferenceAnimalSpots[animalId];
  const stageWidth = 1194;
  const stageHeight = 834;
  const panelWidth = 200;
  const panelHeight = 89;
  const [left, top, width, height] = spot;
  const animalLeft = (left / 100) * stageWidth;
  const animalTop = (top / 100) * stageHeight;
  const animalWidth = (width / 100) * stageWidth;
  const animalHeight = (height / 100) * stageHeight;
  const panelLeft = Math.max(16, Math.min(stageWidth - panelWidth - 16, animalLeft + animalWidth / 2 - panelWidth / 2));
  const aboveTop = animalTop - panelHeight - 12;
  const placeBelowAnimal = animalId === "zebra" || animalId === "panda";
  const panelTop = placeBelowAnimal
    ? Math.min(stageHeight - panelHeight - 16, animalTop + animalHeight + 12)
    : aboveTop >= 16
      ? aboveTop
      : Math.min(stageHeight - panelHeight - 16, animalTop + animalHeight + 12);
  return `left:${Math.round(panelLeft)}px;top:${Math.round(panelTop)}px;`;
}

function sentenceReferenceChoicePanelHtml(task) {
  const choiceOrder = state.sentenceFindChoiceOrders[task.id] || task.choices;
  const choices = choiceOrder.map((id, index) => `<button class="sentence-reference-result-hit sentence-reference-choice" type="button" data-sentence-reference-result="${id}" style="left:${index === 0 ? 14 : 130}px;top:17px" aria-label="${sentenceCareResources[id].label}"><img src="${SENTENCE_STAGE_ONE_ASSETS.results[id]}" alt="${sentenceCareResources[id].label}"></button>`).join("");
  return `<div class="sentence-reference-choice-panel" style="${sentenceReferenceChoicePanelStyle(task.animal)}"><img class="sentence-reference-choice-frame" src="${SENTENCE_STAGE_ONE_ASSETS.choiceFrame}" alt="动作结果选项">${choices}</div>`;
}

function sentenceReferenceKeeperTarget(animalId, isComplete = false) {
  const spot = sentenceReferenceAnimalSpot(animalId, isComplete);
  if (!spot) return null;
  const [left, top, width, height] = spot;
  const keeperWidth = 8;
  const keeperHeight = 21;
  const targetLeft = left < 45 ? left + width + 2 : left - keeperWidth - 2;
  const targetTop = Math.max(3, Math.min(75, top + height - keeperHeight + 2));
  return {
    left: Math.max(2, Math.min(90, targetLeft)),
    top: targetTop,
    width: keeperWidth,
    height: keeperHeight
  };
}

function sentenceReferenceKeeperHtml() {
  const home = { left: 30.8, top: 34, width: 8, height: 21 };
  const source = state.sentenceFindKeeperPosition || home;
  const target = state.sentenceFindSelectedAnimal
    ? sentenceReferenceKeeperTarget(state.sentenceFindSelectedAnimal)
    : source;
  const moving = Boolean(state.sentenceFindSelectedAnimal);
  const style = `left:${target.left}%;top:${target.top}%;width:${target.width}%;height:${target.height}%;--keeper-from-x:${(source.left - target.left) * 11.94}px;--keeper-from-y:${(source.top - target.top) * 8.34}px;`;
  return `<div class="sentence-reference-keeper adult ${moving ? "is-moving" : ""}" style="${style}"><img src="${encodeURI("./assets/sentence-stage1/图片 1 (1) 2.png")}" alt="饲养员"></div>`;
}

function sentenceReferenceKidTarget(animalId, isComplete = false) {
  const adultHome = { left: 30.8, top: 34 };
  const kidHome = { left: 37, top: 40.5, width: 4.8, height: 15.5 };
  const adultTarget = sentenceReferenceKeeperTarget(animalId, isComplete);
  if (!adultTarget) return kidHome;
  return {
    ...kidHome,
    left: kidHome.left + adultTarget.left - adultHome.left,
    top: kidHome.top + adultTarget.top - adultHome.top
  };
}

function sentenceReferenceKidHtml() {
  const home = { left: 37, top: 40.5, width: 4.8, height: 15.5 };
  const source = state.sentenceFindKidPosition || home;
  const target = state.sentenceFindSelectedAnimal
    ? sentenceReferenceKidTarget(state.sentenceFindSelectedAnimal)
    : source;
  const moving = Boolean(state.sentenceFindSelectedAnimal);
  const style = `left:${target.left}%;top:${target.top}%;width:${target.width}%;height:${target.height}%;--keeper-from-x:${(source.left - target.left) * 11.94}px;--keeper-from-y:${(source.top - target.top) * 8.34}px;`;
  return `<div class="sentence-reference-keeper kid ${moving ? "is-moving" : ""}" style="${style}"><img src="${encodeURI("./assets/sentence-stage1/图片 5 (1) 1.png")}" alt="小饲养员"></div>`;
}

function renderSentenceFindReference() {
  const task = sentenceDemoTasks[state.sentenceFindIndex];
  if (!task) {
    stopSentenceFindHintTimer();
    state.sentenceFindHintTarget = null;
    state.stage = "sentence-care";
    state.sentenceCareIndex = 0;
    state.sentenceCareSelectedAnimal = null;
    state.sentenceCareHint = null;
    state.sentenceCareHintSeconds = SENTENCE_CARE_HINT_SECONDS;
    state.sentenceCareSpots = createSentenceCareSpots();
    state.sentenceCareAnimalOrder = [...SENTENCE_STAGE_TWO_ANIMAL_ORDER];
    state.sentenceCareResourceOrder = [...SENTENCE_STAGE_TWO_RESULT_ORDER];
    render();
    return;
  }
  const completed = state.sentenceFindResources.map((care) => sentenceDemoTasks.find((item) => item.care === care)?.animal).filter(Boolean);
  const sceneAnimals = sentenceDemoTasks.map((item) => {
    const id = item.animal;
    const isComplete = completed.includes(id);
    const [left, top, width, height] = sentenceReferenceAnimalSpot(id, isComplete);
    const asset = SENTENCE_STAGE_ONE_ASSETS.animals[id][isComplete ? "complete" : "initial"];
    return `<img class="sentence-reference-animal-state" src="${asset}" alt="${sentenceAnimals[id].label}" style="left:${left}%;top:${top}%;width:${width}%;height:${height}%">`;
  }).join("");
  const distractors = Object.entries(sentenceReferenceDistractorSpots).map(([id, spot]) => `<img class="sentence-reference-distractor sentence-reference-distractor-${id}" src="${SENTENCE_STAGE_ONE_ASSETS.distractors[id]}" alt="${id === "peacock" ? "孔雀" : "大象"}" style="left:${spot.left}%;top:${spot.top}%;width:${spot.width}%;height:${spot.height}%">`).join("");
  const currentCard = `<div class="sentence-reference-task-card"><img src="${SENTENCE_STAGE_ONE_ASSETS.taskCards[task.animal]}" alt="${sentenceAnimals[task.animal].label}"><img class="sentence-care-task-label" src="${SENTENCE_CARE_TASK_LABEL_ASSET}" alt="任务"></div>`;
  const choices = state.sentenceFindSelectedAnimal ? sentenceReferenceChoicePanelHtml(task) : "";
  const resources = state.sentenceFindResources.map((id) => `<div class="sentence-reference-earned-item"><img class="sentence-reference-earned" src="${SENTENCE_STAGE_ONE_ASSETS.results[id]}" alt="${sentenceCareResources[id].label}"><span>${sentenceCareResources[id].label}</span></div>`).join("");
  const resourceFrame = resources
    ? `<div class="sentence-reference-resource-frame"><img src="${SENTENCE_STAGE_ONE_ASSETS.resourceDock}" alt="动作结果资源框"><div class="sentence-reference-resource-items">${resources}</div></div>`
    : "";
  view.innerHTML = `<div class="sentence-reference-stage"><img class="sentence-reference-background" src="${SENTENCE_STAGE_ONE_ASSETS.background}" alt="动物园地图">${sentenceStageInstructionHtml("one")}${sentenceReferenceToolsHtml(false, SENTENCE_STAGE_ONE_ASSETS.book)}${sentenceReferenceKidHtml()}${sentenceReferenceKeeperHtml()}<div class="sentence-reference-state-layer">${distractors}${sceneAnimals}</div>${resourceFrame}${currentCard}${choices}${sentenceDemoTasks.map((item) => sentenceReferenceAnimalHitHtml(item.animal)).join("")}</div>`;
  bindSentenceReferenceEvents();
  sentenceBindTools(renderSentenceFindReference, "sentence-find");
  startSentenceFindHintTimer();
}

function bindSentenceReferenceEvents() {
  view.querySelectorAll("[data-sentence-reference-tool]").forEach((button) => button.addEventListener("click", () => {
    const action = button.dataset.sentenceReferenceTool;
    if (action === "home") setStage("home");
    if (action === "sound") toggleSound(renderSentenceFindReference);
  }));
  view.querySelectorAll("[data-sentence-reference-animal]").forEach((button) => button.addEventListener("click", () => {
    if (state.sentenceFindResolved) return;
    const task = sentenceDemoTasks[state.sentenceFindIndex];
    const id = button.dataset.sentenceReferenceAnimal;
    if (id !== task.animal) { button.classList.add("is-wrong"); playSound("wrong"); window.setTimeout(() => button.classList.remove("is-wrong"), 360); return; }
    stopSentenceFindHintTimer();
    state.sentenceFindHintTarget = null;
    state.sentenceFindSelectedAnimal = id;
    state.sentenceFindKeeperAnimal = id;
    playSound("pick");
    renderSentenceFindReference();
  }));
  view.querySelectorAll("[data-sentence-reference-result]").forEach((button) => button.addEventListener("click", () => {
    const task = sentenceDemoTasks[state.sentenceFindIndex];
    const id = button.dataset.sentenceReferenceResult;
    if (id !== task.care) { button.classList.add("is-wrong"); playSound("wrong"); window.setTimeout(() => button.classList.remove("is-wrong"), 360); return; }
    stopSentenceFindHintTimer();
    state.sentenceFindHintTarget = null;
    state.sentenceFindResolved = true;
    state.sentenceFindResources.push(id);
    state.sentenceFindKeeperAnimal = task.animal;
    // Animals with a completed destination take the keeper with them.
    const completedDestination = Boolean(sentenceReferenceCompletedSpots[task.animal]);
    state.sentenceFindKeeperPosition = sentenceReferenceKeeperTarget(task.animal, completedDestination);
    state.sentenceFindKidPosition = sentenceReferenceKidTarget(task.animal, completedDestination);
    state.sentenceFindSelectedAnimal = null;
    state.sentenceFindKeeperAnimal = null;
    playSound("success");
    speakPhrase(task.sentence);
    if (task.id === "penguin") {
      const completedIndex = state.sentenceFindIndex;
      renderSentenceFindReference();
      window.setTimeout(() => {
        if (state.stage !== "sentence-find" || state.sentenceFindIndex !== completedIndex || !state.sentenceFindResolved) return;
        state.sentenceFindResolved = false;
        state.sentenceFindIndex += 1;
        renderSentenceFindReference();
      }, 2600);
      return;
    }
    state.sentenceFindResolved = false;
    state.sentenceFindIndex += 1;
    renderSentenceFindReference();
  }));
}

function sentenceCareResourceButtonHtml(kind, id, selected, error) {
  const label = kind === "animal" ? sentenceAnimals[id].label : sentenceCareResources[id].label;
  const visual = kind === "animal" ? sentenceAnimalSvg(id, "small-svg") : sentenceCareImageSvg(id);
  return `<button class="sentence-care-resource ${selected ? "is-selected" : ""} ${error ? "is-wrong" : ""}" type="button" data-sentence-care-resource-kind="${kind}" data-sentence-care-resource-id="${id}" aria-label="放入${label}">${visual}<span>${label}</span></button>`;
}

function sentenceCareFafaTarget(animalId, careSpots, isComplete = false) {
  if (isComplete && sentenceStageTwoCompletedFafaSpots[animalId]) return { ...sentenceStageTwoCompletedFafaSpots[animalId] };
  if (sentenceStageTwoFafaSpots[animalId]) return { ...sentenceStageTwoFafaSpots[animalId] };
  const animalSpot = animalId ? careSpots[animalId] : null;
  return animalSpot
    ? {
        left: animalSpot.left > 650 ? animalSpot.left - 66 : animalSpot.left + 104,
        top: animalSpot.top > 430 ? animalSpot.top - 8 : animalSpot.top + 10
      }
    : null;
}

function sentenceCareFafaHtml(selectedAnimalId, careSpots) {
  const home = { left: 74, top: 290 };
  const source = state.sentenceCareKeeperPosition || home;
  const target = selectedAnimalId ? sentenceCareFafaTarget(selectedAnimalId, careSpots) || source : source;
  const moving = Boolean(selectedAnimalId && !state.sentenceCareKeeperArrived);
  const style = `left:${target.left}px;top:${target.top}px;--keeper-from-x:${source.left - target.left}px;--keeper-from-y:${source.top - target.top}px;`;
  return sentenceCaretakerHtml("fafa", `sentence-caretaker sentence-care-fafa ${moving ? "is-moving" : ""}`, style);
}

function sentenceCareAnswerStyle(task, careSpots) {
  const spot = careSpots[task.animal];
  const frameWidth = 266;
  const frameHeight = 106;
  const margin = 18;
  const canvasWidth = 1194;
  const canvasHeight = 834;
  let left = spot.left + (94 - frameWidth) / 2;
  let top = spot.top - frameHeight - 10;
  if (top < 64) top = spot.top + 94 + margin;
  left = Math.max(margin, Math.min(left, canvasWidth - frameWidth - margin));
  top = Math.max(64, Math.min(top, canvasHeight - 190 - frameHeight));
  return `left:${left}px;top:${top}px;transform:none;`;
}

function sentenceCareAnswerHtml(task, careSpots) {
  const animal = state.sentenceCareSelections.animal;
  const care = state.sentenceCareSelections.care;
  const animalHint = !animal && state.sentenceCareHint === "animal";
  const careHint = !care && state.sentenceCareHint === "care";
  const agentHint = state.sentenceCareHint === "agent";
  const agentVisual = agentHint || state.sentenceCareReady
    ? `<span class="sentence-passive-bridge">被</span><div class="sentence-answer-agent">法法</div>`
    : state.sentenceCareHint
      ? `<span class="sentence-answer-question">?</span>`
      : sentenceCareCountdownHtml();
  const phrase = state.sentenceCareReady ? sentencePassiveHtml(sentenceAnimals[task.animal].label, "法法", sentenceCareResources[task.care].label) : "";
  const animalVisual = animal
    ? sentenceAnimalSvg(animal, "sentence-answer-animal-svg", "", false, false)
    : animalHint
      ? `<span class="sentence-answer-hint-visual">${sentenceAnimalSvg(task.animal, "sentence-answer-animal-svg", "", false, false)}</span>`
      : `<span class="sentence-answer-question">?</span>`;
  const careVisual = care
    ? sentenceCareImageSvg(care, "sentence-answer-care-image")
    : careHint
      ? `<span class="sentence-answer-hint-visual">${sentenceCareImageSvg(task.care, "sentence-answer-care-image")}</span>`
      : `<span class="sentence-answer-question">?</span>`;
  return `<section class="sentence-care-answer ${state.sentenceCareReady ? "is-ready" : ""}" style="${sentenceCareAnswerStyle(task, careSpots)}" aria-label="被字句答题区"><div class="sentence-answer-slots"><div class="sentence-answer-slot ${animalHint ? "is-hint" : ""} ${state.sentenceErrorTargets.includes("animal") ? "is-wrong" : ""}" data-sentence-care-drop-kind="animal" aria-label="动物资源答题框">${animalVisual}</div><div class="sentence-answer-center ${agentHint ? "is-hint" : ""}">${agentVisual}</div><div class="sentence-answer-slot ${careHint ? "is-hint" : ""} ${state.sentenceErrorTargets.includes("care") ? "is-wrong" : ""}" data-sentence-care-drop-kind="care" aria-label="动作结果资源答题框">${careVisual}</div></div><div class="sentence-complete-phrase">${phrase}</div></section>`;
}

function sentenceCareSelectResource(task, kind, id) {
  if (!state.sentenceCareKeeperArrived || !state.sentenceCareSelectedAnimal) {
    setFeedback("等法法走到动物身边后再点击资源。 ");
    return;
  }
  state.sentenceCareSelections[kind] = id;
  state.sentenceCareReady = false;
  clearSentenceError();
  playSound("drop");
  checkSentenceCare(task);
}

function clearSentenceCareErrorTargetsSoon() {
  if (sentenceCareErrorTimer) window.clearTimeout(sentenceCareErrorTimer);
  sentenceCareErrorTimer = window.setTimeout(() => {
    sentenceCareErrorTimer = null;
    if (state.stage !== "sentence-care" || !state.sentenceErrorTargets.length) return;
    state.sentenceErrorTargets = [];
    renderSentenceCare();
  }, 420);
}

function sentenceCareReflectionPrompt(task) {
  return sentenceCareReflectionPrompts[task.id] || sentenceCareReflectionPrompts.lion;
}

function sentenceCareReflectionHtml(task) {
  const reflection = sentenceCareReflectionPrompt(task);
  const isBandageReflection = task.id === "rabbit";
  const prompt = isBandageReflection
    ? reflection.prompt.replace(
        "包扎",
        `<span class="phrase-reflection-prompt-icon"><img src="${SENTENCE_STAGE_TWO_ASSETS.resultResources.bandage}" alt="包扎"></span>`
      )
    : reflection.prompt;
  return `
    <div class="restore-lesson-overlay phrase-restore-reflection-overlay" role="dialog" aria-modal="true" aria-label="句子反思题">
      <section class="phrase-restore-reflection-card">
        ${isBandageReflection ? "" : `<div class="phrase-restore-reflection-visual"><img src="${SENTENCE_STAGE_TWO_ASSETS.resultResources[task.care]}" alt="${sentenceCareResources[task.care].label}"></div>`}
        <p class="phrase-restore-reflection-prompt">${prompt}</p>
        <div class="phrase-restore-reflection-options">
          ${reflection.options.map((option, index) => `
            <button class="phrase-restore-reflection-option ${state.sentenceCareReflectionSelection === option.id ? "is-selected" : ""} ${state.sentenceCareReflectionError === option.id ? "is-wrong" : ""}" type="button" data-sentence-care-reflection-choice="${option.id}">
              <span class="phrase-restore-reflection-letter">${String.fromCharCode(65 + index)}.</span>
              <span>${option.label}</span>
            </button>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function sentenceCareLessonHtml(task) {
  const sentence = task.sentence.replace(/[。！？]$/, "");
  const lessonPhrase = sentence.replace("被法法", '<span class="sentence-lesson-bei">被</span><span class="sentence-lesson-agent">法法</span>');
  return `<div class="restore-lesson-overlay sentence-care-lesson-overlay" role="dialog" aria-modal="true" aria-label="被字句语法讲解">
    <section class="restore-lesson-card sentence-care-lesson-card">
      ${secondStageLessonCountdownHtml()}
      <div class="lesson-bridge-row" aria-label="动物被法法施加动作并产生结果">
        <div class="lesson-card-piece"><img class="sentence-care-lesson-image" src="${SENTENCE_STAGE_TWO_ASSETS.animals[task.animal].initial}" alt="${sentenceAnimals[task.animal].label}"></div>
        <div class="sentence-care-lesson-agent"><span class="sentence-lesson-bei">被</span><span class="sentence-lesson-agent">法法</span></div>
        <div class="lesson-result-piece"><img class="sentence-care-lesson-image" src="${SENTENCE_STAGE_TWO_ASSETS.resultResources[task.care]}" alt="${sentenceCareResources[task.care].label}"></div>
        <div class="lesson-equals" aria-hidden="true">=</div>
        <strong class="sentence-care-lesson-phrase">${lessonPhrase}</strong>
      </div>
    </section>
  </div>`;
}

function advanceSentenceCareAfterLesson() {
  const task = sentenceCareTasks[state.sentenceCareIndex];
  if (!task || state.sentenceCareLesson !== task.id) return;
  stopSentenceCareLessonTimer();
  state.sentenceCareLesson = null;
  state.sentenceCareReflection = null;
  state.sentenceCareReflectionSelection = null;
  state.sentenceCareReflectionError = null;
  state.sentenceCareCompletedIds.push(task.id);
  state.sentenceCareIndex += 1;
  state.sentenceCareKeeperAnimal = null;
  state.sentenceCareKeeperPosition = sentenceCareFafaTarget(
    task.animal,
    state.sentenceCareSpots || createSentenceCareSpots(),
    Boolean(sentenceStageTwoCompletedSceneSpots[task.animal])
  ) || state.sentenceCareKeeperPosition;
  state.sentenceCareSelectedAnimal = null;
  state.sentenceCareKeeperArrived = false;
  state.sentenceCareSelections = { animal: null, care: null };
  state.sentenceCareReady = false;
  state.sentenceCareHint = null;
  state.sentenceCareHintSeconds = SENTENCE_CARE_HINT_SECONDS;
  render();
}

function scheduleSentenceCareLesson(task) {
  stopSentenceCareLessonTimer();
  sentenceCareLessonTimer = window.setTimeout(() => {
    sentenceCareLessonTimer = null;
    advanceSentenceCareAfterLesson();
  }, SECOND_STAGE_LESSON_AUTO_EXIT_MS);
}

function sentenceCareAssetAnimalHtml(id, completedAnimalIds, currentId) {
  const baseSpot = sentenceStageTwoSceneSpots[id];
  const asset = SENTENCE_STAGE_TWO_ASSETS.animals[id];
  const isDone = completedAnimalIds.includes(id);
  const spot = isDone ? { ...baseSpot, ...(sentenceStageTwoCompletedSceneSpots[id] || {}) } : baseSpot;
  const stateClass = isDone ? "is-complete" : currentId === id ? "is-current" : "";
  return `<img class="sentence-care-asset-animal ${stateClass}" data-sentence-care-visual="${id}" src="${asset[isDone ? "complete" : "initial"]}" alt="${sentenceAnimals[id].label}" style="left:${spot.left}px;top:${spot.top}px;width:${spot.width}px;height:${spot.height}px">`;
}

function sentenceCareAssetFafaHtml(selectedAnimalId, careSpots) {
  const home = { left: 535, top: 288 };
  const source = state.sentenceCareKeeperPosition || home;
  const target = selectedAnimalId ? sentenceCareFafaTarget(selectedAnimalId, careSpots) || source : source;
  const moving = Boolean(selectedAnimalId && !state.sentenceCareKeeperArrived);
  const style = `left:${target.left}px;top:${target.top}px;--keeper-from-x:${source.left - target.left}px;--keeper-from-y:${source.top - target.top}px;`;
  return `<div class="sentence-care-asset-fafa ${moving ? "is-moving" : ""}" style="${style}" aria-label="法法"><img src="${SENTENCE_STAGE_TWO_ASSETS.fafa}" alt="法法"></div>`;
}

function sentenceCareAssetTaskHtml(task) {
  return `<aside class="sentence-care-asset-task" aria-label="题目"><img class="sentence-care-task-label" src="${SENTENCE_CARE_TASK_LABEL_ASSET}" alt="任务"><img src="${SENTENCE_STAGE_TWO_ASSETS.taskCards[task.animal]}" alt="${sentenceAnimals[task.animal].label}照护结果"></aside>`;
}

function sentenceCareAssetAnswerStyle(task, careSpots) {
  const spot = careSpots[task.animal];
  const frameWidth = 202;
  const frameHeight = 82;
  let left = spot.left + spot.width / 2 - frameWidth / 2 - 12;
  let top = spot.top - frameHeight - 12;
  if (top < 120) top = spot.top + spot.height - 5;
  left = Math.max(18, Math.min(1194 - frameWidth - 18, left));
  top = Math.max(28, Math.min(676 - frameHeight, top));
  return `left:${Math.round(left)}px;top:${Math.round(top)}px;`;
}

function sentenceCareAssetAnswerHtml(task, careSpots) {
  const animal = state.sentenceCareSelections.animal;
  const care = state.sentenceCareSelections.care;
  const animalHint = !animal && state.sentenceCareHint === "animal";
  const careHint = !care && state.sentenceCareHint === "care";
  const agentHint = state.sentenceCareHint === "agent";
  const animalAsset = SENTENCE_STAGE_TWO_ASSETS.animals[task.animal];
  const animalVisual = animal
    ? `<img class="sentence-care-answer-animal" src="${animalAsset.initial}" alt="${sentenceAnimals[animal].label}">`
    : animalHint
      ? `<img class="sentence-care-answer-animal is-hint" src="${animalAsset.initial}" alt="${sentenceAnimals[task.animal].label}">`
      : `<span class="sentence-care-answer-question">?</span>`;
  const careVisual = care
    ? `<img class="sentence-care-answer-result" src="${SENTENCE_STAGE_TWO_ASSETS.resultResources[care]}" alt="${sentenceCareResources[care].label}">`
    : careHint
      ? `<img class="sentence-care-answer-result is-hint" src="${SENTENCE_STAGE_TWO_ASSETS.resultResources[task.care]}" alt="${sentenceCareResources[task.care].label}">`
      : `<span class="sentence-care-answer-question">?</span>`;
  const agentVisual = agentHint || state.sentenceCareReady
    ? `<span class="sentence-care-answer-agent-hint"><span class="sentence-care-answer-agent-bei">被</span><span class="sentence-care-answer-agent-name">法法</span></span>`
    : sentenceCareCountdownHtml();
  return `<section class="sentence-care-asset-answer ${state.sentenceCareReady ? "is-ready" : ""}" style="${sentenceCareAssetAnswerStyle(task, careSpots)}" aria-label="被字句答题区"><div class="sentence-care-asset-answer-slots"><div class="sentence-care-asset-answer-slot ${animalHint ? "is-hint" : ""} ${state.sentenceErrorTargets.includes("animal") ? "is-wrong" : ""}" data-sentence-care-drop-kind="animal" aria-label="动物资源答题框">${animalVisual}</div><div class="sentence-care-asset-answer-middle">${agentVisual}</div><div class="sentence-care-asset-answer-slot ${careHint ? "is-hint" : ""} ${state.sentenceErrorTargets.includes("care") ? "is-wrong" : ""}" data-sentence-care-drop-kind="care" aria-label="动作结果资源答题框">${careVisual}</div></div></section>`;
}

function sentenceCareAssetResourceButtonHtml(kind, id, selected) {
  const label = kind === "animal" ? sentenceAnimals[id].label : sentenceCareResources[id].label;
  const src = kind === "animal" ? SENTENCE_STAGE_TWO_ASSETS.animals[id].resource : SENTENCE_STAGE_TWO_ASSETS.resultResources[id];
  return `<button class="sentence-care-asset-resource ${selected ? "is-selected" : ""}" type="button" data-sentence-care-resource-kind="${kind}" data-sentence-care-resource-id="${id}" aria-label="放入${label}"><img src="${src}" alt="${label}"><span>${label}</span></button>`;
}

function renderSentenceCare() {
  const task = sentenceCareTasks[state.sentenceCareIndex];
  if (!task) {
    stopSentenceCareHintCountdown();
    stopSentenceCareArrivalTimer();
    stopSentenceCareLessonTimer();
    state.stage = "sentence-book";
    state.sentenceBookVisited = true;
    render();
    return;
  }

  const shouldStartAutomaticArrival = state.sentenceCareSelectedAnimal !== task.animal;
  if (shouldStartAutomaticArrival) {
    stopSentenceCareArrivalTimer();
    state.sentenceCareSelectedAnimal = task.animal;
    state.sentenceCareKeeperArrived = false;
    state.sentenceCareHint = null;
    state.sentenceCareHintSeconds = SENTENCE_CARE_HINT_SECONDS;
  }

  const completedAnimalIds = state.sentenceCareCompletedIds.map((id) => sentenceCareTasks.find((item) => item.id === id)?.animal).filter(Boolean);
  const careSpots = state.sentenceCareSpots || createSentenceCareSpots();
  const animalOrder = state.sentenceCareAnimalOrder.length ? state.sentenceCareAnimalOrder : SENTENCE_STAGE_TWO_ANIMAL_ORDER;
  const resultOrder = state.sentenceCareResourceOrder.length ? state.sentenceCareResourceOrder : SENTENCE_STAGE_TWO_RESULT_ORDER;
  const usedAnimalIds = new Set(completedAnimalIds);
  const usedCareIds = new Set(state.sentenceCareCompletedIds.map((id) => sentenceCareTasks.find((item) => item.id === id)?.care));
  const availableAnimalResources = animalOrder.filter((id) => !usedAnimalIds.has(id));
  const availableCareResources = resultOrder.filter((id) => !usedCareIds.has(id));
  const sceneAnimals = sentenceCareTasks.map((item) => sentenceCareAssetAnimalHtml(item.animal, completedAnimalIds, task.animal)).join("");
  const fixedAnimals = `<img class="sentence-care-asset-fixed sentence-care-asset-fox" src="${SENTENCE_STAGE_TWO_ASSETS.fixedScene.fox}" alt="狐狸"><img class="sentence-care-asset-fixed sentence-care-asset-bird" src="${SENTENCE_STAGE_TWO_ASSETS.fixedScene.bird}" alt="小鸟">`;
  const answerFrame = state.sentenceCareSelectedAnimal && state.sentenceCareKeeperArrived ? sentenceCareAssetAnswerHtml(task, careSpots) : "";
  const isReflecting = state.sentenceCareReflection === task.id;
  const lessonOverlay = state.sentenceCareLesson === task.id ? sentenceCareLessonHtml(task) : "";
  view.innerHTML = `<div class="sentence-care-asset-stage"><img class="sentence-care-asset-background" src="${SENTENCE_STAGE_TWO_ASSETS.background}" alt="竹林动物地图">${sentenceStageInstructionHtml("two")}<div class="sentence-care-asset-scene" aria-label="动物照护场景">${fixedAnimals}${sceneAnimals}${sentenceCareAssetFafaHtml(state.sentenceCareSelectedAnimal, careSpots)}</div>${sentenceReferenceToolsHtml(false, SENTENCE_STAGE_TWO_ASSETS.lockedBook)}${sentenceCareAssetTaskHtml(task)}${answerFrame}<div class="sentence-care-asset-dock" aria-label="资源栏"><i class="sentence-care-asset-dock-frame sentence-care-asset-dock-frame-left" aria-hidden="true"></i><i class="sentence-care-asset-dock-frame sentence-care-asset-dock-frame-right" aria-hidden="true"></i><div class="sentence-care-asset-resource-list sentence-care-asset-animal-list">${availableAnimalResources.map((id) => sentenceCareAssetResourceButtonHtml("animal", id, state.sentenceCareSelections.animal === id)).join("")}</div><div class="sentence-care-asset-resource-list sentence-care-asset-result-list">${availableCareResources.map((id) => sentenceCareAssetResourceButtonHtml("care", id, state.sentenceCareSelections.care === id)).join("")}</div></div>${isReflecting ? sentenceCareReflectionHtml(task) : ""}${lessonOverlay}</div>`;

  if (shouldStartAutomaticArrival) {
    const id = task.animal;
    setFeedback(`轮到${sentenceAnimals[id].label}啦，法法正在走到它身边。`);
    sentenceCareArrivalTimer = window.setTimeout(() => {
      if (state.stage !== "sentence-care" || state.sentenceCareSelectedAnimal !== id) return;
      state.sentenceCareKeeperArrived = true;
      state.sentenceCareKeeperAnimal = id;
      state.sentenceCareKeeperPosition = sentenceCareFafaTarget(id, careSpots);
      sentenceCareArrivalTimer = null;
      renderSentenceCare();
    }, 560);
  }

  view.querySelectorAll("[data-sentence-care-resource-kind]").forEach((button) => {
    button.addEventListener("click", () => {
      sentenceCareSelectResource(
        task,
        button.dataset.sentenceCareResourceKind,
        button.dataset.sentenceCareResourceId
      );
    });
  });
  view.querySelectorAll("[data-sentence-care-drop-kind]").forEach((slot) => {
    slot.addEventListener("click", () => {
      const kind = slot.dataset.sentenceCareDropKind;
      if (!state.sentenceCareSelections[kind]) return;
      state.sentenceCareSelections[kind] = null;
      state.sentenceCareReady = false;
      clearSentenceError();
      playSound("click");
      renderSentenceCare();
    });
  });
  view.querySelectorAll("[data-sentence-care-reflection-choice]").forEach((button) => button.addEventListener("click", () => {
    const currentTask = sentenceCareTasks[state.sentenceCareIndex];
    if (!currentTask || state.sentenceCareReflection !== currentTask.id) return;
    const reflection = sentenceCareReflectionPrompt(currentTask);
    const choice = button.dataset.sentenceCareReflectionChoice;
    state.sentenceCareReflectionSelection = choice;
    if (choice !== reflection.correct) {
      state.sentenceCareReflectionError = choice;
      playSound("wrong");
      renderSentenceCare();
      window.setTimeout(() => {
        if (state.sentenceCareReflection === currentTask.id && state.sentenceCareReflectionError === choice) {
          state.sentenceCareReflectionError = null;
          state.sentenceCareReflectionSelection = null;
          renderSentenceCare();
        }
      }, REFLECTION_FEEDBACK_DURATION_MS);
      return;
    }
    state.sentenceCareReflection = null;
    state.sentenceCareReflectionError = null;
    state.sentenceCareLesson = currentTask.id;
    setFeedback("现在看语法讲解。 ");
    playSound("success");
    renderSentenceCare();
    scheduleSentenceCareLesson(currentTask);
  }));
  sentenceBindTools(renderSentenceCare, "sentence-care");
  startSentenceCareHintCountdown();
}

function checkSentenceCare(task) {
  const { animal, care } = state.sentenceCareSelections;
  if (!animal || !care) {
    setFeedback(animal
      ? `“${sentenceAnimals[animal].label}”动物资源已放好，继续点击任意照护结果资源。`
      : care
        ? `“${sentenceCareResources[care].label}”照护结果资源已放好，继续点击任意动物资源。`
        : "点击任意动物资源或照护结果资源开始组合。");
    renderSentenceCare();
    return;
  }
  if (animal === task.animal && care === task.care) {
    state.sentenceCareReady = true;
    state.sentenceCareReflection = task.id;
    state.sentenceCareReflectionSelection = null;
    state.sentenceCareReflectionError = null;
    state.sentenceCareLesson = null;
    stopSentenceCareHintCountdown();
    clearSentenceError();
    setFeedback(`${task.sentence} 做对啦！`);
    playSound("success");
    renderSentenceCare();
    return;
  }

  const wrongKinds = [
    animal !== task.animal ? "animal" : null,
    care !== task.care ? "care" : null
  ].filter(Boolean);
  const message = animal === task.animal
    ? "动物对了，再看看应该搭配哪个照护结果。"
    : care === task.care
      ? "照护结果对了，再看看对应的是哪只动物。"
      : "动物资源和照护结果还没有配好。";
  stopStageFourErrorDismiss("sentence");
  state.sentenceCareReady = false;
  state.sentenceError = message;
  state.sentenceErrorTargets = wrongKinds;
  wrongKinds.forEach((kind) => {
    state.sentenceCareSelections[kind] = null;
  });
  setFeedback(message);
  playSound("wrong");
  renderSentenceCare();
  clearSentenceCareErrorTargetsSoon();
}

function sentencePassiveHtml(receiver, agent, result) {
  return `<span class="sentence-phrase-receiver">${receiver}</span><span class="sentence-phrase-bei">被</span>${agent ? `<span class="sentence-phrase-agent">${agent}</span>` : ""}<span class="sentence-phrase-result">${result}</span><span>。</span>`;
}

function clearSentenceError() {
  stopStageFourErrorDismiss("sentence");
  state.sentenceError = null;
  state.sentenceErrorTopic = null;
  state.sentenceErrorTargets = [];
}

function openSentenceBook(returnStage) {
  if (returnStage !== "sentence-transfer") return;
  state.sentenceBookReturnStage = returnStage;
  state.stage = "sentence-book";
  render();
}

function returnFromSentenceBook() {
  const returnStage = state.sentenceBookReturnStage;
  state.sentenceBookReturnStage = null;
  if (!returnStage) {
    setStage("home");
    return;
  }
  state.stage = returnStage;
  setFeedback(returnStage === "sentence-transfer" ? "根据超市任务，选出正确的被字句。" : "继续照顾动物吧。 ");
  render();
}

function sentenceStoreDecorHtml() {
  return `<div class="sentence-store-sign">社区超市</div><div class="sentence-store-shelf sentence-store-shelf-left"></div><div class="sentence-store-shelf sentence-store-shelf-right"></div><div class="sentence-store-cart" aria-hidden="true"></div><div class="sentence-store-counter" aria-hidden="true"></div>`;
}

function sentenceBookNextArtHtml() {
  return `<button class="sentence-book-next-art" type="button" data-sentence-book-action="next" aria-label="${state.sentenceBookReturnStage ? "返回游戏" : "进入第四阶段"}"><img src="${SENTENCE_STAGE_THREE_ASSETS.next}" alt=""></button>`;
}

function renderSentenceBook() {
  state.sentenceBookVisited = true;
  const returnAction = state.sentenceBookReturnStage ? "return" : "home";
  view.innerHTML = `<div class="sentence-book-asset-stage" role="dialog" aria-label="被字句语法宝典"><img class="sentence-book-asset-background" src="${SENTENCE_STAGE_TWO_ASSETS.background}" alt="竹林动物地图"><div class="sentence-book-asset-dim" aria-hidden="true"></div>${sentenceReferenceToolsHtml(true)}${stageInstructionHtml("three")}<div class="sentence-book-scroll-art"><img src="${SENTENCE_STAGE_THREE_ASSETS.scroll}" alt="被字句语法宝典"></div>${sentenceBookNextArtHtml()}<button class="sentence-book-asset-close" type="button" data-sentence-book-action="${returnAction}" aria-label="${returnAction === "return" ? "返回游戏" : "返回首页"}"></button></div>`;
  view.querySelectorAll("[data-sentence-book-action]").forEach((button) => button.addEventListener("click", () => {
    const action = button.dataset.sentenceBookAction;
    if (action === "home") setStage("home");
    if (action === "return") returnFromSentenceBook();
    if (action === "next") state.sentenceBookReturnStage ? returnFromSentenceBook() : startSentenceTransfer();
  }));
  sentenceBindTools(renderSentenceBook, state.sentenceBookReturnStage || "sentence-book");
  setFeedback("承受者在前面，重点看它受到了什么影响。 ");
  playStageThreeNarration("sentence");
}

function startSentenceTransfer() {
  state.sentenceBookReturnStage = null;
  state.sentenceTransferBookOpen = false;
  state.stage = "sentence-transfer";
  state.sentenceTransferIndex = 0;
  state.sentenceTransferSelections = { value: null, object: null, result: null };
  state.sentenceTransferOrder = [];
  state.sentenceTransferReady = false;
  state.sentenceTransferredIds = [];
  clearSentenceError();
  render();
}

function sentenceStoreItemHtml(id, sizeClass = "small-svg") {
  const data = { bread: { label: "面包", fill: "#e4aa57", mark: "面" }, milk: { label: "牛奶", fill: "#d8eff7", mark: "奶" }, apple: { label: "苹果", fill: "#ef7170", mark: "苹" }, shelf: { label: "货架", fill: "#e5c28b", mark: "架" }, cart: { label: "购物车", fill: "#69a8d2", mark: "车" }, counter: { label: "收银台", fill: "#a77958", mark: "台" }, floor: { label: "地上", fill: "#f2b261", mark: "倒" }, bag: { label: "购物袋", fill: "#85bb7c", mark: "袋" } }[id];
  return `<svg class="${sizeClass}" viewBox="0 0 78 78" role="img" aria-label="${data.label}"><rect x="10" y="11" width="58" height="56" rx="10" fill="${data.fill}" stroke="#304052" stroke-width="3"/><circle cx="29" cy="32" r="6" fill="rgba(255,255,255,.72)"/><circle cx="50" cy="32" r="6" fill="rgba(255,255,255,.72)"/><text x="39" y="54" text-anchor="middle" font-size="20" font-weight="900" fill="#304052">${data.mark}</text></svg>`;
}

function sentenceTransferSceneVisualHtml(id) {
  if (id === "apple-bag") {
    return `<svg class="sentence-transfer-scene-image" viewBox="0 0 180 96" role="img" aria-label="苹果被妈妈装进购物袋了">
      <path d="M52 32 H128 L119 84 H61 Z" fill="#f3c968" stroke="#304052" stroke-width="4"/>
      <path d="M65 35 Q68 11 90 17 Q112 11 115 35" fill="none" stroke="#7c9f72" stroke-width="6" stroke-linecap="round"/>
      <path d="M76 57 C65 44 73 33 87 39 C93 27 108 35 106 49 C104 64 91 71 76 57 Z" fill="#ef7170" stroke="#304052" stroke-width="3"/>
      <path d="M91 39 Q91 28 100 26" fill="none" stroke="#6c9d63" stroke-width="4" stroke-linecap="round"/>
    </svg>`;
  }
  if (id === "ice-cream-freezer") {
    return `<svg class="sentence-transfer-scene-image" viewBox="0 0 180 96" role="img" aria-label="冰淇淋被妈妈放回冰柜了">
      <rect x="30" y="18" width="120" height="66" rx="8" fill="#bfe1ef" stroke="#304052" stroke-width="4"/>
      <path d="M30 43 H150 M90 18 V84" stroke="#79abc4" stroke-width="4"/>
      <path d="M61 38 L77 65 H45 Z" fill="#e8b16c" stroke="#304052" stroke-width="3"/>
      <path d="M45 39 Q61 20 77 39 Q73 47 61 47 Q49 47 45 39 Z" fill="#ef8fa5" stroke="#304052" stroke-width="3"/>
      <path d="M110 38 L126 65 H94 Z" fill="#e8b16c" stroke="#304052" stroke-width="3"/>
      <path d="M94 39 Q110 20 126 39 Q122 47 110 47 Q98 47 94 39 Z" fill="#f1cc6d" stroke="#304052" stroke-width="3"/>
    </svg>`;
  }
  if (id === "juice-spilled") {
    return `<svg class="sentence-transfer-scene-image" viewBox="0 0 180 96" role="img" aria-label="果汁被妹妹碰倒了">
      <path d="M30 73 Q52 65 74 73 T118 73 T158 73" fill="none" stroke="#e6bd83" stroke-width="7" stroke-linecap="round"/>
      <path d="M71 42 L112 55 L99 78 L58 65 Z" fill="#f4a95d" stroke="#304052" stroke-width="4"/>
      <path d="M72 45 L109 57" stroke="#fff0bf" stroke-width="4" stroke-linecap="round"/>
      <path d="M123 57 Q141 45 153 59 Q143 70 126 68 Z" fill="#f4a95d" opacity=".8"/>
      <path d="M31 28 Q39 19 47 28 M47 28 Q55 19 63 28" fill="none" stroke="#79b8d2" stroke-width="5" stroke-linecap="round"/>
    </svg>`;
  }
  if (id === "receipt-printed") {
    return `<svg class="sentence-transfer-scene-image" viewBox="0 0 180 96" role="img" aria-label="小票被打印出来了">
      <rect x="35" y="24" width="110" height="54" rx="7" fill="#d8eff7" stroke="#304052" stroke-width="4"/>
      <path d="M56 24 V12 H124 V24" fill="#bfe1ef" stroke="#304052" stroke-width="4"/>
      <path d="M76 60 V42 H106 V60" fill="#fffdf0" stroke="#304052" stroke-width="3"/>
      <path d="M82 47 H100 M82 53 H98" stroke="#8a9eac" stroke-width="3" stroke-linecap="round"/>
      <path d="M72 78 H110" stroke="#fffdf0" stroke-width="4" stroke-linecap="round"/>
    </svg>`;
  }
  if (id === "bag-filled") {
    return `<svg class="sentence-transfer-scene-image" viewBox="0 0 180 96" role="img" aria-label="购物袋被装满了">
      <path d="M52 32 H128 L119 84 H61 Z" fill="#85bb7c" stroke="#304052" stroke-width="4"/>
      <path d="M65 35 Q68 11 90 17 Q112 11 115 35" fill="none" stroke="#5c9160" stroke-width="6" stroke-linecap="round"/>
      <circle cx="74" cy="47" r="12" fill="#ef7170" stroke="#304052" stroke-width="3"/><path d="M69 36 Q72 27 79 29" fill="none" stroke="#6c9d63" stroke-width="3" stroke-linecap="round"/>
      <path d="M94 54 L108 34 L122 54 Z" fill="#e8b16c" stroke="#304052" stroke-width="3"/><path d="M98 40 Q108 25 118 40" fill="none" stroke="#ef8fa5" stroke-width="6" stroke-linecap="round"/>
    </svg>`;
  }
  if (id !== "bread-shelf") return "";
  return `<svg class="sentence-transfer-scene-image" viewBox="0 0 180 96" role="img" aria-label="面包整齐排列在货架上">
    <path d="M18 18 H162 M18 48 H162 M18 78 H162" fill="none" stroke="#a77952" stroke-width="7" stroke-linecap="round"/>
    <path d="M18 14 V84 M162 14 V84" fill="none" stroke="#8d6545" stroke-width="7" stroke-linecap="round"/>
    <path d="M38 35 Q46 23 56 35 L58 43 H36 Z M75 35 Q83 23 93 35 L95 43 H73 Z M112 35 Q120 23 130 35 L132 43 H110 Z" fill="#e4aa57" stroke="#304052" stroke-width="3"/>
    <path d="M43 33 H52 M80 33 H89 M117 33 H126" stroke="#fff0bf" stroke-width="3" stroke-linecap="round"/>
    <path d="M43 64 Q50 53 57 64 L58 72 H42 Z M80 64 Q87 53 94 64 L95 72 H79 Z M117 64 Q124 53 131 64 L132 72 H116 Z" fill="#e4aa57" stroke="#304052" stroke-width="3"/>
    <path d="M47 62 H54 M84 62 H91 M121 62 H128" stroke="#fff0bf" stroke-width="3" stroke-linecap="round"/>
  </svg>`;
}

function sentenceTransferResourceLabel(kind, id) {
  const labels = {
    value: { bread: "面包", milk: "牛奶", apple: "苹果", shelf: "货架上", cart: "购物车里", counter: "收银台上" },
    object: { apple: "苹果", milk: "牛奶", bread: "面包", "ice-cream": "冰淇淋" },
    result: { bag: "装进购物袋", trolley: "购物车", wipe: "擦干", shelf: "放在货架上", counter: "推到收银台", freezer: "放进冰柜", filled: "装满", arranged: "摆整齐" }
  };
  return labels[kind]?.[id] || id;
}

function sentenceTransferResourceVisualHtml(kind, id) {
  const src = SENTENCE_STAGE_FOUR_ASSETS.resources[id];
  if (!src) return "";
  return `<img class="sentence-transfer-resource-image" src="${src}" alt="${sentenceTransferResourceLabel(kind, id)}">`;
}

function sentenceTransferResourceCombineHtml(task) {
  const selections = state.sentenceTransferSelections;
  const selectedObject = selections.object ? sentenceTransferResourceVisualHtml("object", selections.object) : `<span class="sentence-resource-combine-placeholder">?</span>`;
  const selectedResult = selections.result ? sentenceTransferResourceVisualHtml("result", selections.result) : `<span class="sentence-resource-combine-placeholder">?</span>`;
  return `<div class="sentence-resource-combine-answer">
    <div class="sentence-resource-combine-phrase" aria-label="答题区：空格被${task.agent}空格">
      <div class="sentence-resource-combine-slot">${selectedObject}</div><span class="sentence-resource-combine-connector">被${task.agent}</span><div class="sentence-resource-combine-slot">${selectedResult}</div>
    </div>
  </div>`;
}

function sentenceTransferResourceDockHtml(task) {
  const selections = state.sentenceTransferSelections;
  const resourceCard = (kind, id) => {
    const selected = selections[kind] === id;
    const target = `resource-${kind}-${id}`;
    return `<button class="sentence-resource-combine-card ${selected ? "is-selected" : ""} ${state.sentenceErrorTargets.includes(target) ? "is-wrong" : ""}" type="button" data-sentence-transfer-resource-kind="${kind}" data-sentence-transfer-resource-id="${id}" aria-label="选择${sentenceTransferResourceLabel(kind, id)}">${sentenceTransferResourceVisualHtml(kind, id)}<span>${sentenceTransferResourceLabel(kind, id)}</span></button>`;
  };
  return `<aside class="sentence-resource-combine-dock" aria-label="资源栏">
    <section aria-label="物品资源"><h3>物品资源</h3><div class="sentence-resource-combine-row">${task.objectOptions.map((id) => resourceCard("object", id)).join("")}</div></section>
    <section aria-label="动作结果资源"><h3>动作结果资源</h3><div class="sentence-resource-combine-row">${task.resultOptions.map((id) => resourceCard("result", id)).join("")}</div></section>
  </aside>`;
}

function sentenceTransferMilkResultVisualHtml(id) {
  const labels = { shelf: "牛奶在货架上", cart: "牛奶在购物车里", counter: "牛奶在收银台上" };
  const location = id === "shelf"
    ? `<path d="M12 19 H132 M12 49 H132 M12 79 H132" fill="none" stroke="#a77952" stroke-width="6" stroke-linecap="round"/><path d="M12 15 V85 M132 15 V85" fill="none" stroke="#8d6545" stroke-width="6" stroke-linecap="round"/><path d="M68 40 H84 V62 H68 Z" fill="#d8eff7" stroke="#304052" stroke-width="3"/><path d="M71 40 H81 V46 H71 Z" fill="#78b8d0"/>`
    : id === "cart"
      ? `<path d="M27 25 H118 L106 72 H43 Z" fill="#bfe1ef" stroke="#304052" stroke-width="4"/><path d="M27 25 H13" fill="none" stroke="#304052" stroke-width="4" stroke-linecap="round"/><circle cx="52" cy="82" r="7" fill="#54697b"/><circle cx="101" cy="82" r="7" fill="#54697b"/><path d="M67 31 H84 V57 H67 Z" fill="#d8eff7" stroke="#304052" stroke-width="3"/><path d="M70 31 H81 V37 H70 Z" fill="#78b8d0"/>`
      : `<rect x="17" y="52" width="116" height="29" rx="4" fill="#b9875f" stroke="#885f41" stroke-width="4"/><path d="M17 52 H133" stroke="#d7aa77" stroke-width="8"/><path d="M70 23 H87 V52 H70 Z" fill="#d8eff7" stroke="#304052" stroke-width="3"/><path d="M73 23 H84 V29 H73 Z" fill="#78b8d0"/>`;
  return `<svg class="sentence-transfer-result-image" viewBox="0 0 146 96" role="img" aria-label="${labels[id] || "牛奶的位置"}">${location}</svg>`;
}

function sentenceTransferTaskHtml(task) {
  if (task.promptVisual) {
    return `<section class="sentence-transfer-task sentence-resource-image-task" aria-label="超市任务图像">${sentenceTransferSceneVisualHtml(task.promptVisual)}</section>`;
  }
  const visual = task.id === "bread-receiver" ? sentenceTransferSceneVisualHtml("bread-shelf") : "";
  return `<section class="sentence-transfer-task" aria-label="超市任务"><p>${task.prompt}</p>${visual ? `<div class="sentence-transfer-visual">${visual}</div>` : ""}</section>`;
}

function sentenceTransferOptionsHtml(task) {
  const selection = state.sentenceTransferSelections;
  if (task.type === "resource-combine") return sentenceTransferResourceCombineHtml(task);
  if (task.type === "receiver") return `<div class="sentence-option-row">${task.options.map((id) => `<button class="sentence-store-choice ${selection.value === id ? "is-selected" : ""} ${state.sentenceErrorTargets.includes(id) ? "is-wrong" : ""}" type="button" data-sentence-transfer-select="${id}">${sentenceStoreItemHtml(id)}<span>${{ bread: "面包", milk: "牛奶", apple: "苹果" }[id]}</span></button>`).join("")}</div>`;
  if (task.type === "result") {
    const imageOnly = task.id === "milk-result";
    const labels = { shelf: "牛奶在货架上", cart: "牛奶在购物车里", counter: "牛奶在收银台上" };
    return `<div class="sentence-option-row">${task.options.map((id) => `<button class="sentence-store-choice ${imageOnly ? "sentence-image-only-choice" : ""} ${selection.value === id ? "is-selected" : ""} ${state.sentenceErrorTargets.includes(id) ? "is-wrong" : ""}" type="button" data-sentence-transfer-select="${id}" aria-label="${imageOnly ? labels[id] : ({ shelf: "货架上", cart: "购物车里", counter: "收银台上", floor: "倒在地上", bag: "购物袋里" }[id])}">${imageOnly ? sentenceTransferMilkResultVisualHtml(id) : sentenceStoreItemHtml(id)}${imageOnly ? "" : `<span>${{ shelf: "货架上", cart: "购物车里", counter: "收银台上", floor: "倒在地上", bag: "购物袋里" }[id]}</span>`}</button>`).join("")}</div>`;
  }
  if (task.type === "sentence-image-choice") return `<div class="sentence-image-choice-answer"><p class="sentence-image-choice-hint">选择正确的句子</p><div class="sentence-text-choice-row sentence-text-choice-column">${task.options.map((item, index) => `<button class="sentence-text-choice ${selection.value === index ? "is-selected" : ""} ${state.sentenceErrorTargets.includes(String(index)) ? "is-wrong" : ""}" type="button" data-sentence-transfer-select="${index}"><b>${String.fromCharCode(65 + index)}</b>${item}</button>`).join("")}</div></div>`;
  if (task.type === "complete") return `<div class="sentence-text-choice-row">${task.options.map((item) => `<button class="sentence-text-choice ${selection.value === item ? "is-selected" : ""} ${state.sentenceErrorTargets.includes(item) ? "is-wrong" : ""}" type="button" data-sentence-transfer-select="${item}">${item}</button>`).join("")}</div>`;
  if (task.type === "omit") return `<div class="sentence-omit-answer"><button class="sentence-omit-button ${selection.agentOmitted ? "is-selected" : ""}" type="button" data-sentence-transfer-omit="true">施加者省略</button><div class="sentence-text-choice-row">${task.options.map((item) => `<button class="sentence-text-choice ${selection.value === item ? "is-selected" : ""} ${state.sentenceErrorTargets.includes(item) ? "is-wrong" : ""}" type="button" data-sentence-transfer-select="${item}">${item}</button>`).join("")}</div></div>`;
  if (task.type === "text") return `<div class="sentence-text-choice-row sentence-text-choice-column">${task.options.map((item, index) => `<button class="sentence-text-choice ${selection.value === index ? "is-selected" : ""} ${state.sentenceErrorTargets.includes(String(index)) ? "is-wrong" : ""}" type="button" data-sentence-transfer-select="${index}"><b>${String.fromCharCode(65 + index)}</b>${item}</button>`).join("")}</div>`;
  ensureSentenceTransferOrder(task);
  return `<div class="sentence-order-answer">${sortingQuestionLabelHtml()}<div class="sentence-order-row ${state.sentenceErrorTargets.includes("order") ? "is-wrong" : ""}">${state.sentenceTransferOrder.map((word, index) => `<button class="transfer-word-card" type="button" draggable="true" data-sentence-order-index="${index}">${word}</button>`).join("")}</div><button class="transfer-check-button" type="button" data-sentence-order-submit="true">排好啦</button></div>`;
}

function ensureSentenceTransferOrder(task) {
  if (state.sentenceTransferOrder.length === task.cards.length) return;
  state.sentenceTransferOrder = task.initialOrder ? [...task.initialOrder] : [...task.cards].sort(() => Math.random() - 0.5);
}

function sentenceStage4ResourceButton(kind, id, selected = false) {
  const src = SENTENCE_STAGE_FOUR_ASSETS.resources[id];
  if (!src) return "";
  const label = sentenceTransferResourceLabel(kind, id);
  const target = `resource-${kind}-${id}`;
  const isWrong = state.sentenceErrorTargets.includes(target) || (kind === "value" && state.sentenceErrorTargets.includes(id));
  return `<button class="sentence-stage4-resource ${selected ? "is-selected" : ""} ${isWrong ? "is-wrong" : ""}" type="button" data-sentence-stage4-resource-kind="${kind}" data-sentence-stage4-resource-id="${id}" aria-label="选择${label}"><img src="${src}" alt="${label}"><span class="sentence-stage4-resource-name">${label}</span></button>`;
}

function sentenceStage4SingleDock(ids, kind) {
  return `<div class="sentence-stage4-single-dock"><img class="sentence-stage4-single-frame" src="${SENTENCE_STAGE_FOUR_ASSETS.resourceFrame}" alt="资源栏"><div class="sentence-stage4-single-list">${ids.map((id) => sentenceStage4ResourceButton(kind, id, state.sentenceTransferSelections.value === id)).join("")}</div></div>`;
}

function sentenceStage4CombineDock(objectIds, resultIds) {
  return `<div class="sentence-stage4-combine-dock"><img class="sentence-stage4-combine-frame" src="${SENTENCE_STAGE_FOUR_ASSETS.combineFrame}" alt="物品资源和动作结果资源"><div class="sentence-stage4-combine-list sentence-stage4-object-list">${objectIds.map((id) => sentenceStage4ResourceButton("object", id, state.sentenceTransferSelections.object === id)).join("")}</div><div class="sentence-stage4-combine-list sentence-stage4-result-list">${resultIds.map((id) => sentenceStage4ResourceButton("result", id, state.sentenceTransferSelections.result === id)).join("")}</div></div>`;
}

function sentenceStage4SelectedResource(kind) {
  const id = state.sentenceTransferSelections[kind];
  return id && SENTENCE_STAGE_FOUR_ASSETS.resources[id]
    ? `<img class="sentence-stage4-answer-resource" src="${SENTENCE_STAGE_FOUR_ASSETS.resources[id]}" alt="">`
    : "";
}

function sentenceStage4AnswerPlaceholder() {
  return `<img class="sentence-stage4-answer-placeholder" src="${SENTENCE_STAGE_FOUR_ASSETS.questionPlaceholder}" alt="待放入资源">`;
}

function sentenceStage4SingleAnswer(className) {
  const resource = sentenceStage4SelectedResource("value");
  return `<div class="sentence-stage4-single-answer ${className} ${state.sentenceErrorTargets.includes(String(state.sentenceTransferSelections.value)) ? "is-wrong" : ""}" data-sentence-stage4-drop-kind="value" aria-label="答题框">${resource || sentenceStage4AnswerPlaceholder()}</div>`;
}

function sentenceStage4CombineAnswer(task) {
  if (!task.objectCorrect) return "";
  const objectResource = sentenceStage4SelectedResource("object");
  const resultResource = sentenceStage4SelectedResource("result");
  const slotClass = (kind) => `sentence-stage4-answer-slot ${state.sentenceErrorTargets.includes(`resource-${kind}-${state.sentenceTransferSelections[kind]}`) ? "is-wrong" : ""}`;
  const slotMarkup = (kind, resource) => `<div class="${slotClass(kind)}" data-sentence-stage4-drop-kind="${kind}" aria-label="${kind === "object" ? "物品资源" : "动作结果资源"}">${resource || sentenceStage4AnswerPlaceholder()}</div>`;
  // The supplied question art already contains the middle "被" phrase.
  // Keep this grid cell only as spacing for the interactive resource slots.
  const agent = `<span class="sentence-stage4-answer-agent" aria-hidden="true"></span>`;
  return `<div class="sentence-stage4-combine-answer">${slotMarkup("object", objectResource)}${agent}${slotMarkup("result", resultResource)}</div>`;
}

function sentenceStage4OrderCard(word, index) {
  const sourceLeft = { "装满了": 0, "购物袋": 208, "被": 415.5 }[word] || 0;
  const selected = state.sentenceTransferOrderSelectedIndex === index ? "is-order-selected" : "";
  return `<button class="sentence-stage4-order-card ${selected}" type="button" draggable="true" data-sentence-stage4-order-index="${index}" aria-label="${word}" style="--order-source-left:${sourceLeft}px"><img src="${SENTENCE_STAGE_FOUR_ASSETS.optionArt.bag}" alt=""></button>`;
}

function sentenceStage4OrderAnswer(task) {
  ensureSentenceTransferOrder(task);
  return `<div class="sentence-stage4-order-answer">${sortingQuestionLabelHtml()}<div class="sentence-stage4-order-row ${state.sentenceErrorTargets.includes("order") ? "is-wrong" : ""}">${state.sentenceTransferOrder.map((word, index) => sentenceStage4OrderCard(word, index)).join("")}</div><button class="sentence-stage4-order-submit" type="button" data-sentence-stage4-order-submit="true" aria-label="提交句子"><img src="${SENTENCE_STAGE_FOUR_ASSETS.optionArt.bag}" alt=""></button></div>`;
}

function sentenceStage4OptionAnswer(optionAsset, optionCount) {
  const wrong = state.sentenceErrorTargets.some((target) => Number(target) >= 0 && Number(target) < optionCount);
  return `<div class="sentence-stage4-option-answer"><img class="sentence-stage4-option-art ${wrong ? "is-wrong" : ""}" src="${optionAsset}" alt=""><div class="sentence-stage4-option-hits">${Array.from({ length: optionCount }, (_, index) => `<button class="sentence-stage4-option-hit ${state.sentenceTransferSelections.value === index ? "is-selected" : ""}" type="button" data-sentence-stage4-choice="${index}" aria-label="选项${String.fromCharCode(65 + index)}"></button>`).join("")}</div></div>`;
}

function sentenceStage4QuestionAndResources(task) {
  if (task.id === "bread-receiver") {
    return `<div class="sentence-stage4-bread-display-breathe" aria-hidden="true"></div><img class="sentence-stage4-employee" src="${SENTENCE_STAGE_FOUR_ASSETS.employee}" alt="店员"><img class="sentence-stage4-question sentence-stage4-question-bread" src="${SENTENCE_STAGE_FOUR_ASSETS.question.bread}" alt="被店员整齐陈列">${sentenceStage4SingleAnswer("sentence-stage4-bread-answer")}${sentenceStage4SingleDock(["milk", "bread", "apple"], "value")}`;
  }
  if (task.id === "milk-result") {
    return `<img class="sentence-stage4-question sentence-stage4-question-milk" src="${SENTENCE_STAGE_FOUR_ASSETS.question.milk}" alt="牛奶被法法放进购物车">${sentenceStage4SingleAnswer("sentence-stage4-milk-answer")}${sentenceStage4SingleDock(["cart", "shelf", "counter"], "value")}`;
  }
  if (task.id === "apple-bag") {
    return `<img class="sentence-stage4-question sentence-stage4-question-apple" src="${SENTENCE_STAGE_FOUR_ASSETS.question.apple}" alt="苹果被妈妈装进购物袋">${sentenceStage4CombineAnswer(task)}${sentenceStage4CombineDock(["apple", "milk", "bread"], ["bag", "trolley", "wipe"])}`;
  }
  if (task.id === "ice-cream") {
    return `<img class="sentence-stage4-question sentence-stage4-question-ice-cream" src="${SENTENCE_STAGE_FOUR_ASSETS.question.iceCream}" alt="冰淇淋被放进冰柜">${sentenceStage4CombineAnswer(task)}${sentenceStage4CombineDock(["apple", "ice-cream", "bread"], ["freezer", "filled", "arranged"])}`;
  }
  if (task.id === "juice-result") {
    return `<img class="sentence-stage4-question sentence-stage4-question-juice" src="${SENTENCE_STAGE_FOUR_ASSETS.question.juice}" alt="果汁被妹妹碰倒">${sentenceStage4OptionAnswer(SENTENCE_STAGE_FOUR_ASSETS.optionArt.juice, 3)}`;
  }
  if (task.id === "receipt-text") {
    return `<img class="sentence-stage4-question sentence-stage4-question-receipt" src="${SENTENCE_STAGE_FOUR_ASSETS.question.receipt}" alt="小票被打印出来">${sentenceStage4OptionAnswer(SENTENCE_STAGE_FOUR_ASSETS.optionArt.receipt, 3)}`;
  }
  return `<img class="sentence-stage4-question sentence-stage4-question-bag" src="${SENTENCE_STAGE_FOUR_ASSETS.question.bag}" alt="购物袋被装满">${sentenceStage4OrderAnswer(task)}`;
}

function sentenceStage4Background(task) {
  if (task.id === "bread-receiver") return "bread";
  if (["milk-result", "apple-bag", "ice-cream", "juice-result"].includes(task.id)) return "shelves";
  return "checkout";
}

function renderSentenceStage4Complete() {
  view.innerHTML = `<div class="sentence-stage4-canvas is-complete"><img class="sentence-stage4-background" src="${SENTENCE_STAGE_FOUR_ASSETS.backgrounds.checkout}" alt="收银台场景"><img class="sentence-stage4-question sentence-stage4-question-bag" src="${SENTENCE_STAGE_FOUR_ASSETS.question.bag}" alt="购物袋被装满">${sentenceReferenceToolsHtml(true)}${stageInstructionHtml("four")}${state.sentenceTransferBookOpen ? stageFourGrammarOverlayHtml(SENTENCE_STAGE_THREE_ASSETS.scroll, "被字句语法宝典", "sentence") : ""}</div>`;
  sentenceBindTools(renderSentenceTransfer, "sentence-transfer");
  setFeedback("被字句关卡完成。 ");
}

function renderSentenceTransfer() {
  if (state.sentenceTransferredIds.length === sentenceTransferTasks.length || state.sentenceTransferIndex >= sentenceTransferTasks.length) {
    renderSentenceStage4Complete();
    return;
  }
  const task = sentenceTransferTasks[state.sentenceTransferIndex];
  const taskClass = `sentence-stage4-task-${state.sentenceTransferIndex + 1}`;
  const background = SENTENCE_STAGE_FOUR_ASSETS.backgrounds[sentenceStage4Background(task)];
  view.innerHTML = `<div class="sentence-stage4-canvas ${taskClass}" aria-label="句子知识第四阶段"><img class="sentence-stage4-background" src="${background}" alt="超市场景"><div class="sentence-stage4-scene">${sentenceStage4QuestionAndResources(task)}</div>${sentenceReferenceToolsHtml(true)}${stageInstructionHtml("four")}${state.sentenceError ? stageFourFeedbackHtml("sentence", state.sentenceErrorTopic) : ""}${state.sentenceTransferBookOpen ? stageFourGrammarOverlayHtml(SENTENCE_STAGE_THREE_ASSETS.scroll, "被字句语法宝典", "sentence") : ""}</div>`;
  view.querySelectorAll("[data-sentence-stage4-choice]").forEach((button) => button.addEventListener("click", () => {
    state.sentenceTransferSelections.value = Number(button.dataset.sentenceStage4Choice);
    checkSentenceTransfer(task);
  }));
  view.querySelectorAll("[data-sentence-stage4-resource-kind]").forEach((button) => {
    button.addEventListener("click", () => {
      const kind = button.dataset.sentenceStage4ResourceKind;
      const id = button.dataset.sentenceStage4ResourceId;
      if (kind === "value") {
        state.sentenceTransferSelections.value = id;
        checkSentenceTransfer(task);
        return;
      }
      sentenceStage4ChooseResource(task, kind, id);
    });
  });
  view.querySelectorAll("[data-sentence-stage4-order-index]").forEach((card) => {
    let nativeDragging = false;
    card.addEventListener("click", () => {
      const clickedIndex = Number(card.dataset.sentenceStage4OrderIndex);
      const selectedIndex = state.sentenceTransferOrderSelectedIndex;
      if (selectedIndex === null || selectedIndex === clickedIndex) {
        state.sentenceTransferOrderSelectedIndex = selectedIndex === clickedIndex ? null : clickedIndex;
        clearSentenceError();
        renderSentenceTransfer();
        return;
      }
      const [word] = state.sentenceTransferOrder.splice(selectedIndex, 1);
      state.sentenceTransferOrder.splice(clickedIndex, 0, word);
      state.sentenceTransferOrderSelectedIndex = null;
      clearSentenceError();
      renderSentenceTransfer();
    });
    card.addEventListener("dragstart", (event) => {
      nativeDragging = true;
      card.classList.add("is-dragging");
      event.dataTransfer?.setData("text/plain", JSON.stringify({ index: Number(card.dataset.sentenceStage4OrderIndex) }));
    });
    card.addEventListener("dragend", () => {
      nativeDragging = false;
      card.classList.remove("is-dragging");
    });
    card.addEventListener("dragover", (event) => event.preventDefault());
    card.addEventListener("drop", (event) => {
      event.preventDefault();
      const data = safeDragData(event);
      if (!data || typeof data.index !== "number") return;
      const [word] = state.sentenceTransferOrder.splice(data.index, 1);
      state.sentenceTransferOrder.splice(Number(card.dataset.sentenceStage4OrderIndex), 0, word);
      state.sentenceTransferOrderSelectedIndex = null;
      clearSentenceError();
      renderSentenceTransfer();
    });
    card.addEventListener("pointerdown", (event) => {
      if (event.button !== 0) return;
      const startX = event.clientX;
      const startY = event.clientY;
      let moved = false;
      let activeCard = null;
      const clearActiveCard = () => {
        activeCard?.classList.remove("is-drag-target");
        activeCard = null;
      };
      const onPointerMove = (moveEvent) => {
        if (Math.hypot(moveEvent.clientX - startX, moveEvent.clientY - startY) < 6) return;
        moved = true;
        card.classList.add("is-dragging");
        const nextCard = document.elementFromPoint(moveEvent.clientX, moveEvent.clientY)?.closest("[data-sentence-stage4-order-index]");
        if (nextCard !== activeCard) {
          clearActiveCard();
          activeCard = nextCard;
          activeCard?.classList.add("is-drag-target");
        }
        moveEvent.preventDefault();
      };
      const onPointerUp = (upEvent) => {
        document.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("pointerup", onPointerUp);
        card.classList.remove("is-dragging");
        const dropCard = document.elementFromPoint(upEvent.clientX, upEvent.clientY)?.closest("[data-sentence-stage4-order-index]");
        clearActiveCard();
        if (!moved || nativeDragging || !dropCard) return;
        const sourceIndex = Number(card.dataset.sentenceStage4OrderIndex);
        const targetIndex = Number(dropCard.dataset.sentenceStage4OrderIndex);
        if (sourceIndex === targetIndex) return;
        const [word] = state.sentenceTransferOrder.splice(sourceIndex, 1);
        state.sentenceTransferOrder.splice(targetIndex, 0, word);
        state.sentenceTransferOrderSelectedIndex = null;
        clearSentenceError();
        renderSentenceTransfer();
        upEvent.preventDefault();
      };
      document.addEventListener("pointermove", onPointerMove);
      document.addEventListener("pointerup", onPointerUp);
    });
  });
  view.querySelector("[data-sentence-stage4-order-submit]")?.addEventListener("click", () => checkSentenceTransfer(task, true));
  sentenceBindTools(renderSentenceTransfer, "sentence-transfer");
}

function sentenceStage4ChooseResource(task, kind, id, sourceKind = kind) {
  if (kind === "value") {
    if (sourceKind !== "value") {
      sentenceTransferErrorForTask(task, [`resource-${sourceKind}-${id}`]);
      return;
    }
    state.sentenceTransferSelections.value = id;
    checkSentenceTransfer(task);
    return;
  }
  if (task.type !== "resource-combine") return;
  if (sourceKind !== kind) {
    sentenceTransferErrorForTask(task, [`resource-${sourceKind}-${id}`]);
    return;
  }
  clearSentenceError();
  const correctId = kind === "object" ? task.objectCorrect : task.resultCorrect;
  if (id !== correctId) {
    sentenceTransferErrorForTask(task, [`resource-${kind}-${id}`]);
    return;
  }
  state.sentenceTransferSelections[kind] = id;
  if (state.sentenceTransferSelections.object && state.sentenceTransferSelections.result) checkSentenceTransfer(task);
  else {
    playSound("drop");
    renderSentenceTransfer();
  }
}

function checkSentenceTransfer(task, fromOrder = false) {
  if (task.type === "resource-combine") {
    const { object, result } = state.sentenceTransferSelections;
    if (!object || !result) return;
    const wrongTargets = [];
    if (object !== task.objectCorrect) wrongTargets.push(`resource-object-${object}`);
    if (result !== task.resultCorrect) wrongTargets.push(`resource-result-${result}`);
    if (wrongTargets.length) {
      sentenceTransferErrorForTask(task, wrongTargets);
    } else {
      finishSentenceTransferTask(task);
    }
    return;
  }
  if (task.type === "order") {
    if (!fromOrder) return;
    if (state.sentenceTransferOrder.join("|") === task.correctOrder.join("|")) finishSentenceTransferTask(task);
    else sentenceTransferErrorForTask(task, ["order"]);
    return;
  }
  if (task.type === "omit" && !state.sentenceTransferSelections.agentOmitted) {
    sentenceTransferErrorForTask(task, ["agent"]);
    return;
  }
  const value = state.sentenceTransferSelections.value;
  if (value === undefined || value === null) return;
  if (value === task.correct) {
    finishSentenceTransferTask(task);
    return;
  }
  sentenceTransferErrorForTask(task, [String(value)]);
}

function selectSentenceTransferResource(task, kind, id) {
  state.sentenceTransferSelections[kind] = id;
  clearSentenceError();
  const correctId = kind === "object" ? task.objectCorrect : task.resultCorrect;
  if (id !== correctId) {
    sentenceTransferErrorForTask(task, [`resource-${kind}-${id}`]);
    return;
  }
  if (state.sentenceTransferSelections.object && state.sentenceTransferSelections.result) {
    checkSentenceTransfer(task);
  } else {
    playSound("drop");
    renderSentenceTransfer();
  }
}

function sentenceTransferErrorForTask(task, targets) {
  const feedback = sentenceTransferMetaFeedback[task.id] || { topic: "规则" };
  sentenceTransferError(grammarMetaMessage("sentence", feedback.topic), targets, feedback.topic);
}

function sentenceTransferError(message, targets, topic = "规则") {
  state.sentenceError = message;
  state.sentenceErrorTopic = topic;
  state.sentenceErrorTargets = targets;
  setFeedback(`${topic}：${message}`);
  scheduleStageFourErrorDismiss("sentence");
  playSound("wrong");
  renderSentenceTransfer();
}

function finishSentenceTransferTask(task) {
  state.sentenceTransferReady = true;
  clearSentenceError();
  setFeedback(`${task.sentence} 做对啦！`);
  playSound("success");
  renderSentenceTransfer();
  window.setTimeout(() => {
    state.sentenceTransferredIds.push(task.id);
    state.sentenceTransferIndex += 1;
    state.sentenceTransferSelections = { value: null, object: null, result: null };
    state.sentenceTransferOrder = [];
    state.sentenceTransferOrderSelectedIndex = null;
    state.sentenceTransferReady = false;
    renderSentenceTransfer();
  }, 850);
}

function renderWordTransfer() {
  if (state.transferredIds.length === transferTasks.length) {
    view.innerHTML = `
      <div class="word-stage-four-canvas is-complete">
        <img class="word-stage-four-background" src="${WORD_STAGE_FOUR_ASSETS.background}" alt="书包整理完成的教室">
        ${wordStageFourPlacedItemsHtml(null)}
        ${wordStageFourToolsHtml()}
        ${state.transferBookOpen ? transferBookOverlayHtml() : ""}
      </div>
    `;
    bindWordStageFourTools();
    setFeedback("书包整理完成。");
    updateProgress();
    return;
  }

  const task = transferTasks[state.transferIndex];
  view.innerHTML = `
    <div class="word-stage-four-canvas">
      <img class="word-stage-four-background" src="${WORD_STAGE_FOUR_ASSETS.background}" alt="整理书包的教室">
      ${wordStageFourToolsHtml()}
      ${stageInstructionHtml("four")}
      ${wordStageFourQuestionHtml(task)}
      ${wordStageFourPlacedItemsHtml(task)}
      <section class="word-stage-four-answer-zone ${state.transferError ? "has-error" : ""}" aria-label="答题区">
        ${wordStageFourAnswerHtml(task)}
        ${state.transferError ? stageFourFeedbackHtml("word", state.transferErrorTopic) : ""}
      </section>
      ${state.transferBookOpen ? transferBookOverlayHtml() : ""}
    </div>
  `;

  bindTransferEvents();
  bindWordStageFourTools();
}

function wordStageFourToolsHtml() {
  return `
    <div class="word-stage-four-tools" aria-label="第四阶段工具">
      <button class="word-stage-four-tool word-stage-four-back" type="button" data-word-transfer-action="home" aria-label="返回首页"><img src="${WORD_STAGE_ONE_ASSETS.back}" alt=""></button>
      <div class="word-stage-four-right-tools">
        <button class="word-stage-four-tool" type="button" data-word-transfer-action="book" aria-label="语法宝典"><img src="${WORD_STAGE_ONE_ASSETS.book}" alt=""></button>
        <button class="word-stage-four-tool" type="button" data-word-transfer-action="sound" aria-label="音乐按钮"><img src="${WORD_STAGE_ONE_ASSETS.sound}" alt=""></button>
      </div>
    </div>
  `;
}

function bindWordStageFourTools() {
  view.querySelectorAll('[data-stage-four-book-close="word"]').forEach((button) => button.addEventListener("click", () => {
    state.transferBookOpen = false;
    renderTransfer();
  }));
  view.querySelectorAll("[data-word-transfer-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.wordTransferAction;
      if (action === "home") setStage("home");
      if (action === "book") {
        state.transferBookOpen = true;
        renderTransfer();
      }
      if (action === "sound") {
        state.sound = !state.sound;
        soundToggle.setAttribute("aria-pressed", String(state.sound));
        soundToggle.querySelector("span").textContent = state.sound ? "♪" : "×";
        if (!state.sound && "speechSynthesis" in window) window.speechSynthesis.cancel();
        renderTransfer();
      }
    });
  });
}

function wordStageFourResourceCard(kind, id) {
  const resource = WORD_STAGE_FOUR_ASSETS.resources[kind][id];
  if (!resource) return "";
  const selected = state.transferSelections[kind] === id;
  const wrong = state.transferErrorTargets.includes(kind);
  return `
    <button class="word-stage-four-resource-card ${selected ? "is-selected" : ""} ${wrong ? "is-wrong" : ""} ${id === "blue" ? "is-blue-resource" : ""}" type="button" data-transfer-kind="${kind}" data-transfer-id="${id}" aria-label="选择${resource.label}">
      <img src="${resource.src}" alt="">
      <span class="word-stage-four-resource-name">${resource.label}</span>
    </button>
  `;
}

function wordStageFourResourceGroupHtml(kind, ids, title) {
  return `
    <div class="word-stage-four-resource-group word-stage-four-resource-group-${kind}" aria-label="${title}">
      ${ids.map((id) => wordStageFourResourceCard(kind, id)).join("")}
    </div>
  `;
}

function wordStageFourAnswerHtml(task) {
  if (task.type !== "drag-resources") {
    return task.type === "reorder"
      ? wordStageFourReorderHtml(task)
      : wordStageFourOptionHtml(task);
  }
  return `
    <div class="word-stage-four-resource-dock">
      <img class="word-stage-four-resource-dock-art" src="${WORD_STAGE_FOUR_ASSETS.resourceDock}" alt="">
      ${wordStageFourResourceGroupHtml("modifier", task.modifierOptions, "说明资源")}
      ${wordStageFourResourceGroupHtml("object", task.objectOptions, "物品资源")}
    </div>
  `;
}

function wordStageFourQuestionHtml(task) {
  const position = task.questionPosition || { left: 796, top: 169, width: 185, height: 254 };
  const label = task.phrase || task.prompt;
  return `
    <section class="word-stage-four-question-art word-stage-four-question-art-${task.id}${task.id === "blue-notebook" ? " has-de-bridge" : ""}" style="left:${position.left}px;top:${position.top}px;width:${position.width}px;height:${position.height}px" aria-label="${label}图像">
      <img src="${WORD_STAGE_FOUR_ASSETS.questionArt[task.id]}" alt="${label}">
      ${task.id === "blue-notebook" ? '<span class="word-stage-four-de-bridge" aria-hidden="true">的</span>' : ""}
      ${task.type === "drag-resources" ? wordStageFourCombinationHtml(task) : ""}
    </section>
  `;
}

function wordStageFourCombinationHtml(task) {
  return `
    <div class="word-stage-four-combination word-stage-four-combination-overlay" aria-label="组合答题区">
      ${wordStageFourDropSlot("modifier", "说明资源", true)}
      ${wordStageFourDropSlot("object", "物品资源", true)}
    </div>
  `;
}

function wordStageFourDropSlot(kind, label, overlay = false) {
  const id = state.transferSelections[kind];
  const resource = id ? WORD_STAGE_FOUR_ASSETS.resources[kind][id] : null;
  return `
    <button class="word-stage-four-drop-slot ${overlay ? "is-art-slot" : ""} ${resource ? "is-filled" : ""} ${id === "blue" ? "is-blue-resource" : ""} ${state.transferErrorTargets.includes(kind) ? "is-wrong" : ""}" type="button" data-transfer-drop-slot="${kind}" aria-label="${resource ? `${label}：${resource.label}` : `把${label}拖到这里`}" >
      ${resource ? `<img src="${resource.src}" alt="${resource.label}">` : ""}
    </button>
  `;
}

function wordStageFourOptionHtml(task) {
  const position = task.optionPosition || { left: 98, top: 719, width: 998, height: 91 };
  const count = task.options?.length || 4;
  return `
    <div class="word-stage-four-option-art" style="left:${position.left}px;top:${position.top}px;width:${position.width}px;height:${position.height}px" aria-label="选项">
      <img src="${WORD_STAGE_FOUR_ASSETS.optionArt[task.id]}" alt="">
      <div class="word-stage-four-option-hotspots">
        ${Array.from({ length: count }, (_, index) => `<button class="word-stage-four-option-hotspot ${state.transferErrorTargets.includes(`option-${index}`) ? "is-wrong" : ""}" type="button" data-transfer-option="${index}" aria-label="选项${String.fromCharCode(65 + index)}"></button>`).join("")}
      </div>
    </div>
  `;
}

function wordStageFourReorderHtml(task) {
  ensureTransferCardOrder(task);
  const sourcePositions = { "明信片": 0, "漂亮": 1, "的": 2 };
  return `
    <div class="word-stage-four-reorder-art" style="left:${task.optionPosition.left}px;top:${task.optionPosition.top}px;width:${task.optionPosition.width}px;height:${task.optionPosition.height}px" aria-label="词卡排序区">
      ${sortingQuestionLabelHtml()}
      <div class="word-stage-four-reorder-row ${state.transferErrorTargets.includes("reorder") ? "is-wrong" : ""}">
        ${state.transferCardOrder.map((word, index) => `<button class="word-stage-four-reorder-card" type="button" draggable="true" data-reorder-index="${index}" aria-label="词卡：${word}" style="background-position:${sourcePositions[word] === 0 ? "0 0" : sourcePositions[word] === 1 ? "-209px 0" : "-416px 0"}"></button>`).join("")}
      </div>
      <button class="word-stage-four-reorder-submit" type="button" data-transfer-submit="reorder" aria-label="提交排序"><img src="${WORD_STAGE_FOUR_ASSETS.next}" alt=""></button>
    </div>
  `;
}

const wordStageFourBackpackSpots = {
  "fafa-bottle": { left: 689, top: 329, width: 96, height: 178 },
  "blue-notebook": { left: 466, top: 282, width: 139, height: 124 },
  "clean-towel-choice": { left: 594, top: 287, width: 131, height: 114 },
  "wood-pencil-case-choice": { left: 442, top: 336, width: 165, height: 102 },
  "handsome-badge-choice": { left: 608, top: 372, width: 81, height: 77 },
  "red-keychain-choice": { left: 657, top: 360, width: 52, height: 96 },
  "pretty-postcard-order": { left: 503, top: 395, width: 127, height: 78, transform: "rotate(180deg)" }
};

function wordStageFourPlacedItemsHtml(currentTask) {
  const placedIds = new Set(state.transferredIds);
  if (state.transferReady && currentTask) placedIds.add(currentTask.id);
  return [...placedIds].map((id) => {
    const spot = wordStageFourBackpackSpots[id];
    const src = WORD_STAGE_FOUR_ASSETS.objects[id];
    const task = transferTasks.find((item) => item.id === id);
    if (!spot || !src || !task) return "";
    const transform = spot.transform ? `;transform:${spot.transform}` : "";
    return `<div class="word-stage-four-placed-item" style="left:${spot.left}px;top:${spot.top}px;width:${spot.width}px;height:${spot.height}px${transform}" aria-label="${task.phrase}已放入书包"><img src="${src}" alt="${task.phrase}"></div>`;
  }).join("");
}

function renderTransfer() {
  if (state.category === "word") {
    renderWordTransfer();
    return;
  }
  if (state.transferredIds.length === transferTasks.length) {
    view.innerHTML = `
      <div class="transfer-complete-screen">
        <div class="transfer-complete-card">
          <h2>第四阶段完成</h2>
          <p>你会用“的”来说明东西啦！</p>
          <button id="finishRestart" class="primary-button" type="button">再玩一次</button>
        </div>
      </div>
    `;
    document.getElementById("finishRestart").addEventListener("click", restart);
    setFeedback("迁移任务完成。");
    updateProgress();
    return;
  }

  const task = transferTasks[state.transferIndex];
  view.innerHTML = `
    <div class="transfer-canvas">
      <div class="transfer-corner-tools" aria-label="第四阶段工具">
        <button class="transfer-tool-button transfer-back-button" type="button" data-transfer-action="home" aria-label="返回首页">
          <span class="transfer-tool-icon" aria-hidden="true">↩</span>
          <span class="transfer-tool-label">返回</span>
        </button>
        <button class="transfer-tool-button transfer-book-button" type="button" data-transfer-action="book" aria-label="语法宝典">
          <span class="transfer-tool-icon transfer-tool-de" aria-hidden="true">的</span>
          <span class="transfer-tool-label">语法宝典</span>
        </button>
        <button class="transfer-tool-button transfer-sound-button" type="button" data-transfer-action="sound" aria-label="音乐按钮">
          <span class="transfer-tool-icon" aria-hidden="true">${state.sound ? "♪" : "×"}</span>
          <span class="transfer-tool-label">音乐</span>
        </button>
      </div>
      <section class="transfer-scene" aria-label="整理书包场景">
        ${transferSceneDecor(task)}
        <section class="transfer-task-panel transfer-task-${task.type} transfer-task-id-${task.id} ${isTransferImageOnlyTask(task) ? "transfer-task-image-only" : ""} ${state.transferReady ? "is-ready" : ""}" aria-label="第四阶段任务">
          ${transferTaskPromptHtml(task)}
          ${task.type === "drag-resources" ? transferMainCombinationHtml(task) : ""}
        </section>
      </section>
      <section class="transfer-answer-zone ${state.transferError ? "has-error" : ""}" aria-label="答题区">
        ${transferAnswerHtml(task)}
        ${state.transferError ? `<p class="transfer-error-feedback" role="alert"><span>${state.transferErrorTopic}：</span>${state.transferError}</p>` : ""}
      </section>
      ${state.transferBookOpen ? transferBookOverlayHtml() : ""}
    </div>
  `;

  bindTransferEvents();
}

function transferSceneDecor(task) {
  return `
    <div class="transfer-pack-window" aria-hidden="true"></div>
    <div class="transfer-pack-desk" aria-hidden="true"></div>
    <div class="transfer-pack-chair" aria-hidden="true"></div>
    <div class="transfer-pack-stationery" aria-hidden="true"></div>
    <div class="transfer-scene-backpack" aria-hidden="true">
      <div class="transfer-backpack-main-pocket"></div>
      <div class="transfer-backpack-front-pocket"></div>
      <div class="transfer-backpack-side-pocket"></div>
    </div>
    ${transferPlacedBackpackItemsHtml(task)}
  `;
}

const transferBackpackSpots = {
  "fafa-bottle": { left: 1012, top: 178 },
  "blue-notebook": { left: 888, top: 126 },
  "clean-towel-choice": { left: 940, top: 132 },
  "wood-pencil-case-choice": { left: 892, top: 258 },
  "handsome-badge-choice": { left: 950, top: 258 },
  "red-keychain-choice": { left: 1014, top: 252 },
  "pretty-postcard-order": { left: 982, top: 132 }
};

function transferPlacedBackpackItemsHtml(currentTask) {
  const placedIds = new Set(state.transferredIds);
  if (state.transferReady) placedIds.add(currentTask.id);

  return [...placedIds]
    .map((id) => {
      const placedTask = transferTasks.find((task) => task.id === id);
      const spot = transferBackpackSpots[id];
      if (!placedTask || !spot) return "";
      return `
        <div class="transfer-scene-placed" style="left:${spot.left}px;top:${spot.top}px" aria-label="${placedTask.phrase}已归位到书包">
          ${svgForObject(placedTask.targetObj, placedTask.targetMod, "icon-svg")}
        </div>
      `;
    })
    .join("");
}

function transferTaskPromptHtml(task) {
  if (task.type === "image-choice" || task.type === "drag-resources" || task.type === "single-resource") {
    if (isTransferImageOnlyTask(task)) {
      return `
        <div class="transfer-task-visual" aria-label="${task.phrase}图标">
          ${transferSingleItemVisualHtml(task)}
        </div>
        ${state.transferReady ? `<div class="transfer-placement-result"><span class="transfer-result-check">✓</span><span class="transfer-placement-label">合成结果</span><span class="transfer-placement-phrase">${phraseHtml(task.phrase)}</span><small>已归位：${task.destination || "正确位置"}</small></div>` : ""}
      `;
    }

    if (task.type === "image-choice") {
      const objectVisual = task.id === "wood-pencil-case-choice"
        ? svgForObject(task.targetObj, "actual", "small-svg")
        : tileContent(objects[task.targetObj], "small-svg");
      return `
        <div class="transfer-task-visual" aria-label="${task.phrase}图标">
          ${transferNamedTaskTileHtml(modifiers[task.targetMod].label, svgForModifier(task.targetMod, "small-svg"))}
          <span class="transfer-plus" aria-hidden="true">+</span>
          ${transferNamedTaskTileHtml(objects[task.targetObj].label, objectVisual)}
        </div>
        ${state.transferReady ? `<div class="transfer-placement-result"><span class="transfer-result-check">✓</span><span class="transfer-placement-label">合成结果</span><span class="transfer-placement-phrase">${phraseHtml(task.phrase)}</span><small>已归位：${task.destination || "正确位置"}</small></div>` : ""}
      `;
    }

    if (task.type === "single-resource") {
      return `
        <div class="transfer-task-visual" aria-label="${task.phrase}图标">
          ${transferSingleItemVisualHtml(task)}
        </div>
        ${state.transferReady ? `<div class="transfer-placement-result"><span class="transfer-result-check">✓</span><span class="transfer-placement-label">完成</span><span class="transfer-placement-phrase">${phraseHtml(task.phrase)}</span></div>` : ""}
      `;
    }

    const objectVisual = task.id === "wood-pencil-case-choice"
      ? svgForObject(task.targetObj, "actual", "icon-svg")
      : tileContent(objects[task.targetObj], "icon-svg");
    return `
      <div class="transfer-task-visual" aria-label="${task.prompt}">
        ${tileFor(modifiers[task.targetMod], "transfer-visual-tile")}
        <span class="transfer-plus" aria-hidden="true">+</span>
        <div class="transfer-visual-tile">${objectVisual}</div>
      </div>
      <p class="transfer-task-prompt">${task.prompt}</p>
      ${state.transferReady ? `<div class="transfer-placement-result"><span class="transfer-result-check">✓</span><span class="transfer-placement-label">合成结果</span><span class="transfer-placement-phrase">${phraseHtml(task.phrase)}</span><small>已归位：${task.destination || "正确位置"}</small></div>` : ""}
    `;
  }

  return `
    <div class="transfer-text-prompt">${task.prompt}</div>
    ${state.transferReady ? `<div class="transfer-placement-result"><span class="transfer-result-check">✓</span><span class="transfer-placement-label">合成结果</span><span class="transfer-placement-phrase">${phraseHtml(task.phrase)}</span><small>已归位：${task.destination || "正确位置"}</small></div>` : ""}
  `;
}

function transferNamedTaskTileHtml(label, visual) {
  return `
    <div class="transfer-named-task-tile">
      <span class="transfer-named-task-art">${visual}</span>
      <span class="transfer-named-task-label">${label}</span>
    </div>
  `;
}

function isTransferImageOnlyTask(task) {
  return task.id === "fafa-bottle" || task.id === "blue-notebook" || task.id === "wood-pencil-case-choice";
}

function transferSingleItemVisualHtml(task) {
  return `
    <div class="transfer-visual-tile transfer-phrase-visual">
      ${svgForObject(task.targetObj, task.targetMod, "icon-svg")}
    </div>
  `;
}

function transferAnswerHtml(task) {
  if (task.type === "single-resource") return transferSingleResourceAnswerHtml(task);
  if (task.type === "drag-resources") return transferDragAnswerHtml(task);
  if (task.type === "reorder") return transferReorderAnswerHtml(task);

  return `
    <div class="transfer-option-answer">
      <p class="transfer-answer-hint">选择正确的句子</p>
      <div class="transfer-option-row">
        ${task.options.map((option, index) => `
          <button class="transfer-option ${state.transferOption === index ? "is-selected" : ""} ${state.transferOption === index && index === task.correctOption ? "is-correct" : ""} ${state.transferErrorTargets.includes(`option-${index}`) ? "is-wrong" : ""}" type="button" data-transfer-option="${index}">
            <span class="transfer-option-letter">${String.fromCharCode(65 + index)}</span>
            <span>${option}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function transferSingleResourceAnswerHtml(task) {
  return `
    <div class="transfer-single-resource-answer">
      <p class="transfer-answer-hint">${task.hint}</p>
      <div class="transfer-single-resource-groups">
        <section class="transfer-single-resource-group" aria-label="说明资源">
          <h3>说明资源</h3>
          <div class="transfer-resource-row">
            ${task.modifierOptions.map((id) => transferSingleResourceCard("modifier", id, task)).join("")}
          </div>
        </section>
        <section class="transfer-single-resource-group" aria-label="物品资源">
          <h3>物品资源</h3>
          <div class="transfer-resource-row">
            ${task.objectOptions.map((id) => transferSingleResourceCard("object", id, task)).join("")}
          </div>
        </section>
      </div>
    </div>
  `;
}

function transferSingleResourceCard(kind, id, task) {
  const entity = kind === "modifier" ? modifiers[id] : objects[id];
  const selected = state.transferSingleSelection === `${kind}:${id}`;
  return `
    <button class="transfer-resource-card transfer-single-resource-card ${selected ? "is-selected" : ""} ${state.transferErrorTargets.includes(`single-${kind}-${id}`) ? "is-wrong" : ""}" type="button" data-transfer-single-kind="${kind}" data-transfer-single-id="${id}" aria-label="选择${entity.label}">
      <span class="transfer-resource-art">${kind === "modifier" ? svgForModifier(id, "small-svg") : svgForObject(id, "silhouette", "small-svg")}</span>
      <span class="transfer-resource-name">${entity.label}</span>
    </button>
  `;
}

function transferDragAnswerHtml(task) {
  return `
    <div class="transfer-resource-answer">
      <section class="transfer-resource-group" aria-label="说明资源">
        <h3>说明资源</h3>
        <div class="transfer-resource-row">
          ${task.modifierOptions.map((id) => transferResourceCard("modifier", id)).join("")}
        </div>
      </section>
      <section class="transfer-resource-group" aria-label="物品资源">
        <h3>物品资源</h3>
        <div class="transfer-resource-row">
          ${task.objectOptions.map((id) => transferResourceCard("object", id)).join("")}
        </div>
      </section>
    </div>
  `;
}

function transferMainCombinationHtml(task) {
  return `
    <div class="transfer-main-combination transfer-combination" aria-label="组合答题区">
      <div class="transfer-drop-row">
        ${transferDropSlot("modifier", "说明资源")}
        <div class="transfer-de-bridge" aria-hidden="true">的</div>
        ${transferDropSlot("object", "物品资源")}
      </div>
      ${state.transferReady ? `<div class="transfer-phrase transfer-phrase-result" aria-label="合成结果"><span class="transfer-phrase-label">合成结果</span><strong class="transfer-phrase-text">${phraseHtml(task.phrase)}</strong></div>` : ""}
    </div>
  `;
}

function transferBookOverlayHtml() {
  return stageFourGrammarOverlayHtml(WORD_STAGE_FOUR_ASSETS.grammarBook, "定语短语语法宝典", "word");
}

function transferReorderAnswerHtml(task) {
  ensureTransferCardOrder(task);
  return `
    <div class="transfer-reorder-answer">
      ${sortingQuestionLabelHtml()}
      <p class="transfer-answer-hint">拖动词卡，排成完整短语</p>
      <div class="transfer-reorder-row ${state.transferErrorTargets.includes("reorder") ? "is-wrong" : ""}" aria-label="词卡排序区">
        ${state.transferCardOrder.map((word, index) => `
          <button class="transfer-word-card" type="button" draggable="true" data-reorder-index="${index}" aria-label="词卡：${word}">
            ${word === "的" ? `<span class="de-char">的</span>` : word}
          </button>
        `).join("")}
      </div>
      <button class="transfer-check-button" type="button" data-transfer-submit="reorder">排好啦</button>
    </div>
  `;
}

function transferResourceCard(kind, id) {
  const entity = kind === "modifier" ? modifiers[id] : objects[id];
  const selected = state.transferSelections[kind] === id;
  return `
    <button class="transfer-resource-card ${selected ? "is-selected" : ""}" type="button" data-transfer-kind="${kind}" data-transfer-id="${id}" aria-label="选择${entity.label}">
      <span class="transfer-resource-art">${kind === "modifier" ? svgForModifier(id, "small-svg") : svgForObject(id, "silhouette", "small-svg")}</span>
      <span class="transfer-resource-name">${entity.label}</span>
    </button>
  `;
}

function transferDropSlot(kind, label) {
  const selectedId = state.transferSelections[kind];
  const entity = selectedId ? (kind === "modifier" ? modifiers[selectedId] : objects[selectedId]) : null;
  const visual = entity
    ? kind === "modifier" ? svgForModifier(selectedId, "small-svg") : svgForObject(selectedId, "silhouette", "small-svg")
    : "";
  return `
    <button class="transfer-drop-slot ${entity ? "is-filled" : ""} ${state.transferErrorTargets.includes(kind) ? "is-wrong" : ""}" type="button" data-transfer-drop-slot="${kind}" aria-label="${entity ? `${label}：${entity.label}` : `把${label}拖到这里`}">
      ${visual}
      ${entity ? `<span>${entity.label}</span>` : ""}
    </button>
  `;
}

function bindTransferEvents() {
  view.querySelectorAll("[data-transfer-single-kind]").forEach((button) => {
    button.addEventListener("click", () => {
      selectTransferSingleResource(button.dataset.transferSingleKind, button.dataset.transferSingleId);
    });
  });

  view.querySelectorAll("[data-transfer-kind]").forEach((button) => {
    button.addEventListener("click", () => {
      fillTransferResource(button.dataset.transferKind, button.dataset.transferId);
    });
  });

  view.querySelectorAll("[data-transfer-drop-slot]").forEach((slot) => {
    slot.addEventListener("click", () => {
      const kind = slot.dataset.transferDropSlot;
      state.transferSelections[kind] = null;
      state.transferReady = false;
      clearTransferError();
      renderTransfer();
    });
  });

  view.querySelectorAll("[data-transfer-option]").forEach((button) => {
    button.addEventListener("click", () => selectTransferOption(Number(button.dataset.transferOption)));
  });

  view.querySelectorAll("[data-reorder-index]").forEach((card) => {
    card.addEventListener("dragstart", (event) => {
      playSound("pick");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", JSON.stringify({
        kind: "transfer-word",
        index: Number(card.dataset.reorderIndex)
      }));
      card.classList.add("is-dragging");
    });
    card.addEventListener("dragend", () => card.classList.remove("is-dragging"));
    card.addEventListener("dragover", (event) => {
      event.preventDefault();
      card.classList.add("is-over");
    });
    card.addEventListener("dragleave", () => card.classList.remove("is-over"));
    card.addEventListener("drop", (event) => {
      event.preventDefault();
      card.classList.remove("is-over");
      const data = safeDragData(event);
      if (!data || data.kind !== "transfer-word") return;
      playSound("drop");
      addTransferWord(data.index, Number(card.dataset.reorderIndex));
    });
  });

  view.querySelector("[data-transfer-submit=\"reorder\"]")?.addEventListener("click", () => {
    const task = transferTasks[state.transferIndex];
    if (state.transferCardOrder.join("|") === task.correctOrder.join("|")) {
      state.transferReady = true;
      clearTransferError();
      setFeedback(`${task.phrase}，排对啦！`);
      playSound("success");
      renderTransfer();
      scheduleTransferCompletion();
    } else {
      state.transferAttempts[task.id] = (state.transferAttempts[task.id] || 0) + 1;
      playSound("wrong");
      setTransferError(task, ["reorder"]);
      renderTransfer();
    }
  });

  view.querySelectorAll("[data-transfer-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.transferAction;
      if (action === "home") setStage("home");
      if (action === "book") {
        state.transferBookOpen = true;
        renderTransfer();
      }
      if (action === "sound") {
        state.sound = !state.sound;
        soundToggle.setAttribute("aria-pressed", String(state.sound));
        soundToggle.querySelector("span").textContent = state.sound ? "♪" : "×";
        if (!state.sound && "speechSynthesis" in window) window.speechSynthesis.cancel();
        renderTransfer();
      }
    });
  });

  view.querySelectorAll("[data-transfer-book-action]").forEach((button) => {
    button.addEventListener("click", () => {
      state.transferBookOpen = false;
      renderTransfer();
    });
  });
}

function fillTransferResource(kind, id) {
  const task = transferTasks[state.transferIndex];
  state.transferSelections[kind] = id;
  state.transferReady = false;
  clearTransferError();

  const mod = state.transferSelections.modifier;
  const obj = state.transferSelections.object;
  if (mod && obj) {
    if (mod === task.targetMod && obj === task.targetObj) {
      state.transferReady = true;
      state.carryingTransfer = false;
      setFeedback(`${task.phrase}。${task.success}`);
      playSound("success");
      renderTransfer();
      scheduleTransferCompletion();
      return;
    } else {
      state.transferAttempts[task.id] = (state.transferAttempts[task.id] || 0) + 1;
      playSound("wrong");
      const targets = [];
      if (mod !== task.targetMod) targets.push("modifier");
      if (obj !== task.targetObj) targets.push("object");
      setTransferError(task, targets);
    }
  } else {
    setFeedback(kind === "modifier" ? "说明资源选好啦，再选一张物品资源。" : "物品资源选好啦，再选一张说明资源。");
  }
  renderTransfer();
}

function selectTransferSingleResource(kind, id) {
  const task = transferTasks[state.transferIndex];
  if (!task || task.type !== "single-resource") return;

  state.transferSingleSelection = `${kind}:${id}`;
  state.transferReady = kind === task.singleResourceKind && id === task.singleResourceTarget;
  clearTransferError();

  if (state.transferReady) {
    setFeedback(`${task.phrase}。${task.success}`);
    playSound("success");
    renderTransfer();
    scheduleTransferCompletion();
    return;
  }

  state.transferAttempts[task.id] = (state.transferAttempts[task.id] || 0) + 1;
  playSound("wrong");
  setTransferError(task, [`single-${kind}-${id}`]);
  renderTransfer();
}

function selectTransferOption(index) {
  const task = transferTasks[state.transferIndex];
  state.transferOption = index;
  state.transferReady = index === task.correctOption;
  clearTransferError();
  if (state.transferReady) {
    setFeedback(`${task.phrase}。${task.success}`);
    playSound("success");
    renderTransfer();
    scheduleTransferCompletion();
    return;
  }
  state.transferAttempts[task.id] = (state.transferAttempts[task.id] || 0) + 1;
  playSound("wrong");
  setTransferError(task, [`option-${index}`]);
  renderTransfer();
}

function ensureTransferCardOrder(task) {
  const isCurrent = state.transferCardOrder.length === task.cards.length
    && task.cards.every((word) => state.transferCardOrder.includes(word));
  if (isCurrent) return;

  state.transferCardOrder = [...(task.initialOrder || task.cards)];
  if (task.initialOrder) return;
  for (let index = state.transferCardOrder.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [state.transferCardOrder[index], state.transferCardOrder[randomIndex]] = [state.transferCardOrder[randomIndex], state.transferCardOrder[index]];
  }
  if (state.transferCardOrder.join("|") === task.correctOrder.join("|") && state.transferCardOrder.length > 1) {
    [state.transferCardOrder[0], state.transferCardOrder[1]] = [state.transferCardOrder[1], state.transferCardOrder[0]];
  }
}

function addTransferWord(fromIndex, toIndex) {
  if (fromIndex === toIndex) return;
  const [word] = state.transferCardOrder.splice(fromIndex, 1);
  state.transferCardOrder.splice(toIndex, 0, word);
  clearTransferError();
  renderTransfer();
}

function scheduleTransferCompletion() {
  if (transferCompleteTimer) window.clearTimeout(transferCompleteTimer);
  transferCompleteTimer = window.setTimeout(completeTransferTask, 720);
}

function completeTransferTask() {
  const task = transferTasks[state.transferIndex];
  if (!task || !state.transferReady) return;
  transferCompleteTimer = null;
  if (!state.transferredIds.includes(task.id)) state.transferredIds.push(task.id);
  playSound(state.transferIndex + 1 === transferTasks.length ? "reward" : "drop");
  setFeedback(`${task.phrase}，整理好了。`);
  state.transferIndex += 1;
  state.transferSelections = { modifier: null, object: null };
  state.transferSingleSelection = null;
  state.transferOption = null;
  state.transferOrder = [];
  state.transferCardOrder = [];
  state.transferReady = false;
  state.transferBookOpen = false;
  clearTransferError();
  state.carryingTransfer = false;
  render();
}

function resourceGroupsHtml(mode = "basket") {
  const isBank = mode === "bank";
  const modifiersList = restoreResourcesForDisplay("modifier", isBank);
  const objectsList = restoreResourcesForDisplay("object", isBank);
  const cardRenderer = isBank ? resourceCard : resourceRow;
  const emptyText = isBank ? "完成第一阶段后会出现资源" : "找对物品后会出现";

  return `
    <div class="resource-groups ${isBank ? "resource-bank" : "basket-list"}" aria-label="资源区">
      ${resourceGroupHtml("说明资源", modifiersList, cardRenderer, emptyText)}
      ${resourceGroupHtml("物品资源", objectsList, cardRenderer, emptyText)}
    </div>
  `;
}

function restoreResourcesForDisplay(kind, shouldShuffle) {
  const resources = state.resources.filter((resource) => resource.kind === kind);
  if (!shouldShuffle) return resources;

  const savedOrder = state.restoreResourceOrder[kind];
  const hasSameResources = savedOrder.length === resources.length
    && resources.every((resource) => savedOrder.includes(resource.resourceKey));

  if (!hasSameResources) {
    state.restoreResourceOrder[kind] = shuffledResourceKeys(resources);
  }

  return state.restoreResourceOrder[kind]
    .map((resourceKey) => resources.find((resource) => resource.resourceKey === resourceKey))
    .filter(Boolean);
}

function shuffledResourceKeys(resources) {
  const original = resources.map((resource) => resource.resourceKey);
  const shuffled = [...original];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  if (shuffled.length > 1 && shuffled.every((resourceKey, index) => resourceKey === original[index])) {
    shuffled.push(shuffled.shift());
  }

  return shuffled;
}

function resourceGroupHtml(title, resources, cardRenderer, emptyText) {
  return `
    <section class="resource-group" aria-label="${title}">
      <h4>${title}</h4>
      <div class="resource-group-list">
        ${resources.length ? resources.map(cardRenderer).join("") : `<div class="resource-empty">${emptyText}</div>`}
      </div>
    </section>
  `;
}

function resourceRow(resource) {
  const entity = resource.kind === "modifier" ? modifiers[resource.id] : objects[resource.id];
  return `
    <div class="basket-row">
      ${tileContent(entity, "tiny-svg")}
      <div>
        <strong>${entity.label}</strong>
      </div>
    </div>
  `;
}

function getResourceEntity(resourceKey) {
  if (!resourceKey) return null;
  const resource = state.resources.find((item) => item.resourceKey === resourceKey);
  if (!resource) return null;
  return resource.kind === "modifier" ? modifiers[resource.id] : objects[resource.id];
}

function tileFor(entity, className) {
  if (!entity) return `<div class="${className} is-empty" aria-hidden="true"></div>`;
  return `<div class="${className}">${tileContent(entity, className === "mini-object" ? "small-svg" : "icon-svg")}</div>`;
}

function tileContent(entity, sizeClass) {
  if (!entity) return "";
  if (entity.kind === "modifier") return svgForModifier(entity.id, sizeClass);
  return svgForObject(entity.id, "silhouette", sizeClass);
}

function phraseHtml(text) {
  return text.replaceAll("的", `<span class="de-char">的</span>`);
}

function safeDragData(event) {
  try {
    return JSON.parse(event.dataTransfer.getData("text/plain"));
  } catch {
    return null;
  }
}

function speakPhrase(text) {
  if (!state.sound || !("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") return;
  const synthesis = window.speechSynthesis;
  const speakWithMandarinVoice = () => {
    if (!state.sound) return;
    const voices = synthesis.getVoices();
    const voice = voices
      .filter((item) => !/(yue|cantonese|hong kong|taiwan|zh-hk|zh-tw|zh-hant|粤语|繁体)/i.test(`${item.lang} ${item.name}`))
      .sort((a, b) => {
        const score = (item) => {
          const id = `${item.lang} ${item.name}`.toLowerCase().replaceAll("_", "-");
          if (/^(zh-cn|cmn-hans-cn)$/.test(item.lang.toLowerCase())) return 4;
          if (/(普通话.*中国大陆|mandarin.*china|google.*普通话|microsoft.*xiaoxiao)/.test(id)) return 3;
          if (/^zh-hans/.test(item.lang.toLowerCase())) return 2;
          return 0;
        };
        return score(b) - score(a);
      })
      .find((item) => /^(zh-cn|cmn-hans-cn|zh-hans)/i.test(item.lang));
    if (!voice) return;

    synthesis.cancel();
    synthesis.resume();
    const utterance = new SpeechSynthesisUtterance(text.replace(/[。！？!?]+$/u, ""));
    utterance.voice = voice;
    utterance.lang = voice.lang;
    utterance.rate = 0.8;
    utterance.pitch = 1;
    synthesis.speak(utterance);
  };

  if (synthesis.getVoices().length) {
    speakWithMandarinVoice();
    return;
  }
  synthesis.addEventListener("voiceschanged", speakWithMandarinVoice, { once: true });
}

function currentStageEntryNarrationKey() {
  const key = `${state.category}:${state.stage}`;
  return STAGE_ENTRY_NARRATIONS[key] ? key : null;
}

function stopStageEntryNarration({ cancelSpeech = false } = {}) {
  if (stageEntryNarrationTimer) {
    window.clearTimeout(stageEntryNarrationTimer);
    stageEntryNarrationTimer = null;
  }
  if (cancelSpeech && "speechSynthesis" in window) window.speechSynthesis.cancel();
}

function playStageEntryNarration() {
  const key = currentStageEntryNarrationKey();
  if (!key || !state.sound) {
    if (stageEntryNarrationKey) stopStageEntryNarration({ cancelSpeech: true });
    stageEntryNarrationKey = null;
    return;
  }
  if (stageEntryNarrationKey === key) return;

  stopStageEntryNarration({ cancelSpeech: true });
  stageEntryNarrationKey = key;
  stageEntryNarrationTimer = window.setTimeout(() => {
    stageEntryNarrationTimer = null;
    if (state.sound && currentStageEntryNarrationKey() === key && stageEntryNarrationKey === key) {
      speakPhrase(STAGE_ENTRY_NARRATIONS[key]);
    }
  }, 180);
}

function refreshStageEntryNarrationForSound() {
  if (!state.sound) {
    stopStageEntryNarration({ cancelSpeech: true });
    stageEntryNarrationKey = null;
    return;
  }
  playStageEntryNarration();
}

function currentStageThreeCategory() {
  if (state.stage === "book") return "word";
  if (state.stage === "phrase-book") return "phrase";
  if (state.stage === "sentence-book") return "sentence";
  return null;
}

function syncStageThreeNarrationState() {
  const currentCategory = currentStageThreeCategory();
  if (!stageThreeNarrationKey || stageThreeNarrationKey === currentCategory) return;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  stageThreeNarrationKey = null;
}

function playStageThreeNarration(category) {
  if (!state.sound || currentStageThreeCategory() !== category || stageThreeNarrationKey === category) return;
  const narration = STAGE_THREE_NARRATIONS[category];
  if (!narration) return;
  stageThreeNarrationKey = category;
  window.setTimeout(() => {
    if (state.sound && currentStageThreeCategory() === category && stageThreeNarrationKey === category) {
      speakPhrase(narration);
    }
  }, 180);
}

function restart() {
  if (transferCompleteTimer) {
    window.clearTimeout(transferCompleteTimer);
    transferCompleteTimer = null;
  }
  stopRestoreLessonTimer();
  stopPhraseRestoreLessonTimer();
  stopSentenceCareLessonTimer();
  stopWordStageOneHintTimer();
  stopStageEntryNarration({ cancelSpeech: true });
  stageEntryNarrationKey = null;
  state.stage = "find";
  state.findIndex = 0;
  state.foundIds = [];
  state.resources = [];
  state.wordStageOneHintTarget = null;
  state.restoreIndex = 0;
  state.restoreSlots = { modifier: null, object: null };
  state.restoreSlotEntities = { modifier: null, object: null };
  state.restoreSelectedResourceKey = null;
  state.restoreReady = false;
  state.restoreReflection = null;
  state.restoreReflectionSelection = null;
  state.restoreReflectionError = null;
  state.restoreLesson = null;
  state.carryingRestore = false;
  state.restoreBridgeSeconds = RESTORE_BRIDGE_SECONDS;
  state.restoreBridgeReady = false;
  state.restoreHint = null;
  state.restoreHintQueue = [];
  state.restoreLastHint = null;
  state.restoreResourceOrder = { modifier: [], object: [] };
  state.wordStageTwoResourceOrder = { modifier: [], object: [] };
  state.restoredIds = [];
  state.restoreCompleteView = false;
  state.bookVisited = false;
  state.transferIndex = 0;
  state.transferSelections = { modifier: null, object: null };
  state.transferSingleSelection = null;
  state.transferOption = null;
  state.transferOrder = [];
  state.transferCardOrder = [];
  state.transferReady = false;
  state.transferBookOpen = false;
  state.carryingTransfer = false;
  state.transferAttempts = {};
  clearTransferError();
  state.transferredIds = [];
  stopRestoreBridgeCountdown();
  setFeedback("看任务卡，在同一张房间画布里找对应物品。");
  render();
}

function svgForModifier(id, sizeClass = "icon-svg") {
  const color = modifiers[id]?.color || "#ffd33f";
  if (modifiers[id]?.type === "color") {
    return `
      <svg class="${sizeClass}" viewBox="0 0 78 78" role="img" aria-label="${modifiers[id].label}">
        <rect x="10" y="10" width="58" height="58" rx="8" fill="${color}" stroke="#29364a" stroke-width="3"/>
        <circle cx="51" cy="25" r="10" fill="rgba(255,255,255,.38)"/>
        <path d="M19 52 C30 44, 45 60, 59 47" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="6" stroke-linecap="round"/>
      </svg>
    `;
  }

  if (id === "clean") {
    return `
      <svg class="${sizeClass}" viewBox="0 0 78 78" role="img" aria-label="干净">
        <rect x="8" y="8" width="62" height="62" rx="8" fill="#dff9ff" stroke="#29364a" stroke-width="3"/>
        <path d="M39 14 L45 31 L63 37 L45 44 L39 62 L32 44 L15 37 L32 31 Z" fill="#fff7a8" stroke="#e6a800" stroke-width="3"/>
        <circle cx="22" cy="18" r="5" fill="#8fe3ff"/>
        <circle cx="58" cy="56" r="6" fill="#8fe3ff"/>
      </svg>
    `;
  }

  if (id === "dirty") {
    return `
      <svg class="${sizeClass}" viewBox="0 0 78 78" role="img" aria-label="脏脏">
        <rect x="8" y="8" width="62" height="62" rx="8" fill="#e0d2be" stroke="#29364a" stroke-width="3"/>
        <circle cx="28" cy="32" r="9" fill="#8a6b4a"/>
        <circle cx="49" cy="46" r="11" fill="#76553b"/>
        <path d="M20 55 C32 49, 45 58, 59 52" fill="none" stroke="#5d4633" stroke-width="4" stroke-linecap="round"/>
      </svg>
    `;
  }

  if (id === "wet") {
    return `
      <svg class="${sizeClass}" viewBox="0 0 78 78" role="img" aria-label="湿漉漉">
        <rect x="8" y="8" width="62" height="62" rx="8" fill="#d9edff" stroke="#29364a" stroke-width="3"/>
        <path d="M27 21 C20 33, 17 39, 17 47 C17 58, 26 65, 38 65 C50 65, 60 58, 60 46 C60 38, 52 28, 40 14 C36 18, 32 20, 27 21 Z" fill="#79c7ff" stroke="#2376b7" stroke-width="3"/>
        <path d="M31 42 C35 38, 42 37, 47 42" fill="none" stroke="#e7f7ff" stroke-width="4" stroke-linecap="round"/>
      </svg>
    `;
  }

  if (id === "pretty") {
    return `
      <svg class="${sizeClass}" viewBox="0 0 78 78" role="img" aria-label="漂亮">
        <rect x="8" y="8" width="62" height="62" rx="8" fill="#fff0f7" stroke="#29364a" stroke-width="3"/>
        <path d="M39 12 L47 30 L67 32 L52 45 L56 65 L39 55 L22 65 L26 45 L11 32 L31 30 Z" fill="#ffd33f" stroke="#cc8500" stroke-width="3"/>
        <circle cx="53" cy="20" r="5" fill="#f48aaa"/>
        <circle cx="22" cy="22" r="4" fill="#79c7ff"/>
      </svg>
    `;
  }

  if (id === "ordinary") {
    return `
      <svg class="${sizeClass}" viewBox="0 0 78 78" role="img" aria-label="普通">
        <rect x="8" y="8" width="62" height="62" rx="8" fill="#f2f4f7" stroke="#29364a" stroke-width="3"/>
        <circle cx="29" cy="34" r="9" fill="#b6c0cd"/>
        <circle cx="49" cy="45" r="9" fill="#cbd2dc"/>
      </svg>
    `;
  }

  if (id === "wood") {
    return `
      <svg class="${sizeClass}" viewBox="0 0 78 78" role="img" aria-label="木纹">
        <rect x="8" y="8" width="62" height="62" rx="8" fill="#f4d09f" stroke="#29364a" stroke-width="3"/>
        <path d="M15 23 C27 14, 36 31, 48 22 C56 16, 62 20, 66 25 M13 42 C25 33, 37 50, 49 41 C57 35, 63 39, 67 44 M14 59 C26 50, 36 66, 49 57 C57 51, 62 54, 66 60" fill="none" stroke="#a86d35" stroke-width="4" stroke-linecap="round"/>
      </svg>
    `;
  }

  return avatarSvg(id, sizeClass);
}

function avatarSvg(id, sizeClass = "icon-svg") {
  const info = {
    sister: { label: "妹", fill: "#f48aaa", hair: "#754234", mark: "蝶" },
    mom: { label: "妈", fill: "#6ebf71", hair: "#4b342f", mark: "叶" },
    fafa: { label: "法", fill: "#4f8bd8", hair: "#314766", mark: "星" }
  }[id] || { label: "人", fill: "#9a83d7", hair: "#3f315f", mark: "" };
  return `
    <svg class="${sizeClass}" viewBox="0 0 78 78" role="img" aria-label="${modifiers[id]?.label || "头像"}">
      <rect x="8" y="8" width="62" height="62" rx="8" fill="#fff7e3" stroke="#29364a" stroke-width="3"/>
      <circle cx="39" cy="36" r="21" fill="${info.fill}" stroke="#29364a" stroke-width="3"/>
      <path d="M20 36 C24 14, 53 13, 58 35 C50 27, 33 27, 20 36 Z" fill="${info.hair}"/>
      <circle cx="31" cy="38" r="3" fill="#29364a"/>
      <circle cx="47" cy="38" r="3" fill="#29364a"/>
      <path d="M32 49 C36 53, 42 53, 46 49" fill="none" stroke="#29364a" stroke-width="3" stroke-linecap="round"/>
      <circle cx="57" cy="20" r="11" fill="#ffffff" stroke="#29364a" stroke-width="2"/>
      <text x="57" y="25" text-anchor="middle" font-size="12" font-weight="900" fill="#29364a">${info.mark}</text>
      <text x="39" y="68" text-anchor="middle" font-size="13" font-weight="900" fill="#29364a">${info.label}</text>
    </svg>
  `;
}

function svgForObject(id, modId, sizeClass = "icon-svg") {
  const isSilhouette = modId === "silhouette";
  const modColor = isSilhouette ? null : modifiers[modId]?.color;
  const color = isSilhouette ? "#202735" : modColor || objectDefaultColor(id);
  const label = objects[id]?.label || id;
  const common = `class="${sizeClass}" viewBox="0 0 78 78" role="img" aria-label="${label}"`;

  if (id === "pencil" || id === "crayon") {
    const body = id === "pencil" ? color : color;
    const tip = isSilhouette || id !== "pencil" ? color : "#f7d3a5";
    return `
      <svg ${common}>
        <rect x="11" y="11" width="56" height="56" rx="8" fill="#fff" stroke="#29364a" stroke-width="2"/>
        <g transform="translate(18 54) rotate(-38)">
          <rect x="0" y="-9" width="43" height="18" rx="4" fill="${body}" stroke="#29364a" stroke-width="3"/>
          <path d="M43 -9 L57 0 L43 9 Z" fill="${tip}" stroke="#29364a" stroke-width="3"/>
          <path d="M55 0 L62 0" stroke="#29364a" stroke-width="3" stroke-linecap="round"/>
          ${id === "crayon" ? `<path d="M8 -9 L8 9 M28 -9 L28 9" stroke="#29364a" stroke-width="2"/>` : ""}
        </g>
      </svg>
    `;
  }

  if (id === "box") {
    return `
      <svg ${common}>
        <rect x="10" y="16" width="58" height="48" rx="7" fill="${color}" stroke="#29364a" stroke-width="3"/>
        <path d="M10 29 H68" stroke="#29364a" stroke-width="3"/>
        ${isSilhouette ? "" : `<rect x="31" y="25" width="16" height="13" rx="3" fill="#fff7d0" stroke="#29364a" stroke-width="2"/><path d="M20 49 H58" stroke="rgba(255,255,255,.55)" stroke-width="5" stroke-linecap="round"/>`}
      </svg>
    `;
  }

  if (id === "ball") {
    return `
      <svg ${common}>
        <circle cx="39" cy="39" r="29" fill="${color}" stroke="#29364a" stroke-width="3"/>
        ${isSilhouette ? "" : `<path d="M16 39 C28 31, 49 30, 62 39" fill="none" stroke="#ffffff" stroke-width="5"/>`}
        <path d="M39 11 C31 25, 31 54, 39 67" fill="none" stroke="#29364a" stroke-width="3"/>
      </svg>
    `;
  }

  if (id === "clothes") {
    return `
      <svg ${common}>
        <path d="M25 14 L34 23 H44 L53 14 L66 28 L57 39 V65 H21 V39 L12 28 Z" fill="${color}" stroke="#29364a" stroke-width="3" stroke-linejoin="round"/>
        <path d="M32 23 C35 30, 43 30, 46 23" fill="none" stroke="#29364a" stroke-width="3"/>
        ${modId === "clean" ? `<path d="M51 16 L55 25 L64 28 L55 31 L51 40 L47 31 L38 28 L47 25 Z" fill="#fff7a8" stroke="#e6a800" stroke-width="2"/>` : ""}
        ${modId === "dirty" ? `<circle cx="47" cy="42" r="7" fill="#8a6b4a"/><circle cx="30" cy="50" r="5" fill="#76553b"/>` : ""}
      </svg>
    `;
  }

  if (id === "towel") {
    return `
      <svg ${common}>
        <rect x="20" y="14" width="38" height="52" rx="6" fill="${color}" stroke="#29364a" stroke-width="3"/>
        ${isSilhouette ? "" : `<path d="M25 24 H53 M25 34 H53 M25 44 H53" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>`}
        ${modId === "clean" ? `<path d="M56 13 L60 22 L69 25 L60 29 L56 38 L52 29 L43 25 L52 22 Z" fill="#fff7a8" stroke="#e6a800" stroke-width="2"/>` : ""}
      </svg>
    `;
  }

  if (id === "doll") {
    return `
      <svg ${common}>
        <circle cx="27" cy="24" r="10" fill="${color}" stroke="#29364a" stroke-width="3"/>
        <circle cx="51" cy="24" r="10" fill="${color}" stroke="#29364a" stroke-width="3"/>
        <circle cx="39" cy="36" r="20" fill="${color}" stroke="#29364a" stroke-width="3"/>
        <ellipse cx="39" cy="59" rx="20" ry="18" fill="${color}" stroke="#29364a" stroke-width="3"/>
        <circle cx="33" cy="34" r="2.5" fill="#29364a"/><circle cx="45" cy="34" r="2.5" fill="#29364a"/>
        <path d="M35 42 Q39 46 43 42" fill="none" stroke="#29364a" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    `;
  }

  if (id === "hairpin" || id === "hairclip") {
    return `
      <svg ${common}>
        <rect x="10" y="10" width="58" height="58" rx="8" fill="#fff8fb" stroke="#29364a" stroke-width="2"/>
        <path d="M22 41 C34 22, 51 22, 58 39" fill="none" stroke="${color}" stroke-width="9" stroke-linecap="round"/>
        <path d="M22 41 C34 22, 51 22, 58 39" fill="none" stroke="#29364a" stroke-width="3" stroke-linecap="round"/>
        ${id === "hairclip" ? `<circle cx="40" cy="31" r="8" fill="${isSilhouette ? color : "#ffd33f"}" stroke="#29364a" stroke-width="2"/>` : `<path d="M34 31 L40 22 L46 31 L40 39 Z" fill="${isSilhouette ? color : "#ffd33f"}" stroke="#29364a" stroke-width="2"/>`}
      </svg>
    `;
  }

  if (id === "cup") {
    return `
      <svg ${common}>
        <path d="M22 20 H52 L48 62 H26 Z" fill="${color}" stroke="#29364a" stroke-width="3" stroke-linejoin="round"/>
        <path d="M52 31 H61 C68 31, 68 48, 58 48 H50" fill="none" stroke="#29364a" stroke-width="5" stroke-linecap="round"/>
        <path d="M28 30 H45" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
      </svg>
    `;
  }

  if (id === "bottle") {
    return `
      <svg ${common}>
        <rect x="30" y="11" width="18" height="12" rx="3" fill="${isSilhouette ? color : "#8fcbe8"}" stroke="#29364a" stroke-width="3"/>
        <path d="M24 24 H54 L59 62 H19 Z" fill="${color}" stroke="#29364a" stroke-width="3" stroke-linejoin="round"/>
        ${isSilhouette ? "" : `<path d="M28 36 H52" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>`}
      </svg>
    `;
  }

  if (id === "notebook" || id === "fileFolder") {
    return `
      <svg ${common}>
        <rect x="15" y="12" width="48" height="56" rx="5" fill="${color}" stroke="#29364a" stroke-width="3"/>
        <path d="M25 12 V68" stroke="#29364a" stroke-width="3"/>
        ${isSilhouette ? "" : `<path d="M34 28 H55 M34 39 H55 M34 50 H51" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>`}
      </svg>
    `;
  }

  if (id === "backpack") {
    return `
      <svg ${common}>
        <path d="M22 29 C22 13, 56 13, 56 29 V64 H22 Z" fill="${color}" stroke="#29364a" stroke-width="3"/>
        <path d="M29 29 C29 20, 49 20, 49 29" fill="none" stroke="#29364a" stroke-width="4"/>
        <rect x="30" y="39" width="18" height="15" rx="4" fill="${isSilhouette ? color : "rgba(255,255,255,.42)"}" stroke="#29364a" stroke-width="2"/>
      </svg>
    `;
  }

  if (id === "pencilCase") {
    const accent = modId === "wood" ? "#f3c885" : "#a86d35";
    return `
      <svg ${common}>
        <rect x="11" y="23" width="56" height="34" rx="10" fill="${color}" stroke="#29364a" stroke-width="3"/>
        <path d="M20 31 H58" stroke="${isSilhouette ? "#29364a" : "rgba(255,255,255,.68)"}" stroke-width="4" stroke-linecap="round"/>
        ${isSilhouette ? "" : `<path d="M23 43 C34 36, 43 51, 56 43" fill="none" stroke="${accent}" stroke-width="3"/>`}
      </svg>
    `;
  }

  if (id === "badge") {
    return `
      <svg ${common}>
        <path d="M39 12 L46 20 L57 19 L58 30 L66 38 L58 46 L57 58 L46 57 L39 66 L32 57 L21 58 L20 46 L12 38 L20 30 L21 19 L32 20 Z" fill="${color}" stroke="#29364a" stroke-width="3"/>
        ${isSilhouette ? "" : `<path d="M27 39 C32 33, 46 33, 51 39 C46 47, 32 47, 27 39 Z" fill="#fff7d0" stroke="#cc8500" stroke-width="2"/>`}
      </svg>
    `;
  }

  if (id === "keychain") {
    return `
      <svg ${common}>
        <circle cx="29" cy="28" r="14" fill="none" stroke="#29364a" stroke-width="5"/>
        <path d="M39 38 L57 56" stroke="#29364a" stroke-width="6" stroke-linecap="round"/>
        <rect x="45" y="48" width="18" height="13" rx="4" fill="${color}" stroke="#29364a" stroke-width="3" transform="rotate(28 54 54)"/>
      </svg>
    `;
  }

  if (id === "postcard") {
    return `
      <svg ${common}>
        <rect x="10" y="16" width="58" height="46" rx="5" fill="${isSilhouette ? color : "#fffdf5"}" stroke="#29364a" stroke-width="3"/>
        ${isSilhouette ? "" : `<path d="M16 51 L32 35 L43 46 L51 39 L62 51" fill="none" stroke="#f48aaa" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="52" cy="27" r="6" fill="#ffd33f"/>`}
        ${isSilhouette ? "" : `<path d="M18 24 H33 M18 29 H28" stroke="#4f8bd8" stroke-width="3" stroke-linecap="round"/>`}
      </svg>
    `;
  }

  if (id === "book" || id === "pictureBook" || id === "magazine" || id === "workbook" || id === "album") {
    const accent = isSilhouette ? color : { book: "#4f8bd8", pictureBook: "#f48aaa", magazine: "#6ebf71", workbook: "#ffd33f", album: "#9a83d7" }[id] || color;
    return `
      <svg ${common}>
        <path d="M16 16 H58 C63 16, 66 20, 66 25 V64 H25 C20 64, 16 60, 16 55 Z" fill="${accent}" stroke="#29364a" stroke-width="3"/>
        <path d="M24 16 V64" stroke="#29364a" stroke-width="3"/>
        ${isSilhouette ? "" : `<rect x="31" y="27" width="24" height="18" rx="4" fill="#fff7d0" stroke="#29364a" stroke-width="2"/><path d="M33 53 H58" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>`}
      </svg>
    `;
  }

  if (id === "sticker" || id === "label") {
    return `
      <svg ${common}>
        <rect x="13" y="17" width="52" height="42" rx="7" fill="${isSilhouette ? color : id === "label" ? "#e6d5b8" : "#fff0f7"}" stroke="#29364a" stroke-width="3"/>
        ${isSilhouette ? "" : id === "sticker" ? `<path d="M39 22 L44 34 L57 35 L47 44 L50 57 L39 50 L28 57 L31 44 L21 35 L34 34 Z" fill="#ffd33f" stroke="#cc8500" stroke-width="2"/>` : `<path d="M23 32 H55 M23 43 H50" stroke="#8a6b4a" stroke-width="4" stroke-linecap="round"/>`}
      </svg>
    `;
  }

  if (id === "umbrella") {
    return `
      <svg ${common}>
        <path d="M12 37 C18 18, 60 18, 66 37 C54 31, 47 37, 39 37 C31 37, 24 31, 12 37 Z" fill="${color}" stroke="#29364a" stroke-width="3"/>
        <path d="M39 36 V58 C39 67, 54 67, 54 58" fill="none" stroke="#29364a" stroke-width="4" stroke-linecap="round"/>
        <path d="M39 18 V37" stroke="#29364a" stroke-width="3"/>
      </svg>
    `;
  }

  if (id === "hat") {
    return `
      <svg ${common}>
        <path d="M22 42 C23 20, 55 20, 56 42" fill="${color}" stroke="#29364a" stroke-width="3"/>
        <path d="M12 45 C24 54, 54 54, 66 45" fill="${isSilhouette ? color : "#fff7d0"}" stroke="#29364a" stroke-width="3"/>
        ${isSilhouette ? "" : `<path d="M27 34 H51" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>`}
      </svg>
    `;
  }

  if (id === "scarf") {
    return `
      <svg ${common}>
        <path d="M25 16 C34 10, 51 14, 55 26 C61 44, 43 46, 38 35" fill="none" stroke="${color}" stroke-width="14" stroke-linecap="round"/>
        <path d="M37 36 L31 66" stroke="${color}" stroke-width="13" stroke-linecap="round"/>
        <path d="M47 39 L58 64" stroke="${color}" stroke-width="13" stroke-linecap="round"/>
        ${isSilhouette ? "" : `<path d="M33 53 H44 M50 53 H60" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>`}
      </svg>
    `;
  }

  if (id === "gloves") {
    return `
      <svg ${common}>
        <path d="M18 34 C18 20, 33 18, 36 31 L39 50 C41 63, 20 66, 18 51 Z" fill="${color}" stroke="#29364a" stroke-width="3"/>
        <path d="M42 31 C45 18, 60 20, 60 34 L60 51 C58 66, 37 63, 39 50 Z" fill="${color}" stroke="#29364a" stroke-width="3"/>
        ${isSilhouette ? "" : `<path d="M24 53 H34 M44 53 H55" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>`}
      </svg>
    `;
  }

  if (id === "poster" || id === "map") {
    return `
      <svg ${common}>
        <rect x="16" y="13" width="46" height="56" rx="4" fill="${isSilhouette ? color : id === "poster" ? "#fff0f7" : "#e8f7ff"}" stroke="#29364a" stroke-width="3"/>
        ${isSilhouette ? "" : id === "poster" ? `<circle cx="39" cy="35" r="12" fill="#ffd33f" stroke="#cc8500" stroke-width="2"/><path d="M25 55 H53" stroke="#f48aaa" stroke-width="5" stroke-linecap="round"/>` : `<path d="M22 30 C33 20, 42 44, 56 28 M24 52 C35 40, 43 64, 56 50" fill="none" stroke="#4f8bd8" stroke-width="4" stroke-linecap="round"/>`}
      </svg>
    `;
  }

  return `
    <svg ${common}>
      <rect x="12" y="12" width="54" height="54" rx="8" fill="${color}" stroke="#29364a" stroke-width="3"/>
    </svg>
  `;
}

function objectDefaultColor(id) {
  const colorMap = {
    pencil: "#ffd33f",
    crayon: "#ffd33f",
    box: "#f36464",
    ball: "#f36464",
    clothes: "#8fcbe8",
    towel: "#8fcbe8",
    doll: "#d68d3f",
    hairpin: "#f48aaa",
    hairclip: "#f48aaa",
    cup: "#6ebf71",
    bottle: "#4f8bd8",
    book: "#4f8bd8",
    pictureBook: "#f48aaa",
    magazine: "#6ebf71",
    sticker: "#ffd33f",
    label: "#c8b087",
    album: "#9a83d7",
    notebook: "#4f8bd8",
    fileFolder: "#ffd33f",
    backpack: "#f48aaa",
    pencilCase: "#a86d35",
    badge: "#ffd33f",
    keychain: "#f36464",
    postcard: "#f48aaa",
    workbook: "#ffd33f",
    umbrella: "#ffd33f",
    hat: "#4f8bd8",
    scarf: "#8fcbe8",
    gloves: "#9a83d7",
    poster: "#f48aaa",
    map: "#8fcbe8"
  };
  return colorMap[id] || "#9a83d7";
}

tabs.forEach((tab) => tab.addEventListener("click", () => setStage(tab.dataset.stageTab)));

soundToggle.addEventListener("click", () => {
  state.sound = !state.sound;
  soundToggle.setAttribute("aria-pressed", String(state.sound));
  soundToggle.querySelector("span").textContent = state.sound ? "♪" : "×";
  if (!state.sound && "speechSynthesis" in window) window.speechSynthesis.cancel();
  if (state.sound && currentStageThreeCategory()) {
    stageThreeNarrationKey = null;
    playStageThreeNarration(currentStageThreeCategory());
  }
  refreshStageEntryNarrationForSound();
});

restartBtn.addEventListener("click", restart);

function applyDebugStageRoute() {
  const params = new URLSearchParams(window.location.search);
  if (params.has("phrase-stage2")) {
    const requestedIndex = Number(params.get("phrase-stage2"));
    state.category = "phrase";
    state.stage = "phrase-restore";
    state.phraseBookVisited = true;
    state.phraseRestoreIndex = Number.isInteger(requestedIndex)
      ? Math.max(0, Math.min(phraseFindTasks.length - 1, requestedIndex))
      : 0;
    state.phraseRestoreSelections = { action: null, object: null };
    state.phraseRestoreReady = false;
    state.phraseRestoreShowingComplete = false;
    state.phraseRestoreReflection = null;
    state.phraseRestoreLesson = null;
    state.phraseRestoreCompletedIds = [];
    state.phraseResources = {
      actions: phraseFindTasks.map((task) => task.action),
      objects: phraseFindTasks.map((task) => task.object)
    };
    state.phraseRestoreResourceOrder = { actions: [], objects: [] };
    clearPhraseError();
  }
  if (params.has("phrase-stage4")) {
    const requestedIndex = Number(params.get("phrase-stage4"));
    state.category = "phrase";
    state.stage = "phrase-transfer";
    state.phraseBookVisited = true;
    state.phraseTransferIndex = Number.isInteger(requestedIndex)
      ? Math.max(0, Math.min(phraseTransferTasks.length - 1, requestedIndex))
      : 0;
    state.phraseTransferSelections = { action: null, object: null };
    state.phraseTransferOption = null;
    state.phraseTransferCardOrder = [];
    state.phraseTransferReady = false;
    state.phraseTransferredIds = [];
    clearPhraseError();
  }
  if (params.has("sentence-stage4")) {
    const requestedIndex = Number(params.get("sentence-stage4"));
    state.category = "sentence";
    state.stage = "sentence-transfer";
    state.sentenceBookVisited = true;
    state.sentenceTransferIndex = Number.isInteger(requestedIndex)
      ? Math.max(0, Math.min(sentenceTransferTasks.length - 1, requestedIndex))
      : 0;
    state.sentenceTransferSelections = { value: null, object: null, result: null };
    state.sentenceTransferOrder = [];
  state.sentenceTransferOrderSelectedIndex = null;
  state.sentenceTransferReady = false;
  state.sentenceTransferBookOpen = false;
  state.sentenceTransferredIds = [];
    clearSentenceError();
  }
}

applyDebugStageRoute();
render();
