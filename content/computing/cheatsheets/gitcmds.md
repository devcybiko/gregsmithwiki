# Git Command Cheat Sheet

At its most basic, these are the six git commands to get started:

* **git clone** – copies an entire repo, while establishing a connection between a local and remote repo.

    `git clone https://richmond.bootcampcontent.com/Richmond-Boot-Camp/RICHRIC201905FSF2.git`

* **git status** - shows the current status of all files that have been modified, added, or deleted. Very helpful to see what needs to be `git add`ed or `git commit`ted.

    `git status`

* **git add** – tells git to track one or more files in the workspace

    `git add a.html` - add a specific file to the workspace

    `git add -A` - add all currently unchecked files to the workspace

* **git commit** – move files from the workspace to the local repo.

    `git commit -am "Added a new file"` (commit all changes)

    `git commit -m "Just this file" README.md` (commit just this file)

* **git push** – sends changes from the local repo to a remote repo (github).

    `git push origin master`

* **git pull** – downloads freshest version of the repo (from a remote repository like github) into the local repo.

    `git pull origin`

## The GITALL Script

I have combined a few git commands into a script that I execute to check everything into my repo with one command.

Basically, I just run the following commands
```
git add -A             # add everything to the workspace
git commit -am "$msg"  # commit everything
git push $repo         # push to the repo
```
## gitall - shell script
```bash
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
git
git status
git add -A

git status
git commit -am "$msg"

git status
git push $repo

git status
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTYyNzg0MjUsMTAyMTgxMDAxN119
-->