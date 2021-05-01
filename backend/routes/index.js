import express from 'express';
import filesRoute from './files.route';
import authRoute from './auth.route';
import userRoute from './user.route';
import testcaseRoute from './testcase.route';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/files/generate',
    route: filesRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/testcases',
    route: testcaseRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router
