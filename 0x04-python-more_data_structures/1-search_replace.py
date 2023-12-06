#!/usr/bin/python3
# function that replaces all occurrences of an element
def search_replace(my_list, search, replace):
    return [replace if search == n else n for n in my_list]
