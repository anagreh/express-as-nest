import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export const findAll = async () => {
  return 'return all';
};

export const findOne = async (id: string) => {
  return 'return one';
};

export const create = async (createUserDto: CreateUserDto) => {
  return 'create one';
};

export const update = async (id: string, updateUserDto: UpdateUserDto) => {
  return 'update one';
};

export const remove = (id: string) => {
  return `this will remove ${id} user`;
};
