import web from "@/store";
import SideBarMenu from "~@/home/SideBarMenu";
import Slider from "~@/home/Slider";
import AboutMe from "~@/home/AboutMe";
import Skills from "~@/home/Skills";
import { TweenLite } from "gsap/TweenMax";

export default {
  name: "home",
  components: {
    SideBarMenu,
    Slider,
    AboutMe,
    Skills,
  },
  data() {
    return {
      color: web.getters.getColor,
      pre: web.getters.getPre,

      left: 0,
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
      web.dispatch('setIndexMenu', index)
      this.moveX(x)
    },
    moveX(x) {
      let left = -x;
      TweenLite.to(this.$data, 0.25, { left: left });
    }
  }
};
