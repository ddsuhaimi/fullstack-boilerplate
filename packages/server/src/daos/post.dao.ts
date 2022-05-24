import { AppDataSource } from '@/orm/data-source';
import { Post } from '@/orm/entity/post.entity';
import { UserToken } from '@/orm/entity/userToken.entity';
import { FindOneOptions, FindOptionsSelect, FindOptionsWhere, ObjectID } from 'typeorm';


const postRepository = AppDataSource.getRepository(Post)
export const find = async (filter: FindOptionsWhere<Post> = {}, select: FindOptionsSelect<Post> = {}) => {
    const dbCriteria: FindOneOptions<Post>  = {
        where: filter,
        select: select
    }
    const posts = await postRepository.find(dbCriteria);
    return posts
}

export const findOne = async (filter: FindOptionsWhere<Post> = {}, select: FindOptionsSelect<Post> = {}) => {
    const dbCriteria: FindOneOptions<Post>  = {
        where: filter,
        select: select
    }
    const post = await postRepository.findOne(dbCriteria);
    return post
}

export type DeletePost = string | string[] | number | number[] | Date | Date[] | ObjectID | ObjectID[] | FindOptionsWhere<Post>

export const remove = async (user: DeletePost) => {
    return await postRepository.delete(user);
}

export const save = async (post: Post) => {
    return await postRepository.save(post);
}