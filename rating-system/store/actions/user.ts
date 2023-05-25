import { AppThunk } from "..";
import { UserAction } from "../reducer/user";

export enum UserActionTypes {
    SET_USER = "SET_USER",
}

export const setUser = (name: string, email: string, password: string): AppThunk<Promise<void>> => {
    return async (dispatch, getState) => {
        dispatch({
            type: UserActionTypes.SET_USER,
            payload: {
                name,
                email,
                password,
            },
        } as UserAction);
    };
}