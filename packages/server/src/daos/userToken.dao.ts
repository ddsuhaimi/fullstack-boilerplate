import { AppDataSource } from '@/orm/data-source';
import { UserToken } from '@/orm/entity/userToken.entity';
import { FindOneOptions, FindOptionsSelect, FindOptionsWhere } from 'typeorm';


const userTokenRepository = AppDataSource.getRepository(UserToken)
export const findOne = async (filter: FindOptionsWhere<UserToken> = {}, select: FindOptionsSelect<UserToken> = {}) => {
    const dbCriteria: FindOneOptions<UserToken>  = {
        where: filter,
        select: select
    }
    const userToken = await userTokenRepository.findOne(dbCriteria);
    return userToken
}

export const save = async (userToken: UserToken) => {
    return await userTokenRepository.save(userToken);
}