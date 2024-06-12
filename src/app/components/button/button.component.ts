import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { ClickButtonAction } from '../../actions/button-actions.action';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

    private store: Store = inject(Store);

    onClick() {
        this.store.dispatch(new ClickButtonAction());
    }
}
