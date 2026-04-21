# Given an array nums of size n, return the majority element.

# The majority element is the element that appears more than ⌊n / 2⌋ times. 
# You may assume that the majority element always exists in the array.

# Example 1:
# Input: nums = [3,2,3]
# Output: 3

# Example 2:
# Input: nums = [2,2,1,1,1,2,2]
# Output: 2

# Constraints:
#     n == nums.length
#     1 <= n <= 5 * 10^4
#     -10^9 <= nums[i] <= 10^9
#     The input is generated such that a majority element will exist in the array.

class Solution(object):
    def majorityElement(self, nums):
        n = len(nums)
        if 1 <= n <= 5 * 104:
            list1 = []
            for i in nums:
                if -(10 ** 9) <= i <= 10 ** 9:
                    if nums.count(i) > (len(nums) // 2):
                        return i

        