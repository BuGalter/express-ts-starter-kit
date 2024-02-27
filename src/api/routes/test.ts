import { NextFunction, Request, Response, Router } from 'express';
import Joi from 'joi';
import { HttpStatusCodes } from '../enums';

const router: Router = Router();

router.get('/:query', (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    query: Joi.string().required(),
  });

  const { error, value } = schema.validate(req.params);

  if (error) {
    console.log(error.details[0].message);
    next();
    return res
      .status(HttpStatusCodes.NOT_FOUND)
      .json({ error: error.details[0].message });
  }

  res
    .status(HttpStatusCodes.OK)
    .json({ message: `Your query string ${value.query}` });
});

export const TestRoutes: Router = router;
