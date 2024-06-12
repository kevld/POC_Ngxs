import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayerComponent } from "./components/displayer/displayer.component";
import { ButtonComponent } from "./components/button/button.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ButtonComponent, DisplayerComponent]
})
export class AppComponent {
  title = 'POC_Ngxs';
}
