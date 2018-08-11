import VueGrid from "vue-grid";
import {Component, Prop, Vue} from "vue-property-decorator";

/**
 * @class test.book.view.Grid
 */
@Component({name: 'v-grid-book'})
export default class Grid extends VueGrid {
  /**
   * @property {Core.API} api
   */
  @Prop(Object) api;
  
  template = '@';
}
