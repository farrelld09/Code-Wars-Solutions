#If number is negative or zero, returns number
#Else it make the numeber negative and returns it

def makeNegative(num)
  if num <= 0
    return num
  else
    num = num - num * 2
    return num
  end
end
