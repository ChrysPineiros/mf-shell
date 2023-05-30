import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {
  @Output() logout: EventEmitter<void> = new EventEmitter();
  @Input() user?: any;
  inicialName: string = "";

  constructor() {}
 

  ngOnInit(): void {
    this.splitName(this.user);
  }

  splitName(user: any) {
    if (user) {
      this.inicialName =
        user.firsName.split("")[0] +
        (user.lastname
          ? user.lastname.split("")[0]
          : user.firsName.split("")[1]);
    }
  }
}
