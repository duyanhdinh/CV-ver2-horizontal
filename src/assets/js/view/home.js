import SideBarMenu from '~@/home/SideBarMenu'
import {TweenLite} from "gsap/TweenMax"

export default {
    name: "home",
    components: {
        SideBarMenu,
    },
    data(){
        return{
            left: 12.5,
        }
    },
    computed : {
        style(){
            if (window.innerWidth > 1024) {
                return {
                    left: this.left + 'rem'
                }
            } else {
                return {
                    left: 0
                }
            }
        },
    },
    methods:{
        moveX(x){
            let left = 12.5 -x;
            TweenLite.to(this.$data, 0.25, { left: left });
        },
    }
}