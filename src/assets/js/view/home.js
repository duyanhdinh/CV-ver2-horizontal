import web from "@/store";
import SideBarMenu from "~@/home/SideBarMenu";
import SideBarMenuSmall from "~@/home/SideBarMenuSmall";
import Slider from "~@/home/Slider";
import AboutMe from "~@/home/AboutMe";
import Skills from "~@/home/Skills";
import Activity from "~@/home/Activity";
import TimeLine from "~@/home/TimeLine";
import MenuModal from "~@/common/modal/MenuModal";

import { TweenLite } from "gsap/TweenMax";

import last_img from "i@/last.png";

export default {
  name: "home",
  components: {
    SideBarMenu,
    SideBarMenuSmall,
    Slider,
    AboutMe,
    Skills,
    Activity,
    TimeLine,
    MenuModal,
  },
  data() {
    return {
      color: web.getters.getColor,
      pre: web.getters.getPre,

      left: 0,
      top: 0,
      backgroundImage: {
        backgroundImage: "url(" + last_img + ")",
      },
    };
  },
  computed: {
    style() {
      if (window.innerWidth > 1024) {
        return {
          left: this.left + "rem",
        };
      } else {
        return {
          left: 0,
        };
      }
    },
  },
  methods: {
    goStep(index, x) {
      if (index) web.dispatch("setIndexMenu", index);
      this.moveX(x);
    },
    moveX(x) {
      let left = -x;
      TweenLite.to(this.$data, 0.25, { left: left });
    },
    scrollY(top) {
      this.$modal.hide("menu");
      this.top = window.scrollY;
      let to = this.$refs[top].offsetTop - 64;
      // console.log(to)
      // this.$el.scrollTo(0, 1000)
      TweenLite.to(this.$data, 0.5, { top: to });
    },
  },
  watch: {
    top(newValue) {
      this.$el.scrollTo(0, newValue);
    },
  },
};
