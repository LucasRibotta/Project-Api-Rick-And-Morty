const PORT = 3001;
const server = require('./app')

server.listen(PORT, ()=> {
    console.log('server on port 3001');    
})



















/* // Crear un servidor en el puerto 3001
const server = http.createServer((req, res) => {
    // Agregar el encabezado para permitir solicitudes desde cualquier origen
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // Verificar si la URL incluye "/rickandmorty/character"
    if (req.url.includes('/rickandmorty/character')) {
      // Obtener el ID del personaje de la URL
      const id = req.url.split('/').pop();
  
      // Buscar al personaje en la base de datos
      const character = data.find((item) => item.id === Number(id));
  
      // Si se encontró al personaje, enviarlo como respuesta
      if (character) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(character));
      } else {
        // Si no se encontró al personaje, enviar un mensaje de error
        res.writeHead (400,{'Content-type':'text/plain'});
        res.end('Personaje no encontrado');
      }
    } else {
      // Si la URL no incluye "/rickandmorty/character", enviar un mensaje de error
      res.writeHead (400,{'Content-type':'text/plain'});
      res.end('URL inválida');
    }
  }).listen(3001, 'localhost') */

  
  