"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_data_js_1 = require("./class_data.js");
const functions_js_1 = require("./utils/functions.js");
var classes = new Map();
/**
 * # [HaoSubject](https://youtu.be/QtBDL8EiNZo)
 * โดย สิทธิภัทท์ เทพสุธา ที่ชอบ[กระต่าย](https://th.wikipedia.org/wiki/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%95%E0%B9%88%E0%B8%B2%E0%B8%A2)🐇มากๆ
 *
 * ## เกี่ยวกับ HaoSubject
 * ระบบนี้จะอ่านข้อมูลวิชา[แบบนี้](https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json) แล้วคำนวนสิ่งต่างๆให้เลย ทำให้เขียนโปรแกรมง่ายขึ้นเพียงแค่เรียกใช้ฟังก์ชันและ method ที่มีอยู่แล้ว
 *
 * ตัวอย่างการใช้งาน :
 * ```js
 * import haosj from "haosj";
 * ```
 *
 * ## Property อำนวยความสะดวก
 * Property อำนวยความสะดวกที่อยู่ในห้องเรียน(ต้อง update ด้วย)มีดังนี้ :
 * * currentDate - วันปัจจุบัน
 * * currentDay - วันที่เป็นเลข 0 ถึง 6 โดย 0 คือวันอาทิตย์ 1 คือวันจันทร์ ... 6 คือวันเสาร์
 * * currentMinutes - เวลาที่เป็นนาทีนับตั้งแต่ 00:00 นาฬิกาจนถึงปัจจุบัน
 * * currentSubjectDay - วัตถุที่บรรจุรายวิชาในวันนั้นๆในวันปัจจุบัน
 * * currentPariod - คาบปัจจุบัน
 * * currentSubject - วิชาปัจจุบัน
 *
 * ## สำคัญ
 * คุณจำเป็นจะต้อง update ข้อมูลให้กับห้องเรียนก่อน เพราะว่าระบบจะได้ update property ที่อำนวยความสะดวกให้ด้วย:
 * ```js
 * update(yourBoolean?, subject_data?);
 * ```
 * yourBoolean เป็นประพจน์ที่จะใส่หรือไม่ใส่ก็ได้ เมื่อไม่ใส่จะเป็นเท็จโดยอัตโนมัติ ถ้าเป็นจริงระบบจะ console log รายละเอียดในฟังก์ชันนี้มา และ subject_data คือข้อมูลวิชาดิบแบบ json ถ้าใส่ไปห้องเรียนจะไปใช้ข้อมูลใหม่แทน ถ้าไม่ใส่ก็จะยังใช้ข้อมูลเดิมแต่ property ต่างๆก็จะถูก update. ฟังก์ชันนี้จะเรียกใช้ `ClassData.setData(...)` โดยอัตโนมัติ ดังนั้นคุณไม่จำเป็นต้องใช้ `ClassData.setData(...)` เลย แล้วคุณยังสามารถใช้ `update(...)` แทนการใช้ `ClassData.setData(...)`.
 *
 * ## ฟังก์ชันอำนวยความสะดวก
 * ```js
 * // โหลดข้อมูลวิชาแล้ว update ให้เลยอัตโนมัติ (เป็น asynchonous ฟังก์ชัน) ส่งออก Promise<ClassData>
 * useUrlData(url);
 *
 * // โหลดข้อมูลวิชาจาก https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json แล้ว update ให้เลยอัตโนมัติ (เป็น asynchonous ฟังก์ชัน) ส่งออก Promise<ClassData>
 * useExampleUrlData(url);
 * ```
 *
 * ## Construction
 * ![Construction](https://raw.githubusercontent.com/karnhao/haosj/main/src/images/haosj.png)
 */
const haosj = {
    ClassData: class_data_js_1.ClassData,
    Subject: class_data_js_1.Subject,
    SubjectDay: class_data_js_1.SubjectDay,
    useExampleUrlData: functions_js_1.useExampleUrlData,
    useUrlData: functions_js_1.useUrlData,
    /**
     * ขอห้องเรียนโดยใช้ id.
     * @param id
     * @returns undefined ถ้าไม่มี.
     */
    getClass(id) {
        return classes.get(id);
    },
    /**
     * เซตห้องเรียนโดยใช้ข้อมูลประเภท ClassData. (จะถูกลบในอนาคต) เปลี่ยนเป็น `addClass()` แทน
     * @param id
     * @param classData ห้องเรียน
     * @deprecated
     */
    setClass(id, classData) {
        classData.update();
        classes.set(id, classData);
    },
    /**
     * เพิ่มห้องเรียนไปใน haosj โดยใช้ข้อมูลประเภท ClassData.
     * @param id
     * @param classData ห้องเรียน
     */
    addClass(id, classData) {
        classData.update();
        classes.set(id, classData);
    },
    /**
     * เซตห้องเรียนโดยใช้ข้อมูลประเภท object. (จะถูกลบในอนาคต) เปลี่ยนเป็น `addClassRaw()` แทน
     * @param id
     * @param data ข้อมูล;
     * @deprecated
     */
    setClassRaw(id, data, showMessage) {
        let c = new class_data_js_1.ClassData();
        c.update(showMessage, data);
        this.setClass(id, c);
    },
    /**
     * เพิ่มห้องเรียนไปใน haosj โดยใช้ข้อมูลประเภท object.
     * @param id
     * @param data ข้อมูล;
     */
    addClassRaw(id, data, showMessage) {
        let c = new class_data_js_1.ClassData();
        c.update(showMessage, data);
        this.addClass(id, c);
    },
    /**
     * ลบห้องเรียนโดยใช้ id.
     * @param id
     */
    deleteClass(id) {
        classes.delete(id);
    },
    /**
     * ส่งข้อมูลปัจจุบันทั้งหมด.
     * @returns ข้อมูลทั้งหมด.
     */
    getValue() {
        return classes;
    },
    each(callbackfn) {
        classes.forEach(callbackfn);
    },
    /**
     * ลบข้อมูล id และ ClassData ทุกอย่างใน haosj.
     */
    clear() {
        classes.clear();
    },
    /**
     * จะส่งกลับ true ถ้ามี id นี้อยู่ใน haosj ไม่เช่นนั้นจะส่งกลับ false.
     */
    has(id) {
        return classes.has(id);
    },
    /**
     * จะส่งกลับ true ถ้าข้อมูลที่นำเข้ามาสามารถอ่านแล้วแปลงไปเป็น ClassData ได้ ไม่เช่นนั้นจะส่งกลับ false.
     * @param data ข้อมูล
     */
    isReadable(data) {
        try {
            new class_data_js_1.ClassData().setData(data, false);
            return true;
        }
        catch (_a) {
            return false;
        }
    },
    /**
     * เปลี่ยน Obj เป็นห้องเรียนแล้วส่งกลับห้องเรียน.
     * @param {RawClassData} obj
     * @param {boolean} showMessage
     */
    getClassByObj(obj, showMessage = false) {
        let c = new class_data_js_1.ClassData();
        c.update(showMessage, obj);
        return c;
    }
};
exports.default = haosj;
