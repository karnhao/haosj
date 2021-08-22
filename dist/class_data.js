export class Subject {
    width = 0;
    startTime = 0;
    period = -1;
    name = "";
    id = "";
    roomId = "";
    teacher = [];
    classroom = null;
    meet = null;
    constructor(name) {
        if (name)
            this.name = name;
    }
    /**
     *
     * @param {string} id รหัสวิชา.
     */
    setId(id) {
        this.id = id;
    }
    /**
     *
     * @param {string} name ชื่อวิชา.
     */
    setName(name) {
        if (typeof name != "string")
            throw new TypeError("Parameter ต้องเป็น string.");
        this.name = name;
    }
    /**
     *
     * @param  {string[]} teacher รายชื่อครูประจำวิชา (array).
     */
    setTeacher(teacher) {
        this.teacher = teacher;
    }
    /**
     *
     * @param {string} roomId ชื่อห้องเรียนหรือรหัสห้องเรียน.
     */
    setRoomId(roomId) {
        this.roomId = roomId;
    }
    /**
     *
     * @param {number} number ระยะเวลาเรียน หน่วยเป็นนาที.
     */
    setWidth(number) {
        this.width = number;
    }
    /**
     * @param {number} number หมายเลขคาบในวิชา.
     */
    setPeriod(number) {
        if (!Number.isInteger(number) && number)
            throw new TypeError(`Parameter ต้องเป็นตัวเลขที่เป็นจำนวนเต็มเท่านั้น. : ${number}`);
        this.period = number;
    }
    /**
     * @param {number} time เวลาในหน่วยนาที นับตั้งแต่ 0:00น.
     */
    setStartTime(time) {
        this.startTime = time;
    }
    /**
     *
     * @param {string} url url ห้องเรียน
     */
    setClassroomUrl(url) {
        this.classroom = url;
    }
    /**
     *
     * @param {string} url url เข้าห้องประชุม
     */
    setMeetUrl(url) {
        this.meet = url;
    }
    /**
     *
     * @returns {string} รหัสวิชา
     */
    getId() {
        return this.id;
    }
    getLocaleId() {
        return this.id ? this.id : "";
    }
    /**
     *
     * @returns {string} รหัสวิชาในรูปแบบที่ให้ ai อ่าน.
     */
    getLocaleSpeakId() {
        return "Comming soon!";
        // return this.id ? ((inp) => {
        //     let out = "";
        //     inp.forEach((t) => {
        //         out += isNaN(Number(t)) ? `${t}_,` : `${t}`;
        //     });
        //     return out.replaceAll("", " ").trim();
        // })(this.id.replaceAll("", " ").trim().split(" ")) : "ไม่มีข้อมูล";
    }
    /**
     *
     * @returns {string} ชื่อวิชา
     */
    getName() {
        return this.name;
    }
    /**
     *
     * @returns {string} ชื่อวิชา
     */
    getLocaleName() {
        return this.name ? this.name : "";
    }
    /**
     *
     * @returns รายชื่อครูประจำวิชา (array).
     */
    getTeacher() {
        return this.teacher;
    }
    /**
     *
     * @returns รายชื่อครูประจำวิชาในภาษามนุษย์ทั่วไป
     */
    getLocaleTeacherName() {
        let t_arr = this.teacher;
        if (!t_arr)
            return "";
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
    getRoomId() {
        return this.roomId;
    }
    /**
     *
     * @returns {string}
     */
    getLocaleRoomId() {
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
    getWidth() {
        return this.width;
    }
    /**
     *
     * @returns {number} หมายเลขคาบในวิชา.
     */
    getPeriod() {
        return this.period;
    }
    getLocalePeriod() {
        return this.period ? (this.period + 1).toString() : "";
    }
    /**
     *
     * @returns {number} เวลาเมื่อเริ่มต้นคาบเรียนในรูปแบบนาทีที่นับตั้งแต่ 0:00น.
     */
    getStartTime() {
        return this.startTime;
    }
    getLocaleStartTime() {
        return getLocalTimeStringFromMinute(this.getStartTime());
    }
    /**
     *
     * @returns {number} เวลาเมื่อจบคาบเรียนในรูปแบบนาทีที่นับตั้งแต่ 0:00น.
     */
    getEndTime() {
        return this.startTime + this.width;
    }
    getLocaleEndTime() {
        return getLocalTimeStringFromMinute(this.getEndTime());
    }
    getLocaleTime() {
        return `${this.getLocaleStartTime()}-${this.getLocaleEndTime()}`;
    }
    /**
     * ส่งกลับข้อความที่เป็นภาษามนุษย์
     * @returns {string} ข้อความที่มนุษย์อ่านได้
     */
    getLocaleString() {
        return ` คาบที่ ${this.getLocalePeriod()} ของวัน.\n เรียนวิชา : ${this.getName()}.\n รหัส : ${this.getLocaleId()}\n`
            + ` เรียนที่ : ${this.getLocaleRoomId()}\n`
            + ` ตั้งแต่เวลา : ${this.getLocaleStartTime()} น. ถึง ${this.getLocaleEndTime()} น.\n เป็นเวลา : ${this.getWidth()} นาที.\n`
            + ` ครูผู้สอนคือ : ${this.getLocaleTeacherName()}.`;
    }
    /**
     * ส่งกลับข้อความสำหรับให้ ai อ่าน.
     * @returns {string} ข้อความที่มนุษย์อ่านได้.
     */
    getLocaleSpeakString() {
        return ` คาบที่ ${this.getLocalePeriod()} ของวัน.\n ` + (this.name ? `เรียนวิชา : ${this.getName()}.\n` : '') + (this.id ? ` รหัส : ${this.getLocaleSpeakId()}\n` : '')
            + (this.roomId ? ` เรียนที่ : ${this.getLocaleRoomId()}\n` : '')
            + ` ตั้งแต่เวลา : ${this.getLocaleStartTime()} น. ถึง ${this.getLocaleEndTime()} น.\n เป็นเวลา : ${this.getWidth()} นาที.`
            + (this.teacher ? `\n ครูผู้สอนคือ : ${this.getLocaleTeacherName()}.` : '');
    }
    getClassroomUrl() {
        return this.classroom;
    }
    getMeetUrl() {
        return this.meet;
    }
    getStartTimeDate() {
        return getDateFromMinute(this.getStartTime());
    }
}
export class ClassData {
    static data = {
        startTime: 0,
        classId: '',
        className: '',
        nullSubject: new Subject()
    };
    static get(day) {
        if (day)
            return SubjectDay.get(day);
        return SubjectDay.get();
    }
    /**
     * สามารถโหลดหรือดูตัวอย่างข้อมูลดิบที่จะนำมาใส่ใน parameter ของฟังก์ชันนี้ได้ที่.
     *  - https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json
     * @param {any} json ข้อมูลดิบ.
     * @param {boolean} showMessage
     */
    static setData(json, showMessage = false) {
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
    static setStartTime(number) {
        this.data.startTime = number;
    }
    /**
     *
     * @param {string} id id ห้องเรียน.
     */
    static setClassId(id) {
        this.data.classId = id;
    }
    /**
     *
     * @param {string} name ชื่อห้องเรียน.
     */
    static setClassName(name) {
        this.data.className = name;
    }
    /**
     *
     * @param {Subject} subject วิชาว่าง
     */
    static setNullSubject(subject) {
        this.data.nullSubject = subject;
    }
    /**
     *
     * @param {Date} date วัน.
     * @returns {Subject} วิชา.
     */
    static getSubjectByDate(date) {
        return this.get(date.getDay()).getSubjectByTime(getTimeMinute(date));
    }
    /**
     *
     * @returns startTime
     * @deprecated
     */
    static getStartTime() {
        return this.data.startTime;
    }
    static getClassName() {
        return this.data.className;
    }
    static getClassId() {
        return this.data.classId;
    }
    /**
     *
     * @returns {Subject} วิชาว่าง.
     */
    static getNullSubject() {
        return this.data.nullSubject;
    }
}
export class SubjectDay {
    constructor(day) {
        if (!Number.isInteger(day))
            throw new TypeError("Parameter ต้องเป็นจำนวนเต็ม");
        this.day = day;
    }
    subject = [];
    day;
    startTime = 0;
    static sd = (function () {
        let out = [];
        for (let i = 0; i < 7; i++) {
            out.push(new SubjectDay(i));
        }
        return out;
    })();
    static get(day) {
        return day != null ? this.sd[Math.floor(day)] : this.sd;
    }
    /**
     * อัพเดตเวลาแต่ละคาบของทุกวัน.
     */
    static update() {
        this.sd.forEach((t) => {
            t.update();
        });
    }
    /**
     * อัพเดตเวลาแต่ละคาบของวันนี้.
     * method นี้จะถูกเรียกใช้ตอนมีการเรียกใช้ setSubject
     */
    update() {
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
    setSubject(subject) {
        this.subject = subject;
        this.update();
    }
    setStartTime(startTime) {
        this.startTime = startTime;
    }
    /**
     *
     * @param {number} p คาบเรียน index.
     * @returns {Subject} วิชา.
     */
    getSubject(p) {
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
        if (out != null)
            return out;
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
    getSubjectList() {
        return this.subject;
    }
    getStartTime() {
        return this.startTime;
    }
    /**
     *
     * @param {Number} timeminute เวลาตั้งแต่จุดเริ่มต้นของวัน (0:00น) หน่วยเป็นนาที.
     * @returns {Subject} วิชา.
     */
    getSubjectByTime(timeminute) {
        return this.getSubject(this.getPeriodByTime(timeminute));
    }
    /**
     *
     * @param {Number} timeminute เวลาตั้งแต่จุดเริ่มต้นของวัน (0:00น) หน่วยเป็นนาที.
     * @returns {Number} คาบ.
     */
    getPeriodByTime(timeminute) {
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
    getLocaleSubjectList() {
        if (!this.getSubjectList().length)
            return "ไม่มีข้อมูล";
        let out = "";
        this.getSubjectList().forEach((t) => {
            out += `${t.getLocaleSpeakString()}\n\n`;
        });
        return out;
    }
    getDay() {
        return this.day;
    }
}
// global current date day.
var currentDate = new Date();
export var currentDay = currentDate.getDay();
// global variable.
/**
 * _เวลาที่เป็นหน่วยนาทีตั้งแต่ 0:00น ถึงปัจจุบัน._
 */
export var currentMinutes;
export var currentSubjectDay = new SubjectDay(0);
export var currentPariod = -1;
export var currentSubject = new Subject();
/**
 * ฟังก์ชันนี้จะรับวัตถุวันมาแล้วจะส่งออกข้อมูลในรูปแบบตัวเลขในหน่วยนาทีตั้งแต่จุดเริ่มต้นของวัน
 * @param {Date} date วัตถุวันที่อยู่ในแม่พิมพ์ Date
 * @returns นาทีตั้งแต่จุดเริ่มต้นของวัน
 */
export function getTimeMinute(date) {
    return date.getHours() * 60 + date.getMinutes();
}
/**
 * คำนวนเวลา(ในรูปแบบข้อความ string)จากนาที
 * @param {number} minute
 * @returns เวลา
 * @author Sittipat Tepsutar
 * @see getDateFromMinute
 */
function getLocalTimeStringFromMinute(minute) {
    if (minute == Infinity)
        return "00:00";
    let pad = (d) => (d < 10) ? '0' + d.toString() : d.toString();
    let t1 = getDateFromMinute(minute);
    return `${pad(t1.getHours())}:${pad(t1.getMinutes())}`;
}
/**
 * ส่งกลับวันจากนาที
 * @param {number} minute
 * @returns {Date} วัน
 * @author Sittipat Tepsutar
 */
function getDateFromMinute(minute) {
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
export function update(data, showMessage = false) {
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
// /**
//  * @param {string} url default = https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json
//  * @param {boolean} showMessage default = false
//  */
// export async function useUrlData(url: string = "https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json", showMessage: boolean = false): Promise<void> {
//     return new Promise(async (resolve) => {
//         let x = await fetch(url, {
//             "method": "GET"
//         }).then((res) => res.json(), () => {
//             throw new Error("โหลดไฟล์ล้มเหลว.");
//         });
//         update(x, showMessage);
//         resolve();
//     });
// }