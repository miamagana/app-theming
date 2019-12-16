import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppComponent } from './containers/app.component';
import { BodyComponent } from './components/body/body.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, AppComponent, BodyComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    ColorPickerModule,
  ],
})
export class CoreModule {}
