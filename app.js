const https = require("https");

const opciones = {
	hostname: process.env.TARGET,
	metodo: process.env.METHOD
};

console.log(
	"** web ping ** Respuesta desde %s , metodo:%s, tiempo= %dms",
	opciones.hostname,
	opciones.metodo,
	process.env.INTERVAL
);

let i = 1;
let start = new Date().getTime();
setInterval(() => {
	start = new Date().getTime();
	console.log(" Numero de request: %d; a las %d", i++, start);
	var req = https.request(opciones, res => {
		var end = new Date.getTime();
		var duracion = end - start;
		console.log(
			"Estado de respuesta: %s a las %d; duracion: %dms",
			res.statusCode,
			end,
			duracion
		);
		req.on("error", e => {
			console.error(e);
		});
		req.end();
	}, process.env.INTERVAL)

