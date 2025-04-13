1. Set up a basic next.js app

   1. Type. => npx create-next-app@latest --ts firstapp
   2. Cd inside the folder and type =>. npm run dev
   3. Add tailwind

2. Created folder for the different pages and the common components in the app directory

3. Setup the page.tsx

   1. Added the css
   2. Rendered the page on the client side
   3. Added the title and other details in the Head tag of next js

4. Created a api folder. Inside that added sub folders for the different types of routes.

   1. wrote the GET and POST routes function in the route.js file.
   2. POST function takes a req as an argument, converts it into JSON object and then adds it into database using Prisma.
   3. Similarly the GET function sends the json object after stringify it as a response. The response JSON is first fetched from the Database using Prisma ORM.

5. Created Basic UI Designs for the Different pages and components

   1. For register page, after clicking on the register button the register API is called.
      The api checks if the roll no already exists or not. If yes it returns a error response. If no it returns status 200 response and adds the data in the database.
   2. Similarly for Login page, The api checks if name and the hshed password matches with any entry in the database or not. After successfull check the JWT token is returned in the response.We should set this

6. To add Prisma to your Project

   1. npm install prisma @prisma/client
   2. npx prisma init =>This creates a prisma file and env file
   3. Add the database url in the env and schema modal in the prisma file
   4. Run npx prisma migrate dev --name init to make migrations in the database
   5. Add a single Prisma client so create a lib/prisma.ts file:
   6. npx prisma generate => to create a prisma client to interact with the database
   7. Now you can use prisma to make queries to the database
      const users = await prisma.{table_name}.findMany(); {GET Request}
      const user = await prisma.user.create({ {POST Request}
      data: { name, email },
      });
   8. Run yarn prisma studio to get a preview of your database
   9. To sync your prisma client with the database use yarn prisma introspect

7. Git config to push data from your local repo to a different Git account

   1. Go To User Settings/ Developer Settings/ PAT /token classic
   2. Select the repo, workflow, write packages
   3. Generate a Personal Access Token
   4. Now in your vs code terminal run this command.
      git remote set-url origin https://<username>:<token>@github.com/<username>/<repository>.git
   5. Add the main branch if necessary and clear the git cache problem
   6. Then perform ggpush

8. Difference between next/router and next/navigation
9. Setting the cookie in HTTP and other modes so that it is accessible by the javascript
10. Setting and configuring the Middleware function
11. Creating a object to map the different routes to protect for the differnt roles.
12. Instead of using the matcher property creating dynamic checking logics to protect the routes separately for differnt users.
13. To make changes in the database.
14. Run the Sql queries in the online server
15. Sync it with the prisma collection using yarn prisma introspect

<!-- Next Version -->

1. Prefill the data in student application form
2. Admin table
3. Request approval for student registrations
