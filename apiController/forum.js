const ForumWorkspace = require("../postgres/forum").ForumWorkspace;
const forumWorkspace = new ForumWorkspace();

class ForumController {
  constructor() {}

  getForums = async (req, res, next) => {
    const result = await forumWorkspace.getAllForumstemp();
    if (!result.success)
      return res
        .status(500)
        .json({ code: "E0001", description: "Internal Error" });
    else {
      console.log("forums fetched");
      return res.status(200).json(result.data);
    }
  };

  addForum = async (req, res, next) => {
    const forum = req.body;
    const result = await ForumWorkspace.addForum(forum);
    if (!result.success)
      return res
        .status(500)
        .json({ code: "E0001", description: "Internal Error" });
    else {
      console.log("forum added");
      return res.status(201).json(forum);
    }
  };

}
exports.ForumController = ForumController;
