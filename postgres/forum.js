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



    //write the getForum method for the forum.js api controller
    getForum = async function (forum_id) {
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


}
exports.ForumWorkspace = ForumWorkspace;
