import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Icontent } from '../icontent';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  @ViewChild('Descripe') cardDescripe!:ElementRef;
  @ViewChild('DescriptionParagraph') parag!:ElementRef;
  @Input() dataDisplay:Icontent[]=[]
  showDescription(data:string){
   this.cardDescripe.nativeElement.classList.remove('d-none')
  this.parag.nativeElement.innerHTML=data
  }
  closeBox(e:any):void{
    if(e.target==this.cardDescripe.nativeElement){
      this.cardDescripe.nativeElement.classList.add('d-none')
    }
  }
}
