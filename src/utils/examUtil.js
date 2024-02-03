import _ from 'lodash';

/**
 * 生成随机整数，排除excludes
 * @param min 最小值
 * @param max 最大值
 * @param excludes 排除数
 * @returns int 随机整数
 */
const randomInt = (min, max, excludes = [0]) => {
  let result = Math.floor(Math.random() * (max - min + 1)) + min;
  if (excludes.includes(result)) {
    result += 1;
  }

  return result;
};

// 生成多位数的口算题。如：15+25-10、50-35+15、(50-35)+15
export const questionGen = ({
  paramMin = 0, paramMax = 100,
  operNum = 3, operList = ['+', '-'],
  resultMin = 0, resultMax = 100,
  displayType = [1], bracketType = 0,
} = {}) => {
  // 随机生成第一个参数
  let pram1 = randomInt(paramMin, paramMax);
  // 保存算式
  let equations = [pram1];

  for (let i = 1; i < operNum; i += 1) {
    let oper = _.sample(operList);
    let pram2 = randomInt(paramMin, paramMax);

    equations.push(oper, pram2);
  }

  // 是否真的需要加括号
  let isBracket = bracketType === 1 ? true : false;

};

/**
 * 批量生成口算题
 * @param {*} batchNum 生成题目数量
 * @param {*} displayType 答题方式 1|标准题、2|填空题
 * @param {*} bracketType 是否包含括号 0|无括号、1|有括号、2|随机括号
 */
export const questionGenBatch = ({
  paramMin = 0, paramMax = 100,
  operNum = 3, operList = ['+', '-'],
  resultMin = 0, resultMax = 100,
  batchNum = 100, displayType = [1],
  bracketType = 0,
} = {}) => {
  const resultList = [];
  for (let i = 0; i < batchNum; i += 1) {
    const resultObj = questionGen({
      paramMin,
      paramMax,
      operNum,
      operList,
      resultMin,
      resultMax,
      displayType,
      bracketType: bracketType === 2 ? _.sample([0, 1]) : bracketType,
    });

    resultList.push(resultObj);
  }

  return resultList;
};