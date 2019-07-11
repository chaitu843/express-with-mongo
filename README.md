# express-with-mongo
Creating a basic server which can perform CRUD operations with mongo db

==============================================================================================================================================================

observations

=======================================================================================================================

1. If '/' routeHandler is given at the beginning, every route will go to that spec handler, since '/' will match to all routes. So try to avoid '/' route handler (or) use it at the end of the code.

2. express.json() is the built-in middleware used for parsing incoming request with json payload (bodyParser)

3. express.urlencoded() is the built-in middleware used for parsing incoming request through form (bodyParser)

========================================

With Mongo 

=========================================

1. can set views parameter on app, to let it know the directory of the views folder and the respective path can be given while rendering views.

2. Can set view engine parameter on app, to let it know about the template engine being used, which is configured using app.set() and used now.

3. Mongoose ODM is being used for connection from node to monogdb

4. Connection to mongoose is established using mongoose.connect()

5. Promises should always have a catch block to handle rejections

==============================================================

Working with Mongoose --> Observations -

==============================================================

1. While creating a model using mongoose, model Name and collection name can be passed as arguments along with schema. If collection name is not passed, it will be induced from model name.

2. All the properties available in a document are being retreived irrespective of the collection schema.

3. While saving data to a collection, only the fields defined in collectionSchema are being saved in collection and rest fields, if specified are ommitted.

4. __v field in mongo documents stands for version key.

5. If specified collection is not present in database, Collection with given name is being created.

6. Now, coming to schema restriction --> Saving the fields which are not mentioned in schema can be acheived by setting schemaOptions.strict to false.

=================================================================

Working with MongoDB ATLAS cloud (Inorder to deploy)

===================================================================