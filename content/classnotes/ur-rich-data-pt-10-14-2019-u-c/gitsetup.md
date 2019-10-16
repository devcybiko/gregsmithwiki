
# Git Setup

$(toc)

## MacOS Git Setup

1. Create a [GitHub](https://github.com/) account

2. Install [git](https://coolestguidesontheplanet.com/install-git-macos/)

### In the terminal

1. Create a local git folder for all your git projects
	- `mkdir ~/git`
1. Change directory to your git folder
	- `cd ~/git`

## Windows Git Setup

1. Create a [GitHub]([https://github.com/](https://github.com/)) account

2. Install [git](https://gitforwindows.org/)

### In the terminal

1. Create a local git folder for all your git projects
	- `mkdir ~/git`
1. Change directory to your git folder
	- `cd ~/git`

# Everyone

## Create a GitHub Repository

1. in your browser got to [GitHub.com](http://github.com)
2. click `Sign Up` and enter a username, email, and password (remember them or write them down)
3. Select the 'FREE' account
3. Sign out
4. Go to your email account and find the GitHub email - click the 'Verify Email Address' button
5. Go back to [GitHub.com](https://github.com/) and login
6. Click the 'New' button to create a repository

![Screen_Shot_2019-05-09_at_11.19.24_PM](/uploads/97e7ad83f7764b78b7f77a33089b7656/Screen_Shot_2019-05-09_at_11.19.24_PM.png)

7. Fill in the 'Depository name' (recommended: WebDevClass)
8. Fill in the 'Description' (recommended: Web Dev Class)
9. Be sure to click 'Public'
10. Check the 'Initialize this Repository with a README'
11. Click the 'Create repository' button

![Screen_Shot_2019-05-09_at_11.21.04_PM](/uploads/e6d3207019a6f5c4da583bfa5da0c717/Screen_Shot_2019-05-09_at_11.21.04_PM.png)

## Clone your GitHub Repository

1. Click the 'Clone or download' button

![Screen_Shot_2019-05-09_at_11.31.45_PM](/uploads/45729b1ab64cf83d291f09ee2548d69c/Screen_Shot_2019-05-09_at_11.31.45_PM.png)

2. Click the 'copy' button to copy the URL into your cut/paste buffer

![Screen_Shot_2019-05-09_at_11.33.07_PM](/uploads/bbf6dd7cbb4ac3a7e09b399dc230c168/Screen_Shot_2019-05-09_at_11.33.07_PM.png)

## Terminal (GitBash) Commands to clone your GitHub Repository

1. Open your Terminal or GitBash command window
2. Type `cd` (and hit enter) to go to your home directory
3. Create a folder for all your repositories: `mkdir git`
4. CD into the 'git' folder: `cd git`
5. Clone your GitHub repository by copying the saved URL from the previous section
 - `git clone https://github.com/devcybiko/WebDevClass`

## Clone the GitLab Repository

1. Go to [GitLab.com](https://richmond.bootcampcontent.com/Richmond-Boot-Camp/RICHRIC201905FSF2)
2. Sign in (you should already have a login account. If not contact Yuri via Slack)
3. Click on the 'Copy' button to get the full URL for the GitLab Repository.

![Screen_Shot_2019-05-09_at_11.06.12_PM](/uploads/f373aded74c4246e3df77953b1ac2f61/Screen_Shot_2019-05-09_at_11.06.12_PM.png)


## Clone your GitLab repository

1. Open your Terminal or GitBash command window
2. Type `cd` (and hit enter) to go to your home directory
3. CD into the 'git' folder: `cd git`
4. Clone your GitHub repository by copying the saved URL from the previous section
 - `git clone https://richmond.bootcampcontent.com/Richmond-Boot-Camp/RICHRIC201905FSF2.git`

## Verify your 'git' folder is set up

1. Open your Terminal or GitBash command window
2. Type `cd` (and hit enter) to go to your home directory
3. CD into the 'git' folder: `cd git`
4. List the files: `ls -latr`

![Screen_Shot_2019-05-09_at_11.41.22_PM](/uploads/35832d7555f6ccc9343d69b46cd8c03a/Screen_Shot_2019-05-09_at_11.41.22_PM.png)
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4Nzk4ODkzMTgsMTQyODg4NTkzMl19
-->