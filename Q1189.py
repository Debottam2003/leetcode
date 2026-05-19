# Given a string text, you want to use the characters of text to form as many instances of
# the word "balloon" as possible.

# You can use each character in text at most once. Return the maximum number of instances that can be formed.

# Example 1:
# Input: text = "nlaebolko"
# Output: 1

# Example 2:
# Input: text = "loonbalxballpoon"
# Output: 2

# Example 3:
# Input: text = "leetcode"
# Output: 0

# Constraints:
#     1 <= text.length <= 10^4
#     text consists of lower case English letters only.


class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        d = {
            "b": text.count("b"),
            "a": text.count("a"),
            "l": text.count("l"),
            "o": text.count("o"),
            "n": text.count("n"),
        }
        if d["b"] == 0 or d["a"] == 0 or d["l"] == 0 or d["o"] == 0 or d["n"] == 0:
            return 0
        return min(d["b"], d["a"], d["n"], d["l"] // 2, d["o"] // 2)
        # d = {"b": 1, "a": 1, "l": 2, "o": 2, "n": 1}
        # print(list(d.keys()))
        # b = {}
        # for i in text:
        #     if i in d:
        #         b[i] = text.count(i)
        #         if b[i] == 0:
        #             return 0
        # print(b)
        # return min(b["b"], b["a"], b["l"] // 2, b["o"] // 2, b["n"])


sol = Solution()
print(sol.maxNumberOfBalloons("nlaebolko"))
print(sol.maxNumberOfBalloons("loonbalxballpoon"))
