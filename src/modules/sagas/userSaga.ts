import { call, delay, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects'
import { AxiosResponse } from 'axios';
import { usersActions } from 'modules/slices/usersSlice';
import { userListApi } from 'modules/apis/userApi';

// interface salesType{
//     type: string;
//     payload: {
//         year:string , sales:number, cost:number, profit:number
//     }
// }
// interface salesSuccessType{
//     type: string;
//     payload: {
//         year:string , sales:number, cost:number, profit:number
//     }
// }

export function* usersListSaga(){
    const { usersSuccess, usersFailure } = usersActions
        try {
            const res:AxiosResponse = yield call(userListApi)
            console.log(`usersListSaga : ${JSON.stringify(res.data)}`) 
            yield put(usersSuccess(res.data))
        } catch (error) {
            yield put(usersFailure(error))
        }
}

