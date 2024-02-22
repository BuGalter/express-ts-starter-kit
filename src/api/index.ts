import express, { Application, Response, Request } from 'express';
import Joi from 'joi';
import { apiConfig } from './config';
import { logger } from './logger';

const init = () => {
  /**
   * The `init` function sets up a REST API server with a default
   * port of 3000 if not specified in the
   * environment variables.
   */
  const PORT = apiConfig.port;

  const app: Application = express();

  // ... your REST API routes will go here

  app.get('/api/:query', (req: Request, res: Response) => {
    /**
     * This part of the code sets up a route in the REST API server
     * using Express.
     * Specifically, it defines a GET endpoint at '/api/:query' where ':query'
     * is a dynamic parameter that can be accessed in the
     *  request object (`req.params.query`).
     */
    const schema = Joi.object({
      query: Joi.string().guid().required(),
    });

    const { error, value } = schema.validate(req.params);

    if (error) {
      console.log(error.details[0].message);
      return res.status(400).json({ error: error.details[0].message });
    }

    // Process the valid request
    // ...

    res.json({ message: `Your qury string ${value.query}` });
  });

  app.listen(PORT, () => logger.info(` REST API server ready at: ${PORT}`));
};

export { init };
