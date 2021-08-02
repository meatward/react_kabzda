import { combineReducers, createStore } from "redux";
import profileRDC from "./profile-RDC";
import dialogsRDC from './dialogs-RDC';
import sidebarRDC from './sidebar-RDC';

let reducers = combineReducers({
    profileP:profileRDC,
    dialogsP:dialogsRDC,
    img:sidebarRDC
}
);

let store = createStore(reducers);




export default store;