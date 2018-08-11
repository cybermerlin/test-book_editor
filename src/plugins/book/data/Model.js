import Core from "core";
import author from "../../author";
import image from "../../image";

/**
 * @class test.book.data.Model
 */
export default class Model extends Core.data.Model {
  api = Core.API.get('books');

  @PrimaryGeneratedColumn()
  id;

  @Column({maxLength: 30, require: true})
  title;

  @ManyToMany(type => author.data.Model, {require: true})
  @JoinTable()
  authors;

  @Column({type: 'int', require: true})
  pages;

  @Column({require: true, maxLength: 30})
  publisher;
  
  @Column({minValue: 1800, type: 'int'})
  year;
  
  @Columnn({type:'int', minValue: new Date('01.01.1800')})
  yearProduction;
  
  @Column('ISBN')
  isbn;

  @OneToOne(type => image.data.Model)
  @JoinColumn()
  img;
}
