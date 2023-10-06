const { Types } = require("mongoose");

const { Matchup, Tech } = require('../models');

const resolvers = {
    Query: {
        matchups: async (parent, args, context) => {
            const matchups = await Matchup.find();

            return matchups;
        },
        singleMatchup: async (parent, { id }) => {
            const matchup = await Matchup.findOne({ _id: new Types.ObjectId(id) });

            return matchup;
        },
        techs: async () => {
            const techs = await Tech.find();

            return techs;
        },
    },
    Mutation: {
        addVote: async (parent, { id, techNum }, context) => {
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
        addMatchup: async (parent, { tech1, tech2})  => {
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