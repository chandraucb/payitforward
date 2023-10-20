const { Types } = require("mongoose");
const { User, Post, Project, Organization, Event } = require('../models');
const { signToken } = require('../utils/auth');

const { GraphQLScalarType, Kind } = require('graphql');

const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value) {
        if (value instanceof Date) {
            return value;
        }
        throw Error('GraphQL Date Scalar serializer expected a `Date` object');
    },
});

const resolvers = {
    //get routes
    Date: dateScalar,
    Query: {
        users: async () => {
            const users = await User.find().populate('events').lean();
            return users;
        },
        user: async (parent, arg, context) => {
            return User.findOne({ username: context.user.username }).populate('events').lean();
        },
        events: async () => {
            const events = await Event.find();
            return events;
        },
        event: async () => {
            const events = await Event.find();
            return events;
        },
        posts: async () => {
            const posts = await Post.find().populate('user');
            return posts;
        },
        post: async (parent, { id }) => {
            const post = await Post.findOne(
                { _id: new Types.ObjectId(id) }).populate('user');
            return post;
        },
        //get all projects
        projects: async () => {
            const projects = await Project.find().populate('sponsors').populate('volunteers').populate('schedule').lean()
            return projects;
        },
        //get one project
        project: async (parent, { id }) => {
            const project = await Project.findOne(
                { _id: new Types.ObjectId(id) }).populate('sponsors').populate('volunteers').populate('schedule').lean()
            return project;
        },
        //get all organizations
        organizations: async () => {
            const organizations = await Organization.find().populate('contactInfo');
            return organizations;
        },
        //get one organization
        organization: async (parent, { id }) => {
            const organization = await Organization.findOne(
                { _id: new Types.ObjectId(id) }).populate('contactInfo');
            return organization;
        }
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

        //add a post
        addEvent: async (parent, { title, eventStart, eventEnd }, context) => {
            if (!context.user) {
                throw new AuthenticationError('You need to be logged in!');
            }
            const event = await Event.create({title,eventStart,eventEnd});

            if (!event) {
                throw new Error('Unable to create Event');
            }

            return event;
        },
        //Add user event
        updateUserEvent: async (parent, { id }, context) => {
            if (!context.user) {
                throw new AuthenticationError('You need to be logged in!');
            }
            const user = await User.findOneAndUpdate(
                { _id: new Types.ObjectId(context.user._id)},
                { $addToSet: { events:[new Types.ObjectId(id)] } },
                { new: true }
            ).populate('events');

            return user;
        },

        //Add user event
        removeUserEvent: async (parent, { id }, context) => {
            if (!context.user) {
                throw new AuthenticationError('You need to be logged in!');
            }
            const user = await User.findOneAndUpdate(
                { _id: new Types.ObjectId(context.user._id)},
                { $pull: { events:new Types.ObjectId(id) } },
                { new: true }
            ).populate('events');

            return user;
        },
        //add a post
        addPost: async (parent, { caption, date }, context) => {
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
        //update a post
        updatePost: async (parent, { caption, date }, context) => {
            if (!context.user) {
                throw new AuthenticationError('You need to be logged in!');
            }
            const post = await Post.findOneAndUpdate(
                { _id: new Types.ObjectId(id) },
                { $set: { caption, date } },
                { new: true }
            );
        },
        //delete a post
        deletePost: async (parent, { id }, context) => {
            if (!context.user) {
                throw new AuthenticationError('You need to be logged in!');
            }
            const post = await Post.findOneAndDelete(
                { _id: new Types.ObjectId(id) }
            );
        },
        //add a project
        addProject: async (parent, { name, description, address, goal }, context) => {
            if (!context.user) {
                throw new AuthenticationError('You need to be logged in!');
            }
            const project = await Project.create({
                name,
                description,
                address,
                goal,
                sponsor: context.user._id
            });

            if (!project) {
                throw new Error('Unable to create project');
            }

            return project;
        },
        //update a project
        updateProject: async (parent, { name, description, address, goal }, context) => {
            if (!context.user) {
                throw new AuthenticationError('You need to be logged in!');
            }
            const project = await Project.findOneAndUpdate(
                { _id: new Types.ObjectId(id) },
                { $set: { name, description, address, goal } },
                { new: true }
            );
        },
        //delete a project
        deleteProject: async (parent, { id }, context) => {
            if (!context.user) {
                throw new AuthenticationError('You need to be logged in!');
            }
            const project = await Project.findOneAndDelete(
                { _id: new Types.ObjectId(id) }
            );
        },
        //add an organization
        addOrganization: async (parent, { name, description, address, link, goal }, context) => {
            if (!context.user) {
                throw new AuthenticationError('You need to be logged in!');
            }
            const organization = await Organization.create({
                name,
                description,
                address,
                link,
                goal,
                contactInfo: context.user._id
            });

            if (!organization) {
                throw new Error('Unable to create organization');
            }

            return organization;
        },
        //update an organization
        updateOrganization: async (parent, { name, description, address, link, goal }, context) => {
            if (!context.user) {
                throw new AuthenticationError('You need to be logged in!');
            }
            const organization = await Organization.findOneAndUpdate(
                { _id: new Types.ObjectId(id) },
                { $set: { name, description, address, link, goal } },
                { new: true }
            );
        },
        //delete an organization
        deleteOrganization: async (parent, { id }, context) => {
            if (!context.user) {
                throw new AuthenticationError('You need to be logged in!');
            }
            const organization = await Organization.findOneAndDelete(
                { _id: new Types.ObjectId(id) }
            );
        }
        /*
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
        }*/

    },

};

module.exports = resolvers;