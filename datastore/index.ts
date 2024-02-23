import {userDao} from "./userDao";
import {postDao} from "./postDao";
import {likeDao} from "./likeDao"
import { commentDao } from "./commentDao";
import { InMemoryDataStore } from "./memorydb";

export interface Datastore extends userDao, postDao, likeDao, commentDao{}

export const db  = new InMemoryDataStore();

