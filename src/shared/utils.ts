import { IUserDTO } from './types';

export const getUserFullName = (user: IUserDTO): string => `${user.firstName} ${user.lastName}`;
