// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// function twoSum(arr, target) {
//     arr.sort((a,b) => a - b);
//     let left =0;
//     let right = arr.length-1;
//     while (left<right){
//         let sum = arr[left] + arr[right];
//         if(sum === target){
//             return [];
//         }
//         else if(sum <target){
//             left++;
//         }
//         else{
//             right--;
//         }
//     }
//     return false;
// };

// const arr =[2,7,11,15];

// console.log(twoSum(arr,9));


function twoSum(nums, target) {
  const map = new Map();  // To store value -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i]; // Found the pair
    }

    map.set(nums[i], i); 
  }

}

