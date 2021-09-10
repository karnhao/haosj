import haosj from '../haosj.js';
import fetch from "node-fetch";
import { ClassData } from '../class_data.js';
/**
 * เป็น asynchronous function.
 * @param {string} url
 * @param {boolean} showMessage default = false
 * @return {Promise<any>} Promise<ข้อมูล>.
 */
export async function useUrlData(classId, url, showMessage = false) {
    return new Promise(async (resolve) => {
        let x = await fetch(url, {
            "method": "GET"
        }).then((res) => res.json(), () => {
            throw new Error("โหลดไฟล์ล้มเหลว.");
        });
        let c = new ClassData();
        c.setData(x);
        haosj.setClass(classId, c);
        resolve(x);
    });
}
/**
 * ใช้ข้อมูลตัวอย่าง เป็น asynchronous function
 * ข้อมูลตัวอย่างจะโหลดมาจาก https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json
 * @return {Promise<any>} Promise<ข้อมูล>.
 */
export async function useExampleUrlData(classId, showMessage) {
    return useUrlData(classId, "https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json", showMessage);
}
