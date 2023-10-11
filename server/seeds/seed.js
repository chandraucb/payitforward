const db = require('../config/connection');
const { User, Organization, Tech } = require('../models');
const userSeeds = require('./userSeeds.json');

const techData = require('./techData.json');
const organizationData = require('../models/Organizations');

db.once('open', async () => {
  await Tech.deleteMany({});
  await User.deleteMany({});

  await User.create(userSeeds);
  await Organization.create(organizationData);

  // for (let i = 0; i < organizationData.length; i++) {
  //   const user = await User.findOne(
  //     { email: userSeeds[i].email }
  //   );
  //   const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
  // }

  const technologies = await Tech.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});
