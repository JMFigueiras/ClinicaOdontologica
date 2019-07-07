export class Encuesta {

	public dni: string;
	public especialista: string;
	public clinica: string;
	public texto: string;

	constructor(data : Partial<Encuesta>){
        Object.assign(this, data);
	}
}
