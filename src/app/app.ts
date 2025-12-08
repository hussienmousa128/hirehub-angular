import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterOutlet } from "@angular/router";



@Component({
  selector: 'app-root',
  standalone:true,
  imports: [MatSlideToggleModule, RouterOutlet,MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('hirehub');
}
