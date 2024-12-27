Sample JSON

1. Get All Todos
    Method:GET
    Endpoint: /todos
    
    Response:

      {
          "id": 1,
          "title": "Buy groceries",
          "description": "Milk, Bread, Eggs, and Vegetables",
          "completed": false
      }
  

2. Get Todo by ID
    Method: GET
    Endpoint: /todos/:id
    
    Response:

    {
    "id": 1,
    "title": "Buy groceries",
    "description": "Milk, Bread, Eggs, and Vegetables",
    "completed": false
    }

3. Create a New Todo
    Method: POST
    Endpoint: /todos
    
    Request Body:
   
    {
    "title": "Do laundry",
    "description": "Wash clothes and hang them to dry"
    }
    
    Response:
    
    {
    "id": 2,
    "title": "Do laundry",
    "description": "Wash clothes and hang them to dry",
    "completed": false
    }


4. Update a Todo
    Method: PUT
    Endpoint: /todos/:id
    
    Request Body:

    {
    "title": "Do laundry and fold clothes",
    "completed": true
    }

    Response:

    {
    "id": 2,
    "title": "Do laundry and fold clothes",
    "description": "Wash clothes and hang them to dry",
    "completed": true
    }


5. Delete a Todo
    Method: DELETE
    Endpoint: /todos/:id
    
    Response:
    Status Code: 204 (No Content)
    


