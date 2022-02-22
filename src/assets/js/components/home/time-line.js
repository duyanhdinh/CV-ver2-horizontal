import web from "@/store";
import StepCommon from "~@/common/StepCommon";
import TimeLinePart from "~@/common/TimeLinePart";

export default {
  name: "time-line",
  components: {
    StepCommon,
    TimeLinePart,
  },
  data() {
    return {
      color: web.getters.getColor,
      pre: web.getters.getPre,
    };
  },
  computed: {
    step() {
      return web.getters.getTimeLine;
    },
  },
};
