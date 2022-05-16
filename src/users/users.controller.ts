import { Router } from 'express';
import { NotFound } from 'http-errors';

import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import * as userService from './users.service';
import { plainToClassWithValidation } from '../helper/plainToClassWithValidation';

export const router = Router();

// Create
router.post('/', async (req, res, next) => {
  try {
    const [createUserDto, error] = await plainToClassWithValidation(
      CreateUserDto,
      req.body,
    );
    if (error.length > 0) return res.status(400).json(error);

    res.send(await userService.create(createUserDto));
  } catch (error) {
    next(error);
  }
});

// Find All
router.get('/', async (req, res, next) => {
  try {
    res.send(await userService.findAll());
  } catch (error) {
    next(error);
  }
});

// Find One
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await userService.findOne(id);
    if (user === null) {
      return next(new NotFound('No User Found'));
    }
    res.send(user);
  } catch (error) {
    next(error);
  }
});

// Update
router.patch('/:id', async (req, res, next) => {
  const [updateUserDto, error] = await plainToClassWithValidation(
    UpdateUserDto,
    req.body,
  );
  if (error.length > 0) return res.status(400).json(error);

  try {
    const id = req.params.id;
    const updatedUser = await userService.update(id, updateUserDto);
    if (updatedUser === null) {
      return next(new NotFound('No User Found'));
    }
    res.send(updatedUser);
  } catch (error) {
    next(error);
  }
});

// Remove
router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    res.send(userService.remove(id));
  } catch (error) {
    next(error);
  }
});
