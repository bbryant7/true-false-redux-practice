import * as types from '../constants/counter.const';

export default function CounterApp(state = true, action) {
    switch(action.type) {
        case types.INCREMENT:
            return state = !state;

        case types.DECREMENT:
              return state = "false";
    }
    return state;
}
