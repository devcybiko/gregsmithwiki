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

## The Second Problem - Most APIs Hate Browsers

It turns out that the CORS standard was designed to prevent us from doing just what we're doing - calling the APIs from the browser.

Modern browsers use the CORS standard to make sure that we're calling remote servers FROM THE WEB SERVERS THE API EXPECTS US TO CALL FROM.

Not all of  the web servers play the game nicely - or they specifically want to prevent you from calling them from within a browser. The browsers are METICULOUS about CORS interactions. So any CORS responses we get that aren't PERFECT cause a rejection.

And rejection sucks.

## Setting up Node.js for CORS

Put the following code at the top of your server.js...

This says *allow all CORS requests to pass through.*
```
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
```

## That's it. 
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIwNjM3MDM1NTksLTIwODU0MzAwODQsLT
M1NjA2MTI2NiwtMTk0ODIyMjk3NV19
-->