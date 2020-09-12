<template>
  <transition name="modal">
    <div class="modal--mask" @click="onClose">
      <div class="modal" :style="modalStyle">
        <div class="modal__card">
          <section class="modal__card_body">
            <component
                :is="currentPage.component"
                :title="currentPage.title"
                :step="step"
                :pagesSize="pages.length"
                :onNext="onNext"
                :onPrevious="onPrevious"
                :onComplete="onComplete"
            />
          </section>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      step: 1,
    }
  },
  props: {
    close: {type: Function},
    width: {type: String, default: '180px'},
    height: {type: String, default: '150px'},
    pages: {type: Array},
    onComplete: {type: Function}
  },
  computed: {
    modalStyle() {
      return {width: this.width, height: this.height}
    },
    currentPage() {
      return this.pages[this.step - 1]
    },
  },
  methods: {
    onNext(doSomething) {
      if (doSomething) {
        const isOk = doSomething();

        // If something went wrong, return early.
        if (!isOk) {
          // showWarningAlert();
          return;
        }
      }

      if (this.pages.length !== this.step) {
        this.step += 1;
      }
    },
    onPrevious(e) {
      e.stopPropagation();

      if (this.step !== 1) {
        this.step -= 1;
      }
    },
    onClose() {
      this.step = 1;
      this.$store.commit('resetRandomPagesString');

      this.close();
    }
  }
}
</script>

<style scoped>

.modal--mask {
  display: grid;
  place-items: center;

  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  transition: opacity .3s ease;
}

.modal__card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding: 8px;
  background: red;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal__card_footer {

}

.button {
  width: 149px;
  height: 40px;

  color: white;
  font-size: 14px;
  cursor: pointer;

  background: black;
  border: none;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
