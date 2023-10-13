const { User} = require('../models');

module.exports = {
    //get all users
    async getUser(req, res) {
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //get one user
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne();
            res.status(200).json(user);

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' })
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //get create a new user 
    async createUser(req, res) {
        try {
            const newUser = await User.create(req.body);
            // use create method
            res.status(200).json(newUser);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    //update a user
    async updateUser(req, res) {
        try {
            user = await User.findOneAndUpdate(
                { _id:req.params._id },
                { $set: req.body},
                { runValidators: true, new: true }
            );
            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' })
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //delete a user
    async deleteUser(req, res) {
        try{
            const user = await User.findOne({ _id: req.params._id });
            console.log({_id:req.params._id})
            if(!user){
                return res.status(404).json({message: 'No user with that ID'})
            }
            //await user.remove();
            res.json({message: 'User deleted!'})
        }catch(err){
            res.status(500).json(err);
            console.log(err);
        }
    }

};