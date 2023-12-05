import { format } from 'date-fns';

/**
 * Format the time display style.
 *
 * @param date - The Date or string to convert.
 * @param type - The type format date.
 * @returns Convert to yyyy-MM-dd format.
 */

const convertToTime = (date: Date | string, type: 'yyyy-MM-dd' | 'yyyy-MM-dd h:i:s' = 'yyyy-MM-dd') =>
   format(new Date(date), type);

export default convertToTime;
