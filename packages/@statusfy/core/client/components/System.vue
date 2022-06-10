<template>
  <div>
    <div
      :class="system.status"
      class="system flex flex-row justify-between"
      :style="{ cursor: pointer }"
      @click="show_children = !show_children"
    >
      <div class="system-title">
        {{ $t(`systems.items.${system.name}.title`) }}

        <v-popover
          v-if="description"
          trigger="hover focus"
          placement="top"
          popover-class="popover"
          class="hidden sm:inline"
        >
          <span class="system-title-info">
            <FontAwesomeIcon icon="circle-question" class="fa-w-16" />
          </span>

          <template slot="popover">
            {{ description }}
          </template>
        </v-popover>
      </div>
      <div class="system-status">
        <span class="hidden sm:inline">{{ status.title }}</span>
        <FontAwesomeIcon :icon="status.icon" class="fa-w-16" />
      </div>
    </div>

    <Transition name="slide-fade">
      <ul v-show="show_children" class="list-reset">
        <li v-for="item in system.items" :key="item.name">
          <system :system="item" />
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import SystemChild from "./SystemChild";
import { getStatusInfo } from "~/helpers/statuses";

export default {
  components: {
    "v-popover": () => import("v-tooltip").then(({ VPopover }) => VPopover),
    system: SystemChild,
    FontAwesomeIcon
  },
  props: {
    system: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    show_children: false
  }),
  computed: {
    description() {
      const $t = this.$t.bind(this);
      const $te = this.$te.bind(this);
      const key = `systems.items.${this.system.name}.description`;

      if ($te(key)) {
        return $t(key);
      } else {
        return null;
      }
    },
    status() {
      const $t = this.$t.bind(this);

      return getStatusInfo($t, this.system.status);
    },
    pointer() {
      return this.system.items.length > 0 ? "pointer" : "auto";
    }
  }
};
</script>
