# Installing Python on MacOS

from [https://opensource.com/article/19/5/python-3-default-mac](https://opensource.com/article/19/5/python-3-default-mac)

`$ brew  install  pyenv  
🍺  /usr/local/Cellar/pyenv/1.2.10:  634  files, 2.4MB`

Now let's install the latest Python version (3.7.3 as of this writing):

`$ pyenv  install  3.7.3  
python-build: use openssl  1.0  from homebrew  
python-build: use readline from homebrew  
Downloading Python-3.7.3.tar.xz...  
->  https://www.python.org/ftp/python/3.7.3/Python-3.7.3.tar.xz  
Installing Python-3.7.3...  `

## further output not included

Now that Python 3 is installed through pyenv, we want to set it as our global default version for pyenv environments:

`$ pyenv global 3.7.3  `

## and verify it worked  
`$ pyenv version  
3.7.3  (set  by  /Users/mbbroberg/.pyenv/version)`

The power of pyenv comes from its control over our shell's path. In order for it to work correctly, we need to add the following to our configuration file (**.zshrc**  for me, possibly  **.bash_profile**  for you):

`$ echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$ (pyenv init -)"\nfi' >> ~/.zshrc`

We also need to remove the aliases we used in the sections above since they would prevent using pyenv correctly. After removing them, we can confirm pyenv is managing our Python 3 version:

## I start by resetting the current shell  
`$  exec  $0  
$  which  python  
/Users/mbbroberg/.pyenv/shims/python  
$ python  -V  
Python 3.7.3  
$ pip  -V  
pip 19.0.3 from  /Users/mbbroberg/.pyenv/versions/3.7.3/lib/python3.7/site-packages/pip  (python  3.7)`

Now we know for certain that we're using Python 3.7.3 and pip will update alongside it without any manual aliasing between versions. Using Moshe's recommendation to use a version manager (pyenv) enables us to easily accept future upgrades without getting confused about which Python we are running at a given time.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEzOTQyNDYxNzYsMTgzMzY2MjIwMSwtMj
A1ODc5NzE0OCwtNjc4MDQxMzA2XX0=
-->