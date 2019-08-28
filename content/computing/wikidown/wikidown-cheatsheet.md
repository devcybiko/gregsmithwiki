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
  2. \__italicized text\__
  3. ~~\~\~strikethrough\~\~~~
  3. \> blockquote
  4. 1\. ordered list
  5. \'-' unordered list
  6. \``code`\`
  7. \---- (horizontal rule)
  8. Link: \[title]\(url)
  9. Image: \!\[alt text](image url)
  10. HTML: \<br>

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

## Fenced Code Block

<pre>
```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
</pre>

```

{
  "firstName": "John",
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
