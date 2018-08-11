import Core from "core";


export default class Model extends Core.data.Model {
  api = Core.API.get('authors');

  @PrimaryGeneratedColumn()
  id;

  @Column({require: true, maxLength: 20})
  name;

  @Column({require: true, maxLength: 20})
  patronic;
}
