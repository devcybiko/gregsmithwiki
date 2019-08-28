I found a way to easily get a oAuth key from Spotify

Go to the Search Console (it allows you to test the API from the browser)

https://developer.spotify.com/console/get-search-item/

Scroll to the bottom and see a GREEN button that says "Get Token". Click it.
Select a "Scope" - I recommend "User-Read-Private"
Click "Request Token"
(if you haven't already logged in to Spotify, you will be asked to)
Shamelessly copy the token and paste it somewhere safe (a text file, eg) 
(be sure to get the WHOLE token - as in triple-click the token and ^C / ^P)

```javascript
            $.ajax({
                url: 'https://api.spotify.com/v1/search?q=Muse&type=track%2Cartist&market=US&limit=10&offset=5',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization:
                        'Bearer BQAbwj92_nJtEJCg_wldC1AAZ-MtEkxAGHtyW9fnlNrhoOLluW0zDQf9QexgDM96d_9R4IlKWjQKLoVXaOhlNseJoIxXTYHy6xw6ZYCb0ki3jG6XhSUp2BUvbCMAZ_3cOhCpTXN7Sx3JE1lLgBMDzBSCoT2S5d8gyEYJESQYodIhS_I'
                },
                type: 'GET',
                success: function(result) {
                    console.log(result);
                }
            });
```

Replace all the cryptic text after "Bearer " with your absconded oAuth key.

That should work - at least temporarily. The key apparently times out after a while.

Until we get a full oAuth solution, this will be enough for you  to test.