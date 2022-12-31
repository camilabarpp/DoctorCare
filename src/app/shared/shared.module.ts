import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedRoutingModule } from 'src/app/shared/shared-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  exports: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    MatTabsModule,
  ],
})
export class SharedModule {}
