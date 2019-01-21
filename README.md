# racing-game

## Description

A shooter with scrolling enemies and background.

## MVP (DOM - CANVAS)

The minimum deliverable is the start screen showing, the game starting and being able to restart.

Game should have 3 states.
 - Game start (canvas). Splashscreen with game title and start button that starts game and takes you to next state.
 - Game screen (canvas). It should render a ground and a player. Player should be able to move left and right in the middle of the screen. Player should avoid obstacles. If player hits obstacle, player loses a life. Game over state if three lives are lost.
 - Game Over state (canvas). It should have a restart button.

## Backlog

Render enemies + logic.
Add music.
Splash screen transition.
Add up and down movement to player.
Scroll background city to give impression of left and right movement.
Pretify.

## Data structure

```
index.html  
HTML file with drawn canvas, where the splash screen, game screen, game over and restart screens will be drawn.
```
```
styles.css
Necessary styles to set up the canvas in the screen.
```
```
main.js
Javascript file containing the code in charge of initializing game and setting up event listeners.
```

```
game.js
Code responsible for creating instances of the differente classes, updating logic and rendering the final image.
```

```
ground.js
This code creates the ground class. Renders the scrolling ground and backdrop image.
```
```
player.js
The player class is created in this file. Player should be able to move left and right and up and down.
```
```
enemy.js
```
The enemy class is created in this file. Enemies should scroll and resize as they approach the player, giving the impression of movement from the horizon. 


## States y States Transitions

The game has 3 states: game start screen, game screen and game over screen. Transition between game start screen and game screen is handled by a key press. Transition from game screen to game over screen happens when player loses 3 lives. Restart button on game over screen should take the player back to the game start screen.


## Task




## Links


### Trello



### Git

[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)