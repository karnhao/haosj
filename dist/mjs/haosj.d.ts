import { ClassData } from "./class_data.js";
declare const haosj: {
    /**
     * ขอห้องเรียนโดยใช้ id.
     * @param id
     * @returns undefined ถ้าไม่มี.
     */
    getClass(id: string): ClassData | undefined;
    /**
     * เซตห้องเรียนโดยใช้ข้อมูลประเภท ClassData.
     * @param id
     * @param classData ห้องเรียน
     */
    setClass(id: string, classData: ClassData): void;
    /**
     * เซตห้องเรียนโดยใช้ข้อมูลประเภท json.
     * @param id
     * @param data ข้อมูลแบบ json;
     */
    setClassRaw(id: string, data: any, showMessage?: boolean | undefined): void;
    /**
     * ลบห้องเรียนโดยใช้ id.
     * @param id
     */
    deleteClass(id: string): void;
    /**
     * ขอข้อมูลปัจจุบันทั้งหมด.
     * @returns ข้อมูลทั้งหมด.
     */
    getValue(): Map<string, ClassData>;
};
export default haosj;
