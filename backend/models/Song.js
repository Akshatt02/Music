import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    youtubeUrl: { type: String, required: true },
    duration: { type: String },
    mood: { type: String },
    thumbnail: { type: String },
}, { timestamps: true });

const Song = mongoose.model('Song', songSchema);
export default Song;