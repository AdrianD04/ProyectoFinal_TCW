const express = require('express');
const app = express();
const port = 8080;

//Servidor de contenido estatico
app.use(express.static('public'));

app.get('/about.html', (req, res) => {
  res.status(210).sendFile(__dirname + '/public/about.html');
});
app.get('/blog.html', (req, res) => {
  res.status(210).sendFile(__dirname + '/public/blog.html');
});
app.get('/contact.html', (req, res) => {
  res.status(210).sendFile(__dirname + '/public/contact.html');
});
app.get('/main.html', (req, res) => {
  res.status(210).sendFile(__dirname + '/public/main.html');
});
app.get('/project-single.html', (req, res) => {
  res.status(210).sendFile(__dirname + '/public/project-single.html');
});
app.get('/projects.html', (req, res) => {
  res.status(210).sendFile(__dirname + '/public/projects.html');
});
app.get('/serviceshtml', (req, res) => {
  res.status(210).sendFile(__dirname + '/public/services.html');
});
app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Servidor Express iniciado en el puerto ${port}`);
});