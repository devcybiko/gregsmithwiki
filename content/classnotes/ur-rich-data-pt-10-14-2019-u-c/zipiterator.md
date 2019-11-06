# Zip Iterator

In class we found that a `zip` object 'runs out' of its items once you iterate over it:


[https://stackoverflow.com/questions/3266180/can-iterators-be-reset-in-python](https://stackoverflow.com/questions/3266180/can-iterators-be-reset-in-python)
No. Python's iterator protocol is very simple, and only provides one single method (`.next()`  or  `__next__()`), and no method to reset an iterator in general.

The common pattern is to instead create a new iterator using the same procedure again.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTIxNDY5NzcwMF19
-->