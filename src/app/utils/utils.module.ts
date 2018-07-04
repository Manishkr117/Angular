import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatemePipe } from 'src/app/rateme.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RatemePipe],
  exports:[RatemePipe]
})
export class    UtilsModule { }
