<template>
  <RandomPageWrapper :title="title" :onPrevious="onPrevious" :onNext="_onNext" :step="step" :pagesSize="pagesSize">
    <p>
      {{ title }}
    </p>
  </RandomPageWrapper>
</template>

<script>
import RandomPageWrapper from "@/components/RandomPageWrapper";

export default {
  name: "RandomPage_2",
  components: {RandomPageWrapper},
  props: ['title', 'onPrevious', 'onNext', 'step', 'pagesSize'],
  methods: {
    _onNext(e) {
      e.stopPropagation();

      this.onNext(() => {
        this.$store.commit('concatCharacter', this.title);

        return true;
      });
    }
  }
}
</script>

<style scoped>

</style>
