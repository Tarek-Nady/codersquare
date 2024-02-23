import { Datastore } from "..";
import { User, Post, Like, Comment} from "../../types";

export class InMemoryDataStore implements Datastore{
    private users: User[] = [];
    private posts: Post[] = [];
    private comments: Comment[] = [];
    private likes: Like[] = [];

    createUser(user: User): void {
        this.users.push(user);
    }
    
    getUserByEmail(email: string): User | undefined {
        return this.users.find(u=> u.email == email);
    }
    
    getUserByUsername(userName: string): User | undefined {
        return this.users.find(u => u.userName === userName);
    }
    
    listPosts(): Post[] {
        return this.posts;
    }
    
    createPost(post: Post): void {
        this.posts.push(post);
    }
    
    getPost(id: string): Post | undefined {
        return this.posts.find(u=> u.id === id);    
    }
    
    deletePost(id: string): void {
        const index = this.posts.findIndex(u => u.id === id);
        if(index == -1){
            return;
        }
        this.posts.splice(index,1);
    }
    
    createLike(like: Like): void {
        this.likes.push(like);        
    }
    
    createComment(comment: Comment): void {
        this.comments.push(comment);
    }


    listComment(postId: String): Comment[] {
        return this.comments.filter(u => u.postId === postId);
    }

    deleteComment(id: string): void {
       const index = this.comments.findIndex(u => u.id === id);
        if(index == -1){
            return;
        }
        this.comments.splice(index,1);
    }
    
}