import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ButtonState } from '../../states/button-state.state';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-displayer',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './displayer.component.html',
  styleUrl: './displayer.component.scss'
})
export class DisplayerComponent {

    count$: Observable<number> = inject(Store).select(ButtonState.count);
}
