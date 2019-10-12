# CORS Problems Solved

## READ TO THE BOTTOM

The instructions are down there...

## Intro
If you're getting a bunch of problems in the browser complaining about CORS errors...

```
Access to XMLHttpRequest at 'https://demo.ckan.org/api/3/action/group_list' from origin 'http://localhost' has been 

blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

Or some such error - the solution is to use a proxy server. The proxy server makes API calls on your behalf.

## The First Problem - local files

The CORS standard is implemented by all self-respecting browsers during API calls. With every `$.ajax()` call you make, the first step is for the browser to send an OPTIONS request. This is the browser asking the API what we're allowed to ask.

The response from OPTIONS will tell the browser what sites are allowed to access the API and what types of requests are allowed (GET, PUSH, POST, etc...). If the domain of the page that sent the request isn't in the CORS response, you'll get the above-mentioned CORS errors.

### file:// requests

When you run your app from your desktop, you're using a URL like the following:

```
file:///Users/greg/Dropbox/git/superProject/index.html
```

The first part (`file:`) is the protocol. Almost all APIs `HATE` file protocols. They REALLY like `http:` and `https:` protocols... BECAUSE - it looks like you're calling from a respectable web server and not just your desktop browser.

So, the first solution is to look like a respectable website by using a local server.

### myserver

I've written a little server for the `Spotify` API problems we were having. It runs in your `terminal` window and serves up your files just like you were on a proper web server. I'll explain how to download and install this later. Suffice it to say, it serves up your `index.html` and other static content as if it were a real web server - noj just your hard drive.

This solves the first CORS problem.

## The Second Problem - Most APIs Hate Browsers

It turns out that the CORS standard was designed to prevent us from doing just what we're doing - calling the APIs from the browser.

Modern browsers use the CORS standard to make sure that we're calling remote servers FROM THE WEB SERVERS THE API EXPECTS US TO CALL FROM.

Not all of  the web servers play the game nicely - or they specifically want to prevent you from calling them from within a browser. The browsers are METICULOUS about CORS interactions. So any CORS responses we get that aren't PERFECT cause a rejection.

And rejection sucks.

## A Quick and Dirty Solution

So, I added some code to `myserver` that acts as a proxy server. You call it with 'http://localhost/proxy/(API URL HERE). And `myserver` makes the call for you - and handles all the CORS errors.

### Installing myserver

Because this was created as part of the `Spotify` API problems we had, you'll find `myserver` in my `mySpotify` repo.

### `git clone` or `git pull`

If you haven't cloned the repo yet do the following:

```
$ cd <your git repo folder>
$ git clone https://github.com/devcybiko/mySpotify.git
$ cd mySpotify
```

If you already cloned `mySpotify` do this:

```
$ cd <your git repo folder>/mySpotify
$ git pull
```

Now install `myserver`

```
$ npm install -g
```

And go to your project folder and run `myserver`

```
$ cd <your project folder>
$ myserver
server is listening on 80
```

__You can kill `myserver` by typing Control-C in the terminal window.__

That's it - you're covered.

## Calling the proxy server from your code

When you call an API, just add `http://localhost/proxy/` to the APIs URL.

Within your JavaScript code, you should create urls and make AJAX calls like this:

```javascript
// THIS IS JUST AN EXAMPLE - YOUR CODE WILL BE DIFFERENT
var user_link = $('#user-link').val().trim();
var repAuthKey = `vn6Eary-_CwcQYzmPx7z`;
var ipURL = `https://www.enclout.com/api/v1/reputation/show.json?auth_token=${repAuthKey}&url=${user_link}`;

// THIS IS THE IMPORTANT BIT
var proxyURL = 'http://localhost/proxy/' + ipURL;
//

$.ajax({
	url: proxyURL, // NOTICE THIS IS THE PROXYURL!
	method: 'GET'
}).then(function(response) {
	updateDisplay(JSON.parse(response));
});
```

## Finally - http://localhost/index.html

FROM NOW ON: run `myserver` in the same folder as your `index.html` and call your app __from the browser address bar__ using the `localhost` domain name. Your URL should look like this:

`http://localhost/index.html`

__Remember - always run `myserver` in the same folder as your `index.html`.__

__Remember - call your app from the _browser address bar_ using `http://localhost/index.html`__


## Setting up Node.js for CORS

```
app.use(function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    
    next();
});```

## That's it. 
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTU5NzYzNDQ5N119
-->