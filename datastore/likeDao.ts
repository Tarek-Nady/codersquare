import { Like } from "..";

export interface likeDao{
    createLike(like: Like): void;
}