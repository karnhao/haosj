export declare class Subject {
    private width;
    private startTime;
    private period;
    private name;
    private id;
    private roomId;
    private teacher;
    private classroom;
    private meet;
    constructor(name?: string);
    /**
     *
     * @param {string} id รหัสวิชา.
     */
    setId(id: string): void;
    /**
     *
     * @param {string} name ชื่อวิชา.
     */
    setName(name: string): void;
    /**
     *
     * @param  {string[]} teacher รายชื่อครูประจำวิชา (array).
     */
    setTeacher(teacher: string[]): void;
    /**
     *
     * @param {string} roomId ชื่อห้องเรียนหรือรหัสห้องเรียน.
     */
    setRoomId(roomId: string): void;
    /**
     *
     * @param {number} number ระยะเวลาเรียน หน่วยเป็นนาที.
     */
    setWidth(number: number): void;
    /**
     * @param {number} number หมายเลขคาบในวิชา.
     */
    setPeriod(number: number | null): void;
    /**
     * @param {number} time เวลาในหน่วยนาที นับตั้งแต่ 0:00น.
     */
    setStartTime(time: number): void;
    /**
     *
     * @param {string} url url ห้องเรียน
     */
    setClassroomUrl(url: string): void;
    /**
     *
     * @param {string} url url เข้าห้องประชุม
     */
    setMeetUrl(url: string): void;
    /**
     *
     * @returns {string} รหัสวิชา
     */
    getId(): string | null;
    getLocaleId(): string;
    /**
     *
     * @returns {string} รหัสวิชาในรูปแบบที่ให้ ai อ่าน.
     */
    getLocaleSpeakId(): string;
    /**
     *
     * @returns {string} ชื่อวิชา
     */
    getName(): string | null;
    /**
     *
     * @returns {string} ชื่อวิชา
     */
    getLocaleName(): string;
    /**
     *
     * @returns รายชื่อครูประจำวิชา (array).
     */
    getTeacher(): string[] | null;
    /**
     *
     * @returns รายชื่อครูประจำวิชาในภาษามนุษย์ทั่วไป
     */
    getLocaleTeacherName(): string;
    /**
     *
     * @returns ชื่อห้องเรียนหรือรหัสห้องเรียน.
     */
    getRoomId(): string | null;
    /**
     *
     * @returns {string}
     */
    getLocaleRoomId(): string;
    /**
     *
     * @returns {number} ระยะเวลาเรียน หน่วยเป็นนาที.
     */
    getWidth(): number;
    /**
     *
     * @returns {number} หมายเลขคาบในวิชา.
     */
    getPeriod(): number | null;
    getLocalePeriod(): string;
    /**
     *
     * @returns {number} เวลาเมื่อเริ่มต้นคาบเรียนในรูปแบบนาทีที่นับตั้งแต่ 0:00น.
     */
    getStartTime(): number;
    getLocaleStartTime(): string;
    /**
     *
     * @returns {number} เวลาเมื่อจบคาบเรียนในรูปแบบนาทีที่นับตั้งแต่ 0:00น.
     */
    getEndTime(): number;
    getLocaleEndTime(): string;
    getLocaleTime(): string;
    /**
     * ส่งกลับข้อความที่เป็นภาษามนุษย์
     * @returns {string} ข้อความที่มนุษย์อ่านได้
     */
    getLocaleString(): string;
    /**
     * ส่งกลับข้อความสำหรับให้ ai อ่าน.
     * @returns {string} ข้อความที่มนุษย์อ่านได้.
     */
    getLocaleSpeakString(): string;
    getClassroomUrl(): string | null;
    getMeetUrl(): string | null;
    getStartTimeDate(): Date;
}
export declare class ClassData {
    private static data;
    /**
     *
     * @param {Number} day ตัวเลขจำนวนเต็ม.
     * @returns {SubjectDay} จะส่งค่ากลับแบบ SubjectDay.
     */
    static get(day: number): SubjectDay;
    /**
     *
     * @param {Number} day ตัวเลขจำนวนเต็ม.
     * @returns {SubjectDay[]} จะส่งค่ากลับในรูปแบบ Array.
     */
    static get(): SubjectDay[];
    /**
     * สามารถโหลดหรือดูตัวอย่างข้อมูลดิบที่จะนำมาใส่ใน parameter ของฟังก์ชันนี้ได้ที่.
     *  - https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json
     * @param {any} json ข้อมูลดิบ.
     * @param {boolean} showMessage
     */
    static setData(json: any, showMessage?: boolean): void;
    /**
     * @deprecated
     * @param {number} number เวลาเริ่มต้นคาบแรก นับตั้งแต่จุดเริ่มต้นของวัน (0:00น) หน่วยเป็นนาที.
     */
    static setStartTime(number: number): void;
    /**
     *
     * @param {string} id id ห้องเรียน.
     */
    static setClassId(id: string): void;
    /**
     *
     * @param {string} name ชื่อห้องเรียน.
     */
    static setClassName(name: string): void;
    /**
     *
     * @param {Subject} subject วิชาว่าง
     */
    static setNullSubject(subject: Subject): void;
    /**
     *
     * @param {Date} date วัน.
     * @returns {Subject} วิชา.
     */
    static getSubjectByDate(date: Date): Subject | null;
    /**
     *
     * @returns startTime
     * @deprecated
     */
    static getStartTime(): number;
    static getClassName(): string;
    static getClassId(): string;
    /**
     *
     * @returns {Subject} วิชาว่าง.
     */
    static getNullSubject(): Subject;
}
export declare class SubjectDay {
    constructor(day: number);
    private subject;
    private day;
    private startTime;
    private static sd;
    static get(day: number): SubjectDay;
    static get(): SubjectDay[];
    /**
     * อัพเดตเวลาแต่ละคาบของทุกวัน.
     */
    static update(): void;
    /**
     * อัพเดตเวลาแต่ละคาบของวันนี้.
     * method นี้จะถูกเรียกใช้ตอนมีการเรียกใช้ setSubject
     */
    update(): void;
    /**
     *
     * @param  {Subject[]} subject
     */
    setSubject(subject: Subject[]): void;
    setStartTime(startTime: number): void;
    /**
     *
     * @param {number} p คาบเรียน index.
     * @returns {Subject} วิชา.
     */
    getSubject(p: number): Subject | null;
    /**
     *
     * @returns {Subject[]} วิชา
     */
    getSubjectList(): Subject[];
    getStartTime(): number;
    /**
     *
     * @param {Number} timeminute เวลาตั้งแต่จุดเริ่มต้นของวัน (0:00น) หน่วยเป็นนาที.
     * @returns {Subject} วิชา.
     */
    getSubjectByTime(timeminute: number): Subject | null;
    /**
     *
     * @param {Number} timeminute เวลาตั้งแต่จุดเริ่มต้นของวัน (0:00น) หน่วยเป็นนาที.
     * @returns {Number} คาบ.
     */
    getPeriodByTime(timeminute: number): number;
    /**
     *
     * @returns {string} ข้อมูลรายวิชาในวันนี้ที่มนุษย์สามารถอ่านได้ง่าย.
     */
    getLocaleSubjectList(): string;
    getDay(): number;
}
export declare var currentDay: number;
/**
 * _เวลาที่เป็นหน่วยนาทีตั้งแต่ 0:00น ถึงปัจจุบัน._
 */
export declare var currentMinutes: number;
export declare var currentSubjectDay: SubjectDay;
export declare var currentPariod: number;
export declare var currentSubject: Subject | null;
/**
 * ฟังก์ชันนี้จะรับวัตถุวันมาแล้วจะส่งออกข้อมูลในรูปแบบตัวเลขในหน่วยนาทีตั้งแต่จุดเริ่มต้นของวัน
 * @param {Date} date วัตถุวันที่อยู่ในแม่พิมพ์ Date
 * @returns นาทีตั้งแต่จุดเริ่มต้นของวัน
 */
export declare function getTimeMinute(date: Date): number;
/**
 *
 * @param {any} data
 * @param {Boolean} showMessage false is default.
 */
export declare function update(data: any, showMessage?: boolean): void;
