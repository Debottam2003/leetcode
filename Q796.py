# Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

# A shift on s consists of moving the leftmost character of s to the rightmost position.

# For example, if s = "abcde", then it will be "bcdea" after one shift.

# Example 1:
# Input: s = "abcde", goal = "cdeab"
# Output: true

# Example 2:
# Input: s = "abcde", goal = "abced"
# Output: false

# Constraints:

#     1 <= s.length, goal.length <= 100
#     s and goal consist of lowercase English letters.

# "abcde" + "" == goal
# "bcde" + "a" == goal
# "cde" + "ab" == goal
# "de" + "abc" == goal
# "e" + "abcd" == goal


class Solution:
    def rotateString(self, s: str, goal: str) -> bool:
        temp = ""
        for i in range(len(s)):
            if s[i:] + temp == goal:
                return True
            temp = temp + s[i]
        return False


# input s = "abcde" output = "cdeab"
s = "abcde"
goal = "cdeab"
word = list(s)
# print(word)
# print(goal)


# print(word)
def check(word, goal):
    for _ in range(len(word)):
        if "".join(word) == goal:
            return True
        word.append(word[0])
        word.pop(0)
        print(word)
    return False


print(check(word, goal))
