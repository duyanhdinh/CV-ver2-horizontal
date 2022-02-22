import web from "@/store";

export default {
  name: "step-common",
  components: {},
  data() {
    return {
      color: web.getters.getColor,
      pre: web.getters.getPre,
    };
  },
};
