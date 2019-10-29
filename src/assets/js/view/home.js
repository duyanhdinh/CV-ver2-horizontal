import web from "@/store";
import SideBarMenu from "~@/home/SideBarMenu";
import Slider from "~@/home/Slider";
import AboutMe from "~@/home/AboutMe";
import Skills from "~@/home/Skills";
import Activity from "~@/home/Activity";
import TimeLine from "~@/home/TimeLine";
import { TweenLite } from "gsap/TweenMax";
import last_img from 'i@/last.png'
import img1 from 'i@/1.png';

export default {
  name: "home",
  components: {
    SideBarMenu,
    Slider,
    AboutMe,
    Skills,
    Activity,
    TimeLine,
  },
  data() {
    return {
      color: web.getters.getColor,
      pre: web.getters.getPre,

      left: 0,
      backgroundImage:{
        backgroundImage : "url(" + last_img + ")",
      },
      avatar:{
        backgroundImage : "url(" + img1 + ")",
      }
    };
  },
  computed: {
    style() {
      if (window.innerWidth > 1024) {
        return {
          left: this.left + "rem"
        };
      } else {
        return {
          left: 0
        };
      }
    }
  },
  methods: {
    goStep(index, x) {
      if (index) web.dispatch('setIndexMenu', index);
      this.moveX(x)
    },
    moveX(x) {
      let left = -x;
      TweenLite.to(this.$data, 0.25, { left: left });
    }
  }
};
