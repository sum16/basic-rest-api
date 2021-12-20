// expressのパッケージを読み込み
const express = require("express");
const app = express();
// sqlite3のパッケージを読み込み
const sqlite3 = require("sqlite3");
const dbPath = "app/db/database.sqlite3";
//pathモジュールをインストール
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

// ルーティングを指定
app.get("/api/v1/users", (req, res) => {
  const db = new sqlite3.Database(dbPath);

  db.all("SELECT * FROM users", (err, rows) => {
    res.json(rows);
  });

  db.close();
});

app.get("/api/v1/users/:id", (req, res) => {
  const db = new sqlite3.Database(dbPath);
  const id = req.params.id;

  db.get(`SELECT * FROM users WHERE id = ${id}`, (err, rows) => {
    res.json(rows);
  });

  db.close();
});

// キーワードとマッチングしたuserを検索する
app.get("/api/v1/search", (req, res) => {
  const db = new sqlite3.Database(dbPath);
  const keyword = req.query.q;

  db.get(`SELECT * FROM users WHERE name LIKE "%${keyword}%"`, (err, rows) => {
    res.json(rows);
  });

  db.close();
});

const port = process.env.Port || 3000;
// サーバー立ち上げ
app.listen(port);

console.log("listen open port" + port);
