module.exports = (Post, posts) => {
    return {
        getAllPosts: (req, res) => {
            res.render('index', { posts });
        },
        getPostById: (req, res) => {
            const id = parseInt(req.params.id);
            const post = posts.find(post => post.id === id);
            if (!post) {
                res.redirect('/');
            } else {
                res.render('post', { post });
            }
        },
        createPost: (req, res) => {
            const { title, content } = req.body;
            const post = new Post(title, content);
            posts.push(post);
            res.redirect('/');
        },
        createComment: (req, res) => {
            const id = parseInt(req.params.id);
            const comment = req.body.comment;
            const post = posts.find(post => post.id === id);
            if (post) {
                post.comments.push(comment);
            }
            res.redirect(`/post/${id}`);
        },
        getEditPostForm: (req, res) => {
            const id = parseInt(req.params.id);
            const post = posts.find(post => post.id === id);
            if (post) {
                res.render('edit', { post });
            } else {
                res.redirect('/');
            }
        },
        editPost: (req, res) => {
            const id = parseInt(req.params.id);
            const { title, content } = req.body;
            const post = posts.find(post => post.id === id);
            if (post) {
                post.title = title;
                post.content = content;
            }
            res.redirect(`/post/${id}`);
        },
        deletePost: (req, res) => {
            const id = parseInt(req.params.id);
            const index = posts.findIndex(post => post.id === id);
            if (index !== -1) {
                posts.splice(index, 1);
            }
            res.redirect('/');
        }
    };
};
