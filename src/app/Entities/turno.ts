export class Turno {

	public codigo: string;
	public dni: string;
	public especialista: string;
	public fecha: string;
	public hora: string;
	public estado: string;

	constructor(data : Partial<Turno>){
        Object.assign(this, data);
	}

}
