const App = Vue.createApp({
    data() {
      return {
        underLayerPosition: "under-layer pos-1",
        selected: "about-me-card"
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

App.component('about-me-card', {
  template: "#about-me-card",
  props: [],
  data(){}
})

App.mount("#app");
