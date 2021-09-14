import haosj from '../haosj.js';
import fetch from "node-fetch";
import { ClassData } from '../class_data.js';
/**
 * เป็น asynchronous function.
 * @param {string} url
 * @param {boolean} showMessage default = false
 * @return {Promise<any>} Promise<ข้อมูล>.
 */
export async function useUrlData(classId: string, url: string, showMessage: boolean = false): Promise<any> {
    return new Promise(async (resolve, reject) => {
        let x = await fetch(url, {
            "method": "GET"
        }).then((res) => res.json(), () => {
            reject(new Error("โหลดไฟล์ล้มเหลว."));
        });
        let c = new ClassData(); c.setData(x);
        haosj.setClass(classId, c);
        resolve(x);
    });
}
/**
 * ใช้ข้อมูลตัวอย่าง เป็น asynchronous function
 * ข้อมูลตัวอย่างจะโหลดมาจาก https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json
 * @return {Promise<any>} Promise<ข้อมูล>.
 */
export async function useExampleUrlData(classId: string, showMessage?: boolean): Promise<any> {
    return useUrlData(classId, "https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json", showMessage);
}