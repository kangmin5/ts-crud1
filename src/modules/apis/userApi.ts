import axios, { AxiosResponse } from "axios";
import {Iuser} from '../interfaces/Interface'
const SERVER = 'http://localhost:4000'

export const userListApi = async () => {
    try {
        const res: AxiosResponse =
            await axios.get<Iuser[]>(`${SERVER}/userModels`)
        return res;
    } catch (err) {
        return err;
    }
}