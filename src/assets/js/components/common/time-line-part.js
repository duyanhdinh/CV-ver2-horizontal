import web from "@/store";

export default {
  name: "time-line-part",
  props: {
    title: String,
    data: Array
  },
  components: {},
  data() {
    return {
      color: web.getters.getColor,
      pre: web.getters.getPre,

      hourglass_style: {
        "--fa-primary-color": web.getters.getColor.c1s_code,
        "--fa-secondary-color": web.getters.getColor.c1_code,
        "--fa-secondary-opacity": 0.8
      }
    };
  }
};
