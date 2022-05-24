import { Router } from 'express';

import { addOne, deleteOne, editOne, getAll, getAllOwned, getOne } from '@/controllers/post.controller';
import { checkJwt } from '@/middlewares/checkJwt';
import { checkRole } from '@/middlewares/checkRole';

const router = Router();

router.get('/all', [checkJwt, checkRole(['ADMINISTRATOR'])], getAll);

router.get('/', [checkJwt, checkRole(['STANDARD'])], getAllOwned);

router.post('/', [checkJwt, checkRole(['STANDARD'])], addOne);

router.get('/:id', [checkJwt, checkRole(['STANDARD'])], getOne);

router.patch('/:id', [checkJwt, checkRole(['STANDARD'])], editOne);

router.delete('/:id', [checkJwt, checkRole(['STANDARD'])], deleteOne);

export default router;
