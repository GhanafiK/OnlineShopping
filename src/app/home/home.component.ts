import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Icontent } from '../icontent';
import { ContentService } from '../content.service';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { DisplayComponent } from "../display/display.component";
/* import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { ContentService } from '../content.service';
import { Icontent } from '../icontent';
import { NgFor } from '@angular/common'; */

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, DisplayComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private _ContentService:ContentService){}

  content!:Icontent[];
  ngOnInit(){
    this._ContentService.getContent().subscribe({
      next: (data) => this.content=data,
      error:(error)=>console.log(error),
    })
  }
}
