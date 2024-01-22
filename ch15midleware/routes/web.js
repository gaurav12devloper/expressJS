import express from 'express';
const router = express.Router();
import {home_controller} from '../controllers/homeController.js';
import {about_controller} from '../controllers/aboutController.js';

router.get('/', home_controller); // we want in this folder only to route the page that why i have wriiten code in homecontroller
router.get('/about', about_controller);

export default router;