import web from "@/store";
import StepCommon from "~@/common/StepCommon";
import ActivityModal from "~@/common/modal/ActivityModal";

export default {
    name: "activity",
    components: {
        StepCommon,
        ActivityModal,
    },
    data() {
        return {
            color: web.getters.getColor,
            pre: web.getters.getPre,
        }
    },
    computed:{
        step(){
            return web.getters.getActivity
        }
    },
};
