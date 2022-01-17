import { ClassData } from '../class_data.js';
/**
 * เป็น asynchronous function.
 * @param {string} url
 * @param {boolean} showMessage default = false
 * @return {Promise<ClassData>} Promise<ข้อมูล>.
 */
export declare function useUrlData(url: string, showMessage?: boolean): Promise<ClassData>;
/**
 * ใช้ข้อมูลตัวอย่าง เป็น asynchronous function
 * ข้อมูลตัวอย่างจะโหลดมาจาก https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json
 * @return {Promise<ClassData>} Promise<ข้อมูล>.
 */
export declare function useExampleUrlData(showMessage?: boolean): Promise<ClassData>;
