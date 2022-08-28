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
        if(num == 3)
          this.selected = "projects"
        if(num == 4)
          this.selected = "research"
        this.underLayerPosition = `under-layer pos-${num}`
      }
    }
})

App.component('sidebar-button', {
    template: "#sidebar-button",
    props: [],
    data(){
      return {}
    }
})

App.component('about-me-card', {
  template: "#about-me-card",
  props: [],
  data(){
    return {}
  }
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
            Working here was an amazing opportunity, since Embraer stored all its code in local servers, my superiors decided to avoid installing dependencies so all of the "CCPM" could not have any npm
            shenanigans, once packages, libraries, or frameworks could have many dependencies or vulnerabilities. This way, I've learned much about the old fashioned ways of creating websites (not even JQuery was allowed).
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

App.component('projects', {
  template: "#projects",
  props: [],
  data(){
    return {
      projects: [
        {
          name: "microTEDAclus",
          pictures: [
            "../assets/projects/micro_after_first_macro.png",
            "../assets/projects/micro_after_second_macro.png",
            "../assets/projects/classified_samples.png"
          ],
          description: `
          <p>The microTEDAclus algorithm is used for clustering data, it was officially proposed in a <a href="https://www.sciencedirect.com/science/article/abs/pii/S0167739X19312786?via%3Dihub">paper</a> written by one of my professors.</p>
          <p>Originally, the algorithm was designed in Python. However, on this project I have translated it to the <span class="tech">C</span> programming language, corrected some errors in the original approach, and did all the mathematical proofs for the equations.</p>
          <p>After translating the algorithm, I've made sure it had no memory leaks using <span class="tech">Valgrind</span>, and used the <span class="tech">Catch2</span> library to test the code.
          <p>Finally, to plot what you are seeing I've used <span class="tech">Python</span> for its simplicity, using matplotlib to do the cluster analysis.</p>
          <p><a href="https://github.com/MatheusBonavite/TEDA---TCC">Check the source code here!</a></p>
          `,
          whichPicture: 0,
        },
        {
          name: "Home-Page",
          pictures: [
            "../assets/projects/digitalocean.jpeg",
            "../assets/projects/36443980.jpeg"
          ],
          description: `
          <p>This home-page is another project that I'm proud of...</p>
          <p>This website is much more than a <span class="tech">Vue.js</span> website, I had the opportunity to practice many concepts that usually don't go into the mind of front-end engineers/developers.</p>
          <p>I've made an Ubuntu droplet at Digital Ocean and installed a lot of things in it.</p>
          <p>Manually added things like <span class="tech">pm2</span>, a process manager to run node and express easily, installed firewalls, used <span class="tech">certbot</span> to have https enabled, disabled root access, and many more features. </p> 
          <p>The front-end part of the application and the express web server that serves it is available in the source code!</p>
          <p><a href="https://github.com/MatheusBonavite/Home-Page">Check the source code here!</a></p>
          `,
          whichPicture: 0,
        }
      ]
    }
  },
  methods: {
    updatePicture(index, num){
      this.projects[index].whichPicture = num;
    }
  }
})

App.component('research', {
  template: '#research',
  props: [],
  data(){
    return {
      papers: [
        {
          name: "A New PRNG Hardware Architecture Based on an Exponential Chaotic Map",
          date: "2021",
          editor: "IEEE",
          doi: "10.1109/ISCAS51556.2021.9401653",
          link: "https://ieeexplore.ieee.org/document/9401653",
          description: `
            <p>On this paper I've had the idea to analyse if it was possible to generate chaos by approximating Euler's number in the exponential logistic map equation using Horner's method to compute this numbers approximation with MacLaurin series.</p>
            <p>It turns out this was possible! The resulting design was generated using <span class="tech">VHDL</span> and it was tested in a Xilinx Artix 7 FPGA board.</p>
          `
        },
        {
          name: "A new floating-point adder FPGA-based implementation using RN-coding of numbers",
          date: "2021",
          editor: "Elsevier",
          doi: "https://doi.org/10.1016/j.compeleceng.2020.106947",
          link: "https://www.sciencedirect.com/science/article/abs/pii/S004579062030793X",
          description: `
            <p>On this paper I have helped my colleague Túlio Araújo on the design of a new adder that followed the RN-coding of numbers pattern, instead of the traditional IEEE-754.</p>
            <p>I have helped him test and compare his design against the ones used in the industry. And also heped him analyse the results and error distribution.</p>
            <p>I have also proposed the xor-tree approach with a phantom-bit, that sped up the process of calculating the sign bit of an RN number.</p>
            `
        }
      ]
    }
  }
})

App.component('my-git', {
  template: "#my-github",
  props: [],
  data(){
    return {}
  }
})

App.component('my-linkedin', {
  template: "#my-linkedin",
  props: [],
  data(){
    return {}
  }
})

App.mount("#app");
