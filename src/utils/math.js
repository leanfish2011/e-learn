/**
 * 判断字符是否为数字
 * @param a 字符
 * @returns {boolean} true/false
 */
function isNumber(a) {
    if (!isNaN(a)) {
        return true;
    }

    return false;
}

/**
 * 运算符：四则运算优先级
 * @type {{"*": number, "+": number, "-": number, "/": number}}
 */
const opeMap = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2
};

/**
 * 是否为四则运算符
 * @param a 输入
 * @returns {boolean}
 */
function isOpe(a) {
    let value = opeMap[a];
    if (value != null) {
        return true;
    } else {
        return false;
    }
}

/**
 * 栈中的元素进行计算
 * @param numStack 数字栈
 * @param opeStack 运算符栈
 */
function calc(numStack, opeStack) {
    if (opeStack.length == 0) {
        return;
    }

    let ope = opeStack.pop();
    let right = numStack.pop();
    let left = numStack.pop();

    let result;
    switch (ope) {
        case "+":
            result = left + right;
            break;
        case "-":
            result = left - right;
            break;
        case "*":
            result = left * right;
            break;
        case "/":
            result = left / right;
            break;
    }

    numStack.push(result);
}

/**
 * 表达式计算
 * @param expression 表达式，数组形式
 * @returns {*}
 */
function calcExpression(expression) {
    let numStack = [];//栈，存放数字
    let opeStack = [];//栈，存放运算符

    for (let i = 0; i < expression.length; i++) {
        let item = expression[i];

        if (isNumber(item)) {
            numStack.push(parseInt(item));
        } else if (isOpe(item)) {
            //运算符栈中运算级别高，则先运算
            while (opeStack.length != 0 && opeMap[item]
            <= opeMap[opeStack[opeStack.length
            - 1]]) {
                calc(numStack, opeStack);
            }

            opeStack.push(item);
        } else if (item == "(") {
            opeStack.push(item);
        } else if (item == ")") {
            //碰到右括号了，则说明括号封闭了，先计算括号里面
            while (opeStack.length != 0 && opeStack[opeStack.length - 1] != "(") {
                calc(numStack, opeStack);
            }

            opeStack.pop();
        }
    }

    while (opeStack.length != 0) {
        calc(numStack, opeStack);
    }

    return numStack[numStack.length - 1];
}

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
 * 返回指定范围内的随机偶数
 * @param min
 * @param max
 * @returns {*}
 */
function genRandomIntEven(min, max) {
    let result = genRandomInt(min, max);
    while (result % 2 !== 0) {
        result = genRandomInt(min, max);
    }

    return result;
}

/**
 * 返回指定范围内的随机奇数
 * @param min
 * @param max
 * @returns {*}
 */
function genRandomIntOdd(min, max) {
    let result = genRandomInt(min, max);
    while (result % 2 === 0) {
        result = genRandomInt(min, max);
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

/**
 * 在表达式中插入括号
 * @param expression 表达式
 */
function inBrackets(expression) {
    // 左括号位置[0,倒数第2个]，偶数位置
    const leftBrPos = genRandomIntEven(0, expression.length - 2);
    let rightBrPos = leftBrPos + 2 * genRandomInt(1, expression.length) + 2;
    rightBrPos = Math.min(expression.length + 1, rightBrPos);

    //排除整个表达式加括号的情况
    if (!(leftBrPos === 0 && rightBrPos === expression.length + 1)) {
        expression.splice(leftBrPos, 0, "(");
        expression.splice(rightBrPos, 0, ")");
    }
}

/**
 * 获取表达式
 * @returns {[*]}
 */
function genExpression() {
    const opeList = ["+", "-", "*", "/"];//支持的运算符
    const numCount = 3;//运算数个数
    const hasBrackets = true;//是否有括号
    const min = 1;
    const max = 10;

    const left = genRandomInt(min, max);
    let expression = [left];//先放入第一个数字，后面数字和运算符刚好成对放入
    for (let i = 1; i < numCount; i++) {
        const ope = getRandItem(opeList);
        expression.push(ope);

        const right = genRandomInt(min, max);
        expression.push(right);
    }

    if (hasBrackets) {
        inBrackets(expression);
    }

    return expression;
}

/**
 * 将*、/转换成界面显示形式
 * @param expression
 */
function transOpe(expression) {
    for (let i = 0; i < expression.length; i++) {
        let item = expression[i];
        let replace;
        switch (item) {
            case "*":
                replace = "&#215;";
                break;
            case "/":
                replace = "&#247;";
                break;
            default:
                replace = item;
        }

        expression[i] = replace;
    }
}

/**
 * 转换为填空题形式
 * @param expression
 * @returns {*}
 */
function transExamType(expression) {
    const toRepIndex = genRandomInt(0, expression.length - 1);
    const toRep = expression[toRepIndex];
    expression[toRepIndex] = "__";

    return toRep
}

/**
 * 生成一个表达式及答案
 * @returns {{result: *, exp: string}}
 */
function examOne() {
    let expression = genExpression();
    let result = calcExpression(expression);
    transOpe(expression);

    let isFill = false;
    if (isFill) {
        const toRep = transExamType(expression);
        let exp = expression.join("");
        return {"exp": exp, "result": result, "toRep": toRep};
    }

    let exp = expression.join("");
    return {"exp": exp, "result": result};
}

export function examBatch() {
    const examNum = 10;//生成的试题个数
    const resultMin = 0;//结果最小值
    const resultMax = 50;//结果最大值
    const isInt = true;//结果为整数

    const resultList = [];
    let i = 0;
    while (i < examNum) {
        let exam = examOne();
        let result = exam.result;

        if (result >= resultMin && result <= resultMax) {
            if (isInt) {
                if (result % 1 === 0) {
                    resultList.push(exam);
                    i++;
                }
            } else {
                resultList.push(exam);
                i++;
            }
        }
    }

    return resultList;
}