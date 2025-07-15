import express from 'express';
import { protect } from '../middlewares/protect.mjs'; // adjust the path as needed

const router = express.Router();

// ✅ Protected Route
router.get('/dashboard', protect, (req, res) => {
  res.json({message:`Welcome to your dashboard, ${req.session.user.email}`});
});

// ✅ Another Protected Route
router.get('/profile', protect, (req, res) => {
  res.json({message:`This is the profile for user ID: ${req.session.user.id}`});
});

export default router;