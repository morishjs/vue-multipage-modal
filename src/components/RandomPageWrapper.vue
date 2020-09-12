<template>
  <div>
    <slot></slot>
    <footer class="modal__card_footer">
      <button v-show="!isFirstPage" class="button" @click="onPrevious">
        Previous
      </button>
      <button v-if="isFinalPage" class="button" @click="onComplete">
        Finish
      </button>
      <button v-else class="button" @click="onNext">
        Next
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "RandomPageWrapper",
  props: {
    title: String,
    onNext: {
      type: Function,
      default: () => {}
    },
    onPrevious: {
      type: Function,
      default: () => {}
    },
    onComplete: {
      type: Function,
      default: () => {}
    },
    step: Number,
    pagesSize: Number,
  },
  computed: {
    isFinalPage() {
      return this.step === this.pagesSize;
    },
    isFirstPage() {
      return this.step === 1;
    }
  }
}
</script>

<style scoped>

</style>
