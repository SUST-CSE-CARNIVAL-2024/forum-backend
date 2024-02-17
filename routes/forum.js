const router = require("express-promise-router")();

const ForumController = require("../apiController/forum").ForumController;
let forumController = new ForumController();

// add new endpoints here


router.get("/", forumController.getForums);
router.post("/", forumController.addForum);
router.get("/:forum_id", forumController.getForumById);
router.put("/:forum_id", forumController.updateForum);
router.delete("/:forum_id", forumController.deleteForum);
router.get("/:forum_id/replies", forumController.getRepliesByForumId);
router.post("/:forum_id/replies", forumController.addReply);
router.put("/:forum_id/replies/:reply_id", forumController.updateReply);
// router.delete("/:forum_id/replies/:reply_id", forumController.deleteReply);

module.exports = router;
