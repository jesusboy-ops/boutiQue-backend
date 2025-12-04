import express from 'express';
import {
  createOrder,
  getUserOrders,
  getOrderById,
  getAllOrders,
  updateOrderStatus
} from '../controllers/orderController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .post(protect, createOrder)
  .get(protect, admin, getAllOrders);

router.get('/myorders', protect, getUserOrders);

router.route('/:id')
  .get(protect, getOrderById);

router.put('/:id/status', protect, admin, updateOrderStatus);

export default router;
