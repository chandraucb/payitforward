const router = require('express').Router();

const matchupRoutes = require('./matchup-routes');
const techRoutes = require('./tech-routes.js');
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const projectRoutes = require('./projectRoutes');
const organizationRoutes = require('./organizationRoutes');

router.use('/matchup', matchupRoutes);
router.use('/tech', techRoutes);
router.use('/users', userRoutes);
// router.use('/posts', postRoutes);
// router.use('/projects', projectRoutes);
// router.use('/organizations', organizationRoutes);


module.exports = router;
