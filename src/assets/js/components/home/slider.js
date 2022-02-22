import web from "@/store";
import Flickity from "vue-flickity";
import img1 from "i@/1.png";
import img2 from "i@/2.png";

export default {
  name: "slider",
  components: {
    Flickity,
  },
  data() {
    return {
      color: web.getters.getColor,
      pre: web.getters.getPre,

      img1: img1,
      img2: img2,

      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        autoPlay: true,
        pauseAutoPlayOnHover: false,
      },
    };
  },
  computed: {
    step() {
      return web.getters.getHi;
    },
  },
};
