// https://www.hackerrank.com/challenges/compare-the-triplets/problem

const compareTriplets = (a, b) => {
  const res = [0, 0]
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      res[0]++
    } else if (a[i] < b[i]) {
      res[1]++
    }
  }

  return res
}