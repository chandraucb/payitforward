const db = require('../config/connection');
const { User, Organization, Project, Post } = require('../models');
const userSeeds = require('./userSeeds.json');

const organizationData = require('./organizationSeeds.json');

db.once('open', async () => {
  await User.deleteMany({});

  await User.create(userSeeds);
  await Organization.create(organizationData);

  // for (let i = 0; i < organizationData.length; i++) {
  //   const user = await User.findOne(
  //     { email: userSeeds[i].email }
  //   );
  //   const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
  // }

  process.exit(0);
});
