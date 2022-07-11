import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Iuser } from "modules/interfaces/Interface";

export interface UsersState {
    data: Iuser[],
    status: 'idle' | 'loading' | 'succeeded' |'failed'
}
const initialState: UsersState = {
    data: [],
    status: 'idle'
}
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        usersRequest(state: UsersState) {
            console.log(`진행 2 : usersRequest  ${JSON.stringify(state)} `)
            state.status = 'loading';
        },
        usersSuccess(state: UsersState, { payload }) {
            console.log(`진행 2 : usersSuccess 성공 ${JSON.stringify(state)} `)
            state.status = 'idle'
            state.data = [...state.data, payload]
        },
        usersFailure(state: UsersState, { payload }) {
            console.log(`진행 2 : usersSuccess 실패 ${JSON.stringify(state)} `)
            state.status = 'failed'
            state.data = payload
        }
    }
    })
    export const { usersRequest, usersSuccess, usersFailure,
        } = usersSlice.actions;
    const {reducer, actions} = usersSlice
    export const usersActions = actions
    export default reducer;