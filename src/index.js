import Vue from "vue";

import virtualList from './components/virtualList.vue'
// ...如果还有的话继续添加

const Components = {
    virtualList
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;