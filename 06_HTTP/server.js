const express = require('express');  // Import Express
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')); //to serve static files

//request object: Contains information about incoming requests from clients
//respond object: Used to send data back to client

//When User visit (/) Express recieves request and send respone to user which is Hi World!

//__________________________________________________________________________________________________
// 1) GET BEGINNER EXAMPLE:
// app.get('/', (req, res) => {
//   res.send("Get means to get data from server");
// });




//__________________________________________________________________________________________________
// 2) POST BEGINNER EXAMPLE:

// app.post('/contact', (req, res) => {
//   if(!req.body.name)
//   {
//     return res.status(400).send('Name is required');
//   }
//   // res.send(req.header('user-agent')); //res.send will be default as html
//   // res.json({ message: 'JSON' }); //res.json should be used if you are sending json


//   //DB STUFF
//   res.status(201).send(`Thank you ${req.body.name}`); //no need to return last status, else required
// });

//Alof of times when dealing with FullStack apps tokens or json web tokens are used for authentication.




//__________________________________________________________________________________________________
// 3) POST -> LOGIN


// app.post('/login', (req, res) => {
//   if(!req.header('x-auth-token'))
//   {
//     return res.status(401).send('No Token');
//   }
//   if(req.header('x-auth-token') !== '123456')
//   {
//     return res.status(401).send('Not Authorized');
//   }
//   res.send('Logged in');
// });


//__________________________________________________________________________________________________
// 4) PUT 
// app.put('/post/:id',(req,res) =>
// {
//  //DB STUFF TO UPDATE POST
//  res.json({
//    id: req.params.id, //req.params.id is used to get the id from the url
//    title: req.body.title //req.body.title is used to get the title from the body (form data or json data)
//  });
// });

//__________________________________________________________________________________________________
// 5) DELETE
// app.delete('/post/:id',(req,res) =>
//   {
//    //DB STUFF TO UPDATE POST
//    res.json({msg:`Post ${req.params.id} Deleted`});
//   });
  

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


















// // Sample in-memory database (array)
// let users = [
//   { id: 1, name: 'Ali', age: 22 },
//   { id: 2, name: 'Ahmed', age: 25 }
// ];

// // **GET**: Fetch all users
// app.get('/users', (req, res) => {
//   res.json(users);  // Send JSON response
// });

// // **POST**: Add a new user
// app.post('/users', (req, res) => {
//   const newUser = req.body;  // Get data from request
//   newUser.id = users.length + 1;  // Assign unique ID
//   users.push(newUser);  // Add to database
//   res.status(201).json(newUser);  // Respond with new user
// });

// // **PUT**: Update a user
// app.put('/users/:id', (req, res) => {
//   const userId = parseInt(req.params.id);
//   const updatedData = req.body;

//   const user = users.find(u => u.id === userId);
//   if (!user) return res.status(404).json({ error: 'User not found' });

//   user.name = updatedData.name || user.name;
//   user.age = updatedData.age || user.age;
  
//   res.json(user);
// });

// // **DELETE**: Remove a user
// app.delete('/users/:id', (req, res) => {
//   const userId = parseInt(req.params.id);
//   users = users.filter(user => user.id !== userId); // Remove user
//   res.json({ message: 'User deleted successfully' });
// });

