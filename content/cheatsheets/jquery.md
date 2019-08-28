# JQuery Cheat Sheet

1. TIMERS
    1. `var windowTimeout = setTimeout(function() {alert("Alert #1: Called automatically 1 second after page load.");}, 1000);`
    2. `clearTimeout(windowTimeout);`
    3. `var intervalId = setInterval(decrement, 1000);`
    4. `clearInterval(intervalId);`
2. RANDOM NUMBERS
    1. `var random = Math.floor(Math.random() * 9) + 1;`  — generate a number from 1..9
    2. `function myRandom(lo, hi) {return Math.floor(Math.random()*(hi-lo+1)+lo);}` - return a number between [lo, hi], inclusive
3. JQUERY SELECTORS
    1. `$("#button-name")` - select an element by id
    2. `$(".number")` - select all elements by class name
    3. `$("button")` - select all elements by tag
4. JQUERY SET CONTENT
    1. `$("#show-number").html("<h2>" + number + "</h2>");` - insert HTML
    2. `$("#time-left").append("<h2>About 10 Seconds Left!</h2>");` - append HTML
    3. `$("#tails-chosen").text(tailsCount);` — set TEXT
5. JQUERY ON CLICK
    1. `$("#resume").on("click", function(event) { alert("RESUME"); });`
6. JQUERY AJAX

```javascript
    var searchOMDB = function(movie) {
      var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        createRow(response);
      });
    };
```
