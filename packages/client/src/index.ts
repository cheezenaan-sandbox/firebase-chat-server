import Vue from 'vue';
import HelloComponent from './components/Hello';

export const v = new Vue({
  el: '#app',
  components: {
    HelloComponent,
  },
  data: {
    name: 'Euphonium',
  },
  template: `
    <div>
      Name: <input v-model="name" type="text" />
      <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
  `,
});
