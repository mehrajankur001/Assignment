import express from 'express'
import { getProductById } from '../controllers/product.js';
const router = express.Router();

router.route('/getById').get(getProductById)

export default router