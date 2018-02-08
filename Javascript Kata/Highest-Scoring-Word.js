// Given a string of words, you need to find the highest scoring word.
//
// Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.
//
// You need to return the highest scoring word as a string.
//
// If two words score the same, return the word that appears earliest in the original string.
//
// All letters will be lowercase and all inputs will be valid.


function high(x){
  if (!isNaN(x)){
    return ''
  }
  var alpha = "abcdefghijklmnopqrstuvwxyz".split('')
  var highword = []
  var scores = [0]
  x = x.split(' ')
  x.forEach(function(word) {
      var letters = word.split('')
      var score = 0
      letters.forEach(function(letter){
        score += alpha.indexOf(letter)
        }
      )
      if (score > scores[0]){
        scores[0] = score
        highword[0] = word
      }
    }
  )
  return highword[0]
}
