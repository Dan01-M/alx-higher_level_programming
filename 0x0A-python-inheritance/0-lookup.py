#!/usr/bin/python3

""" Write a function that returns the list of available attributes."""


def lookup(obj):
    """Return a list of an object."""
    return (dir(obj))
