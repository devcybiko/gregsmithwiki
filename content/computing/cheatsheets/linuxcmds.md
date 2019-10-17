# Linux Command Cheat Sheet 

* REMEMBER: Commands have a simple, space-separated format...

    `command` `-options` `file1` `file2` `file3...`

* Very often you can find out what the 'usage' is with the `--help` option and the current version with the `--version` option.

    `node --help`

    `node --version`

* NOTE: If you need to use special characters (like spaces, slashes, etc...) surround the filename in single quotes:

    `git add 'My First Web Page.html'`

|Command|Description|
|---|---|
|cd |change directory (folder) (with no parameters, changes to `home`)|
|cd ~ |change directory to `home` folder
|cd ..|change directory to the previous folder (up one folder in folder tree)
|ls|lists files in folder|
|ls -latr| lists all files (including hidden '.' files) in long, all, time-ordered, reverse|
|pwd |print working directory (current folder)
|mkdir {FOLDERNAME}|creates new directory (folder)
|touch {FILENAME} |updates last time edited on a file (creates a file if it doesn't already exist)
|rm {FILENAME}|removes a file `(danger: this PERMANENTLY removes the file - does not throw it in Trash)`
|rm -r {FOLDERNAME} |deletes a folder and everything within, note the –r (recursive)

|MACOS|GIT BASH|
|---|---|
|open . (opens the current folder)|explorer . (opens the current folder.)|
|open {FILENAME} (opens a specific file)|explorer {FILENAME} (opens the specific file in the appropriate App.)|

Bash Functions
```sh
my_function () {
  local var1='C'
  var2='D'
  echo "Inside function: var1: $var1, var2: $var2"
}
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTY1NTEwMjQ0N119
-->