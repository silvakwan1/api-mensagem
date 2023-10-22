const express = require("express");
const cors = require("cors");
const filmes = require("./src/data/filmes.json");
const fraseAleatoria = require("./src/mensagens");

const app = express();

const port = 3000;

app.use(cors());

app.get("/api", (req, res) => res.json(filmes));
app.get("/api/mensagem", (req, res) =>
  res.json({ mensagem: fraseAleatoria() })
);

app.listen(port, () => console.log("Servidor rodando na porta " + port));
