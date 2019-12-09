![](https://media.giphy.com/media/vsyKKf1t22nmw/giphy.gif)

# Fuzzy Memory

A game of memory in a Pokémon style.

## BUILT WITH

-   HTML
-   CSS
-   JavaScript
-   Frustration

## PREVIEW

<img src="https://i.imgur.com/v06r3Fk.png" width="100%">
<img src="https://i.imgur.com/TixTn8r.png" width="100%">

## INSTALLATION

-   Clone this repository.
-   Open the folder in your code editor of choice.
-   Open `index.html` in your browser or via code editor extensions (i.e Live Server within Visual Studio Code).
-   You're now able to browse the web page and play the game.

## HOW TO PLAY

Click on two cards and try to get the identical Pokémon cards.
If you guess wrong, the cards will automatically flip again.
Keep trying and guessing until the whole playing board is complete.
Press "New Game" to unflip all the cards and start over.

## CODE REVIEW

Code review made by [Andreas Pandzic](https://github.com/APandzic)

-   It is always good practise to start Javascript document with ['use strict';](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) on line 1.
-   style.css 89. Your front images are not fixed. If this isn't the purpose I suggest you solve it with object-fit (https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).
-   script.js 113-115. Create a delay on notification with setTimeout. The notification will otherwise be faster than the last card is turned.
-   script.js 73, 99 and 165. Write the word "MemoryCard" in plural instead of singular for better practice and understanding.
-   Your comments are fantastic which makes it extremely easy to understand your code, but try to avoid obvious comments.
-   Outstanding work! You set a high bar with your syntax.

## TESTERS

-   Oskar Joss
-   Andreas Lindberg
