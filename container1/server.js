const app = require("express")();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("container 1's world");
});

app.listen(PORT, () => {
  console.log("listening on ", PORT);
});
