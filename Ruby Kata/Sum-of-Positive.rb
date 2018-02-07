# You get an array of numbers, return the sum of all of the positives ones.
# Example [1,-4,7,12] => 1 + 7 + 12 = 20

def positive_sum(arr)
  sum = 0
  arr.each do |num|
    if num > 0
      sum = sum + num
    end
  end
  return sum
end
