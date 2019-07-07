export class Resenia {

	public dni: string;
	public fecha: string;
	public hora: string;
	public texto: string;

	constructor(data : Partial<Resenia>){
        Object.assign(this, data);
	}
}
