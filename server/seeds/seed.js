const db = require('../config/connection');
const { User, Tech } = require('../models');
const userSeeds = require('./userSeeds.json');

const techData = require('./techData.json');

db.once('open', async () => {
  await Tech.deleteMany({});
  await User.deleteMany({});

  await User.create(userSeeds);

  const technologies = await Tech.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});
