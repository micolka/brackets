module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  let isDeleted = false;
  let i = 0;

  while (i < arr.length) {
    isDeleted = false;
    for(let j = 0; j < bracketsConfig.length; j++) {
      if (arr[i] === bracketsConfig[j][0] && arr[i + 1] === bracketsConfig[j][1]) {
        arr.splice(i, 2);
        isDeleted = true;
      } 
    }
    isDeleted ? i = 0 : i++	
  }
  
  return (arr.length === 0) ? true : false;
}
