import { User } from "@prisma/client";
import { AppThunk } from "..";

export enum UserActionTypes {
    SET_USER = "SET_USER",
}

export const setUser = (name: string, email: string, password: string): AppThunk<Promise<void>> => {
    return async (dispatch, getState) => {
        const state = getState();
        console.log(state.user.user);
        dispatch({
            type: UserActionTypes.SET_USER,
            payload: {
                name,
                email,
                password,
            },
        });
    };
}