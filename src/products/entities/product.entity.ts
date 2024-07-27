import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// el producto tiene que tener:

// id
// nombre
// descripcion
// precio
// stock

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false })
  name: string;

  @Column({ length: 100, nullable: false })
  description: string;

  @Column({ nullable: false, default: 0, type: 'float', precision: 10 })
  price: number;

  @Column()
  stock: number;
}
