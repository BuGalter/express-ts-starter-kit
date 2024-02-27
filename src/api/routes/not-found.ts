import { Request, Response, Router } from 'express';
import { logger } from '../logger';
import { HttpStatusCodes } from '../enums';

const router: Router = Router();

router.get('*', (req: Request, res: Response) => {
  logger.debug('Обработка всех оставшихся маршрутов');
  res
    .status(HttpStatusCodes.NOT_FOUND)
    .json({ message: 'Wrong path. Not found!' });
});

export const NotFoundRoute: Router = router;
