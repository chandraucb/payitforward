const { Types } = require("mongoose");
const { Matchup, Tech, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    //get routes
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, arg, context) => {
            return User.findOne({ username: context.user.username });
        },
        matchups: async (parent, args, context) => {
            if (context.user) {
                const matchups = await Matchup.find();
                return matchups;
            } 
        },
        singleMatchup: async (parent, { id }) => {
            const matchup = await Matchup.findOne({ _id: new Types.ObjectId(id) });

            return matchup;
        },
        techs: async () => {
            const techs = await Tech.find();

            return techs;
        },
        posts: async () => {
            const posts = await Post.find().populate('user');

            return posts;
        },
        
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
        
            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }
        
            const correctPw = await user.isCorrectPassword(password);
        
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
        
            const token = signToken(user);
        
            return { token, user };
        },
        addPost : async (parent, { caption, date }, context) => {
            if (!context.user) {
                throw new AuthenticationError('You need to be logged in!');
            }
            const post = await Post.create({
                caption,
                date,
                user_id: context.user._id
            });

            if (!post) {
                throw new Error('Unable to create post');
            }

            return post;
        },

        addVote: async (parent, { id, techNum }, context) => {
            if (!context.user) {
                throw new AuthenticationError('You need to be logged in!');
            }
            const vote = await Matchup.findOneAndUpdate(
                { _id: new Types.ObjectId(id) },
                { $inc: { [`tech${techNum}_votes`]: 1 } },
                { new: true }
            );
          
            if (!vote) {
                throw new Error('Unable to vote on matchup');
            }
          
            return vote;
        },
        addMatchup: async (parent, { tech1, tech2 })  => {
            const matchup = await Matchup.create({
                tech1,
                tech2,
            });

            if (!matchup) {
                throw new Error('Unable to create matchup');
            }

            return matchup;
        }
    },
};

module.exports = resolvers;