import { Elysia } from 'elysia';
import { registerUser, loginUser, getPosts, createPost } from './controller/bookController';
import { authMiddleware } from './middleware/authMiddleware';

const app = new Elysia();

app.post('/register', registerUser);
app.post('/login', loginUser);

// Public routes
app.get('/posts', getPosts);

// Apply auth middleware globally for protected routes
authMiddleware(app);

// Protected route for creating posts
app.post('/posts', createPost);

app.listen(3000);
