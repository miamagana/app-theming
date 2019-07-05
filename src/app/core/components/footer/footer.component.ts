import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  iconSize = 60;

  changePrimaryColor(color: string): void {
    this.primaryColor = color;
    this.primary.emit(color);
  }
  changeSecondaryColor(color: string): void {
    this.secondaryColor = color;
    this.secondary.emit(color);
  }
  changeIconSize(event: any): void {
    const size: number = parseInt(event.target.value, 10);
    if (size >= 16 && size <= 200) {
      this.iconSize = size;
      this.size.emit(`${size}px`);
    }
  }
}
