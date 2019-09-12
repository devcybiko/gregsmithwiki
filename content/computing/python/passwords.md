# Hiding Passwords in Python

## config.py
This file will store your API keys. You just need to update the portion in the strings with your API keys, depending on the service you may or may not need all four types of API keys. These in particular are required to create a Twitter application.

```
# .gitignore should include reference to config.py
api_key = "YOUR_KEY"
api_secret = "YOUR_SECRET"
access_token = "YOUR_ACCESS_TOKEN"
token_secret = "YOUR_TOKEN_SECRET"
```

## main_script.py
This file will store your main script that needs to access the API keys. This file can be named whatever you like.

```
import config

from twython import Twython, TwythonError

# create a Twython object by passing the necessary secret passwords
twitter = Twython(config.api_key, config.api_secret, config.access_token, config.token_secret)
```
## .gitignore
A .gitignore file tells GitHub to ignore the noted files, directories or files that end in specific extensions when committing files to GitHub. This step is crucial to ensure that your config.py file does not end up viewable on GitHub! Here’s a collection of useful .gitignore templates.

```
config.py
__pycache__
.ipynb_checkpoints
```

## References
- [Medium.com](https://medium.com/black-tech-diva/hide-your-api-keys-7635e181a06c)