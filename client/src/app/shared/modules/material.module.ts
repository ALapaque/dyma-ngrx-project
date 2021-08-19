import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

const MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatIconModule,
  MatGridListModule
];

@NgModule({
  declarations: [],
  imports: [ ...MODULES ],
  exports: [ ...MODULES ]
})
export class MaterialModule {
}
