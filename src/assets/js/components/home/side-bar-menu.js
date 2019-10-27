import web from "@/store";
import avatar from 'i@/avatar.png';

export default {
  name: "side-bar-menu",
  components: {},
  data() {
    return {
      color: web.getters.getColor,
      pre: web.getters.getPre,
      style_avatar: {
        backgroundImage: "url('" + avatar + "')"
      },
      list_menu: web.getters.getMenu,
    };
  },
  computed:{
    index_active(){
      return web.getters.getIndexActive
    }
  },
  methods:{
    clickMenu(item) {
      web.dispatch('setIndexMenu', item.index)
      this.$emit('x:move', item.left)
    }
  }
};
