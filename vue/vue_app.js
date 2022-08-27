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
          date: "Oct/2021 - Current Employer",
          title: "Software Developer",
          content: [`
            Hired to work under a 40 hours per week contract.
            My daily routine consists of adding features, fixing bugs, and talking to the client about the front-end website.
            Our main client (not named for legal reasons) has a website with over 5000 pages, in a somewhat blog style. For that reason,
            the Inspr team decided to use <span class="tech">Strapi</span> and <span class="tech">Next.js</span>.
          `,
          `
            Strapi will enable the client to manage the content creation of their own pages in a simplified way;
            meanwhile Next.js has interesting <span class="tech">Server Side Rendering (SSR)</span> and <span class="tech">Static Site Generation (SSG)</span> features so we can build the whole website
            before going live (making it super performatic). Even though 5000 pages are a lot of pages to build beforehand, Next.js 12 has enabled <span class="tech">Incremental Static Regeneration (ISR)</span>
            that help us a lot! Then we can build only about 120 pages beforehand, and the thousands remaining will be built once a first user shows up!
          `,
          `
          Although these do not happen every day, some day-to-day routines also include adding tasks or review tasks on <span class="tech">Jira</span>, also it is common to build images or run them with <span class="tech">Docker</span>
          (to simulate the production environment locally).
          `,
          `Very rarely some code in the back-end application is maintained (usually written in <span class="tech">Go</span> or <span class="tech">TypeScript</span>).`
        ]
        },
        {
          name: "Embraer",
          date: "May/2021 - Oct/2021",
          title: "Software Developer Intern",
          content: [`
            Hired to work under a 30 hours per week contract. I was hired to help maintain and improve the "CCPM" internal product built at Embraer to organize and schedule the delivery of projects.
          `, `
            Most often I spent my days fixing bugs or implementing features on the front-end part of the application, written in plain <span class="tech"> JavaScript </span>, <span class="tech">HTML</span>, and <span class="tech">CSS</span>.
          `,
          `
            Also improved queries written in the <span class="tech">SQL</span> language (using <span class="tech">MySQL</span> as a DBMS), and from time to time had to write <span class="tech">PHP</span> code to fix minor bugs in the back-end.
          `,
          `
            Working here was an amazing opportunity, since Embraer stored all its code in local servers, my superiors decided to avoid installing dependencies so all of the "CCPM" code was very
            back-bones, once packages, libraries, or frameworks (like Angular, React, or Vue) were forbidden. This way, I've learned much about the old fashioned ways of creating websites (not even JQuery was allowed).
          `]
        },
        {
          name: "SYDLE",
          date: "May/2020 - Abr/2021",
          title: "Software Developer Intern",
          content: [`
            Hired to work under a 30 hours per week contract. My team was hired to maintain and develop the digital certificate emission rules for the Serasa company.
          `, `
            Another amazing company, at the time I had no experience in software development professionaly nor knew anything about <span class="tech">JavaScript</span>, here I learned all about JavaScript and other concepts
            (like paginations and simple queries with <span class="tech">ElasticSearch</span>). My job was to write JavaScript functions using SYDLE ONE, a company framework. It was a really good job to learn how to program with JavaScript.
          `]
        },
        {
          name: "UFMG",
          date: "Oct/2018 - Dec/2019",
          title: "Teaching Assistant",
          content: [`
            Hired to work under a 12 hours per week contract.
          `, `
            I was hired to help other students learn the <span class="tech">VHDL</span> hardware description language. Some of my duties were to help other students
            understand concepts better and help them with assignments, like projecting a single cycle processor using VHDL.
          `, `
            I got hired for this position after obtain good grades on the Digital Systems and Computer Architecture subjects.
          `]
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
