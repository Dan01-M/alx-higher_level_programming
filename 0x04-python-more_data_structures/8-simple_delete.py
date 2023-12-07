#!/usr/bin/python3
# function that deletes a key in a dictionary
def simple_delete(my_dict, key=""):
    my_dict.pop(key, None)
    return my_dict
