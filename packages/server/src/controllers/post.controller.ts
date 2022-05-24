import { Post } from '@/orm/entity/post.entity';
import { Request, Response, NextFunction } from 'express';
import * as postDao from '@/daos/post.dao'
import * as userDao from '@/daos/user.dao'

import ApiError from '@/utils/response/customError/CustomError';

// Admin route
export const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await postDao.find({});

    res.customSuccess(200, 'Post found', posts);
  } catch (err) {
    const customError = new ApiError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};

// Standard route
export const getOne = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;

  try {
    const post = await postDao.findOne(
      { id: id },
      {
        id: true,
        title: true,
        text: true,
        createdAt: true,
        updatedAt: true,
      }
    );

    if (!post) {
      const customError = new ApiError(404, 'General', `Post with id:${id} not found.`, ['User not found.']);
      return next(customError);
    }
    res.customSuccess(200, 'Post found', post);

  } catch (err) {
    const customError = new ApiError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};

export const getAllOwned = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.user
  try {
    const user = await userDao.findOne({id});
    if (!user) {
      const customError = new ApiError(404, 'General', `User with id:${req.user.id} not found.`, [
        'User not found.',
      ]);
      return next(customError);
    }

    const post = await postDao.find({userId: id});

    res.customSuccess(200, 'Post found', post);

  } catch (err) {
    const customError = new ApiError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};

export const addOne = async (req: Request, res: Response, next: NextFunction) => {
  const { title, text } = req.body;
  const {id} = req.user

  try {
    const user = await userDao.findOne({id});
    const newPost = new Post();
    newPost.title = title;
    newPost.text = text;
    if (user) {
      newPost.user = user;
    }
    await postDao.save(newPost);

    res.customSuccess(200, 'Post successfully created.');

  } catch (err) {
    const customError = new ApiError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};

export const deleteOne = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;

  try {
    const post = await postDao.findOne({ id });

    if (!post) {
      const customError = new ApiError(404, 'General', 'Not Found', [`Post with id:${id} doesn't exists.`]);
      return next(customError);
    }
    postDao.remove(id);

    res.customSuccess(200, 'Post successfully deleted.', { id: post.id, title: post.title, text: post.text });

  } catch (err) {
    const customError = new ApiError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};

export const editOne = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const { title, text } = req.body;

  try {
    const post = await postDao.findOne({ id });

    if (!post) {
      const customError = new ApiError(404, 'General', `Post with id:${id} not found.`, ['Post not found.']);
      return next(customError);
    }

    post.title = title;
    post.text = text;

    try {
      await postDao.save(post);
      res.customSuccess(200, 'Post successfully saved.');

    } catch (err) {
      const customError = new ApiError(409, 'Raw', `Post '${post.id}' can't be saved.`, null, err);
      return next(customError);
    }
  } catch (err) {
    const customError = new ApiError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};
