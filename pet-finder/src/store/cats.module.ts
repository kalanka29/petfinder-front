/**
 * @author Kalanka Siyambalapitiya
 */
import { CatsService } from "@/common/api.service";
import { SEARCH_CAT } from "./actions.type";
import { SET_CATS } from './mutations';

const initialState = {
    cat: {}
}
export const state = { ...initialState }



export const actions = {
    async [SEARCH_CAT](context: any, id: string) {
        const { data } = await CatsService.getById(id);
        context.commit(SET_CATS, data);
        return data;
    },
    async [SEARCH_CAT](context: any) {
        const { data } = await CatsService.get();
        context.commit(SET_CATS, data);
        return data;
    }
}
export const mutations = {
    [SET_CATS](state: any, cat: any) {
        state.cat = cat;
    }
}
const getters: any = {
    cat(state: any) {
        return state.cat;
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}