const router = require("express-promise-router")();

const ForumController = require("../apiController/forum").ForumController;
let forumController = new ForumController();

// add new endpoints here
// router.post("/register", userController.register);
// router.post("/", userController.addUser);
// router.get("/:wallet_id", userController.getWallet);
// router.put("/:wallet_id", userController.addWalletBalance);

router.get("/", forumController.getForums);

module.exports = router;
