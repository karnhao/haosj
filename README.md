# HaoSubject
โดย สิทธิภัทท์ เทพสุธา ที่ชอบ[กระต่าย](https://th.wikipedia.org/wiki/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%95%E0%B9%88%E0%B8%B2%E0%B8%A2)🐇มากๆ

## เกี่ยวกับ HaoSubject
ระบบนี้จะอ่านข้อมูลวิชา[แบบนี้](https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json) แล้วคำนวนสิ่งต่างๆให้เลย ทำให้เขียนโปรแกรมง่ายขึ้นเพียงแค่เรียกใช้ฟังก์ชันและ method ที่มีอยู่แล้ว

ตัวอย่างการใช้งาน :
```js
import haosj, { useUrlData } from "../dist/index.js";

// ให้ห้องเรียนที่มี id คือ class1 ใช้ข้อมูลแบบ json จาก https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json
await useUrlData("class1", "https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json", false);

// ให้ห้องเรียนที่มี id คือ class1 ใช้ข้อมูลแบบ json จาก yourSaveData.
haosj.setClassRaw("class2", yourSaveData);

// ให้ตัวแปร class1 เป็นห้องเรียนจาก id class1.
const class1 = haosj.getClass("class1");

// ให้ตัวแปร subject1 เป็นวิชา ณ ปัจจุบัน ของห้องเรียน class1.
var subject1 = class1.getSubjectByDate(new Date());

// ให้ตัวแปร subject2 เป็นวิชาในคาบที่ 3 ของวันจันทร์ ของห้องเรียน class1.
var subject2 = class1.get(1).getSubject(2);

//แสดงชื่อวิชา.
console.log(subject2.getName());

//แสดงรหัสห้องเรียน (ห้องเรียนของวิชานี้).
console.log(subject2.getRoomId());

//แสดงรายชื่อครูในวิชานี้.
console.log(subject2.getLocaleTeacherName());
```

## Property อำนวยความสะดวก
Property อำนวยความสะดวก(ต้อง update)มีดังนี้ :
* currentDate - วันปัจจุบัน
* currentDay - วันที่เป็นเลข 0 ถึง 6 โดย 0 คือวันอาทิตย์ 1 คือวันจันทร์ ... 6 คือวันเสาร์
* currentMinutes - เวลาที่เป็นนาทีนับตั้งแต่ 00:00 นาฬิกาจนถึงปัจจุบัน
* currentSubjectDay - วัตถุที่บรรจุรายวิชาในวันนั้นๆในวันปัจจุบัน
* currentPariod - คาบปัจจุบัน
* currentSubject - วิชาปัจจุบัน

## สำคัญ
คุณจำเป็นจะต้องใส่ข้อมูลให้กับห้องเรียนก่อน และเรียกใช้มันทุกครั้งเพราะว่าระบบจะได้ update property ที่อำนวยความสะดวกให้ด้วย:
```js
update(yourBoolean?, subject_data?);
```
yourBoolean เป็นประพจน์ที่จะใส่หรือไม่ใส่ก็ได้ เมื่อไม่ใส่จะเป็นเท็จโดยอัตโนมัติ ถ้าเป็นจริงระบบจะ console log รายละเอียดในฟังก์ชันนี้มา และ subject_data คือข้อมูลวิชาดิบแบบ json ถ้าใส่ไปจะไปห้องเรียนจะไปใช้ข้อมูลใหม่แทน ถ้าไม่ใส่ก็จะยังใช้ข้อมูลเดิมแต่เวลาต่างๆก็จะถูก update. ฟังก์ชันนี้จะเรียกใช้ `ClassData.setData(...)` โดยอัตโนมัติ ดังนั้นคุณไม่จำเป็นต้องใช้ `ClassData.setData(...)` เลย.

## ฟังก์ชันอำนวยความสะดวก
```js
// โหลดข้อมูลวิชาแล้ว update ให้เลยอัตโนมัติ (เป็น asynchonous ฟังก์ชัน) ส่งออก Promise<ข้อมูลดิบ>
useUrlData(url);

// โหลดข้อมูลวิชาจาก https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json แล้ว update ให้เลยอัตโนมัติ (เป็น asynchonous ฟังก์ชัน) ส่งออก Promise<ข้อมูลดิบ>
useExampleUrlData(url);
```