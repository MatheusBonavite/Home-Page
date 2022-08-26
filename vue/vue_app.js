const App = Vue.createApp({
    data() {
      return {
        underLayerPosition: "under-layer pos-1",
        selected: "about-me-card"
      };
    },
    methods: {
      updateUnderLayerPosition(num) {
        if(num == 1)
          this.selected = "about-me-card"
        if(num == 2)
          this.selected = "work"
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

App.component('work', {
  template: "#work",
  props: [],
  data(){
    return {
      companies: [
        {
          name: "Inspr",
          date: "Oct/2021 (Current)",
          title: "Software Developer"
        },
        {
          name: "Embraer",
          date: "May/2021 - Oct/2021",
          title: "Software Developer Intern"
        },
        {
          name: "SYDLE",
          date: "May/2020 - Abr/2021",
          title: "Software Developer Intern"
        },
        {
          name: "UFMG",
          date: "Oct/2018 - Dec/2019",
          title: "Teaching Assistant"
        }
      ]
    }
  }
})

App.component('my-git', {
  template: "#my-github",
  props: [],
  data(){}
})

App.component('my-linkedin', {
  template: "#my-linkedin",
  props: [],
  data(){}
})

App.mount("#app");
