import web from "@/store";
import StepCommon from "~@/common/StepCommon";

export default {
  name: "about-me",
  components: {
    StepCommon
  },
  data() {
    return {
      color: web.getters.getColor,
      pre: web.getters.getPre
    };
  },
  computed: {
    step() {
      return web.getters.getAbout;
    }
  }
};
