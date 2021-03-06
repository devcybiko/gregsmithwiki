# Zip Iterator

In class we found that a `zip` object 'runs out' of its items once you iterate over it:

## Problem
```
indexes=[1,2,3,4]
employees=["greg", "smith", "mark", "hamill"]
department=["Boss", "Sales", "Sales", "HR"]
roster=zip(indexes, employees, department)
print(roster)
for x in roster:
        print(x)

for y in roster:
        print(y)
```
Results in the following output:
```
<zip object at 0x7f8cb005e550>
first time...
(1, 'greg', 'Boss')
(2, 'smith', 'Sales')
(3, 'mark', 'Sales')
(4, 'hamill', 'HR')
second time
```
$(greg says='Iterators [such as `zip`] often empty out and must be recreated and cannot be reset')

Notice that the second (`for y`) iterator emits no results. This is because a `zip` output is an 'iterator.' Once you iterate across an iterator and it 'taps out', you cannot iterate across it again. See the following StackExchange for the rationale: [StackExchange](https://stackoverflow.com/questions/3266180/can-iterators-be-reset-in-python)
```
No. Python's iterator protocol is very simple, and only provides one single method (`.next()`  or  `__next__()`), and no method to reset an iterator in general.

The common pattern is to instead create a new iterator using the same procedure again.
```

## Solution

```
indexes=[1,2,3,4]
employees=["greg", "smith", "mark", "hamill"]
department=["Boss", "Sales", "Sales", "HR"]
roster=zip(indexes, employees, department)
print(roster)
print('first time...')
for x in roster:
        print(x)
```
<b>

```
roster=zip(indexes, employees, department)`
```
</b>

```
print('second time')
for y in roster:
        print(y)
```

Results in the following, expected, output:

```
<zip object at 0x7fd5280be5a0>
first time...
(1, 'greg', 'Boss')
(2, 'smith', 'Sales')
(3, 'mark', 'Sales')
(4, 'hamill', 'HR')
second time
(1, 'greg', 'Boss')
(2, 'smith', 'Sales')
(3, 'mark', 'Sales')
(4, 'hamill', 'HR')
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbNzI2MDAzODg0LC0xMzMzNDQwOTcyLDk2Mj
A2ODUyNl19
-->