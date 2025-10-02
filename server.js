const express = require("express");

const app = express();

const port = 5000; // <-- changed

app.use("/api/contacts", require("./routes/contactsRoute"));



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
