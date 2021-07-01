# Just Pulling/Pushing (Merging) Into master

This activity allows students to practice merging their local changes into `master`. **This activity must be completed in succession with previous one** — it cannot stand alone.

## Instructions

* After pulling changes from GitHub, each team member should checkout `master`.

-- git checkout master

* Each team member should merge the branch they created and named into `master`.

-- git pull 
-- git merge \<name>/branching_exercise

  * After merging, team members should push their changes to GitHub.

-- git push

VI VISUAL EDITOR

'i' - then some text explaining your reason for merging
'esc' - to get back to cmd mode
':wq' - to "Write" & "Quit"

* You will probably run into trouble here. As a team, try to figure out why.

* If Git refuses to `push`, run `git pull`, and try again.

  * Take a moment to discuss why this is necessary.

* Once everyone has pushed their changes to GitHub, each team member should pull the repository.

* After pulling, discuss newly added files with your teammates.

## Hints

* A common, extra-safe workflow is to _always_ `git pull` before you `git push`, even if you expect that nothing's changed.

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEwNjI2ODEwODddfQ==
-->