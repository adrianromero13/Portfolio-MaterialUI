const { Project, Image } = require('../models');
// set up model variable

module.exports = {
  getProjects: async (req, res) => {
    try {
      const project = await Project.find();
      return res.status(200).json(project);
    } catch (error) {
      return res.status(403).json({ error });
    }
  },
};
