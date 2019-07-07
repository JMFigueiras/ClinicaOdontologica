export class Usuario {

	public dni: number;
	public nombre: string;
	public apellido: string;
	public mail: string;
	public clave: string;
	public tipo: string;
	public estado: string;

	constructor(data : Partial<Usuario>){
        Object.assign(this, data);
	}
}
