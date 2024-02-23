import expres, {ErrorRequestHandler, RequestHandler, request, response} from 'express'
import {db} from './datastore'
import { createPostHandler, listPostHandler } from './handlers/postHandlers';

const app = expres();
app.use(expres.json());

app.get('/posts', listPostHandler);
app.post('/posts',createPostHandler);


const errHandler: ErrorRequestHandler = (err, req, res, next) =>{
    console.error('sorry oops error',err);
    res.status(500).send('oops error occured again')
}
app.use(errHandler)
app.listen(3000);




