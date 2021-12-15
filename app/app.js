const express = require("express");
const app = express();

// ルーティングを指定
app.get("/api/v1/hello", (req, res) => {
  res.json({ message: "hello world" });
});

const port = process.env.Port || 3000;
// サーバー立ち上げ
app.listen(port);

console.log("listen open port" + port);
