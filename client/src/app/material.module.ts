import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    imports: [
        MatToolbarModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatGridListModule,
    ],
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatGridListModule,
    ],
})
export class MaterialModule {}