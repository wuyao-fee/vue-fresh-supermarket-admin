import Vue from 'vue';
import Vuex from 'vuex';
import { setCookie, getUserInfo, removeUserCookie } from '@/utils/userCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用于切换菜单的闭合状态（false表示不闭合，true表示闭合）
    collapsed: false,
    // 用户信息
    user: getUserInfo(),
    // 村粗菜单的路由
    menuRoutes: [],
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    // 设置用户信息
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
    // 用户退出
    logout(state) {
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: '',
      };
    },
    changeMenuRoutes(state, routes) {
      state.menuRoutes = routes;
    },
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },
    // 设置用户信息
    setUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo);
      // 缓存用户信息到cookie中
      setCookie(userInfo);
    },
    logout({ commit }) {
      commit('logout');
      // 删除cookie中的用户信息
      removeUserCookie();
    },
    changeMenuRoutes({ commit }, routes) {
      commit('changeMenuRoutes', routes);
    },
  },
  modules: {
  },
});
