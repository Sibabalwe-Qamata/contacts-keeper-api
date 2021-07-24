export class User {
    id:string;
    name:string;
    email:string;
    password:string;
    admin:boolean;
    date: Date;

    constructor(args:any){
        this.id = args.id;
        this.name = args.name
        this.email = args.email
        this.password = args.password;
        this.admin = args.admin
        this.date = args.date;
    }

}