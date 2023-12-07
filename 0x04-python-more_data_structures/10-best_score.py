#!/usr/bin/python3
# function that returns a key with the biggest
def best_score(my_dict):
    return max(my_dict, key=my_dict.get) if my_dict else None
