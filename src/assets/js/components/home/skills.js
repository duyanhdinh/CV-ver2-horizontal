import web from "@/store";
import StepCommon from "~@/common/StepCommon";
import SkillsPart from "~@/common/SkillsPart";

export default {
  name: "skills",
  components: {
    StepCommon,
    SkillsPart
  },
  data() {
    return {
      color: web.getters.getColor,
      pre: web.getters.getPre,

      fan_style: {
        "--fa-primary-color": web.getters.getColor.c1_code,
        "--fa-secondary-color": web.getters.getColor.c1s_code,
        "--fa-secondary-opacity": 0.8
      }
    };
  },
  computed: {
    step() {
      return web.getters.getSkills;
    }
  }
};
