# express-with-mongo
Creating a basic server which can perform CRUD operations with mongo db

==============================================================================================================================================================

observations

=======================================================================================================================

1. If '/' routeHandler is given at the beginning, every route will go to that spec handler, since '/' will match to all routes. So try to avoid '/' route handler (or) use it at the end of the code.

2. express.json() is the built-in middleware used for parsing incoming request with json payload (bodyParser)

3. express.urlencoded() is the built-in middleware used for parsing incoming request through form (bodyParser)