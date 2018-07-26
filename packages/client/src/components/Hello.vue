<template>
  <div>
    <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class HelloDecorator extends Vue {
  @Prop() name!: string;
  @Prop() initialEnthusiasm!: number;

  enthusiasm = this.initialEnthusiasm;
    increment() {
      this.enthusiasm += 1;
    }
    decrement() {
      if (this.enthusiasm > 1) {
        this.enthusiasm -= 1;
      }
    }
    get exclamationMarks(): string {
      const enthusiasm = this.enthusiasm > 0 ? this.enthusiasm : 1;
      return '!'.repeat(enthusiasm);
    }

};

</script>

<style>
.greeting {
  font-size: 20px;
}
</style>
