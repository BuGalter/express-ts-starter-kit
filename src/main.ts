import express from 'express';
import 'dotenv/config';
import log4js from 'log4js';

const PORT = parseInt(process.env.PORT) || 3000;

const logger = log4js.getLogger();
logger.level = 'debug';

const app = express();

// ... your REST API routes will go here
app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(PORT, () => logger.info(`REST API server ready at: ${PORT}`));
