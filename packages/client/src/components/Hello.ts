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
      validator: (enthusiasm: number) => enthusiasm > 0,
    },
  },
  data() {
    return {
      enthusiasm: this.initialEnthusiasm,
    };
  },
  computed: {
    exclamationMarks(): string {
      const enthusiasm = this.enthusiasm > 0 ? this.enthusiasm : 1;
      return '!'.repeat(enthusiasm);
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
