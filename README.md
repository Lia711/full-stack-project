# Full Stack Project

Personal project for the Legend of Zelda video game franchise made using REACT and Java for frontend and backend.

## Features

Frontend (built in REACT):
  Components folder:
- AllGames component mapping over all the games in the database to display the Box Art and title of each one 
- resusable Form component that is implemented in the pages for creation and editing of a game
- Navigation component rendered on each page with links to home, game gallery and game creation
  Pages:
- Create page where a user can add their own game providing information for the title, platform and plot summary, as well as links to images and gifs for it.
If all fields are completed, the game is then added to the database and has the same options as all the already existing games in the application
- Edit page that fetches the ID of the game that the user wants to edit and can either edit certain information in the game's properties or delete it from the database altogether.
- Game page renders additional information when a game from the library is clicked
- GamesPage which contains the library of all the games
- Intro page that has an introduction to the series, as well as a link to the games gallery

Backend (built in Java with Spring Boot):
- AppController with different endpoints for getting, updating and deleting games
- Game class with getters, setters and constructors for the properties of Game. ID is automatically created, and the year is set as the current year by default when creating a game
- GamesRepository reposotory which has functions for getting a random game (using SQL commands) and deleting a game by its id
- GamesService that has methods for gettings, updating and deleting games
- ZeldaApplication which runs the application

Database file of Zelda games created with the help of OpenAI and then imported into MySQL.


### Known Issues

- getting random game not yet implemented in front-end
- styling issues on some pages
  
### Screenshots

![image](https://github.com/Lia711/full-stack-project/assets/125596830/d7bafc11-51fc-4b59-bf4f-dff6899c7ede)

![image](https://github.com/Lia711/full-stack-project/assets/125596830/9ff73239-4cd0-43ca-93f5-335cd9aa9210)

![image](https://github.com/Lia711/full-stack-project/assets/125596830/25519d71-3c3a-4d70-8d5f-3c9fd0f07ffd)

![image](https://github.com/Lia711/full-stack-project/assets/125596830/49fadd37-5405-41bb-95ef-adf5853343dd)





