module.exports = (postId, posts) => {
    class Post {
        constructor(title, content) {
            this.id = postId++;
            this.title = title;
            this.content = content;
            this.comments = [];
        }
    }

    return Post;
};
