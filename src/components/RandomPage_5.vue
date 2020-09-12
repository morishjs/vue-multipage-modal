<template>
  <RandomPageWrapper :title="title" :onPrevious="onPrevious" :onComplete="_onComplete" :step="step" :pagesSize="pagesSize">
    <p>
      {{ title }}
    </p>
  </RandomPageWrapper>
</template>

<script>
import RandomPageWrapper from "@/components/RandomPageWrapper";

export default {
  name: "RandomPage_5",
  components: {RandomPageWrapper},
  props: ['title', 'onPrevious', 'onComplete', 'step', 'pagesSize'],
  methods: {
    _onComplete() {
      this.$store.commit('concatCharacter', this.title);
      this.onComplete();
    }
  }
}
</script>

<style scoped>

</style>
