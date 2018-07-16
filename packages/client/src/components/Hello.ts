import Vue from 'vue';

export default Vue.extend({
  props: {
    name: {
      type: String,
      default: '',
    },
    initialEnthusiasm: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      enthusiasm: this.initialEnthusiasm,
    };
  },
  computed: {
    exclamationMarks(): string {
      return '!'.repeat(this.enthusiasm);
    },
  },
  methods: {
    increment() {
      this.enthusiasm += 1;
    },
    decrement() {
      if (this.enthusiasm > 1) {
        this.enthusiasm -= 1;
      }
    },
  },
  template: `
    <div>
      <div>Hello {{name}}{{exclamationMarks}}</div>
      <button @click="decrement">-</button>
      <button @click="increment">+</button>
    </div>
  `,
});
