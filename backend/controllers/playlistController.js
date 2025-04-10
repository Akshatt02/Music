import Playlist from '../models/Playlist.js';

export const createPlaylist = async (req, res) => {
    const { name, mood, songs } = req.body;

    try {
        const playlist = await Playlist.create({
            name,
            mood,
            user: req.user.id,
            songs: songs || [],
        });

        res.status(201).json(playlist);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create playlist' });
    }
};

export const getPlaylist = async (req, res) => {
    const { id } = req.params;

    try {
        const playlist = await Playlist.findById(id).populate('songs');
        if (!playlist) return res.status(404).json({ error: 'Playlist not found' });

        res.json(playlist);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch playlist' });
    }
};