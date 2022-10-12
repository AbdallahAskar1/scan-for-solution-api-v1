# scan-for-solution-api-v1
## Project Structure
- config
    - configure MongoDB database
    - configure Auth Key
- routes
    - auth.routes.js: POST signup,login,logout
    - user.routes.js: GET public & protected resources
- middlewares
    - verifySignup.js: check duplicate Username or email
    - authJwt.js: verify token
- controlllers
    - auth.controller.js:handle signup,login,logout
    - user.controller.js:return public and protected content
- models
    - user.model.js
    - role.model.js
- server.js: import and initialize necessary modules and routes,listen for the connections
