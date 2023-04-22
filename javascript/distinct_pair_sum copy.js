function distinctPairSum(arr, k) {
  // solution for any pair

  // const res = [];
  // const unique = new Set();
  // for (let i=0; i<arr.length; i++) {
  //   if (!unique.has(arr[i])) {
  //     const search = arr.slice(i+1);
  //     const match = search.indexOf(k-arr[i]);
      
  //     if (match !== -1) {
  //       res.push([arr[i], search[match]]);
  //       unique.add(arr[i]);
  //       unique.add(search[match]);
  //     }
  //   }
  // }
  // return res;


  
  // solution for consecutive pairs

  const unique = new Set();
  return arr.reduce((acc, el, ind) => {
    if (!unique.has(el) && k-el === arr[ind+1]) {
      unique.add(el);
      unique.add(arr[ind+1]);
      return [...acc, [el, arr[ind+1]]];
    }
    return acc;
  }, [])

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
 * given k, return an array of arrays of all distinct pairs that sum to k
 * 
 * k-arr[0] ... search array => store pair
 * place arr[0] in a set
 * if !set(arr[1])
 *    k-arr[1] ... search array => store pair
 *    place arr[1] in set
 * until done
 */
