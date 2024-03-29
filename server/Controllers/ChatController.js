import ChatModel from '../Models/ChatModel.js';

export const createChat = async(req, res) => {
    const newChat = new ChatModel({
        members: [req.body.senderId, req.body.receiverId],
    });

    try{
        const result = await newChat.save();
        res.status(200).json(result);
    } catch(err){
        res.status(500).json(err);
    }
}

export const userChats = async(req, res) => {
    try{
        const chat = await ChatModel.find({
            members: {$in: req.params.userId}
        })
    } catch(err){
        res.status(500).json(err);
    }
}