const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())
app.use(require("./routes/students.route"));

mongoose.connect(
    "mongodb+srv://fpjohns:denni2010@cluster0.7omondk.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(port, () => {
  console.log(`сервер успшно запушен http://localhost:${port}`);
});
