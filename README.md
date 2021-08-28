# HaoSubject
โดย สิทธิภัทท์ เทพสุธา ที่ชอบ[กระต่าย](https://th.wikipedia.org/wiki/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%95%E0%B9%88%E0%B8%B2%E0%B8%A2)🐇มากๆ

## เกี่ยวกับ HaoSubject
ระบบนี้จะอ่านข้อมูลวิชา[แบบนี้](https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json) แล้วคำนวนสิ่งต่างๆให้เลย ทำให้เขียนโปรแกรมง่ายขึ้นเพียงแค่เรียกใช้ฟังก์ชันและ method ที่มีอยู่แล้ว

ตัวอย่างการใช้งาน :
```js
// ให้ตัวแปร subject1 เป็นวิชา ณ ปัจจุบัน.
var subject1 = ClassData.getSubjectByDate(new Date());

// ให้ตัวแปร subject2 เป็นวิชาในคาบที่ 3 ของวันจันทร์.
var subject2 = ClassData.get(1).getSubject(2);

//แสดงชื่อวิชา.
console.log(subject1.getName());

//แสดงรหัสห้องเรียน (ห้องเรียนของวิชานี้).
console.log(subject1.getRoomId());

//แสดงรายชื่อครูในวิชานี้.
console.log(subject1.getLocaleTeacherName());
```

## ตัวแปรอำนวยความสะดวก
ตัวแปรอำนวยความสะดวก(ต้อง update)มีดังนี้ :
* currentDate - วันปัจจุบัน
* currentDay - วันที่เป็นเลข 0 ถึง 6 โดย 0 คือวันอาทิตย์ 1 คือวันจันทร์ ... 6 คือวันเสาร์
* currentMinutes - เวลาที่เป็นนาทีนับตั้งแต่ 00:00 นาฬิกาจนถึงปัจจุบัน
* currentSubjectDay - วัตถุที่บรรจุรายวิชาในวันนั้นๆในวันปัจจุบัน
* currentPariod - คาบปัจจุบัน
* currentSubject - วิชาปัจจุบัน

## สำคัญ
คุณจำเป็นจะต้องใส่ข้อมูลให้กับระบบนี้ก่อน และเรียกใช้มันทุกครั้งเพราะว่าระบบจะได้ update ตัวแปรที่อำนวยความสะดวกให้ด้วย:
```js
update(subject_data, yourBoolean);
```

subject_data คือข้อมูลวิชาดิบแบบ json และ yourBoolean เป็นประพจน์ที่จะใส่หรือไม่ใส่ก็ได้ เมื่อไม่ใส่จะเป็นเท็จโดยอัตโนมัติ ถ้าเป็นจริงระบบจะ console log รายละเอียดในฟังก์ชันนี้มา. ฟังก์ชันนี้จะเรียกใช้ `ClassData.setData(...)` โดยอัตโนมัติ ดังนั้นคุณไม่จำเป็นต้องใช้ `ClassData.setData(...)` เลย.

## ฟังก์ชันอำนวยความสะดวก
```js
// โหลดข้อมูลวิชาแล้ว update ให้เลยอัตโนมัติ (เป็น asynchonous ฟังก์ชัน) ส่งออก Promise<ข้อมูลดิบ>
useUrlData(url);

// โหลดข้อมูลวิชาจาก https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json แล้ว update ให้เลยอัตโนมัติ (เป็น asynchonous ฟังก์ชัน) ส่งออก Promise<ข้อมูลดิบ>
useExampleUrlData(url);
```