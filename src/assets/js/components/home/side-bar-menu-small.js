import web from "@/store";


export default {
    name: "side-bar-menu-small",
    components: {
    },
    data() {
        return {
            color: web.getters.getColor,
            pre: web.getters.getPre,

            bars_style: {
                '--fa-primary-color': web.getters.getColor.c1_code,
                '--fa-secondary-color': web.getters.getColor.c1s_code,
                '--fa-secondary-opacity': 0.8,
            }
        };
    },
    computed:{
    },
    methods:{
    }
};
