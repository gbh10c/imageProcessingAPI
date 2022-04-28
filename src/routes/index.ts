import express from 'express';
const routes = express.Router();

routes.use('/', (req, res) => {
  res.send("HOME PAGE");
})

export default routes;