Vue.component('cell-component', {
   props: ["class", "row", "col"],
   template: `<td 
      :class="class" 
      :data-row="row" 
      :data-col="col"></td>`,
});
Vue.component('row-component', {
   props: ["row", "cols"],
   template: `<cell-component
      v-for="col in cols"
      :class="cellClass(row, col)"
      :row="row"
      :col="col"
      ></cell-component>`
});
const
   app = new Vue({
      el: 'root',
      data: {
         settings: {
            cols: 20,
            rows: 20,
         },
         snake: [],
         resource: [],
         walls: [],
      },
      methods: {
         snakeInit() {
            this.snake = []
         },
      },
      computed: {},
      mounted: {},
   })
;
