const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        console.log("Request body:", req.body); // Log the incoming request body

        const newComment = await Comment.create({
            text: req.body.text,
            user_id: req.session.user_id,
            project_id: req.body.project_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        console.error("Error while creating comment:", err); // Log any errors that occur
        res.status(400).json(err);
    }
});

module.exports = router;