import { Router } from 'express';
import apiRouter from './api';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/api', apiRouter);

// Export the base-router
export default router;
