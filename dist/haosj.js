import { ClassData } from "./class_data.js";
var classes = new Map();
const haosj = {
    /**
     * ขอห้องเรียนโดยใช้ id.
     * @param id
     * @returns undefined ถ้าไม่มี.
     */
    getClass(id) {
        return classes.get(id);
    },
    /**
     * เซตห้องเรียนโดยใช้ข้อมูลประเภท ClassData.
     * @param id
     * @param classData ห้องเรียน
     */
    setClass(id, classData) {
        classData.update();
        classes.set(id, classData);
    },
    /**
     * เซตห้องเรียนโดยใช้ข้อมูลประเภท json.
     * @param id
     * @param data ข้อมูลแบบ json;
     */
    setClassRaw(id, data) {
        let c = new ClassData();
        c.update(data);
        this.setClass(id, c);
    },
    /**
     * ลบห้องเรียนโดยใช้ id.
     * @param id
     */
    deleteClass(id) {
        classes.delete(id);
    },
    /**
     * ขอข้อมูลปัจจุบันทั้งหมด.
     * @returns ข้อมูลทั้งหมด.
     */
    getValue() {
        return classes;
    }
};
export default haosj;
