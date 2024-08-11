import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { Icontent } from '../icontent';
import { DisplayComponent } from "../display/display.component";

@Component({
  selector: 'app-women',
  standalone: true,
  imports: [DisplayComponent],
  templateUrl: './women.component.html',
  styleUrl: './women.component.css'
})
export class WomenComponent {

  constructor(private _ContentService:ContentService){}

  content:Icontent[]=[];
  ngOnInit(){
    this._ContentService.getContent().subscribe({
      next: (data) =>{
        for(let item of data){
          if(item.category=="women's clothing"){
            this.content.push(item)
          }
        }
      },
      error:(error)=>console.log(error),
    })
  }
}
