import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-seccion-home',
  templateUrl: './seccion-home.component.html',
  styleUrls: ['./seccion-home.component.css']
})
export class SeccionHomeComponent implements OnInit {

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Inicio');
  }

}
