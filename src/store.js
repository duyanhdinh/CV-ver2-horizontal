import Vue from "vue";
import Vuex from "vuex";
import laravel_img from 'i@/skills/laravel.svg'
import vue_img from 'i@/skills/vue.png'
import tailwindcss_img from 'i@/skills/tailwindcss.svg'
import mysql_img from 'i@/skills/mysql.svg'
import php_img from 'i@/skills/php.svg'
import mongodb_img from 'i@/skills/mongodb.png'
import git_img from 'i@/skills/git.svg'
import c_img from 'i@/skills/c.png'
import cpp_img from 'i@/skills/cpp.png'
import matlab_img from 'i@/skills/matlab.png'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      language: 'en',
      index_active: 0,
    en: {
      menu: [
          {
              index: 0,
              left: 0,
              name: 'Hi',
          },
          {
              index: 1,
              left: 50,
              name: 'about me',
          },
          {
              index: 2,
              left: 100,
              name: 'skills',
          },
          {
              index: 3,
              left: 150,
              name: 'more more',
          },
      ],
        step1:{
          hi: 'Hello, I\'m',
          name: 'Duy Anh Dinh',
          career: 'web developer',
        },
        step2:{
          title: 'About me',
          info:[
              {
                  name: 'Full name',
                  value: 'Dinh Duy Anh'
              },
              {
                  name: 'D.O.B',
                  value: '04 Nov 1995'
              },
              {
                  name: 'Address',
                  value: 'Vietnam'
              },
              {
                  name: 'Email',
                  value: 'duyanhscor@gmail.com'
              },
              {
                  name: 'Phone',
                  value: '(+84) 965349223'
              },
          ],
          me:{
              title: 'Hi, i\'m Duy Anh',
              description: "Hi, i'm Duy Anh. " +
                  "I graduated at Posts and Telecommunications Institute of Technology Hanoi. " +
                  "I have conferred the Degree of Engineer: Electronics and Communication Engineering (with GPA: 3.11/4). " +
                  "Now, i'm a web developer, with web programing main skills including: Laravel, Vue, Php, Sql, Css, ..",
          },
          download: 'Download my cv'
        },
        step3:{
          title: 'Skills',
            main: {
                title: 'Main Skills',
                skills:[
                    {
                        type: 'back end',
                        name: 'Laravel',
                        img: laravel_img,
                        class: 'border-t-3 border-r-3 justify-center items-start',
                    },
                    {
                        type: 'front end',
                        name: 'Vue',
                        img: vue_img,
                        class: 'border-r-3 border-b-3 justify-end items-center',
                    },
                    {
                        type: 'sql',
                        name: 'MySql',
                        img: mysql_img,
                        class: 'border-l-3 border-t-3 justify-start items-center',
                    },
                    {
                        type: 'css',
                        name: 'Tailwindcss',
                        img: tailwindcss_img,
                        class: 'border-b-3 border-l-3 justify-center items-end',
                    },
                ],
            },
          knowledge: {
                title: 'knowledge',
                skills:[
                    {
                        type: 'back end',
                        name: 'php',
                        img: php_img,
                        class: '',
                    },
                    {
                        type: 'sql',
                        name: 'MongoDB',
                        img: mongodb_img,
                        class: '',
                    },
                    {
                        type: 'git',
                        name: 'Git',
                        img: git_img,
                        class: '',
                    },
                ],
            },
          others: {
                title: 'also knowledgeable',
                skills:[
                    {
                        type: 'other',
                        name: 'C',
                        img: c_img,
                        class: '',
                    },
                    {
                        type: 'other',
                        name: 'C++',
                        img: cpp_img,
                        class: '',
                    },
                    {
                        type: 'other',
                        name: 'Matlab',
                        img: matlab_img,
                        class: '',
                    },
                ],
            },
            language:{
              title: 'language',
                info:[
                    {
                        name: 'Vietnamese',
                        mean: 'godfather',
                        full: 8,
                        empty: 1,
                    },
                    {
                        name: 'English',
                        mean: 'child',
                        full: 4,
                        empty: 5,
                    },
                ],
            },
        },
    },
    color: {
      c1: "web-c1",
      c2: "web-c2",
      c2s: "web-c2s",
      c3: "web-c3",
      c3s: "web-c3s",
      bg1: "web-bg1",
      bg2: "web-bg2",
      c1_code: "#ffb400",
      c1s_code: "#004bff",
    },
    pre: {
      bg: "bg-",
      text: "text-",
      hover: "hover:",
      border: "border-"
    }
  },
  getters: {
    getColor: state => {
      return state.color;
    },
    getPre: state => {
      return state.pre;
    },
    getMenu: state => {
      return state[state.language].menu;
    },
    getIndexActive: state => {
      return state.index_active;
    },
    getStep1: state => {
      return state[state.language].step1;
    },
    getStep2: state => {
      return state[state.language].step2;
    },
    getStep3: state => {
      return state[state.language].step3;
    },
  },
  mutations: {
      setIndexMenu(state, n) {
          state.index_active = n
      },
  },
  actions: {
      setIndexMenu({commit}, n) {
          commit('setIndexMenu', n)
      }
  }
});
