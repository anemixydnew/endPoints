var express = require('express');
var app = express();

app.post('/api/eventos', function (req, res) {
	//console.log("Introduzca sus datos");
	res.statusCode=201;
	res.send("Nuevo evento creado");
  //res.json(pepe);
});
app.get('/api/eventos', function (req, res) {
		//console.log("El mensaje se envio correctamente a el Email");
		res.statusCode=200;
		res.send("Mostrar Eventos");
  //res.json(lista);
});
app.delete('/api/eventos/evento01', function (req, res) {
	//var pepe={name:"pepe Actualizado",edad:5};
		res.statusCode=200;
		res.send("Evento borrado");
  res.json(pepe);
});
app.put('/api/eventos/evento01', function (req, res) {
	//var pepe={name:"pepe Actualizado",edad:5};
		res.statusCode=200;
		res.send("Evento actualizado");
  res.json(pepe);
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
