import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { LoaderComponent } from '../../components/loader/loader.component';

@Directive({
  selector: '[appLoading]'
})
export class LoadingDirective {
  @Input() 
  set appLoading(isLoading: boolean){
    this.vcRef.clear();
    isLoading ? this.vcRef.createComponent(LoaderComponent) : this.vcRef.createEmbeddedView(this.templateRef);
  };

  constructor(private templateRef: TemplateRef<any>,
              private vcRef: ViewContainerRef) { }

}
