import { Component } from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private layoutService: LayoutService) {}

  changePrimaryColor(color: string): void {
    this.layoutService.changePrimaryColor(color);
  }

  changeSecondaryColor(color: string): void {
    this.layoutService.changeSecondaryColor(color);
  }

  changeIconSize(size: string): void {
    console.log(size);
    this.layoutService.changeIconSize(size);
  }
}
