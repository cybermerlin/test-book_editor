import Core from "core";
import {Component, Prop, Vue} from "vue-property-decorator";
import book from "./plugins/book";

/**
 * @class test.App
 */
@Component
export default class App extends Vue {
  book;
  books;
  API = Core.API;


  setBookToForm(v) {
    this.book.set(v);
  }

  created() {
    this.books = new book.data.Store();
    this.book = new book.data.Model();
  }
  
  template = '@';
}
