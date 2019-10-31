import web from "@/store";

export default {
  name: "skills-part",
  components: {},
  data() {
    return {
      color: web.getters.getColor,
      pre: web.getters.getPre
    };
  }
};
