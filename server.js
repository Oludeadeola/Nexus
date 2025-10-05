const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");

const connectdb = require("./config/mongodbconnection");

const app = express();

connectdb();
const port = 5000; 

app.use(express.json());

app.use("/api/contacts", require("./routes/contactsRoute"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
