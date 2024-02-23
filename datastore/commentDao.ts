import { Comment } from "..";

export interface commentDao{
    createComment(comment : Comment): void ;
    listComment(postId: String):Comment[];
    deleteComment(id: string): void;
}