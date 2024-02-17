forums = [
    {
        forum_id: 1,
        forum_text: "This is a test forum",
        creator_id: 1
    },
    {
        forum_id: 2,
        forum_text: "This is another test forum",
        creator_id: 2
    }

]

replies = [
    {
        reply_id: 1,
        forum_id: 1,
        reply_text: "This is a test reply",
        parent_reply_id: null,
        creator_id: 1
    },
    {
        reply_id: 2,
        forum_id: 1,
        reply_text: "This is another test reply",
        parent_reply_id: 1,
        creator_id: 2
    },
    {
        reply_id: 3,
        forum_id: 2,
        reply_text: "This is a test reply",
        parent_reply_id: null,
        creator_id: 1
    },
    {
        reply_id: 4,
        forum_id: 2,
        reply_text: "This is another test reply",
        parent_reply_id: 3,
        creator_id: 2
    }
]

module.exports = {
    forums,
    replies
}