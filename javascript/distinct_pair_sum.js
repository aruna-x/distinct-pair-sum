function distinctPairSum(arr, k) {
  let res = [];
  for (let i=0;i<arr.length-2;i++){
    if (arr[i] + arr[i+1] === k) {
      res.push([arr[i], arr[i+1]]);
    }
  }

  return res;

  // Misunderstood problem as *ANY* pairing (solution below).

  // const dict = {};

  // arr.forEach(el=>{
  //   if (dict[el] && dict[el]<2){
  //     dict[el]++;
  //   }
  //   else {
  //     dict[el] = 1;
  //   }
  // })

  // const res = []
  // for (const el in dict){
  //   if (dict[el] === 1){
  //     delete dict[el];
  //   }
  //   else {
  //     dict[el]--;
  //   }

  //   if (dict[k-el]){
  //     res.push([el, k-el]);
  //     delete dict[k-el];
  //   }
  // }
  // return res;
}

if (require.main === module) {
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

/**
 * 1. paraphrase
 * 
 * given an array and k, return array of arrays of distinct CONSECUTIVE pairs that sum to k
 * 
 * 2. tests
 * 
 * 3. pseudocode
 * 
 * pop() an element, subtract from k.
 * iterate over array. splice if matching the popped value, else check if matching.
 * 
 * O(n^2)
 * 
 * new plan: place all elements in a set. Then O(2n).
 * 
 * 4. code
 * 5. refactor
 * 6. optimize if time
 */
