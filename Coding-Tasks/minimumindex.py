arr = [10, 5, 6, 3, 4, 3, 5, 6]
min_value = arr[0]
min_index = 0

for i in range(1, len(arr)):
    if arr[i] < min_value:
        min_value = arr[i]
        min_index = i

print(min_index + 1)