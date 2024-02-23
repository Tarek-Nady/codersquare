import { User } from "..";

export interface userDao{
    createUser(user:User):void;
    getUserByEmail(email:string):User|undefined;
    getUserByUsername(userName:string):User|undefined;

}