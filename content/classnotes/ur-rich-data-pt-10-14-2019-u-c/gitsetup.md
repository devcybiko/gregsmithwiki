# Git, GitHub, and GitLab Setup

$(toc)

## MacOS Git Setup $(gotoc)

1. Create a [GitHub](https://github.com) account
2. Install [git](https://coolestguidesontheplanet.com/install-git-macos/)

### In the terminal $(gotoc)

1. Create a local git folder for all your git projects
	- `mkdir ~/git`
1. Change directory to your git folder
	- `cd ~/git`

## Windows Git Setup $(gotoc)

1. Create a [GitHub](https://github.com/) account
2. Install [git](https://gitforwindows.org/)

### In the terminal (gitbash) $(gotoc)

**NOTE: From now all when you hear `terminal` think `gitbash`**

1. Create a local git folder for all your git projects
	- `mkdir ~/git`
1. Change directory to your git folder
	- `cd ~/git`

## Everyone $(gotoc)

### Create a GitHub Repository $(gotoc)

1. in your browser got to [GitHub.com](http://github.com)
2. click `Sign Up` and enter a username, email, and password (remember them or write them down)
3. Select the 'FREE' account
3. Sign out
4. Go to your email account and find the GitHub email - click the 'Verify Email Address' button
5. Go back to [GitHub.com](https://github.com/) and login
6. Click the 'New' button to create a repository
7. Fill in the 'Repository name' (recommended: DataVizClass)
8. Fill in the 'Description' (recommended: Data Viz Class)
9. Be sure to click 'Public'
10. Check the 'Initialize this Repository with a README'
11. Click the 'Create repository' button

### Clone your GitHub Repository $(gotoc)

1. Click the 'Clone or download' button
2. Click the 'copy' button to copy the URL into your cut/paste buffer

### Terminal Commands to clone your GitHub Repository $(gotoc)

1. Open your Terminal command window
2. Type `cd` (and hit enter) to go to your home directory
3. Create a folder for all your repositories: `mkdir git`
4. CD into the 'git' folder: `cd git`
5. Clone your GitHub repository by copying the saved URL from the previous section
 - `git clone https://github.com/devcybiko/WebDevClass`

### Clone the GitLab Repository $(gotoc)

1. Go to [GitLab.com](https://richmond.bootcampcontent.com/Richmond-Boot-Camp/UR-RICH-DATA-PT-10-2019-U-C)
2. Sign in (you should already have a login account. If not contact Admin via Slack)
3. Click on the 'Copy' button to get the full URL for the GitLab Repository.
4. Open your Terminal command window
2. Type `cd` (and hit enter) to go to your home directory
3. CD into the 'git' folder: `cd git`
4. Clone your GitLab repository by copying the saved URL from the previous section
 - `git clone https://richmond.bootcampcontent.com/Richmond-Boot-Camp/UR-RICH-DATA-PT-10-2019-U-C`

### Verify your 'git' folders are set up $(gotoc)

1. Open your Terminal or GitBash command window
2. Type `cd` (and hit enter) to go to your home directory
3. CD into the 'git' folder: `cd git`
4. List the files: `ls -latr`

```
$ ls -latr
drwxr-xr-x@ 7 greg  staff  224 Oct 14 15:46 UR-RICH-DATA-PT-10-2019-U-C.sav
drwxr-xr-x@  9 greg  staff  288 Aug 29 14:07 DataVizClass
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjEwNDU4MjYyNywtMTE4MTY2OTU1NCwxNj
Q2NzQzODUwLDY5NDgxMDY1NSwxNDI4ODg1OTMyXX0=
-->