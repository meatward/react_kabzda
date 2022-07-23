import { combineReducers, createStore } from "redux";
import profileRDC from "./profile-RDC";
import dialogsRDC from './dialogs-RDC';
import sidebarRDC from './sidebar-RDC';
import avatarRDC from "./avatarRDC";
import usersRDC from "./users-RDC";
import calcRDC from "./calcRDC";
import AuthRDC from "./auth-RDC";

import React from 'react';

let reducers = combineReducers({
    profileP:profileRDC,
    dialogsP:dialogsRDC,
    img:sidebarRDC,
    avatar:avatarRDC,
    usersP:usersRDC,
    calcP:calcRDC,
    authP: AuthRDC
}
);

let store = createStore(reducers);

window.store = store;
// bigData={p.bigData}
// dispatch ={p.dispatch}
// store = {p.store}

export default store;