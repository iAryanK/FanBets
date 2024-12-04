# FanBets

FanBets is an not just a place where users can bet on their favorite IPL team, they can also use this e-commerce platform to purchase cricket related stuffs.

## Development Process

1. setup shadcn & theme toggle

   - initialize the Next JS 15 app and integrate it with shadcn UI and added theme toggle button to support both dark and light mode

2. create auth UI

   - UI for both signup route and signin routes are created

3. implement auth backend

   - create user schema to store user details in mongoDB
   - server actions used to implement the logic to save & fetch user details

4. add Select Team Modal

   - A global modal is created for loggedIn users to show them a modal to select their favourite team

5. implement fetch products

   - store some dummy data into mongoDB database
   - fetch those data using server actions and display them on dashboard UI

6. add Change Team option in profile section

   - In the /profile route, the user has now the option to change their favourite team
