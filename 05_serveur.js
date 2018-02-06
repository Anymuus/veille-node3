"use strict";
/* importation du module «fs» (file system) */
const fs = require("fs");

/* lecture synchrone, la fonction: fs.readFileSync() 
bloque l'éxécution des instructions suivantes */

let data = fs.readFileSync('province.json');

console.log(data.toString());
var province = JSON.parse(data)
console.log("Fin du programme");

var http = require('http');
http.createServer(function(request, response){
response.write('<html>')
response.writeHead(200, {"Content-Type" : "text/html; charset=UTF-8"})
response.write('<style>h1 {font-family:arial; font-size: 3em;}</style>')
	response.write('<body>')

		response.write('<h1>Exercice 3 - Serveur Local</h1>')
		response.write('<table>')
		 for (var p in province)  { 

		 	response.write('<tr>')
		 	response.write('<th>')
		 	response.write(p)
		 	response.write('</th>')
		 	response.write('<th>')
		 	response.write(province[p])
		 	response.write('</th>')
		 	response.write('</tr>')


		    console.log(p + ' : ' + province[p])  
		}
		response.write('</table')
response.write('</body>')
response.write('<html>')
response.end()

}).listen(3000)


