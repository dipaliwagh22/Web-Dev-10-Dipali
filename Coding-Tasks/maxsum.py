arr = [3, 6, 2, 1, 7, 2, 5, 6, 1]
max_sum = arr[0] + arr[1]

for i in range(1, len(arr) - 1):
    current_sum = arr[i] + arr[i + 1]
    if current_sum > max_sum:
        max_sum = current_sum

print(max_sum)