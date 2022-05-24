import bcrypt from 'bcryptjs';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { Post } from './post.entity';
import { User } from './user.entity';

@Entity('userTokens')
export class UserToken {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    // unique: true,
  })
  refreshToken: string;

  @Column()
  @CreateDateColumn()
  created_at: Date;

  @Column()
  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne((type) => User)
  @JoinColumn({ name: 'userId' })
  user: User
  
  @Column({ name: 'userId' })
  userId: string;

  //   hashPassword() {
  //     this.password = bcrypt.hashSync(this.password, 8);
  //   }

  //   checkIfPasswordMatch(unencryptedPassword: string) {
  //     return bcrypt.compareSync(unencryptedPassword, this.password);
  //   }
}
