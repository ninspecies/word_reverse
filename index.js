function reverseWords(str) {
  let words = str.split(" ")
  let reversed = words.map((word) => word.split("").reverse().join(""))
  return reversed.join(" ")
}