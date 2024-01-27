// 数字转汉字
export const num2Chinese = (num) => {
  const ChineseNum = {
    0: '零',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
    7: '七',
    8: '八',
    9: '九',
  };
  const units = ['个', '万', '亿', '万亿', '兆'];
  const suffix = ['', '十', '百', '千'];

  const numString = `${num}`;
  if (!(/^\d+$/.test(numString))) {
    throw new Error('Not a number');
  }

  if (num.length > 20) {
    throw new Error('Number is too large');
  }

  const digitList = numString.split('');
  digitList.reverse();
  const splitNumList = [];
  let l = digitList.splice(0, 4);
  while (l.length) {
    splitNumList.push(l);
    l = digitList.splice(0, 4);
  }

  let Chinese = '';
  splitNumList.forEach((arr, i) => {
    let rst = '';
    arr.forEach((digit, j) => {
      rst = ChineseNum[digit] + suffix[j] + rst;
    });
    rst += units[i % 6];
    Chinese = rst + Chinese;
  });

  suffix.forEach((item) => {
    Chinese = Chinese.replace(new RegExp(`零${item}`, 'g'), '零');
  });

  for (let i = units.length - 1; i >= 0; i -= 1) {
    const val = units[i];
    Chinese = Chinese.replace(new RegExp(`(零+)${val}`, 'g'),
        (match, $1) => ($1.length === 4 ? '' : val));
  }
  Chinese = Chinese.replace(/零+/g, '零');
  Chinese = Chinese.replace(/个/g, '');
  Chinese = Chinese.replace(/^一十/, '十');

  return Chinese;
};