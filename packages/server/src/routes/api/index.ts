import { Router } from 'express';

import auth from './auth.route';
import post from './post.route';
import user from './user.route';

const router = Router();

router.use('/auth', auth);
router.use('/users', user);
router.use('/posts', post);

export default router;
