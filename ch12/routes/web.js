import express from 'express';
const router = express.Router();
import {home_controller} from '../controllers/home_controller.js';
import {about_controller} from '../controllers/about_controller.js';
router.get('/', home_controller);
router.get('/about', about_controller);

export default router;