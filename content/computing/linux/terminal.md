# Linux Commands

# The Terminal
## Speedy Typing in the Terminal
1. Use the `up arrow` key to scroll backwards to previous commands
2. Use the `down arrow` key to scroll forward through commands
3. Use the `left-arrow` and `right arrow` keys to position your cursor within the command and edit it
4. Use the `Backspace/Delete` keys to delete letters
5. Type in the middle of the command to insert new letters
6. NOTE: You can hit the `ENTER` key at any time (not just at the end of the line)
	1. So, you cursor-left, edit, and hit `ENTER` in the middle of the command and it will submit it
	2. You don't have to cursor all the way to the right before you hit ENTER
7. Use the `TAB` key to `autocomplete` file names
	6. Enter the first few letters of the file name and hit `TAB` and the Terminal will type the rest
	7. If you hear a `bell` and you don't see the completed filename, it's because there is more than one completions
	8. Hit the `TAB` key twice and you'll see a list of possible completions
	9. Continue typing characters and hit `TAB` again
8. In case that wasn't clear: Hitting `TAB`+`TAB` (hitting `TAB` twice) shows a list of files
## Command Key (Apple or Windows)
## Control Key (^)
## Stopping a process ^C
## Changing your prompt
`https://www.ostechnix.com/hide-modify-usernamelocalhost-part-terminal/`
export PS1="\u \w $"`

# Command Format
## Spaces as separators
## Return Codes

# Filenames
## Upper/Lowercase)
## Watch out for spaces/special chars
## Filename Extensions (conventions)
- Usually 3 or fewer characters
- Modern extensions can get LONG (.html, .json, 
* .txt - text
* .py - python
* .html
* .css
* .js
* .c
* .o
* .a
## Hidden Files (dot files)
## Filename Globbing


# Directories (Folders)
## Hierarchical / Tree Structure
## Slash (forward slash) Separator
## Special notes
* MacOS - colon (`:`) is problematic
* Windows - Backslash is problematic 
  - it's the DOS standard 
  - But in gitbash it's forward slash `/`
  - But in Linux, Backslash is the 'escape' character
  - Colon is problematic - it is the device separator (`C:`)

## Special Directories
* Home `~` (/User/username, /home/username, C:\Users\username)
* Dot / Here `.`
* Parent / Previous / Up `..`
* Root (`/`) - the top-most directory


# Simple Commands

* REMEMBER: Commands have a simple, space-separated format...

    `command` `--optons -opts` `file1` `file2` `file3...`

* Very often you can find out what the 'usage' is with the `--help` option and the current version with the `--version` option.

    `node --help`

    `node --version`

* NOTE: If you need to use special characters (like spaces, slashes, etc...) surround the filename in single quotes:

    `git add 'My First Web Page.html'`

|Command|Description|
|---|---|
|`cd` |change directory (folder) (with no parameters, changes to `home`)|
|`cd ~` |change directory to `home` folder
|`cd ..` |change directory to the previous folder (up one folder in folder tree)
|`ls`|lists files in folder|
|`ls -latr`| lists all files (including hidden '.' files) in long, all, time-ordered, reverse|
|`pwd` |print working directory (current folder)
|`mkdir {FOLDERNAME}`|creates new directory (folder)
|`touch {FILENAME}` |updates last time edited on a file (creates a file if it doesn't already exist)
|`rm {FILENAME}`|removes a file `(danger: this PERMANENTLY removes the file - does not throw it in Trash)`
|`rm -rf {FOLDERNAME}` |deletes a folder and everything within, note the –r (recursive) and -f (force)

|MACOS|GIT BASH|
|---|---|
|`open .` (opens the current folder)|`explorer .` (opens the current folder.)|
|`open {FILENAME}` (opens a specific file)|`explorer {FILENAME}` (opens the specific file in the appropriate App.)|

Bash Functions
```sh
my_function () {
  local var1='C'
  var2='D'
  echo "Inside function: var1: $var1, var2: $var2"
}
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTYxNjMxNjAyMl19
-->
# History and Repeating Commands
## history
## Bang-Number (!501)
## ^replace^
## Last parameter `!$`

# Redirection
## Three Standard I/Os
### Stdin - the keyboard (usually)
### Stdout - the consle (usually)
### Stderr - the console (usually)
## Redirect to a file
## Piping

# Jobs
## Pause a Job ^Z
## Put it in the Background (bg)
## Bring it to the Foreground (fg)
## List Jobs - jobs
## Kill a Job - kill %1

# Processes
## List Processes - ps -elf
## Process ID
## Kill a Process
## TOPCPU - What's eating my computer?

# Shell Scripting
## Sourcing files
- convention .sh
## SheBang!
## chmod a+x
- convention (no ext)
## Variables
## Environment Variables
## Double-Quoting
## Escaping Special Characters
## Single-Quoting
## Example: 'gitall'

```
<pre>
msg="$1"
repo="$2"

if [ $# -lt 2 ]; then
	echo 
	echo "Usage: gitall 'message' 'repo'"
	echo
	git remote -v
	exit 0
fi

git status
git pull

git status
git add -A

git status
git commit -am "$msg"

git status
git push $repo

git status
</pre>

```
## Shell Functions

# Conditionals

# Looping
## FOR Loop
```
for VARIABLE in 1 2 3 4 5 .. N
do
	command1
	command2
	commandN
done

for OUTPUT in $(Linux-Or-Unix-Command-Here)
do
	command1 on $OUTPUT
	command2 on $OUTPUT
	commandN
done

for i in {1..5}
do
   echo "Welcome $i times"
done

## WHILE Loop
while [ condition ]
do
	command1
	command2
	commandN
done

#!/bin/bash
c=1
while [ $c -le 5 ]
do
	echo "Welcone $c times"
	(( c++ ))
done

# Reading a File
#!/bin/bash
FILE=$1

read $FILE using the file descriptors
exec 3<&0
exec 0<$FILE
while read line
do
	# use $line variable to process line
	echo $line
done
exec 0<&3
```
# Required Knowledge (find/grep/awk/sed)
## find
## grep
## awk
## sed
## Combining find/sed/grep/awk
