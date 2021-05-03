---
layout: post
title: Visualizing Text in Space

summary: "Tips for text in p5."
---

The textToPoints feature of p5.js is a powerful and accessible feature for breaking text paths down into individual points. It can be used in many different, interesting ways, from multi-agent environments to slit-scan effects. 

However, when compared to the versatility of normal text functionality, both in p5 and in raw HTML/CSS, two features are glaring ommissions: multiline rendering and vertical + horizontal spacing (leading and tracking.)

<h3-dark style="color: #DB6837">Multiline Text</h3-dark>

Out of the box, textToPoints does not support multiline text. When a multiline string is provided, newlines are interpreted as spaces:

In order to combine multiline text with textToPoints, we'll need to do it ourselves.

Naturally, since textToPoints only supports a single line of text, we'll need to loop over each line of our text to generate the points. 

```js
let lines = txt.split("\n")
let allPts = []

for (let line of lines) {
  let pts = font.textToPoints(line, 0, 0, fontSize) 
  allPts = allPts.concat(pts)
}
```

For the astute, you'll realize quickly that just doing that leads to trouble: each line's points are calculated from the same starting position! That's not good.

Instead, let's try to move each line down as much as it needs to go. To do this, we'll set a new variable to keep track of how far we are:

```js
let yOffset = 0
```

and for each line, we should shift the baseline down by exactly the height of the line:

```js
# Calculate and add the height of the line
let bounds = font.textBounds(line, 0, 0, fontSize)
yOffset += abs(bounds.y)
```

Now, when calculating textToPoints, we should always generate it with the offset baseline:

```
let pts = font.textToPoints(line, 0, yOffset, fontSize) 
```

Better! But what about dips? The dipAmount should be the total height of the rendered text, minus the baseline height.

```js
let dipAmount = bounds.h - abs(bounds.y)
yOffset += leading + dipAmount
```

Now with leading after calculating the points for a line:

```js
yOffset += leading
```

<h3-dark style="color: #DB6837">Tracking</h3-dark>

Out of the box, textToPoints will return us text points as defined by the text attributes:

```
for (let pt of pts) {
  ellipse(pt.x + xOffset, pt.y, 5)
}
```

We want something that can tell us when a new character is starting, and offset appropriately:

```js
let xOffset = 0

for (let pt of pts) {
  if (startingNewCharacter(pt)) {
    xOffset += tracking
  }
    
  ellipse(pt.x + xOffset, pt.y, 5)
}
```

But how do we know when we start a new character using textToPoints?

Each character contributes a certain number of points to the overall amount. By running textToPoints on an individual character, we can determine how many points need to pass before the next character.

```js
font.textToPoints("HI", 0, 0, fontSize, options)
```

```js
function getCharacterBoundaries (font, txt, fontSize, options) {
  let characters = txt.split('')
  let totalPts = 0
  let result = []
  
  for (let c of txt.split('')) {
    const pts = font.textToPoints(c, 0, 0, fontSize, options)
    totalPts += pts.length
    result.push(totalPts)
  }

  return result
}
```
