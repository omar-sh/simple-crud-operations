## CRUD operations for employees table

I made it easier for you to run the project by dockerizing the app
so you can run it by installing Docker and then run the following 
command inside project directory

``docker-compose up --build``

### APIs

creating a new item:

``
POST: /employess
``

payload:

```
{
"name":"Omar",
"date_of_joining": "2022-02-11",
"department":"development",
"salary":200.2
}
```

Updating an item:

``
PUT: /employess/:id
``

Deleting an item:

``
DELETE: /employess/:id
``

Getting all items:

``
GET: /employess
``

Getting a specific item by id:

``
GET: /employess/:id
``