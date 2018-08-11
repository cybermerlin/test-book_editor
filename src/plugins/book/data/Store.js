import Core from "core";

/**
 * @class test.book.data.Store
 */
export default class Store extends Core.data.Store {
  model = 'test.book.Model';
  api = Core.API.get('books');
}
