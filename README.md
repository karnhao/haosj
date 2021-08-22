# HaoSubject
โดย สิทธิภัทท์ เทพสุธา ที่ชอบ[กระต่าย](https://th.wikipedia.org/wiki/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%95%E0%B9%88%E0%B8%B2%E0%B8%A2)มากๆ

## เกี่ยวกับ HaoSubject
ระบบนี้จะอ่านข้อมูลวิชา[แบบนี้](https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json) แล้วคำนวนสิ่งต่างๆให้เลย ทำให้เขียนโปรแกรมง่ายขึ้นเพียงแค่เรียกใช้ฟังก์ชันและ method ที่มีอยู่แล้ว

ตัวอย่างการใช้งาน :
```js
// ให้ตัวแปร subject เป็นวิชา ณ ปัจจุบัน.
var subject1 = ClassData.getSubjectByDate(new Date());

// ให้ตัวแปร subject เป็นวิชาในคาบที่ 3 ของวันจันทร์.
var subject2= ClassData.get(1).getSubject(2);

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
* currentMinutes - เวลาที่เป็นนาทีนับตั้งแต่ 00:00 นาฬิกา
* currentSubjectDay - วัตถุที่บรรจุรายวิชาในวันนั้นๆในวันปัจจุบัน
* currentPariod - คาบปัจจุบัน
* currentSubject - วิชาปัจจุบัน

## สำคัญ
คุณจำเป็นจะต้องใส่ข้อมูลให้กับระบบนี้ก่อน และเรียนใช้มันทุกครั้งเพราะว่าระบบจะได้ update ตัวแปรที่อำนวยความสะดวกให้ด้วย:
```js
update(subject_data, yourBoolean);
```
subject_data คือข้อมูลวิชาดิบแบบ json และ yourBoolean เป็นนิพจน์ที่เป็นเท็จเมื่อไม่ใส่ ถ้าเป็นจริงระบบจะ console log รายละเอียดในฟังก์ชันนี้มา. โดยฟังก์ชันนี้จะเรียกใช้ `ClassData.setData(...)` โดยอัตโนมัติ ดังนี้คุณไม่จำเป็นต้องใช้ `ClassData.setData(...)` เลย.