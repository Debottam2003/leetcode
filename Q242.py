# Given two strings s and t, return true if t is an of s, and false otherwise.

# Example 1:
# Input: s = "anagram", t = "nagaram"

# Output: true

# Example 2:
# Input: s = "rat", t = "car"

# Output: false

# Constraints:
#     1 <= s.length, t.length <= 5 * 10^4
#     s and t consist of lowercase English letters.

class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        ls = []
        lt = []
        for i in s:
            ls.append(i)
        for j in t:
            lt.append(j)
        ls.sort()
        lt.sort()
        if ls == lt:
            return True
        else:
            return False