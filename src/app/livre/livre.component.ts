import { LivresServiceService } from './../shared/livres-service.service';
import { Livres } from './../model/livres';
import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {

  constructor(public livser:LivresServiceService) { }
  @Input() livre: Livres;
  livs: Livres[] = [];
  ngOnInit(): void {

    this.livser.getAll().subscribe((data: Livres[])=>{
      console.log(data);
      this.livs = data;
    })

  }

}
