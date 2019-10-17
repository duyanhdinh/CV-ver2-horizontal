import web from '@/store'

export default {
    name: "side-bar-menu",
    components: {
    },
    data(){
        return{
            color: web.getters.getColor,
            pre: web.getters.getPre,
            style_avatar:{
                backgroundImage: "url('https://i.pravatar.cc')"
            },
        }
    },
}