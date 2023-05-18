import { User } from "@prisma/client";
import { UserActionTypes } from "../actions/user";
import { AnyAction, Reducer } from "@reduxjs/toolkit";

type UserState = {
    user: User | null;
};

const initialState: UserState = {
    user: null,
};

export interface UserAction {
    type: UserActionTypes;
    payload: User;
}

const userReducer: Reducer<UserState, AnyAction> = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;