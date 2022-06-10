<template>
  <div v-if="info.totalPages > 1" class="text-center pb-4 mb-2">
    <nuxt-link v-if="info.page !== 1" :to="previousLink" class="btn mx-2">
      <FontAwesomeIcon icon="{faChevronLeft}" class="fa-w-16 mr-1" />
      {{ $t("incidents.paginator.previous") }}
    </nuxt-link>

    <nuxt-link
      v-if="info.page !== info.totalPages"
      :to="
        localePath({ name: 'history-page', params: { page: info.page + 1 } })
      "
      class="btn mx-2"
    >
      {{ $t("incidents.paginator.next") }}
      <FontAwesomeIcon icon="{faChevronRight}" class="fa-w-16 mr-1" />
    </nuxt-link>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: { FontAwesomeIcon },
  props: {
    info: {
      type: Object,
      required: true,
      default: () => ({
        page: 1,
        pageSize: 10,
        totalPages: 1
      })
    }
  },
  computed: {
    previousLink() {
      if (this.info.page === 2) {
        return this.localePath("history");
      } else {
        return this.localePath({
          name: "history-page",
          params: { page: this.info.page - 1 }
        });
      }
    }
  }
};
</script>
