import { Router } from 'express';
import { TestRoutes } from './test';
import { NotFoundRoute } from './not-found';

const router: Router = Router();

router.use('/test', TestRoutes);
router.use(NotFoundRoute);

export const MainRouter: Router = router;
