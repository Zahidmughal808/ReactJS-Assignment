const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 8000;

app.use(express.json());
app.use(cors());

const pollData = [];

app.get("/api/polls", (req, res) => {
  return res.json({
    status: "success",
    code: 200,
    data: pollData,
  });
});

app.post("/api/add-poll", (req, res) => {
  const body = req.body;
  console.log("body", body);
  pollData.push({
    question: body.question,
    answer: body.answer,
  });
  return res.json({
    status: "success",
    code: 200,
    message: "Poll data submitted successfully.",
    data: pollData,
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("server connection error", err);
  }
  console.log(`Server started successfully on port ${PORT}`);
});
