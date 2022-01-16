import fetch from "node-fetch";
import { ClassData } from '../class_data.js';
/**
 * เป็น asynchronous function.
 * @param {string} url
 * @param {boolean} showMessage default = false
 * @return {Promise<ClassData>} Promise<ข้อมูล>.
 */
export async function useUrlData(url: string, showMessage: boolean = false): Promise<ClassData> {
    let x = await fetch(url, {
        "method": "GET"
    }).then((res) => res.json(), () => {
        throw "โหลดไฟล์ล้มเหลว.";
    }).catch((e) => {
        throw e;
    });
    try {
        let c = new ClassData(); c.setData(x, showMessage);
        return c;
    } catch (e) {
        throw e;
    }
}
/**
 * ใช้ข้อมูลตัวอย่าง เป็น asynchronous function
 * ข้อมูลตัวอย่างจะโหลดมาจาก https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json
 * @return {Promise<ClassData>} Promise<ข้อมูล>.
 */
export async function useExampleUrlData(showMessage = false): Promise<ClassData> {
    return useUrlData("https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json", showMessage);
}