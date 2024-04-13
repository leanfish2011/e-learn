import {words} from "./data/words"

/**
 * 生成范围内的随机数
 * @param min 最小值
 * @param max 最大值
 * @returns {*}
 */
function genRandomInt(min, max) {
  // 生成随机数
  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  return result;
}

/**
 * 生成范围内的不重复随机数数组
 * @param min 最小值
 * @param max 最大值
 * @param count 个数
 * @returns {*}
 */
function genRandomArray(min, max, count) {
  let result = [];
  while (count > 0) {
    let item = genRandomInt(min, max);
    if (!result.includes(item)) {
      result.push(item);
      count--;
    }
  }

  return result;
}

/**
 * 从数组中随机取一个元素
 * @param arr 数组
 * @returns {*}
 */
function getRandItem(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function genExpression(lineWords, questionType) {
  const wordInfo = lineWords.split("_");
  let expression = [];
  expression.push(wordInfo[1]);
  expression.push("   ");

  // TODO 考虑题型

  const wordArray = Array.from(wordInfo[0]);
  let replaceCount = genRandomInt(1, wordArray.length);
  while (replaceCount > 0) {
    let replaceIndex = genRandomInt(0, wordArray.length - 1);
    let character = wordArray[replaceIndex];
    if (character != "_") {
      wordArray[replaceIndex] = "_ ";
      replaceCount--;
    }
  }

  const word = wordArray.join("");
  expression.push(word);

  return expression;
}

/**
 * 生成一个试题和答案
 * @param lineWords
 * @param questionType
 * @returns {{result: *, exp: string}}
 */
function examOne(lineWords, questionType) {
  const expression = genExpression(lineWords, questionType);
  const exp = expression.join("");
  const result = lineWords.split("_")[0];

  return {"exp": exp, "result": result};
}

/**
 * 读取指定单词集行
 * @param grade
 * @param unit
 * @param line
 */
function getLineWords(grade, unit, line) {
  return words[grade][unit][line];
}

/**
 * 获取指定单词集个数
 * @param grade 年级
 * @param unit 单元
 */
function getWordsCount(grade, unit) {
  return words[grade][unit].length;
}

function examBatch(grade, unit, questionType, examNum) {
  const wordsCount = getWordsCount(grade, unit);
  if (examNum > wordsCount) {
    examNum = wordsCount;
  }
  const lineNumArray = genRandomArray(0, wordsCount - 1, examNum);
  console.log(lineNumArray);

  const examList = [];
  lineNumArray.forEach(
      lineNum => {
        let lineWords = getLineWords(grade, unit, lineNum);
        let exam = examOne(lineWords, questionType);

        examList.push(exam);
      }
  );

  return examList;
}

/**
 * 批量生成表达式及答案入口，进行参数校验
 * @param grade 年级
 * @param unit 单元
 * @param examNum 生成的试题个数
 */
export function startExamBatch(params) {
  const grade = params.grade || "7-0";
  const unit = "unit-" + params.unit || "unit-1";//单元
  const questionType = params.questionType || 1;//题型
  const examNum = params.examNum || 100; // 生成题目数量

  return examBatch(grade, unit, questionType, examNum);
}