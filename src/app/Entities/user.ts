export class User {

	dni: string;
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	type: string;

	//status ?

	constructor(data : Partial<User>){
        Object.assign(this, data);
	}
}
