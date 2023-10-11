const { Organization } = require('../models');

module.exports = {
  async createOrganization({ body }, res) {
    const organization = await Organization.create(body);

    if (!organization) {
      return res.status(400).json({ message: 'Unable to create Organization' });
    }

    res.status(200).json(organization);
  },
  

  async getAllOrganizations(req, res) {
    const allOrganizations = await Organization.find({});

    if (!allOrganizations) {
      return res.status(400).json({ message: 'No Organizations found' });
    }

    res.status(200).json(allOrganizations);
  },
  async getOrganization({ params }, res) {
    const organization = await Organization.findOne({ _id: params.id });

    if (!organization) {
      return res.status(400).json({ message: 'No Organization found by that id' });
    }

    res.status(200).json(organization);
  },
};
