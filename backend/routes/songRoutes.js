import express from 'express';
import { createSong, searchSongs, getSongsByMood, likeSong } from '../controllers/songController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', createSong);
router.get('/search', searchSongs);
router.post('/like/:id', protect, likeSong);
router.get('/mood', getSongsByMood);

export default router;