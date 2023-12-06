#!/usr/bin/python3
# function that prints a string in uppercas
def uppercase(str):
    for i in str:
        if ord("a") <= ord(i) <= ord("z"):
            i = chr(ord(i) - 32)
        print("{:s}".format(i), end="")
    print()
