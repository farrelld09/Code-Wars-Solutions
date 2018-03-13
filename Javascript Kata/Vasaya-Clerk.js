// The new "Avengers" movie has just been released! There are a lot of people at
// the cinema box office standing in a huge line. Each of them has a single
//  100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.
//
// Vasya is currently working as a clerk. He wants to sell a ticket to every
// single person in this line.
//
// Can Vasya sell a ticket to each person and give the change if he initially has
// no money and sells the tickets strictly in the order people follow in the line?
//
// Return YES, if Vasya can sell a ticket to each person and give the change with
// the bills he has at hand at that moment. Otherwise return NO.
//

function tickets(peopleInLine) {
  var bills = [0, 0, 0]
  for (var i = 0; i < peopleInLine.length; i++) {
    switch (peopleInLine[i]) {
      case 25:
        bills[0]++
        break

      case 50:
        bills[0]--
        bills[1]++
        break

      case 100:
        bills[1] ? bills[1]-- : bills[0] -= 2
        bills[0]--
        break
    }

    if (bills[0] < 0) {
      return 'NO'
    }
  }

  return 'YES'
}
