import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArrayAdderComponent } from "./array-adder/array-adder.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArrayAdderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DSW-FRONTEND';
  inicial= 1000;

}
