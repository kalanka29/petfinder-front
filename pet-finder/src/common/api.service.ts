/**
 * @author Kalanka Siyambalapitiya
 */
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { API_URL } from './config';

export const ApiService = {
    init() {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = API_URL;
    },
    query(resource: string, params: any) {
        return Vue.axios.get(resource, params).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    },
    getById(resource: string, id = "") {
        return Vue.axios.get(`${resource}/${id}`).catch(error => {
            throw new Error(`[RWV] ApiSerice ${error}`);
        });
    },
    get(resource: string) {
        return Vue.axios.get(`${resource}`).catch(error => {
            throw new Error(`[RWV] ApiSerice ${error}`);
        });

    }
};

export const DogsService = {
    get() {
        return ApiService.get("dogs");
    },
    getById(id: string) {
        return ApiService.getById("dogs", id);
    },
    query(params: any) {
        return ApiService.query("dogs/filter", params);
    }
};
export const CatsService = {
    get() {
        return ApiService.get("cats");
    },
    getById(id: string) {
        return ApiService.getById("cats", id);
    },
    query(params: any) {
        return ApiService.query("cats/filter", params);
    }
};
