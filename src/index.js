module.exports = function getZerosCount(number, base) {
  let arr1 = [];
	let arr2 = []; 
	let arr3 = [];
  let count = 0;
	let result = 0;
  for (let i = 2; i <= base; i++){
 		if (base%i === 0) {
   		arr1.push(i);
   	}
    while (base%i === 0){
      base = base/i;
      count++;
    }
      if (count > 0) {
          arr2.push(count);
      }
      count = 0;
  }
  let a = 2;
  for (let i = 0; i < arr1.length; i++){
    let b = arr1[i];
    while (number/b > 1){
      result += Math.floor(number/b);
      b = Math.pow(arr1[i], a);
      a++;
    }
        arr3.push(result);
        result = 0;
        a = 2;
    }
    for (let i = 0; i < arr3.length; i++){
        arr3[i] = Math.floor(arr3[i]/arr2[i]);
    }
    arr3.sort(function(c, e){return c-e;});
    return arr3[0];
}