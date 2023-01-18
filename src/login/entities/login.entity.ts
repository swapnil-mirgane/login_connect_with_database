import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('user')
export class user {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  unseName: string;
  @Column()
  password: string;
  @Column()
  email: string;
}
