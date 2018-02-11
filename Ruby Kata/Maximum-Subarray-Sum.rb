# The maximum sum subarray problem consists in finding the maximum sum
# of a contiguous subsequence in an array or list of integers:

# maxSequence [-2, 1, -3, 4, -1, 2, 1, -5, 4]
# -- should be 6: [4, -1, 2, 1]
# Easy case is when the list is made up of only positive numbers and
# the maximum sum is the sum of the whole array. If the list is
# made up of only negative numbers, return 0 instead.

# Empty list is considered to have zero greatest sum. Note that the empty list
# or array is also a valid sublist/subarray.

class SubArray
  attr_reader :start, :end, :sum
  attr_writer :sum

  def initialize
    @start = 0
    @end = 0
    @sum = 0
  end

  def set_bounds(list_start, list_end)
    @start, @end = list_start, list_end
  end
end

def max_sequence(list)
  max = SubArray.new
  current = SubArray.new

  for i in 0...list.size
    current.sum = current.sum + list[i]

    if (current.sum > max.sum)
      max.sum = current.sum
      current.set_bounds(current.start, i)
      max.set_bounds(current.start, i)
    elsif (current.sum < 0)
      current.sum = 0
      current.set_bounds(i + 1, i + 1)
    end
  end

  array = list.slice(max.start, max.end - max.start + 1)
  array.inject(0){|sum,x| sum + x }
end
