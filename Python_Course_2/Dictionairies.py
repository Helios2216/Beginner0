purse = dict()  # dict constructor
purse['money'] = 12
purse['candy'] = 3
purse['tissues'] = 75
print(purse, purse['candy'], purse['money'])  # js object

# counting : frequency
counts = dict()
names = ['csev', 'cwen', 'zqian', 'cwen']
for name in names:
    if name not in counts:
        counts[name] = 1
    else:
        counts[name] = counts[name] + 1
print(counts)

# Alternative version of frequency
count = dict()
for name in names:
    count[name] = count.get(name, 0) + 1  # sets new key values to 1
    # get(key_name, set default value)
print(count)
