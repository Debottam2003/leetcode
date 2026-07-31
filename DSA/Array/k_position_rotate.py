def rotate(arr):
    n = len(arr)
    for i in range(n // 2):
        arr[i], arr[n - i - 1] = arr[n - i - 1], arr[i]
    print(arr)


rotate([7, 8, 9, 2, 3, 5, 10, 21, 13])
rotate([1, 2, 3, 4, 5])
rotate([1, 2, 3, 4])


# Method 1
def rotate_k(arr, k):
    # Total Reverse the array
    n = len(arr)
    for i in range(n // 2):
        arr[i], arr[n - i - 1] = arr[n - i - 1], arr[i]
    # Reverse the first Part of the array
    m = n - (k + 1)
    for i in range(m // 2):
        arr[i], arr[m - i - 1] = arr[m - i - 1], arr[i]
    # Reverse the second part of the array
    n = len(arr)
    for i in range((k + 1) // 2):
        arr[m + i], arr[n - i - 1] = arr[n - i - 1], arr[m + i]
    print(arr)


rotate_k([7, 8, 9, 2, 3, 5, 10, 21, 13], 4)
rotate_k([1, 2, 3, 4, 5], 2)
rotate_k([1, 2, 3, 4], 1)


# Method 2
def rotate_k_extra_space(arr, k):
    temp = arr[k + 1 :] + arr[: k + 1]
    print(temp)


rotate_k_extra_space([7, 8, 9, 2, 3, 5, 10, 21, 13], 4)
rotate_k_extra_space([1, 2, 3, 4, 5], 2)
rotate_k_extra_space([1, 2, 3, 4], 1)

# Time Complexity: O(n)
# Space Complexity: O(1) for the first method and O(n) for the second method
