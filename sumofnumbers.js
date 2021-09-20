const test = [1,2,3,4];

function sumFor(nums) {
  let total = 0;

  for(const num of nums) {
    total += num;
  }

  return total;

}
console.log(sumFor(test));

function sumWhile(nums) {

  let counter = 0;
  let sum = 0;

  while(counter < nums.length){
    sum += nums[counter];
    counter++;
  }

  return sum;
}
console.log(sumWhile(test));

function sumRecusion(nums){
  if(nums.length === 0) {
    return 0;

  }
  else {
    return nums[0] + sumRecusion(nums.slice(1, nums.length));

  }


}
console.log(sumRecusion(test));

function sumTheSimpleWay(num){
  let sum = _.reduce(num, function (num, total) {return num + total}, 0);
  return sum;
}
console.log(sumTheSimpleWay(test));