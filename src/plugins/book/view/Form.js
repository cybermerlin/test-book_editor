import VueForm from "vue-form";
import {Component, Prop, Vue} from "vue-property-decorator";

/**
 * @class test.book.view.Form
 */
@Component({name: 'v-form-book'})
export default class Form extends VueForm {
  /**
   * @property {Core.API} api
   */
  @Prop(Object) api;
  /**
   * @property {test.book.data.Model} model
   */
  @Prop(Object) model;

  onUploadedImg(f) {
    this.inProcess = false;
  }

  @Watch('model', {deep: true})
  onChangeModel() {
    this.inProcess = !this.model.isDirty();
  }

  inProcess = true;

  template = '@';
}
