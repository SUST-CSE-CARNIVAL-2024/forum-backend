const Workspace = require("./baseConnection").Workspace;
const data = require("../business_logic/forum_data");

class ForumWorkspace extends Workspace {
    constructor() {
        super();
    }

    getAllForumstemp = async function () {
        let all_forums = await data.forums;
        return {
            success: true,
            data: forums,
        };
    }

    getAllForums = async function () {
        const query = `SELECT * FROM forum`;
        const params = [];
        const result = await this.query(query, params);
        return result;
    };
    //now write the addForum method that will take a forum object for the forum.js api controller
    addForum = async function (forum) {
        const query = `INSERT INTO "forum" (forum_id, forum_text, user_id) VALUES ($1, $2, $3)`;
        const params = [forum.forum_id, forum.forum_text, forum.user_id];
        const result = await this.query(query, params);
        return result;
    };

    addForumTemp = async function (forum) {
        let all_forums = await data.forums;
        all_forums.push(forum);
        return {
            success: true,
            data: forum,
        };
    }


    getForumByIdTemp = async function (forum_id) {
        let all_forums = await data.forums;
        //now find the forum with the given id
        let forum = all_forums.find((frm) => {
            return frm.forum_id === parseInt(forum_id);
        });
        console.log(forum)
        if (forum) {
            return {
                success: true,
                fetched: true,
                data: forum,
            };
        } else {
            return {
                success: true,
                fetched: false,
                data: {
                    message: `forum with id: ${forum_id} was not found`,
                },
            };
        }
    }

    //write the getForum method for the forum.js api controller
    getForumById = async function (forum_id) {
        const query = `SELECT forum_text,user_id FROM "forum" WHERE forum_id = $1`;
        const params = [forum_id];
        const result = await this.query(query, params);
        if (result.success) {
            //check if the results is empty
            if (result.data.length === 0) {
                return {
                    success: true,
                    fetched: false,
                    data: {
                        message: `forum with id: ${forum_id} was not found`,
                    },
                };
            } else {
                return {
                    success: true,
                    fetched: true,
                    data: {
                        forum_id: parseInt(forum_id),
                        forum_text: result.data[0].forum_text,
                        forum_user: {
                            user_id: parseInt(result.data[0].user_id),
                        },
                    },
                };
            }
        }
        return result;
    };

    updateForumTemp = async function (forum_id, forum) {
        let all_forums = await data.forums;
        let index = all_forums.findIndex((frm) => {
            return frm.forum_id === parseInt(forum_id);
        });
        if (index !== -1) {
            all_forums[index] = forum;
            return {
                success: true,
                data: forum,
            };
        } else {
            return {
                success: true,
                data: {
                    message: `forum with id: ${forum_id} was not found`,
                },
            };
        }
    }

    deleteForum = async function (forum_id) {
        const query = `DELETE FROM "forum" WHERE forum_id = $1`;
        const params = [forum_id];
        const result = await this.query(query, params);
        return result;
    };

    deleteForumTemp = async function (forum_id) {
        let all_forums = await data.forums;
        let index = all_forums.findIndex((frm) => {
            return frm.forum_id === parseInt(forum_id);
        });
        if (index !== -1) {
            let del_forum = all_forums[index];
            all_forums.splice(index, 1);
            console.log(del_forum);
            return {
                success: true,
                data: {
                    message: `forum with id: ${forum_id} was deleted`,
                    forum: del_forum,
                },
            };
        } else {
            return {
                success: true,
                data: {
                    message: `forum with id: ${forum_id} was not found`,
                },
            };
        }
    }

    getRepliesByForumId = async function (forum_id) {
        const query = `SELECT * FROM "forum_reply" WHERE forum_id = $1`;
        const params = [forum_id];
        const result = await this.query(query, params);
        return result;
    };

    addReply = async function (forum_id, reply) {
        const query = `INSERT INTO "forum_reply" (forum_id, reply_text, user_id) VALUES ($1, $2, $3)`;
        const params = [forum_id, reply.reply_text, reply.user_id];
        const result = await this.query(query, params);
        return result;
    };

    addReplyTemp = async function (forum_id, reply) {
        let all_replies = await data.replies;
        reply.forum_id = parseInt(forum_id);
        all_replies.push(reply);
        return {
            success: true,
            data: reply,
        };
    }

    updateReply = async function (forum_id, reply_id, reply) {
        const query = `UPDATE "forum_reply" SET reply_text = $1 WHERE forum_id = $2 AND reply_id = $3`;
        const params = [reply.reply_text, forum_id, reply_id];
        const result = await this.query(query, params);
        return result;
    };

    updateReplyTemp = async function (forum_id, reply_id, reply) {
        let all_replies = await data.replies;
        let index = all_replies.findIndex((reply) => {
            return reply.forum_id === parseInt(forum_id) && reply.reply_id === parseInt(reply_id);
        });
        if (index !== -1) {
            all_replies[index] = reply;
            return {
                success: true,
                data: reply,
            };
        } else {
            return {
                success: true,
                data: {
                    message: `reply with id: ${reply_id} was not found`,
                },
            };
        }
    }

    deleteReply = async function (forum_id, reply_id) {
        const query = `DELETE FROM "forum_reply" WHERE forum_id = $1 AND reply_id = $2`;
        const params = [forum_id, reply_id];
        const result = await this.query(query, params);
        return result;
    };

    getRepliesByForumIdTemp = async function (forum_id) {
        let all_replies = await data.replies;
        let replies = all_replies.filter((reply) => {
            return reply.forum_id === parseInt(forum_id);
        });
        return {
            success: true,
            data: replies,
        };
    }

    deleteReplyTemp = async function (forum_id, reply_id) {
        let all_replies = await data.replies;
        let index = all_replies.findIndex((reply) => {
            return reply.forum_id === parseInt(forum_id) && reply.reply_id === parseInt(reply_id);
        });
        if (index !== -1) {
            let del_reply = all_replies[index];
            all_replies.splice(index, 1);
            return {
                success: true,
                data: {
                    message: `reply with id: ${reply_id} was deleted`,
                    reply: del_reply,
                },
            };
        } else {
            return {
                success: true,
                data: {
                    message: `reply with id: ${reply_id} was not found`,
                },
            };
        }
    }


}
exports.ForumWorkspace = ForumWorkspace;
