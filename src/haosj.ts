import { ClassData } from "./class_data.js";

var classes = new Map<string, ClassData>();
const haosj = {
    /**
     * ขอห้องเรียนโดยใช้ id.
     * @param id 
     * @returns undefined ถ้าไม่มี.
     */
    getClass(id: string): ClassData | undefined {
        return classes.get(id);
    },
    /**
     * เซตห้องเรียนโดยใช้ข้อมูลประเภท ClassData.
     * @param id 
     * @param classData ห้องเรียน
     */
    setClass(id: string, classData: ClassData): void {
        classData.update();
        classes.set(id, classData);
    },
    /**
     * เซตห้องเรียนโดยใช้ข้อมูลประเภท json.
     * @param id
     * @param data ข้อมูลแบบ json;
     */
    setClassRaw(id: string, data: any, showMessage?: boolean): void {
        let c = new ClassData();
        c.update(showMessage, data);
        this.setClass(id, c);
    },
    /**
     * ลบห้องเรียนโดยใช้ id.
     * @param id 
     */
    deleteClass(id: string): void {
        classes.delete(id);
    },
    /**
     * ขอข้อมูลปัจจุบันทั้งหมด.
     * @returns ข้อมูลทั้งหมด.
     */
    getValue(): Map<string, ClassData> {
        return classes;
    }
}
export default haosj;