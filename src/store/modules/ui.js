import * as types from '../mutation-types';

const state = {
    iconSize: 'full'
}

const getters = {
    iconSize: state => state.iconSize
}

const actions = {
    updateIconSize({ commit, state }, newSize) {
        commit(types.UPDATE_ICON_SIZE, newSize);
    }
}

const mutations = {
    [types.UPDATE_ICON_SIZE] (state, newSize) {
        state.iconSize = newSize;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
