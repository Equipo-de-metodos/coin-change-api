import express from "express";
import usuarioRouter from "./Routes/usuarioRoutes.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.use("/api", usuarioRouter);

const servidor = app.listen(3000, () => {
	console.log(`Servidor en http://localhost:${servidor.address().port}`);
});
