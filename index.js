import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  return res.json({message:"Server is Healthy v3",actions:"Github Actions final test changes  "}) 
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
