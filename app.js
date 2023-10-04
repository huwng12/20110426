const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const posts = [];
let postId = 1;

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Models
const Post = require('./models/post')(postId, posts);

// Controllers
const postController = require('./controllers/postController')(Post, posts);

// Routes
app.get('/', postController.getAllPosts);
app.get('/post/:id', postController.getPostById);
app.post('/post', postController.createPost);
app.post('/post/:id/comment', postController.createComment);
app.get('/post/:id/edit', postController.getEditPostForm);
app.post('/post/:id/edit', postController.editPost);
app.get('/post/:id/delete', postController.deletePost);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
