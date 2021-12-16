const express = require("express");
const app = express();

app.use(express.json());

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Simple Calculator Api");
});

app.post("/api/add", (req, res) => {
  const { op1, op2 } = req.body;

  try {
    const result = +op1 + +op2;
    return res.status(200).json({ message: "OK", data: result });
  } catch (e) {
    return res.status(500).json({ message: "Error", data: null });
  }
});

app.post("/api/sub", (req, res) => {
  const { op1, op2 } = req.body;

  try {
    const result = +op1 - +op2;
    return res.status(200).json({ message: "OK", data: result });
  } catch (e) {
    return res.status(500).json({ message: "Error", data: null });
  }
});

app.post("/api/mul", (req, res) => {
  const { op1, op2 } = req.body;

  try {
    const result = +op1 * +op2;
    return res.status(200).json({ message: "OK", data: result });
  } catch (e) {
    return res.status(500).json({ message: "Error", data: null });
  }
});

app.post("/api/div", (req, res) => {
  const { op1, op2 } = req.body;

  try {
    const result = op2 === "0" ? "E" : +op1 / +op2;
    return res.status(200).json({ message: "OK", data: result });
  } catch (e) {
    return res.status(500).json({ message: "Error", data: null });
  }
});

app.post("/api/perc", (req, res) => {
  const { op1, op2 } = req.body;

  try {
    const result = +op1 * (+op2 / 100);
    return res.status(200).json({ message: "OK", data: result });
  } catch (e) {
    return res.status(500).json({ message: "Error", data: null });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
