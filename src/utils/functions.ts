import { update } from '../class_data.js';
import fetch from "node-fetch";
/**
 * เป็น asynchronous function.
 * @param {string} url
 * @param {boolean} showMessage default = false
 * @return {Promise<any>} Promise<ข้อมูล>.
 */
export async function useUrlData(url: string, showMessage: boolean = false): Promise<any> {
    return new Promise(async (resolve) => {
        let x = await fetch(url, {
            "method": "GET"
        }).then((res) => res.json(), () => {
            throw new Error("โหลดไฟล์ล้มเหลว.");
        });
        update(x, showMessage);
        resolve(x);
    });
}
/**
 * ใช้ข้อมูลตัวอย่าง เป็น asynchronous function
 * ข้อมูลตัวอย่างจะโหลดมาจาก https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json
 * @return {Promise<any>} Promise<ข้อมูล>.
 */
export async function useExampleUrlData(showMessage?: boolean): Promise<any> {
    return useUrlData("https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json", showMessage);
}