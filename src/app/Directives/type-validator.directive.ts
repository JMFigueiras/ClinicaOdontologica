import { Directive, Input, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTypeValidator]'
})
export class TypeValidatorDirective {

	private admittedTypes: string[];

	@Input() set appTypeValidator(type: string[]) {
    	this.admittedTypes = type;
	}

	constructor(private element: ElementRef, private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

	ngOnInit() {
	    
	    if (this.checkTypes()) {
	      this.viewContainer.createEmbeddedView(this.templateRef);
	    } 
	    else {
	      this.viewContainer.clear();
	    }
	}

	private checkTypes(): Boolean{
		let ret: Boolean = false;

		const token = localStorage.getItem('token');
		const tokenInfo = JSON.parse(token);


		if(this.admittedTypes && tokenInfo){
			const type = tokenInfo['type'];

			this.admittedTypes.forEach(r => {
				if(type === r){
					ret = true;
				}
			});
		}

		return ret;
	}

}
