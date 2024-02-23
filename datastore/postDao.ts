import { Post } from "..";

export interface postDao{
    listPosts():Post[];
    createPost(post:Post):void;
    getPost(id: string):Post|undefined;
    deletePost(id:string):void;
}