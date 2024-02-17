const ForumWorkspace = require("../postgres/forum").ForumWorkspace;
const forumWorkspace = new ForumWorkspace();

class ForumController {
    constructor() { }

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
        const result = await forumWorkspace.addForumTemp(forum);
        if (!result.success)
            return res
                .status(500)
                .json({ code: "E0001", description: "Internal Error" });
        else {
            console.log("forum added");
            return res.status(201).json(forum);
        }
    };

    getForumById = async (req, res, next) => {
        const forum_id = req.params.forum_id;
        const result = await forumWorkspace.getForumByIdTemp(forum_id);
        if (!result.success)
            return res
                .status(500)
                .json({ code: "E0001", description: "Internal Error" });
        else {
            console.log("forum fetched");
            return res.status(200).json(result.data);
        }
    };
    updateForum = async (req, res, next) => {
        const forum_id = req.params.forum_id;
        const forum = req.body;
        const result = await forumWorkspace.updateForumTemp(forum_id, forum);
        if (!result.success)
            return res
                .status(500)
                .json({ code: "E0001", description: "Internal Error" });
        else {
            console.log("forum updated");
            return res.status(200).json(forum);
        }
    };

    deleteForum = async (req, res, next) => {
        const forum_id = req.params.forum_id;
        const result = await forumWorkspace.deleteForumTemp(forum_id);
        if (!result.success)
            return res
                .status(500)
                .json({ code: "E0001", description: "Internal Error" });
        else {
            console.log("forum deleted");
            return res.status(200).json(result.data.forum);
        }
    };

    getRepliesByForumId = async (req, res, next) => {
        const forum_id = req.params.forum_id;
        const result = await forumWorkspace.getRepliesByForumIdTemp(forum_id);
        if (!result.success)
            return res
                .status(500)
                .json({ code: "E0001", description: "Internal Error" });
        else {
            console.log("replies fetched");
            return res.status(200).json(result.data);
        }
    }

    addReply = async (req, res, next) => {
        const forum_id = req.params.forum_id;
        const reply = req.body;
        const result = await forumWorkspace.addReplyTemp(forum_id, reply);
        if (!result.success)
            return res
                .status(500)
                .json({ code: "E0001", description: "Internal Error" });
        else {
            console.log("reply added");
            return res.status(201).json(reply);
        }
    }

    updateReply = async (req, res, next) => {
        const forum_id = req.params.forum_id;
        const reply_id = req.params.reply_id;
        const reply = req.body;
        const result = await forumWorkspace.updateReplyTemp(forum_id, reply_id, reply);
        if (!result.success)
            return res
                .status(500)
                .json({ code: "E0001", description: "Internal Error" });
        else {
            console.log("reply updated");
            return res.status(200).json(reply);
        }
    }

    deleteReply = async (req, res, next) => {
        const forum_id = req.params.forum_id;
        const reply_id = req.params.reply_id;
        const result = await forumWorkspace.deleteReplyTemp(forum_id, reply_id);
        if (!result.success)
            return res
                .status(500)
                .json({ code: "E0001", description: "Internal Error" });
        else {
            console.log("reply deleted");
            return res.status(200).json(result.data.reply);
        }
    }
    

}
exports.ForumController = ForumController;
