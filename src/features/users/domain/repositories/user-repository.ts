import { User } from "../entities/user";

export interface UserRepository {
    CreateUser(user:any):Promise<User>;
    EditUser(user:any):Promise<User>;
    Delete(user:any):Promise<User>;
}