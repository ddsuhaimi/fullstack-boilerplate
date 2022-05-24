import { Router } from 'express';

// import {
//   // login,
// //   register,
// //   changePassword,
// //   getUserBasedOnToken,
// //   refreshAccessToken,
//   // refreshAccessToken,
// } from '../../controllers/auth.controller';
import {changePassword, getUserBasedOnToken, login, refreshAccessToken, register} from '@/controllers/auth.controller'
// console.log("second", second)
import { checkJwt } from '@/middlewares/checkJwt';
import {
  validatorLogin,  
  validatorRegister,
  validatorChangePassword,
} from '@/middlewares/validations/auth.middleware.validation';

const router = Router();

router.post('/login', [validatorLogin], login);
router.post('/refresh-token', refreshAccessToken);
router.post('/register', [validatorRegister], register);
router.post('/change-password', [checkJwt, validatorChangePassword], changePassword);
router.get('/me', [checkJwt], getUserBasedOnToken);

export default router;
