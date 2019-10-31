import web from "@/store";
import icon from "i@/icon.png";
import vn_flag from "i@/flag/vn.svg";
import uk_flag from "i@/flag/uk.svg";

export default {
  name: "menu-modal",
  components: {},
  data() {
    return {
      color: web.getters.getColor,
      pre: web.getters.getPre,

      width: screen.availWidth > 350 ? 350 : screen.availWidth - 50,
      list_height: screen.availHeight * 0.5 + "px",
      bottom_height: screen.availHeight * 0.3 + "px",

      font_style: {
        "--fa-primary-color": web.getters.getColor.c1_code,
        "--fa-secondary-color": web.getters.getColor.c1s_code,
        "--fa-secondary-opacity": 0.8
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
      active: "",
      not_active: "opacity-25"
    };
  },
  computed: {
    menu() {
      return web.getters.getMenu;
    },
    language() {
      return web.getters.getLanguage;
    }
  },
  methods: {
    setLanguage(lang) {
      web.dispatch("setLanguage", lang);
    }
  },
  watch: {}
};
