import mongoose from 'mongoose';

const ChatSchema = mongoose.Schema(
    {
        memebers: {
            type: Array,
        },
    },
    {
        timestamp: true,
    }
)

const ChatModel = mongoose.model('Chat', ChatSchema);
export default ChatModel;