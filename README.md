# scan-for-solution-api-v1
## Project Structure  @askar
- config  @askar
    - configure MongoDB database
    - configure Auth Key
- routes
    - auth.routes.js: POST signup,login,logout @askar
    - user.routes.js:CRUD and search questions @askar
    - profile.routes.js: GET public & protected resources;user profile @gommaa
- middlewares
    - verifySignup.js: check duplicate Username or email @amr
    - authJwt.js: verify token @amr
    - validateEmailPassword.js : vaildate email & password @askar
- controlllers
    - auth.controller.js:handle signup,login,logout @askar
    - user.controller.js:CRUD and search questions @askar
    - profile.controller.js: GET public & protected resources;user profile @gomaa
- models
    - user.model.js @askar
    - question.model.js @askar

- server.js: import and initialize necessary modules and routes,listen for the connections @askar
