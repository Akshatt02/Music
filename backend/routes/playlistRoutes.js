import express from 'express';
import { createPlaylist, getPlaylist } from '../controllers/playlistController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create', protect, createPlaylist);
router.get('/:id', protect, getPlaylist);

export default router;