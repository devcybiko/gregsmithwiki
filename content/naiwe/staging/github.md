# NAIWE Staging GitHub
* Location: https://github.com/devcybiko/naiwe-prod

1. Fork the repo
	* login to your account
	* click on the link above
	* in the upper-right-hand corner click "Fork"
2. Clone your fork of the repo
	* copy the forked URL from your account
	* on your computer goto your ~/git folder
	* `git clone <your git fork url here>`
3. `cd` to your folder 
  * `cd ~/git/naiwe-prod`
4. Switch to the `staging` branch (this is where you'll do all your work)
  * `git checkout staging`
5. Optionally, do a `git pull`
6. Try updating something (Like the README) and see if you can push it to your forked copy of the repo
  * (modify README.md)
  * `git add -A`
  * `git commit -am "My first update"`
  * `git push`
7. Go to your forked repo and verify the change
8. Then, as a test, create a PR against the `staging` branch of the main repo.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTMxMDMyNjY5MF19
-->