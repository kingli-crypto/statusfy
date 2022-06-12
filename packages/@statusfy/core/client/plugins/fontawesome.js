import Vue from "vue";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faClock,
  faExternalLink,
  faCircleExclamation,
  faCircleMinus,
  faCircleXmark,
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons";

import {
  faPlusSquare,
  faMinusSquare,
  faCircleQuestion
} from "@fortawesome/free-regular-svg-icons";

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
// library.add(fas);
library.add(
  faClock,
  faCircleExclamation,
  faCircleMinus,
  faCircleXmark,
  faCircleCheck,
  faCircleQuestion,
  faExternalLink,
  faPlusSquare,
  faMinusSquare
);

// Register the component globally
Vue.component("font-awesome-icon", FontAwesomeIcon);
