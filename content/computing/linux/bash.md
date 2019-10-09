# bash Cheat Sheet

## Bash Functions
```sh
#!/bin/bash

var1='A'
var2='B'

my_function () {
  local foo = $1
  echo "foo=$foo"
  local var1='C'
  var2='D'
  echo "Inside function: var1: $var1, var2: $var2"
}

echo "Before executing function: var1: $var1, var2: $var2"

my_function

echo "After executing function: var1: $var1, var2: $var2"
```

Output
```
Before executing function: var1: A, var2: B
Inside function: var1: C, var2: D
After executing function: var1: A, var2: D
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbNTU5MjcwNTE5XX0=
-->