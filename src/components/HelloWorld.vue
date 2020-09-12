<template>
  <div>
    <h1>{{ msg }}</h1>

    <button @click="showModal">
      Open Modal
    </button>

    <Modal width="400px" height="300px" v-show="show" :onComplete="showAlert" :close="closeModal" :pages="pages"/>
  </div>
</template>

<script>
import Modal from "@/components/core/Modal";
import RandomPage_1 from "@/components/RandomPage_1";
import RandomPage_2 from "@/components/RandomPage_2";
import RandomPage_3 from "@/components/RandomPage_3";
import RandomPage_4 from "@/components/RandomPage_4";
import RandomPage_5 from "@/components/RandomPage_5";

export default {
  name: 'HelloWorld',
  components: {
    Modal,
    RandomPage_1,
    RandomPage_2,
    RandomPage_3,
    RandomPage_4,
    RandomPage_5,
  },
  data() {
    return {
      show: false
    }
  },
  props: {
    msg: String
  },
  computed: {
    pages() {
      return [
        {
          title: "비",
          component: RandomPage_1,
        },
        {
          title: "둘",
          component: RandomPage_2,
        },
        {
          title: "기",
          component: RandomPage_3,
        },
        {
          title: "지",
          component: RandomPage_4,
        },
        {
          title: "갑",
          component: RandomPage_5,
        }
      ]
    }
  },
  methods: {
    showAlert() {
      alert(this.$store.state.randomPagesString);

      this.$store.commit('resetRandomPagesString');
    },
    showModal() {
      this.show = true;
    },
    closeModal() {
      this.show = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

button {
  width: 149px;
  height: 40px;

  color: white;
  font-size: 14px;
  cursor: pointer;

  background: black;
  border: none;
}
</style>
