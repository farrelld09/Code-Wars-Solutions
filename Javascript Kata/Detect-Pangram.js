// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
// because it uses the letters A-Z at least once (case is irrelevant).
//
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
// Ignore numbers and punctuation.

function isPangram(string){
  var pangram = true
  string = string.toLowerCase()
  var alpha = "abcdefghijklmnopqrstuvwxyz".split('')
  for (var i = 0; i < alpha.length; i++) {
    if (!string.includes(alpha[i]))
      pangram = false
  }
  return pangram
}
