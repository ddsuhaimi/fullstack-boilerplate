import { Router } from 'express';

import { getAll, getOne, editOne, deleteOne } from '@/controllers/user.controller';
import { checkJwt } from '@/middlewares/checkJwt';
import { checkRole } from '@/middlewares/checkRole';
import { validatorEditUser } from '@/middlewares/validations/user.middleware.validation';

const router = Router();

router.get('/', [checkJwt, checkRole(['ADMINISTRATOR'])], getAll);
// router.get('/', [checkJwt], getAll);

router.get('/:id([0-9]+)', [checkJwt, checkRole(['STANDARD'])], getOne);

router.patch('/:id([0-9]+)', [checkJwt, checkRole(['STANDARD']), validatorEditUser], editOne);

router.delete('/:id([0-9]+)', [checkJwt, checkRole(['STANDARD'])], deleteOne);

export default router;
