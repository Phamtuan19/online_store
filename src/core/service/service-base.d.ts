/* eslint-disable @typescript-eslint/naming-convention */
interface TypeRequestParams {
   page_index: number;
   page_size: number;
   sort: string;
}

type TDataBaseService = {
   [key: string]: string | number; // Loại này có thể được điều chỉnh để phù hợp với cấu trúc dữ liệu thực tế của bạn
};
