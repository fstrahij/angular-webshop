import { Component } from '@angular/core';

@Component({
	selector: 'loader',
	template: `<div class="mat-spinner-container">
        <mat-spinner class="mat-spinner" mode="indeterminate"></mat-spinner>        
    </div>`,
    styleUrls: ['./loader.component.scss']
})

export class LoaderComponent {
	constructor(){}
}