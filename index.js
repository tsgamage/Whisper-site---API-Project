import express from "express";
import axios from "axios";
import dotenv from "dotenv";

const app = express();
const PORT = 3000;
app.use(express.static("public"));
dotenv.config();

const API_URL = process.env.API_URL;

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "random");
    const responseSecret = response.data.secret;
    const responseUser = response.data.username;
    res.render("index.ejs", {
      secret: responseSecret,
      user: responseUser,
    });
  } catch (error) {
    console.log(error);
    res.render("index.ejs", {
      secret: "Error",
      user: "Error while getting data",
    });
  }
});

app.listen(PORT, () => {
  console.log("Listening to port ", PORT);
});
