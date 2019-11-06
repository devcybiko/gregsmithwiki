# Git / Github

## GitClean...
From [StackExchange](https://stackoverflow.com/questions/5139290/how-to-check-if-theres-nothing-to-be-committed-in-the-current-branch)

An alternative to testing whether the output of  `git status --porcelain`  is empty is to test each condition you care about separately. One might not always care, for example, if there are untracked files in the output of  `git status`.

For example, to see if there are any local unstaged changes, you can look at the return code of:

```
git diff --exit-code

```

To check if there are any changes that are staged but not committed, you can use the return code of:

```
git diff --cached --exit-code

```

Finally, if you want to know about whether there are any untracked files in your working tree that aren't ignored, you can test whether the output of the following command is empty:

```
git ls-files --other --exclude-standard --directory

```

_Update:_  You ask below whether you can change that command to exclude the directories in the output. You can exclude empty directories by adding  `--no-empty-directory`, but to exclude all directories in that output I think you'll have to filter the output, such as with:

```
git ls-files --other --exclude-standard --directory | egrep -v '/$'

```

The  `-v`  to  `egrep`  means to only output lines that don't match the pattern, and the pattern matches any line that ends with a  `/`.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTU0ODY2OTcwMV19
-->