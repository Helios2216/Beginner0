# List : Arrays
my_nums = [0, 8, 2, 9, 7, None]

for number in my_nums:
    if number is None:
        print(':)')
    else:
        print(number)

# List concatenation
# [1,2,3] + [4,5,6] : [1,2,3,4,5,6]

# list slicing same as string
# arr =[1,2,3,4,5], arr[0:3] : 1,2,3 not including end

# common methods diff from Js
# extend: add to end of list
# insert: add within || middle
# remove: remove within || middle

# list constructor
new_list = list()
new_list.append('first')
new_list.append('second')
new_list.append('last')
print('\n', new_list)

# String split to create list item

line = 'Split this line'

line_split = line.split()  # ['Split', 'this', 'line']
# multiple spaces treated as on delimiter: similar to js
print(line_split)
