# This is an interactive drawing board in which multiple people can draw with each other with real time updation 

## Idea 
1. We are planning on creating 3 pages right now , a login page , a actual draw page and a user page.
2. The current Idea is to create a page that can just run with one user 
3. It should be able to talk to server in real time (using ws)


### Login Page (Completed)
1. It will contain only few components 
    a. Input text box - where people can enter there Name 
    b. Butten - to go to the next page 
    c. Avatar(not current goal)- People will be assigned in a random avatar

### Draw Page (Completed)
1. In this page the actual drawing will occur 
2. Its main components are 
    a. A place to draw on (white board)
    b. color selector box 
    c. Display - to show the people currently in the room 

### User Page 
1. Its main componets are
    a. Display text - to show things like username , user id , avatar

### Routing
1. Need to add routing to the pages so that we can go from one page to another
2. Also we need to be able to send information from one page to another 

### Rooms 
1. There should be individual rooms so that people can join in one specific room instand of all in one room(That was my Initial thought)
2. People should be able to put use there own key to room 

### WebSockets
1. Need to figure out how to create a sockets connection between 2 people
2. Need to figure out what data to be send to the other person to show changes to the white board 

### Connecting to the database
1. As the user login need to store the user information in the data base 
2. Should be able to retrive room id from the database as well

#### Current Develeopment time 10hrs