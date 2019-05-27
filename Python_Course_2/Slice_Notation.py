# Slicing Strings
s = 'Monty Python'
# returns Mont : start from 0 upto but not including 4
print(s[0:4])
# allows: outbound range [0:20] from 0 to end
print(s[0:20])
# omit beginning : assumes start = beginning
print(s[:2])
# omit ending = last index || < s.length
print(s[8:])
# double omission ? returns start to end
print(s[:])
