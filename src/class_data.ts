import fetch from "node-fetch";
export class Subject {
    private width: number = 0;
    private startTime: number = 0;
    private period: number | null = -1;
    private name: string | null = "";
    private id: string | null = "";
    private roomId: string | null = "";
    private teacher: string[] | null = [];
    private classroom: string | null = null;
    private meet: string | null = null;
    constructor(name?: string) {
        if (name) this.name = name;
    }
    /**
     *
     * @param {string} id รหัสวิชา.
     */
    public setId(id: string): void {
        this.id = id;
    }
    /**
     *
     * @param {string} name ชื่อวิชา.
     */
    public setName(name: string): void {
        if (typeof name != "string") throw new TypeError("Parameter ต้องเป็น string.");
        this.name = name;
    }
    /**
     *
     * @param  {string[]} teacher รายชื่อครูประจำวิชา (array).
     */
    public setTeacher(teacher: string[]): void {
        this.teacher = teacher;
    }
    /**
     *
     * @param {string} roomId ชื่อห้องเรียนหรือรหัสห้องเรียน.
     */
    public setRoomId(roomId: string): void {
        this.roomId = roomId;
    }
    /**
     *
     * @param {number} number ระยะเวลาเรียน หน่วยเป็นนาที.
     */
    public setWidth(number: number): void {
        this.width = number;
    }
    /**
     * @param {number} number หมายเลขคาบในวิชา.
     */
    public setPeriod(number: number | null): void {
        if (!Number.isInteger(number) && number) throw new TypeError(`Parameter ต้องเป็นตัวเลขที่เป็นจำนวนเต็มเท่านั้น. : ${number}`);
        this.period = number;
    }
    /**
     * @param {number} time เวลาในหน่วยนาที นับตั้งแต่ 0:00น.
     */
    public setStartTime(time: number): void {
        this.startTime = time;
    }
    /**
     *
     * @param {string} url url ห้องเรียน
     */
    public setClassroomUrl(url: string): void {
        this.classroom = url;
    }
    /**
     *
     * @param {string} url url เข้าห้องประชุม
     */
    public setMeetUrl(url: string): void {
        this.meet = url;
    }
    /**
     *
     * @returns {string} รหัสวิชา
     */
    public getId(): string | null {
        return this.id;
    }
    public getLocaleId(): string {
        return this.id ? this.id : "";
    }
    /**
     *
     * @returns {string} รหัสวิชาในรูปแบบที่ให้ ai อ่าน.
     */
    public getLocaleSpeakId(): string {
        return this.id ? ((inp) => {
            let out = "";
            inp.forEach((t) => {
                out += isNaN(Number(t)) ? `${t}_,` : `${t}`;
            });
            return out.replaceAll("", " ").trim();
        })(this.id.replaceAll("", " ").trim().split(" ")) : "ไม่มีข้อมูล";
    }
    /**
     *
     * @returns {string} ชื่อวิชา
     */
    public getName(): string | null {
        return this.name;
    }
    /**
     *
     * @returns {string} ชื่อวิชา
     */
    public getLocaleName(): string {
        return this.name ? this.name : "";
    }
    /**
     *
     * @returns รายชื่อครูประจำวิชา (array).
     */
    public getTeacher(): string[] | null {
        return this.teacher;
    }
    /**
     *
     * @returns รายชื่อครูประจำวิชาในภาษามนุษย์ทั่วไป
     */
    public getLocaleTeacherName(): string {
        let t_arr = this.teacher;
        if (!t_arr) return "";
        let out = "";
        for (let i = 0; i < t_arr.length; i++) {
            out += (i == t_arr.length - 1) ? `${t_arr[i]}` : (i == t_arr.length - 2) ? `${t_arr[i]} และ ` : `${t_arr[i]}, `;
        }
        return out;
    }
    /**
     *
     * @returns ชื่อห้องเรียนหรือรหัสห้องเรียน.
     */
    public getRoomId(): string | null {
        return this.roomId;
    }
    /**
     *
     * @returns {string}
     */
    public getLocaleRoomId(): string {
        let ins = this.getRoomId();
        if (!ins)
            return "";
        let out = ins[0];
        for (let i = 1; i < ins.length; i++) {
            out += isNaN(Number(ins[i])) || ins[i].match("\\s+") || ins[i - 1].match("\\s+") ? ins[i] : ` ${ins[i]}`;
        }
        return out;
    }
    /**
     *
     * @returns {number} ระยะเวลาเรียน หน่วยเป็นนาที.
     */
    public getWidth(): number {
        return this.width;
    }
    /**
     *
     * @returns {number} หมายเลขคาบในวิชา.
     */
    public getPeriod(): number | null {
        return this.period;
    }
    public getLocalePeriod(): string {
        return this.period ? (this.period + 1).toString() : "";
    }
    /**
     *
     * @returns {number} เวลาเมื่อเริ่มต้นคาบเรียนในรูปแบบนาทีที่นับตั้งแต่ 0:00น.
     */
    public getStartTime(): number {
        return this.startTime;
    }
    public getLocaleStartTime(): string {
        return getLocalTimeStringFromMinute(this.getStartTime());
    }
    /**
     *
     * @returns {number} เวลาเมื่อจบคาบเรียนในรูปแบบนาทีที่นับตั้งแต่ 0:00น.
     */
    public getEndTime(): number {
        return this.startTime + this.width;
    }
    public getLocaleEndTime(): string {
        return getLocalTimeStringFromMinute(this.getEndTime());
    }
    public getLocaleTime(): string {
        return `${this.getLocaleStartTime()}-${this.getLocaleEndTime()}`;
    }
    /**
     * ส่งกลับข้อความที่เป็นภาษามนุษย์
     * @returns {string} ข้อความที่มนุษย์อ่านได้
     */
    public getLocaleString(): string {
        return ` คาบที่ ${this.getLocalePeriod()} ของวัน.\n เรียนวิชา : ${this.getName()}.\n รหัส : ${this.getLocaleId()}\n`
            + ` เรียนที่ : ${this.getLocaleRoomId()}\n`
            + ` ตั้งแต่เวลา : ${this.getLocaleStartTime()} น. ถึง ${this.getLocaleEndTime()} น.\n เป็นเวลา : ${this.getWidth()} นาที.\n`
            + ` ครูผู้สอนคือ : ${this.getLocaleTeacherName()}.`;
    }
    /**
     * ส่งกลับข้อความสำหรับให้ ai อ่าน.
     * @returns {string} ข้อความที่มนุษย์อ่านได้.
     */
    public getLocaleSpeakString(): string {
        return ` คาบที่ ${this.getLocalePeriod()} ของวัน.\n ` + (this.name ? `เรียนวิชา : ${this.getName()}.\n` : '') + (this.id ? ` รหัส : ${this.getLocaleSpeakId()}\n` : '')
            + (this.roomId ? ` เรียนที่ : ${this.getLocaleRoomId()}\n` : '')
            + ` ตั้งแต่เวลา : ${this.getLocaleStartTime()} น. ถึง ${this.getLocaleEndTime()} น.\n เป็นเวลา : ${this.getWidth()} นาที.`
            + (this.teacher ? `\n ครูผู้สอนคือ : ${this.getLocaleTeacherName()}.` : '');
    }
    public getClassroomUrl(): string | null {
        return this.classroom;
    }
    public getMeetUrl(): string | null {
        return this.meet;
    }
    public getStartTimeDate(): Date {
        return getDateFromMinute(this.getStartTime());
    }
}
export class ClassData {
    private static data = {
        startTime: 0,
        classId: '',
        className: '',
        nullSubject: new Subject()
    };
    /**
     * 
     * @param {Number} day ตัวเลขจำนวนเต็ม. 
     * @returns {SubjectDay} จะส่งค่ากลับแบบ SubjectDay.
     */
    public static get(day: number): SubjectDay;
    /**
     * 
     * @param {Number} day ตัวเลขจำนวนเต็ม. 
     * @returns {SubjectDay[]} จะส่งค่ากลับในรูปแบบ Array.
     */
    public static get(): SubjectDay[];
    public static get(day?: number): SubjectDay | SubjectDay[] {
        if (day != null) return SubjectDay.get(day);
        return SubjectDay.get();
    }
    /**
     * สามารถโหลดหรือดูตัวอย่างข้อมูลดิบที่จะนำมาใส่ใน parameter ของฟังก์ชันนี้ได้ที่.
     *  - https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json
     * @param {any} json ข้อมูลดิบ.
     * @param {boolean} showMessage
     */
    public static setData(json: any, showMessage: boolean = false): void {
        // this.setStartTime(json.startTime);
        this.setClassId(json.classId);
        this.setClassName(json.className);
        this.setNullSubject((function (data) {
            let s = new Subject();
            let raw_s = data?.nullSubject;
            s.setId(raw_s?.id);
            s.setName(raw_s?.name);
            s.setPeriod(null);
            s.setRoomId(raw_s?.roomId);
            s.setStartTime(0);
            s.setTeacher(raw_s?.teacher);
            s.setWidth(raw_s?.width);
            s.setClassroomUrl(raw_s?.classroom);
            s.setMeetUrl(raw_s?.meet);
            return s;
        })(json));
        // set Data from subjectList.
        // loop day 0 to 6.
        showMessage && console.log("Pushing subject...");
        for (let i = 0; i < 7; i++) {
            let f = new Function('data', `return data.subjectList._${i};`);
            let sl = f(json);
            sl?.startTime && this.get(i).setStartTime(sl?.startTime);
            if (Array.isArray(sl.subjectList)) {
                let s = [];
                let k = 0;
                // loop subject in subjectList.
                for (let j of sl.subjectList) {
                    let raw_object = j;
                    let si = new Subject();
                    si.setName(raw_object?.name);
                    si.setId(raw_object?.id);
                    si.setPeriod(k);
                    si.setRoomId(raw_object?.roomId);
                    si.setTeacher(raw_object?.teacher);
                    si.setWidth(raw_object?.width);
                    si.setClassroomUrl(raw_object?.classroom);
                    si.setMeetUrl(raw_object.meet);
                    s.push(si);
                    k++;
                    showMessage && console.log(`Day ${i} >>> Pushed ${si.getLocaleId()} ${si.getLocaleName()}`);
                }
                this.get(i).setSubject(s);
            }
        }
        // SubjectDay.update();
    }
    /**
     * @deprecated
     * @param {number} number เวลาเริ่มต้นคาบแรก นับตั้งแต่จุดเริ่มต้นของวัน (0:00น) หน่วยเป็นนาที.
     */
    public static setStartTime(number: number): void {
        this.data.startTime = number;
    }
    /**
     *
     * @param {string} id id ห้องเรียน.
     */
    public static setClassId(id: string): void {
        this.data.classId = id;
    }
    /**
     *
     * @param {string} name ชื่อห้องเรียน.
     */
    public static setClassName(name: string): void {
        this.data.className = name;
    }
    /**
     *
     * @param {Subject} subject วิชาว่าง
     */
    public static setNullSubject(subject: Subject): void {
        this.data.nullSubject = subject;
    }
    /**
     *
     * @param {Date} date วัน.
     * @returns {Subject} วิชา.
     */
    public static getSubjectByDate(date: Date): Subject | null {
        return this.get(date.getDay()).getSubjectByTime(getTimeMinute(date));
    }
    /**
     *
     * @returns startTime
     * @deprecated
     */
    public static getStartTime(): number {
        return this.data.startTime;
    }
    public static getClassName(): string {
        return this.data.className;
    }
    public static getClassId(): string {
        return this.data.classId;
    }
    /**
     *
     * @returns {Subject} วิชาว่าง.
     */
    public static getNullSubject(): Subject {
        return this.data.nullSubject;
    }
}
export class SubjectDay {
    constructor(day: number) {
        if (!Number.isInteger(day)) throw new TypeError("Parameter ต้องเป็นจำนวนเต็ม");
        this.day = day;
    }
    private subject: Subject[] = [];
    private day: number;
    private startTime: number = 0;
    private static sd: SubjectDay[] = (function () {
        let out = [];
        for (let i = 0; i < 7; i++) {
            out.push(new SubjectDay(i));
        }
        return out;
    })();
    public static get(day: number): SubjectDay;
    public static get(): SubjectDay[];
    public static get(day?: number): any {
        return day != null ? this.sd[Math.floor(day)] : this.sd;
    }
    /**
     * อัพเดตเวลาแต่ละคาบของทุกวัน.
     */
    public static update(): void {
        this.sd.forEach((t) => {
            t.update();
        });
    }
    /**
     * อัพเดตเวลาแต่ละคาบของวันนี้.
     * method นี้จะถูกเรียกใช้ตอนมีการเรียกใช้ setSubject
     */
    public update(): void {
        let t = this.getStartTime();
        this.subject.forEach((k) => {
            k.setStartTime(t);
            t += k.getWidth();
        });
    }
    /**
     *
     * @param  {Subject[]} subject
     */
    public setSubject(subject: Subject[]) {
        this.subject = subject;
        this.update();
    }
    public setStartTime(startTime: number) {
        this.startTime = startTime;
    }
    /**
     *
     * @param {number} p คาบเรียน index.
     * @returns {Subject} วิชา.
     */
    public getSubject(p: number): Subject | null {
        // คาบที่ 0.
        if (p == -1) {
            let s = ClassData.getNullSubject();
            if (s) {
                s.setStartTime(0);
                s.setWidth(this.subject.length > 0 ? this.getStartTime() : 1440);
                s.setPeriod(-1);
            }
            return s;
        }
        let out = this.subject[Math.floor(p)];
        // Normal value
        if (out != null) return out;
        // End subject.
        if (p == this.subject.length && p != 0) {
            let s = ClassData.getNullSubject();
            let last_subject = this.subject[this.subject.length - 1];
            if (s) {
                let last_subject_period = last_subject.getPeriod();
                s.setStartTime((last_subject) ? last_subject.getEndTime() : 0);
                s.setPeriod((last_subject && last_subject_period) ? last_subject_period + 1 : -1);
                s.setWidth(1440 - s.getStartTime());
            }
            return s;
        }
        return null;
    }
    /**
     *
     * @returns {Subject[]} วิชา
     */
    public getSubjectList(): Subject[] {
        return this.subject;
    }
    public getStartTime(): number {
        return this.startTime;
    }
    /**
     *
     * @param {Number} timeminute เวลาตั้งแต่จุดเริ่มต้นของวัน (0:00น) หน่วยเป็นนาที.
     * @returns {Subject} วิชา.
     */
    public getSubjectByTime(timeminute: number): Subject | null {
        return this.getSubject(this.getPeriodByTime(timeminute));
    }
    /**
     *
     * @param {Number} timeminute เวลาตั้งแต่จุดเริ่มต้นของวัน (0:00น) หน่วยเป็นนาที.
     * @returns {Number} คาบ.
     */
    public getPeriodByTime(timeminute: number): number {
        // example output : 
        // in < 500 => -1
        // in 500-549 => 0
        // in 550-599 => 1...
        if (timeminute < this.getStartTime() || this.subject.length == 0) {
            return -1;
        }
        let p = 0;
        for (let i of this.getSubjectList()) {
            if (i.getStartTime() <= timeminute && timeminute < i.getEndTime()) {
                return p;
            }
            p++;
        }
        return p;
    }
    /**
     *
     * @returns {string} ข้อมูลรายวิชาในวันนี้ที่มนุษย์สามารถอ่านได้ง่าย.
     */
    public getLocaleSubjectList(): string {
        if (!this.getSubjectList().length) return "ไม่มีข้อมูล";
        let out = "";
        this.getSubjectList().forEach((t) => {
            out += `${t.getLocaleSpeakString()}\n\n`;
        });
        return out;
    }
    public getDay(): number {
        return this.day;
    }
}
// global current date day.
var currentDate: Date = new Date();
export var currentDay: number = currentDate.getDay();
// global variable.
/**
 * _เวลาที่เป็นหน่วยนาทีตั้งแต่ 0:00น ถึงปัจจุบัน._
 */
export var currentMinutes: number;
export var currentSubjectDay: SubjectDay = new SubjectDay(0);
export var currentPariod: number = -1;
export var currentSubject: Subject | null = new Subject();

/**
 * ฟังก์ชันนี้จะรับวัตถุวันมาแล้วจะส่งออกข้อมูลในรูปแบบตัวเลขในหน่วยนาทีตั้งแต่จุดเริ่มต้นของวัน
 * @param {Date} date วัตถุวันที่อยู่ในแม่พิมพ์ Date
 * @returns นาทีตั้งแต่จุดเริ่มต้นของวัน
 */
export function getTimeMinute(date: Date): number {
    return date.getHours() * 60 + date.getMinutes();
}

/**
 * คำนวนเวลา(ในรูปแบบข้อความ string)จากนาที
 * @param {number} minute
 * @returns เวลา
 * @author Sittipat Tepsutar
 * @see getDateFromMinute
 */
function getLocalTimeStringFromMinute(minute: number): string {
    if (minute == Infinity)
        return "00:00";
    let pad = (d: number) => (d < 10) ? '0' + d.toString() : d.toString();
    let t1 = getDateFromMinute(minute);
    return `${pad(t1.getHours())}:${pad(t1.getMinutes())}`;
}

/**
 * ส่งกลับวันจากนาที
 * @param {number} minute
 * @returns {Date} วัน
 * @author Sittipat Tepsutar
 */
function getDateFromMinute(minute: number): Date {
    let returndate = new Date();
    returndate.setHours(Math.floor(minute / 60));
    returndate.setMinutes(minute % 60);
    returndate.setSeconds(0);
    returndate.setMilliseconds(0);
    return returndate;
}

/**
 * 
 * @param {any} data 
 * @param {Boolean} showMessage false is default.
 */
export function update(data: any, showMessage: boolean = false): void {
    currentDate = new Date();
    currentDay = currentDate.getDay();
    // SET DATA
    ClassData.setData(data, showMessage);
    // SET GLOBAL
    currentMinutes = getTimeMinute(currentDate);
    currentSubjectDay = ClassData.get(currentDay);
    currentPariod = currentSubjectDay.getPeriodByTime(currentMinutes);
    currentSubject = currentSubjectDay.getSubject(currentPariod);
}
/**
 * @param {string} url
 * @param {boolean} showMessage default = false
 */
export async function useUrlData(url: string, showMessage: boolean = false): Promise<void> {
    return new Promise(async (resolve) => {
        let x = await fetch(url, {
            "method": "GET"
        }).then((res) => res.json(), () => {
            throw new Error("โหลดไฟล์ล้มเหลว.");
        });
        update(x, showMessage);
        resolve();
    });
}
/**
 * ใช้ข้อมูลตัวอย่าง เป็น asynchronous function
 * ข้อมูลตัวอย่างจะโหลดมาจาก https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json
 */
export async function useExampleUrlData(showMessage?: boolean): Promise<void> {
    return useUrlData("https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json", showMessage);
}