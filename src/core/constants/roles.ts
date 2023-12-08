import * as yup from 'yup';

/**
 * Configure permissions identified in the system
 */

const ROLE = {
   USER: 'USER',
   ADMIN: 'ADMIN',
};

export const roleSchema = yup.string().oneOf(Object.values(ROLE)).required();

export type RolePropsType = yup.InferType<typeof roleSchema>;

export default ROLE;
