// Example Inputs/Returns
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
//
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers){
  let odd = []
  let even = []
  for (i = 0; i < integers.length; i++) {
    if (integers[i] % 2 != 0) {
      odd.push(integers[i])
    } else {
      even.push(integers[i])
    }
  }
  if (odd.length > 1) {
    return even[0]
} else {
  return odd[0]
}
}
findOutlier(integers)
