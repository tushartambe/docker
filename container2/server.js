const app = require("express")();
const PORT = process.env.PORT || 8080;
const http = require("http");

app.get("/", (req, res) => {
  http
    .get("http://container1:8000/", resp => {
      let data = "";
      resp.on("data", chunk => {
        data += chunk;
      });

      resp.on("end", () => {
        res.send(data);
      });
    })
    .on("error", error => {
      console.log(error);
    });
});

app.listen(PORT, () => {
  console.log("listening on ", PORT);
});
