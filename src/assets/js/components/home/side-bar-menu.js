import web from "@/store";
import avatar from 'i@/avatar.png';
import icon from 'i@/icon.png';
import vn_flag from 'i@/flag/vn.svg';
import uk_flag from 'i@/flag/uk.svg';

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
      style_vi: {
        backgroundImage: "url('" + vn_flag + "')"
      },
      style_en: {
        backgroundImage: "url('" + uk_flag + "')"
      },
      style_web: {
        backgroundImage: "url('" + icon + "')"
      },
      active: '',
      not_active: 'opacity-25'
    };
  },
  computed:{
    index_active(){
      return web.getters.getIndexActive
    },
    list_menu(){
      return web.getters.getMenu
    },
    language(){
      return web.getters.getLanguage
    }
  },
  methods:{
    clickMenu(item) {
      web.dispatch('setIndexMenu', item.index)
      this.$emit('x:move', item.left)
    },
    setLanguage(lang) {
      web.dispatch('setLanguage', lang)
    }
  }
};
