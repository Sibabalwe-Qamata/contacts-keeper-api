import { User } from "../entities/user";
import { UserRepository } from "../../data/repositories/user-repository";

interface UserUsecase {
    CreateUser(user:any):Promise<User>;
    EditUser(user:any):Promise<User>;
    Delete(user:any):Promise<User>;
}

export class UserUsecaseImpl implements UserUsecase {

    userRepo: UserRepository;
    constructor(or: UserRepository){
      this.userRepo = or;
    }
    /**
     * 
     * @param user 
     * @returns 
     */
    CreateUser(user:any):Promise<User>{
        return this.userRepo.CreateUser(user);
    }
    /**
     * 
     * @param user 
     * @returns 
     */
    EditUser(user:any):Promise<User>{
        return this.userRepo.EditUser(user);
    }

    /**
     * 
     * @param user 
     * @returns 
     */
    Delete(user:any):Promise<User>{
        return this.userRepo.Delete(user);
    }
}