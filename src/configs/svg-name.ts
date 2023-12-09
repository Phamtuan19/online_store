import * as yup from 'yup';

const SVGNAME = ['react'] as const;

export const svgNameSchema = yup.string().oneOf(Object.values(SVGNAME)).required();

export type SvgNamePropsType = yup.InferType<typeof svgNameSchema>;

export default SVGNAME;
