# scan-for-solution-api-v1
## Project Structure
- config
    - configure MongoDB database
    - configure Auth Key
- routes
    - auth.routes.js: POST signup,login,logout @askar
    - user.routes.js: GET public & protected resources;questions @gomaa
- middlewares
    - verifySignup.js: check duplicate Username or email @amr
    - authJwt.js: verify token @amr
- controlllers
    - auth.controller.js:handle signup,login,logout @askar
    - user.controller.js:return public and protected content @gommaa
- models
    - user.model.js @abdelrahman
    - question.model.js @abdelrahman

- server.js: import and initialize necessary modules and routes,listen for the connections @askar
