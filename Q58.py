# Given a string s consisting of words and spaces, return the length of the last word in the string.

# A word is a maximal consisting of non-space characters only.

# Example 1:
# Input: s = "Hello World"
# Output: 5
# Explanation: The last word is "World" with length 5.

# Example 2:
# Input: s = "   fly me   to   the moon  "
# Output: 4
# Explanation: The last word is "moon" with length 4.

# Example 3:
# Input: s = "luffy is still joyboy"
# Output: 6
# Explanation: The last word is "joyboy" with length 6.

# Constraints:
#     1 <= s.length <= 10^4
#     s consists of only English letters and spaces ' '.
#     There will be at least one word in s.


class Solution:
    def lengthOfLastWord(self, s: str) -> int:

        # Solution 1
        # s = s.strip(" ").split(" ")
        # s = s.pop()
        # return len(s)

        # Solution 2
        empty = ""
        c = 0
        for i in s:
            if i != " ":
                c = 1

            if c == 1:
                empty += i
        s = ""
        c = 0
        for i in range(len(empty) - 1, -1, -1):
            if empty[i] == " ":
                c += 1
            elif empty[i] != " ":
                break
        for i in range(len(empty) - c):
            s += empty[i]
        c = 0
        for i in range(len(s) - 1, -1, -1):
            if s[i] == " ":
                break
            else:
                c += 1
        return c


print(Solution().lengthOfLastWord("Hello World"))
print(Solution().lengthOfLastWord("   fly me   to   the moon  "))
print(Solution().lengthOfLastWord("luffy is still joyboy"))

# for i in range(100, -101, -1):
#     print(i)
