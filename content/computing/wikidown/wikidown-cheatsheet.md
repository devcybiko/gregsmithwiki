# Wikidown Cheat Sheet

$(toc)

## Extensions
1. $ - the beginning of a WikiDown extension
2. [template] - a file in themeDir ending in .htm
3. (helper) - a file in the themeDir ending in .js

## Headings
 1. \# Heading level 1
 2. \## Heading level 2
 3. \### Heading level 3
 4. \#### Heading level 4\
 5.  \##### Heading level 5
 6. \###### Heading level 6
 7. ~~\### My Great Heading ID {#custom-id}~~


## Text Styles
  1. \*\***bold text\*\***
  2. *\*italicized text\**
  2. \_\_ __underlined text__ __
  3. ~~\~\~strikethrough\~\~~~
  3. \> blockquote
  4. 1\. ordered list
  5. \'-' unordered list
  6. \``code`\`
  7. \---- (horizontal rule)
  8. Link: \[title]\(url)
  9. Image: \!\[alt text](image url)
  10. HTML: \<br>
  11. Emoji: `:+1:` => :+1: [list](https://github.com/showdownjs/showdown/wiki/emojis)

```
![foo](foo.jpg =100x80)     simple, assumes units are in px
![bar](bar.jpg =100x*)      sets the height to "auto"
![baz](baz.jpg =80%x5em)  Image with width of 80% and height of 5em
```

## Tables
<pre>  
| Row Number | Some Data |
| ----------- | ----------- |
| Row 1 | Some info 1 |
| Row 2 | Some info 2 |
| Row 3 | Some info 3 |
| Row 4 | Some info 4 |
</pre>

| Row Number | Some Data |
| ----------- | ----------- |
| Row 1 | Some info 1 |
| Row 2 | Some info 2 |
| Row 3 | Some info 3 |
| Row 4 | Some info 4 |

<pre>
| h1             | h2        | h3                |
|:---------------|:---------:|------------------:|
|left-justified  | centered  | right-justified   |
| 100            | [a][1]    | ![b][2]           |
| *foo*          | **bar**   | ~~baz~~           |
</pre>

| h1    |    h2   |      h3 |
|:------|:-------:|--------:|
|left-justified  | centered  | right-justified   |
| 100   | [a][1]  | ![b][2] |
| *foo* | **bar** | ~~baz~~ |
## Fenced Code Block

<pre>
```javascript
{
  "firstName": "Greg",
  "lastName": "Smith",
  "age": 25
}
```
</pre>
```javascript
{
  "firstName": "Greg",
  "lastName": "Smith",
  "age": 25
}
```

## Definition List
```

term 1
: definition one

term 2
: definition 2
```

term 1
: definition one

term 2
: definition 2

## Task List
<pre>
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
</pre>
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

## Footnote
```

Here's a sentence with a footnote. [^2]
[^2]: This is the footnote.
```

Here's a sentence with a footnote. [^2]

[^2]: This is the footnote.
