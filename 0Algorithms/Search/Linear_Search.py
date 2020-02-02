arr = [5, 8, 1, 100, 12, 3, 12]


def linear_search(array, value):
    for el in array:
        if el == value:
            return el
    return -1


print(linear_search(arr, 100))
