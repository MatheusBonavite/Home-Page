const App = Vue.createApp({
    data() {
      return {
        underLayerPosition: "under-layer pos-1"
      };
    },
    methods: {
      updateUnderLayerPosition(num) {
        this.underLayerPosition = `under-layer pos-${num}`
      }
    }
})
App.component('sidebar-button', {
    template: "#sidebar-button",
    props: [],
    data(){}
})
App.mount("#app");
