import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { Icontent } from '../icontent';
import { DisplayComponent } from "../display/display.component";

@Component({
  selector: 'app-jewelery',
  standalone: true,
  imports: [DisplayComponent],
  templateUrl: './jewelery.component.html',
  styleUrl: './jewelery.component.css'
})
export class JeweleryComponent {
  constructor(private _ContentService:ContentService){}

  content:Icontent[]=[];
  ngOnInit(){
    this._ContentService.getContent().subscribe({
      next: (data) =>{
        for(let item of data){
          if(item.category=="jewelery"){
          this.content.push(item)
          }
        }
      },
      error:(error)=>console.log(error),
    })
  }
}
