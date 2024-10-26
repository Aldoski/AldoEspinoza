import { Component, OnInit } from '@angular/core';
import { ApipeliService } from './apipeli.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  resultadoPeli : any;

  constructor(
    private readonly ApipeliService:ApipeliService
  ) {}

ngOnInit(): void {
  this.ApipeliService.resultadoPeli().subscribe({
    next:(Response)=>{
      console.log(Response)
      this.resultadoPeli = Response
    },
    error: (err) => {
      console.error(err)
    }
  })
  };
}


