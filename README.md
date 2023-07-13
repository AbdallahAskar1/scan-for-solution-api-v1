# scan-for-solution-api-v1
## Project Structure  
- config 
    - configure MongoDB database
    - configure Auth Key
- routes
    - auth.routes.js: POST signup,login,logout 
    - user.routes.js:CRUD and search questions 
    - profile.routes.js: GET public & protected resources;user profile 
- middlewares
    - verifySignup.js: check duplicate Username or email 
    - authJwt.js: verify token 
    - validateEmailPassword.js : vaildate email & password 
- controlllers
    - auth.controller.js:handle signup,login,logout 
    - user.controller.js:CRUD and search questions 
    - profile.controller.js: GET public & protected resources;user profile 
- models
    - user.model.js 
    - question.model.js 

- server.js: import and initialize necessary modules and routes,listen for the connections 
