const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

// Enhanced CORS configuration
server.use(cors({
  origin: ['http://localhost:3000', 'https://tumichabana.github.io'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

server.use(middlewares);
server.use(router);

server.listen(port,'127.0.0.1', () => {
  console.log(`JSON Server is running on port ${port}`);
});