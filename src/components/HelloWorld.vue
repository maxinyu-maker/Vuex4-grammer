<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <h1>{{ doubleCount }}</h1>
    <h1>{{ amplifyCount }}</h1>
    <h2>{{ number }}</h2>
    <h2>{{ value }}</h2>
    <h3>{{ name }}</h3>
      {{$store.state.count}}
      {{$store.getters.doubleCount}}
      {{$store.getters.amplifyCount(5)}}
    mutations
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    action
    <button @click="incrementIfOdd">incrementIfOdd</button>
    <button @click="incrementAsync">1slateradd</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useStore, mapState, mapGetters, mapActions, mapMutations } from "vuex";
// import  Store  from '../store/index'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  computed:{
    ...mapState(['count','name']),
    ...mapGetters(['doubleCount','amplifyCount(5)']),
    // ...mapMutations(['increment','decrement']),
    // ...mapActions(['incrementIfOdd','incrementAsync']),
  },
  mounted() {
    // this.$store.increment(1);
  },
  setup() {
    const store = useStore();
    // const count = computed(() => store.state.count);
    const number = computed(() => store.state.a.number);
    const value = computed(() => store.state.b.value);
    // const doubleCount = computed(() => store.getters.doubleCount);
    // const amplifyCount = computed(() => store.getters.amplifyCount(5));

    const increment = ()=>{
      store.commit('increment', 1)
      store.commit('inNumber', 1)
    }
    const decrement = ()=>{
      store.commit('decrement', 1)
    }
    const incrementIfOdd = ()=>{
      store.dispatch('incrementIfOdd',10)
    }
    const incrementAsync = ()=>{
      store.dispatch('incrementAsync',10)
    }

    return {
      number,
      value,
      // doubleCount,
      // amplifyCount,
      increment,
      decrement,
      incrementIfOdd,
      incrementAsync,
    }
  }
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
