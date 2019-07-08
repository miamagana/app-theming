import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppComponent } from './containers/app.component';
import { BodyComponent } from './components/body/body.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { IconsComponent } from './components/icons/icons.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AppComponent,
    BodyComponent,
    ButtonsComponent,
    IconsComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FlexLayoutModule,
    ColorPickerModule,
  ],
})
export class CoreModule {}
