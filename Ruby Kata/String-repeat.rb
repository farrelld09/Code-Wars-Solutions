# Write a function called repeatStr which repeats the given string string exactly n times.
#
# repeatStr(6, "I") // "IIIIII"
# repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

def repeat_str (n, s)
  string = ''
  n.times do
   string << s
  end
  return string
end
