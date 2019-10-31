import Vue from "vue";
import Vuex from "vuex";
import laravel_img from "i@/skills/laravel.svg";
import vue_img from "i@/skills/vue.png";
import tailwindcss_img from "i@/skills/tailwindcss.svg";
import mysql_img from "i@/skills/mysql.svg";
import php_img from "i@/skills/php.svg";
import mongodb_img from "i@/skills/mongodb.png";
import git_img from "i@/skills/git.svg";
import c_img from "i@/skills/c.png";
import cpp_img from "i@/skills/cpp.png";
import matlab_img from "i@/skills/matlab.png";
import at_1 from "i@/activity/1.png";
import at_2 from "i@/activity/2.png";
import at_3 from "i@/activity/3.png";
import at_4 from "i@/activity/4.png";
import at_5 from "i@/activity/5.png";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: "en",
    index_active: 0,
    en: {
      menu: [
        {
          index: 0,
          left: 0,
          name: "Hi"
        },
        {
          index: 1,
          left: 50,
          name: "about me"
        },
        {
          index: 2,
          left: 100,
          name: "skills"
        },
        {
          index: 3,
          left: 150,
          name: "activity"
        },
        {
          index: 4,
          left: 200,
          name: "time line"
        }
      ],
      hi: {
        hi: "Hello, I'm",
        name: "Duy Anh Dinh",
        career: "web developer"
      },
      about_me: {
        title: "About me",
        info: [
          {
            name: "Full name",
            value: "Dinh Duy Anh"
          },
          {
            name: "D.O.B",
            value: "04 Nov 1995"
          },
          {
            name: "Address",
            value: "Vietnam"
          },
          {
            name: "Email",
            value: "duyanhscor@gmail.com"
          },
          {
            name: "Phone",
            value: "(+84) ---------"
          }
        ],
        me: {
          title: "Hi, i'm Duy Anh",
          description:
            "Hi, i'm Duy Anh. " +
            "I graduated at Posts and Telecommunications Institute of Technology Hanoi. " +
            "I have conferred the Degree of Engineer: Electronics and Communication Engineering (with GPA: 3.11/4). " +
            "Now, i'm a web developer, with web programing main skills including: Laravel, Vue, Php, Sql, Css, .."
        },
        download: "Download my cv"
      },
      skills: {
        title: "Skills",
        main: {
          title: "Main Skills",
          skills: [
            {
              type: "back end",
              name: "Laravel",
              img: laravel_img,
              class: "border-t-3 border-r-3 justify-center items-start"
            },
            {
              type: "front end",
              name: "Vue",
              img: vue_img,
              class: "border-r-3 border-b-3 justify-end items-center"
            },
            {
              type: "sql",
              name: "MySql",
              img: mysql_img,
              class: "border-l-3 border-t-3 justify-start items-center"
            },
            {
              type: "css",
              name: "Tailwindcss",
              img: tailwindcss_img,
              class: "border-b-3 border-l-3 justify-center items-end"
            }
          ]
        },
        knowledge: {
          title: "knowledge",
          skills: [
            {
              type: "back end",
              name: "php",
              img: php_img,
              class: ""
            },
            {
              type: "sql",
              name: "MongoDB",
              img: mongodb_img,
              class: ""
            },
            {
              type: "git",
              name: "Git",
              img: git_img,
              class: ""
            }
          ]
        },
        others: {
          title: "also knowledgeable",
          skills: [
            {
              type: "other",
              name: "C",
              img: c_img,
              class: ""
            },
            {
              type: "other",
              name: "C++",
              img: cpp_img,
              class: ""
            },
            {
              type: "other",
              name: "Matlab",
              img: matlab_img,
              class: ""
            }
          ]
        },
        language: {
          title: "language",
          info: [
            {
              name: "Vietnamese",
              mean: "godfather",
              full: 8,
              empty: 1
            },
            {
              name: "English",
              mean: "child",
              full: 4,
              empty: 5
            }
          ]
        }
      },
      activity: {
        title: "Activity",
        description: "Some of my main activities in recent years",
        activate: [
          {
            type: "web",
            name: "my website",
            description:
              "The website is written by Vue at the front-end and Laravel at the back-end api." +
              " This site provides a template to help your profile look good.",
            url: "https://dazzard.com",
            img: at_1
          },
          {
            type: "web",
            name: "my cv - 10/2019",
            description:
              "The site written by Vue (and Css, Js, Html).... Look good???",
            url: "https://owner.dazzard.com",
            img: at_2
          },
          {
            type: "web",
            name: "my cv - 05/2019",
            description:
              "The site written by Vue at front-end and Laravel at api back-end. Uhm... Look good, too???",
            url: "https://cv-1905.dazzard.com/",
            img: at_3
          },
          {
            type: "web",
            name: "Value of somethings old",
            description:
              "A website born with my cv at 05/2019 created by Vue + Laravel, it used to have names didadnow (drop now)." +
              "A website created at 11/2018, written by Laravel, store in aws (drop now), deploy in heroku-app." +
              "An a first website created by me at 10/2018, after one month i learn about web developer. " +
              "It just written by php, html, css and a little js. " +
              "it still working now : )",
            url: "http://didad.000webhostapp.com",
            img: at_4
          },
          {
            type: "others",
            name: "Once upon a time",
            description:
              "I was learning about algorithms, " +
              "c / c ++ during the first years of my university student days." +
              "After that, I participated in a number of laboratory studies at the university, " +
              "led by a PhD. Vu Thi Thuy Ha.",
            url: "https://codeforces.com/profile/DuyAnhDinh",
            img: at_5
          }
        ]
      },
      time_line: {
        title: "Time Line",
        data: [
          {
            title: "WORK EXPERIENCE",
            data: [
              {
                time: "05/2019 - NOW",
                type: "WEB DEVELOPER",
                place: "NEWWAVE SOLUTIONS JSC",
                project: [
                  {
                    name: "E-commerce web",
                    customer: "Japan",
                    technologies: "Laravel, MySql",
                    team_size: "4 peoples (php developer)",
                    description: "Building and deploying website",
                    responsibility: [
                      "Created pages Order, Revenue, Item, Review Management in admin site",
                      "Created pages user information (view, edit, update, deleted) in client site",
                      "Store & update billing information of user (credit card) to GMO",
                      "Created pages revenue of user, view history in client site",
                      "..."
                    ]
                  },
                  {
                    name: "Management web",
                    customer: "Japan",
                    technologies: "Cakephp, Angular, Pug template",
                    team_size: "2 peoples (now 1 - me)",
                    description: "Maintain & update website",
                    responsibility: [
                      "Updated and developed according to customer requirements"
                    ]
                  }
                ]
              },
              {
                time: "12/2018 - 04/2019",
                type: "WEB DEVELOPER",
                place: "Appota Entertainment Ecosystem",
                description:
                  "Update and maintain an analytic web of company written by Yii & Angular"
              },
              {
                time: "06/2018 - 08/2018",
                type: "C/C++ DEVELOPER",
                place: "FPT Software",
                description: "OJT employer"
              }
            ]
          },
          {
            title: "EDUCATION",
            data: [
              {
                time: "2013 - 2018",
                type: "Student",
                place:
                  "Posts and Telecommunications Institute of Technology, Hanoi",
                description:
                  "Graduated the Degree of Engineer: Electronics anh Communication Engineering in Mar 2018, with GPA: 3.11/4"
              }
            ]
          }
        ]
      }
    },
    vi: {
      menu: [
        {
          index: 0,
          left: 0,
          name: "Hi"
        },
        {
          index: 1,
          left: 50,
          name: "về tôi"
        },
        {
          index: 2,
          left: 100,
          name: "kỹ năng"
        },
        {
          index: 3,
          left: 150,
          name: "hoạt động"
        },
        {
          index: 4,
          left: 200,
          name: "dòng thời gian"
        }
      ],
      hi: {
        hi: "Xin chào, tôi là",
        name: "Đinh Duy Anh",
        career: "Lập trình web"
      },
      about_me: {
        title: "về tôi",
        info: [
          {
            name: "Họ tên",
            value: "Đinh Duy Anh"
          },
          {
            name: "Ngày sinh",
            value: "04/11/1995"
          },
          {
            name: "Email",
            value: "duyanhscor@gmail.com"
          },
          {
            name: "Linked-in",
            value: "linkedin.com/in/duy-anh-đinh-611156154/"
          },
          {
            name: "Điện thoại",
            value: "---------"
          }
        ],
        me: {
          title: "Hi, tôi là Duy Anh",
          description:
            "Hi, tôi là Duy Anh. " +
            "Tôi tốt nghiệp tại trường Học viên Công nghệ Bưu chính Viễn thông, " +
            "bằng Kỹ sư kỹ thuật điện tử, truyền thông (GPA: 3.11/4). " +
            "Hiện tại tôi là một lập trình viên Web, sử dụng: Laravel, Vue, Php, Sql, Css, .. "
        },
        download: "Tải cv"
      },
      skills: {
        title: "Kỹ năng",
        main: {
          title: "Kỹ năng chính",
          skills: [
            {
              type: "back end",
              name: "Laravel",
              img: laravel_img,
              class: "border-t-3 border-r-3 justify-center items-start"
            },
            {
              type: "front end",
              name: "Vue",
              img: vue_img,
              class: "border-r-3 border-b-3 justify-end items-center"
            },
            {
              type: "sql",
              name: "MySql",
              img: mysql_img,
              class: "border-l-3 border-t-3 justify-start items-center"
            },
            {
              type: "css",
              name: "Tailwindcss",
              img: tailwindcss_img,
              class: "border-b-3 border-l-3 justify-center items-end"
            }
          ]
        },
        knowledge: {
          title: "Hiểu biết",
          skills: [
            {
              type: "back end",
              name: "php",
              img: php_img,
              class: ""
            },
            {
              type: "sql",
              name: "MongoDB",
              img: mongodb_img,
              class: ""
            },
            {
              type: "git",
              name: "Git",
              img: git_img,
              class: ""
            }
          ]
        },
        others: {
          title: "Cũng biết về",
          skills: [
            {
              type: "other",
              name: "C",
              img: c_img,
              class: ""
            },
            {
              type: "other",
              name: "C++",
              img: cpp_img,
              class: ""
            },
            {
              type: "other",
              name: "Matlab",
              img: matlab_img,
              class: ""
            }
          ]
        },
        language: {
          title: "ngôn ngữ",
          info: [
            {
              name: "Vietnamese",
              mean: "thành thục",
              full: 8,
              empty: 1
            },
            {
              name: "English",
              mean: "bắt đầu",
              full: 4,
              empty: 5
            }
          ]
        }
      },
      activity: {
        title: "Hoạt động",
        description: "Một vài hoạt động chính trong những năm gần đây",
        activate: [
          {
            type: "web",
            name: "my website",
            description:
              "Trang web dduwwocj viết bởi Vue phía frontend và Laravel để tạo api ở backend." +
              " Trang web này cung cấp cho bạn một mẫu cv đẹp.",
            url: "https://dazzard.com",
            img: at_1
          },
          {
            type: "web",
            name: "my cv - 10/2019",
            description:
              "Trang này được viết bằng Vue (và Css, Html, Js).. Trông cũng ổn nhỉ :D",
            url: "https://owner.dazzard.com",
            img: at_2
          },
          {
            type: "web",
            name: "my cv - 05/2019",
            description:
              "Trang web được viết bới Vue và laravel. Uhm... Cũng được đúng ko ^^!",
            url: "https://cv-1905.dazzard.com/",
            img: at_3
          },
          {
            type: "web",
            name: "Những điều cũ",
            description:
              "Một trang web viết bới vue + laravel vào 05/2019, từng có tên didadnow (đã xóa)." +
              "Một website viết vào 11/2018, viết bằng Laravel, lưu trữ trên aws (đã xóa), deploy trên heroku-app." +
              "Trang web đầu tiên của tôi viết vào 10/2018, một tháng sau khi tôi học về web = )). " +
              "Nó được viết bằng php thuần, css, html và một chút js." +
              "Nó hiễn vẫn còn hoạt động : )",
            url: "http://didad.000webhostapp.com",
            img: at_4
          },
          {
            type: "others",
            name: "Ngày xửa ngày xưa",
            description:
              "Tôi từng học về thuật toán và C/C++ vào những năm đầu sinh viên." +
              "Sau đó, tôi từng tham gia nghiên cứu tại trường dưới sự hướng dẫn của tiến sĩ Vũ Thị Thúy Hà.",
            url: "https://codeforces.com/profile/DuyAnhDinh",
            img: at_5
          }
        ]
      },
      time_line: {
        title: "Dòng thời gian",
        data: [
          {
            title: "kinh nghiệm làm việc",
            data: [
              {
                time: "05/2019 - Nay",
                type: "Lập trình web",
                place: "NEWWAVE SOLUTIONS JSC",
                project: [
                  {
                    name: "Web thương mại điện tử",
                    customer: "Nhật",
                    technologies: "Laravel, MySql",
                    team_size: "4 (php developer)",
                    description: "Xây dựng và triển khai trang web",
                    responsibility: [
                      "Tạo các trang quản lý order, revenue, item, review bên phía admin",
                      "Tạo các trang quản lý thông tin user (view, edit, update, deleted) bên phía khách hàng",
                      "Lưu trữ thông tin thanh toán của khách hàng (credit card) lên GMO",
                      "..."
                    ]
                  },
                  {
                    name: "trang web quản lý",
                    customer: "Nhật",
                    technologies: "Cakephp, Angular, Pug template",
                    team_size: "2 (hiện tại 1 - me)",
                    description: "maintain & update website",
                    responsibility: [
                      "Cập nhật và phát triển theo yêu cầu của khách hàng"
                    ]
                  }
                ]
              },
              {
                time: "12/2018 - 04/2019",
                type: "lập trình WEB",
                place: "Appota Entertainment Ecosystem",
                description:
                  "Phát triển và bảo trì trang analytic viết bằng Yii và Angular"
              },
              {
                time: "06/2018 - 08/2018",
                type: "lập trình C/C++",
                place: "FPT Software",
                description: "Nhân viên OJT"
              }
            ]
          },
          {
            title: "HỌC VẤN",
            data: [
              {
                time: "2013 - 2018",
                type: "Sinh viên",
                place: "Học viên Công nghệ Bưu chính Viễn thông Hà Nội",
                description: "Tốt nghiệp bằng kỹ sư tháng 3/2018, GPA: 3.11/4"
              }
            ]
          }
        ]
      }
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
      c1s_code: "#004bff"
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
    getLanguage: state => {
      return state.language;
    },
    getIndexActive: state => {
      return state.index_active;
    },
    getHi: state => {
      return state[state.language].hi;
    },
    getAbout: state => {
      return state[state.language].about_me;
    },
    getSkills: state => {
      return state[state.language].skills;
    },
    getActivity: state => {
      return state[state.language].activity;
    },
    getTimeLine: state => {
      return state[state.language].time_line;
    }
  },
  mutations: {
    setIndexMenu(state, n) {
      state.index_active = n;
    },
    setLanguage(state, n) {
      state.language = n;
    }
  },
  actions: {
    setIndexMenu({ commit }, n) {
      commit("setIndexMenu", n);
    },
    setLanguage({ commit }, n) {
      commit("setLanguage", n);
    }
  }
});
