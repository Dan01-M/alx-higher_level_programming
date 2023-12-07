#!/usr/bin/python3
# function that computes the square value
def square_matrix_map(matrix=[]):
    return list(map(lambda row: list(map(lambda col: col**2, row)), matrix))
