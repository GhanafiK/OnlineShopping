import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { Icontent } from '../icontent';
import { DisplayComponent } from "../display/display.component";

@Component({
  selector: 'app-men',
  standalone: true,
  imports: [DisplayComponent],
  templateUrl: './men.component.html',
  styleUrl: './men.component.css'
})
export class MenComponent {
  constructor(private _ContentService:ContentService){}

  content:Icontent[]=[];
  ngOnInit(){
    this._ContentService.getContent().subscribe({
      next: (data) =>{
        for(let item of data){
          if(item.category=="men's clothing"){
          this.content.push(item)
          }
        }
      },
      error:(error)=>console.log(error),
    })
  }
}
