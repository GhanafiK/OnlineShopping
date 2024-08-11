import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { Icontent } from '../icontent';
import { DisplayComponent } from "../display/display.component";

@Component({
  selector: 'app-electronics',
  standalone: true,
  imports: [DisplayComponent],
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent {
  constructor(private _ContentService:ContentService){}

  content:Icontent[]=[];
  ngOnInit(){
    this._ContentService.getContent().subscribe({
      next: (data) =>{
        for(let item of data){
          if(item.category=="electronics"){
          this.content.push(item)
          }
        }
      },
      error:(error)=>console.log(error),
    })
  }
}
