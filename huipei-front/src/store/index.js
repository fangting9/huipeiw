import Vuex from 'vuex'


export default new Vuex.Store({
    state: {
        token: sessionStorage.getItem("token"),
        user: sessionStorage.getItem("user"),
        sid:sessionStorage.getItem("sid"),
        unread:sessionStorage.getItem("unread"),
    },
    mutations: {
        // set
        SET_TOKENN: (state, token) => {
            state.token = token;
            sessionStorage.setItem("token", token)
        },
        SET_USER: (state, user) => {
            state.user = user;
            sessionStorage.setItem("user", user)
        },
        SET_SID:(state, sid)=>{
            state.sid = sid;
            sessionStorage.setItem("sid", sid)
        },
        SET_UNREAD:(state, unread)=>{
            state.unread = unread;
            sessionStorage.setItem("unread", unread)
        },
        REMOVE_INFO : (state) => {
            state.token = '';
            state.user = {};
            sessionStorage.setItem("token", '');
            sessionStorage.setItem("user", '');
            sessionStorage.setItem("sid", '');
            sessionStorage.setItem("unread", '')
        }
    },
    getters: {

    },
    actions: {
    },
    modules: {
    }
})