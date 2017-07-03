import {ERROR_VIEW, LOBBY_VIEW, NAME_INPUT_VIEW, SET_VIEW} from "./Actions";
import {ERROR, ROOM_JOINED} from "../Networking/Actions";

export const view = (state = NAME_INPUT_VIEW, action) => {
    switch (action.type) {
        case SET_VIEW:
            return action.view;
        case ROOM_JOINED:
            return LOBBY_VIEW;
        case ERROR:
            return  ERROR_VIEW;
        default:
            return state;
    }
};
