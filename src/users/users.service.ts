import { UserModel } from './schema/User';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export const findAll = async () => {
  const allUsers = UserModel.find().exec();
  return allUsers;
};

export const findOne = async (id: string) => {
  const user = await UserModel.findById(id);
  return user;
};

export const create = async (createUserDto: CreateUserDto) => {
  const newUser = new UserModel(createUserDto);
  const savedUser = await newUser.save();
  return savedUser.id;
};

export const update = async (id: string, updateUserDto: UpdateUserDto) => {
  const newUpdateUserDto: UpdateUserDto = { ...updateUserDto };

  const updatedUser = await UserModel.findByIdAndUpdate(id, newUpdateUserDto, {
    new: true,
  }).exec();

  return updatedUser;
};

export const remove = (id: string) => {
  return `this will remove ${id} user`;
};
