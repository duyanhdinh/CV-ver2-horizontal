import web from "@/store";
import Flickity from 'vue-flickity';

export default {
    name: "activity-modal",
    components: {
        Flickity
    },
    data() {
        return {
            color: web.getters.getColor,
            pre: web.getters.getPre,

            index: 0,

            width: screen.availWidth > 1000 ? 1000 : '80%',
            flickityOptions: {
                prevNextButtons: false,
                pageDots: false,
                hash: true,
                draggable: false,
                // autoPlay: 5000,
                // wrapAround: true,
                // pauseAutoPlayOnHover: false,
            },
        }
    },
    computed:{
        data(){
            return this.step.activate[this.index]
        },
        index_active(){
            if (this.$refs['flickity-activity'] !== undefined) {
                return this.$refs['flickity-activity'].$flickity.selectedIndex
            } else return this.index

        },
        step(){
            return web.getters.getActivity
        }
    },
    methods:{
        getIndex(event) {
            this.index = event.params.index
        },
        getFirst() {
            let url = location.href;
            location.href = "#activity"+ this.index;
            history.replaceState(null,null,url);
        },
        gotoLink() {
            document.getElementById('url_activity' + this.index).click()
        },
    },
    watch:{
        index_active(newValue) {
            this.index = newValue
        }
    }
};
