# Given an integer n, return the number of prime numbers that are strictly less than n.

# Example 1:
# Input: n = 10
# Output: 4
# Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

# Example 2:
# Input: n = 0
# Output: 0

# Example 3:
# Input: n = 1
# Output: 0

# Constraints:
#     0 <= n <= 5 * 106

class Solution(object):
    def countPrimes(self, n):
        """
        :type n: int
        :rtype: int
        """
        i = 3
        n = n - 1 
        count = 0
        if n >= 2:
            count = 1 
        while i <= n :
            flag = 0
            for j in range(2,i):
                if i % j == 0:
                    flag = 1
                    break
            if flag != 1:
                count += 1
            i += 1
        return count
                
