import expres, {RequestHandler, request, response} from 'express'
import {db} from './datastore'

const app = expres();
app.use(expres.json());

app.get('/posts', (request, response)=>{
    response.send({posts: db.listPosts()})
});


app.post('/posts',(req,res)=>{
    const post = req.body;
    db.createPost(post);
    res.sendStatus(200);
});
app.listen(3000);


