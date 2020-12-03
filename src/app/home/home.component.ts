import { Livres } from './../model/livres';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  ListLivres: Livres[];
  ngOnInit(): void {
  }

}
