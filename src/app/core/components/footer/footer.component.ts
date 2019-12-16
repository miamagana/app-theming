import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Output() primary: EventEmitter<string> = new EventEmitter<string>();
  @Output() secondary: EventEmitter<string> = new EventEmitter<string>();
  @Output() size: EventEmitter<string> = new EventEmitter<string>();
  primaryColor = '#0caddc';
  secondaryColor = '#0129ac';

  changePrimaryColor(color: string): void {
    this.primaryColor = color;
    this.primary.emit(color);
  }
  changeSecondaryColor(color: string): void {
    this.secondaryColor = color;
    this.secondary.emit(color);
  }
}
