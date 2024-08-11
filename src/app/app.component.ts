import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HomeComponent } from "./home/home.component";
import { MenComponent } from "./men/men.component";
import { WomenComponent } from "./women/women.component";
import { DisplayComponent } from "./display/display.component";
import { JeweleryComponent } from "./jewelery/jewelery.component";
import { ElectronicsComponent } from "./electronics/electronics.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, HomeComponent, MenComponent, WomenComponent, DisplayComponent, JeweleryComponent, ElectronicsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OnlineShopping';
}
