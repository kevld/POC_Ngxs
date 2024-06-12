import { Injectable } from "@angular/core";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { ClickButtonAction } from "../actions/button-actions.action";

export class ButtonStateModel {
    count!: number;
}


@State<ButtonStateModel>({
    name: 'buttonState',
    defaults: {
        count: 0,
    }
})
@Injectable()
export class ButtonState {

    @Selector()
    static count(state: ButtonStateModel) {
        return state.count;
    }

    @Action(ClickButtonAction)
    clickButton({ getState, patchState }: StateContext<ButtonStateModel>) {
        const current = getState().count;

        patchState({
            count: current + 1
        });
    }
}