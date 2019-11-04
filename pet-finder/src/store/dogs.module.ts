/**
 * @author Kalanka Siyambalapitiya
 */
import Vue from "vue";
import {
    DogsService
} from "@/common/api.service";
// import { Dog } from "@/models/dogs";
import { SEARCH_DOG } from "./actions.type";
import { SET_DOGS } from './mutations';

const initialState = {
    dog: {}
}
export const state = { ...initialState }



export const actions = {
    async [SEARCH_DOG](context: any, id: string) {
        const { data } = await DogsService.getById(id);
        context.commit(SET_DOGS, data);
        return data;
    },
    async [SEARCH_DOG](context: any) {
        const { data } = await DogsService.get();
        context.commit(SET_DOGS, data);
        return data;
    }
}
export const mutations = {
    [SET_DOGS](state: any, dog: any) {
        state.dog = dog;
    }
}
const getters: any = {
    dog(state: any) {
        return state.dog;
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}