#!/usr/bin/python3
#  function that finds the biggest integer
def max_integer(my_list=[]):
    new_list = []
    if my_list:
        my_list.sort(reverse=True)
        return (my_list[0])
    return (None)
