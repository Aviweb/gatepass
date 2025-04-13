1. In your middleware configuration, the matcher property is used to specify which routes the middleware should apply to. If you're implementing role-based access control, using matcher to filter routes for specific roles is one approach, but it may not always be necessary.

2. Reasons for not using redux
   Redux often requires writing a significant amount of boilerplate code, such as actions, reducers, and action types, which can make the setup and maintenance more
   For small or simple applications, Redux may introduce unnecessary complexity, as it is overkill when a simpler state management solution (like React's useState or useContext) could suffice.

3. Mainly 2 types of sql queries:-
   1. Add Column
      ALTER TABLE users
      ADD COLUMN phoneNo VARCHAR(13);
   2. Change attribute to unique
