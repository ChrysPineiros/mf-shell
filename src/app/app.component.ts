import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mf-shell';
  tabs = [
    { text: "User", icon: 'user' },
    { text: "Register", icon:'file' },
    { text: "find", icon: 'find', badge: "New",  }
  ];
  
  constructor(private router: Router) {}

  onItemClick(e: any) {
    switch (e.itemData.text)
      {
        case 'User': 
            this.router.navigate(['/', 'user']);
        break;
        case 'Register':
            this.router.navigate(['/', 'register']);
        break;
        case 'Find': 
            console.log("Find");
        break;
        default: 
            alert('no se encontro página');
      } 
  }
}
