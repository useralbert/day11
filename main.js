//Load any required Libararies/modules
const express = require('express');

//Declare tunables
const PORT = 3000;

//Create an express application
const app = express();

app.use(
    express.static(__dirname + '/public')
);

app.use(
    express.static(__dirname + '/images')           //create new  root of public and images
);


//start the server, Listen on port 3000
app.listen(PORT, 
    () => {
            console.log(`Application started on port ${PORT} at ${new Date()}`) 
            console.log(`__dirname = ${'/public'}`);
           
});


