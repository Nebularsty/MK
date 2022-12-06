import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  @Input() display: boolean = true;
  @Input() label: string = '';

  constructor() {}

  ngOnInit(): void {}

  showDialog() {
    this.display = true;
  }
}
