import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
  } from 'typeorm';
  
  // import { PostPublishSetting } from '../postPublishSettings/PostPublishSetting';
  import { User } from './user.entity';
  
  @Entity('posts')
  export class Post {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column()
    title: string;
  
    @Column()
    text: string;
  
    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
  
    @ManyToOne((type) => User, (user) => user.posts)
    @JoinColumn({ name: 'userId' })
    user: User;
  
    @Column({ name: 'userId' })
    userId: string;
  
    // @OneToMany((type) => PostPublishSetting, (postPublishSetting) => postPublishSetting.post)
    // post_publish_settings: PostPublishSetting[];
  
    // @OneToMany((type) => PostPublishSetting, (postPublishSetting) => postPublishSetting.post)
    // publish_settings: PostPublishSetting[];
  
    // @OneToMany(() => PostPublishSetting, (postPublishSetting) => postPublishSetting.post)
    // publishSettings: PostPublishSetting[];
  }
  