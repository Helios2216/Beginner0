# to read file call open() : returns "file handle"
# open (filename, mode) , mode: 'r'(read), 'w'(write)
# i.e file_handle = open('blah.txt', 'r')
import os

file = 'Python_Course_2/Lorem_Test.txt'
dir_path = os.path.realpath(file)
file_handle = open(dir_path, 'r')

# \n maintained: fix: rstrip()
print(dir_path)

try:
    for lines in file_handle:
        print(lines.rstrip())
except:
    print('File not found')
    quit()  # terminate entire program, no traceback
