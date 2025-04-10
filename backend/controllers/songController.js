import Song from '../models/Song.js';
import Playlist from "../models/Playlist.js";

export const createSong = async (req, res) => {
    const { title, artist, youtubeUrl, mood, thumbnail, duration } = req.body;

    try {
        const existingSong = await Song.findOne({ title, artist });
        if (existingSong) {
            return res.status(200).json({ message: 'Song already exists', song: existingSong });
        }

        const song = new Song({ title, artist, youtubeUrl, mood, thumbnail, duration });
        await song.save();
        res.status(201).json(song);
    } catch (err) {
        res.status(500).json({ error: 'Failed to add song' });
    }
};

export const searchSongs = async (req, res) => {
    const { query } = req.query;

    if (!query) return res.status(400).json({ error: 'Query parameter is required' });

    try {
        const songs = await Song.find({
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { artist: { $regex: query, $options: 'i' } }
            ]
        });

        res.json(songs);
    } catch (err) {
        res.status(500).json({ error: 'Failed to search songs' });
    }
};

export const getSongsByMood = async (req, res) => {
    const { mood } = req.query;

    if (!mood) return res.status(400).json({ error: 'Mood is required' });

    try {
        const songs = await Song.find({
            mood: { $regex: `^${mood}$`, $options: 'i' }
        });

        res.json(songs);
    } catch (err) {
        res.status(500).json({ error: 'Failed to get songs by mood' });
    }
};

export const likeSong = async (req, res) => {
    const userId = req.user.id;
    const songId = req.params.id;

    try {
        const song = await Song.findById(songId);
        if (!song) return res.status(404).json({ error: 'Song not found' });

        let likedPlaylist = await Playlist.findOne({ user: userId, name: 'Liked Songs' });

        if (!likedPlaylist) {
            likedPlaylist = await Playlist.create({
                name: 'Liked Songs',
                user: userId,
                songs: [],
            });
        }

        if (likedPlaylist.songs.includes(songId)) {
            return res.status(400).json({ message: 'Song already liked' });
        }

        likedPlaylist.songs.push(songId);
        await likedPlaylist.save();

        res.status(200).json({ message: 'Song liked', playlist: likedPlaylist });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};