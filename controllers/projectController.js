const { Project, Image } = require('../models');

module.exports = {
  getProjects: async (req, res) => {
    try {
      const projects = await Project.find();
      return res.status(200).json(projects);
    } catch (error) {
      return res.status(403).json({ error });
    }
  },
};
