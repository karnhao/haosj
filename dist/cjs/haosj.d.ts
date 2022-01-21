import { ClassData } from "./class_data.js";
import { RawClassData } from "./utils/interfaces.js";
import { useExampleUrlData, useUrlData } from "./utils/functions.js";
/**
 * ## Haosj (HaoSubject)
 * โดย สิทธิภัทท์ เทพสุธา ที่ชอบ [กระต่าย](https://th.wikipedia.org/wiki/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%95%E0%B9%88%E0%B8%B2%E0%B8%A2)🐇มากๆ
 * เข้าไปดู[ลายละเอียด](https://raw.githubusercontent.com/karnhao/haosj/main/README.md)
 */
declare const haosj: {
    useExampleUrlData: typeof useExampleUrlData;
    useUrlData: typeof useUrlData;
    /**
     * ขอห้องเรียนโดยใช้ id.
     * @param id
     * @returns undefined ถ้าไม่มี.
     */
    getClass(id: string): ClassData | undefined;
    /**
     * เซตห้องเรียนโดยใช้ข้อมูลประเภท ClassData. (จะถูกลบในอนาคต) เปลี่ยนเป็น `addClass()` แทน
     * @param id
     * @param classData ห้องเรียน
     * @deprecated
     */
    setClass(id: string, classData: ClassData): void;
    /**
     * เพิ่มห้องเรียนไปใน haosj โดยใช้ข้อมูลประเภท ClassData.
     * @param id
     * @param classData ห้องเรียน
     */
    addClass(id: string, classData: ClassData): void;
    /**
     * เซตห้องเรียนโดยใช้ข้อมูลประเภท object. (จะถูกลบในอนาคต) เปลี่ยนเป็น `addClassRaw()` แทน
     * @param id
     * @param data ข้อมูล;
     * @deprecated
     */
    setClassRaw(id: string, data: RawClassData, showMessage?: boolean | undefined): void;
    /**
     * เพิ่มห้องเรียนไปใน haosj โดยใช้ข้อมูลประเภท object.
     * @param id
     * @param data ข้อมูล;
     */
    addClassRaw(id: string, data: RawClassData, showMessage?: boolean | undefined): void;
    /**
     * ลบห้องเรียนโดยใช้ id.
     * @param id
     */
    deleteClass(id: string): void;
    /**
     * ส่งข้อมูลปัจจุบันทั้งหมด.
     * @returns ข้อมูลทั้งหมด.
     */
    getValue(): Map<string, ClassData>;
    each(callbackfn: (classData: ClassData, id: string, map: Map<string, ClassData>) => void): void;
    /**
     * ลบข้อมูล id และ ClassData ทุกอย่างใน haosj.
     */
    clear(): void;
    /**
     * จะส่งกลับ true ถ้ามี id นี้อยู่ใน haosj ไม่เช่นนั้นจะส่งกลับ false.
     */
    has(id: string): boolean;
    /**
     * จะส่งกลับ true ถ้าข้อมูลที่นำเข้ามาสามารถอ่านแล้วแปลงไปเป็น ClassData ได้ ไม่เช่นนั้นจะส่งกลับ false.
     * @param data ข้อมูล
     */
    isReadable(data: any): boolean;
    /**
     * เปลี่ยน Obj เป็นห้องเรียนแล้วส่งกลับห้องเรียน.
     * @param {RawClassData} obj
     * @param {boolean} showMessage
     */
    getClassByObj(obj: RawClassData, showMessage?: boolean): ClassData;
};
export default haosj;
