module.exports = function toReadable (number) {
  if (number === 0) return 'zero';
  const arr = number.toString().split('');
  let str = '';
  const units = {0: '', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'};
  const tens = {0: '', 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'};
  const special = {10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'};
  if (arr.length === 1) {
    return units[arr[0]];
  } else if (arr.length === 2 && arr[0] !== '1') {
    str = `${tens[arr[0]]} ${units[arr[1]]}`;
  } else if (arr.length === 2 && arr[0] === '1') {
    str = special[arr.join('')];
  } else if (arr.length === 3 && arr[1] !== '1') {
    const el = arr[1] !== '0' ? tens[arr[1]] + ' ' : '';
    str = `${units[arr[0]]} hundred ${el}${units[arr[2]]}`;
  } else {
    str = `${units[arr[0]]} hundred ${special[arr.slice(1).join('')]}`;
  }
  return str.trim();
}
