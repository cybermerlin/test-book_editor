import Core from "core";

/**
 * @class test.book.data.Model
 * @extends Core.data.Model
 */
export default class Model extends Core.data.Model {
  /**
   * @property {Core.API} api
   */
  api = Core.API.get('images');
  
  @PrimaryGeneratedColumn()
  id;

  @Column()
  path;
}
