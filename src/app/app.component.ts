import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ecommerce-v2';
  constructor(private titleService:Title ) {}


    ngOnInit() {
      this.titleService.setTitle('Inicio');

    }

  }
  
