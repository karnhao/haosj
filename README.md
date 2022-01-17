<h1 align=center>Haosj (HaoSubject)</h1>

<p align=center>
  <a href="https://github.com/karnhao/haosj/actions/workflows/node.js.yml"><img src="https://github.com/karnhao/haosj/actions/workflows/node.js.yml/badge.svg"></a>
  <a href="https://badge.fury.io/js/haosj"><img src="https://badge.fury.io/js/haosj.svg"></a>
  <p align=center>โดย สิทธิภัทท์ เทพสุธา ที่ชอบ<a href="https://th.wikipedia.org/wiki/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%95%E0%B9%88%E0%B8%B2%E0%B8%A2">กระต่าย</a>🐇มากๆ</p>
</p>



### ติดตั้ง 
```
npm i haosj
```

## เกี่ยวกับ HaoSubject
ระบบนี้จะอ่านข้อมูลวิชา[แบบนี้](https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json) แล้วคำนวนสิ่งต่างๆให้เลย ทำให้เขียนโปรแกรมง่ายขึ้นเพียงแค่เรียกใช้ฟังก์ชันและ method ที่มีอยู่แล้ว

ตัวอย่างการใช้งาน :
```js
import haosj, { useUrlData } from "haosj";

//ให้ c คือห้องเรียนที่โหลดข้อมูลดิบจากที่อยู่ตัวอย่าง
let c = await haosj.useExampleUrlData();

//ใช้ subject คือวิชาในวันจันทร์คาบที่ 4
let subject = c.get(1).getSubject(3);

//แสดงชื่อและห้องเรียนของวิชา
console.log(subject.getName());
console.log(subject.getRoomId());
```

<hr>

ตัวอย่างการสร้างห้องเรียนจาก object :
```js
//สร้างห้องเรียนจาก object
let c = haosj.getClassByObj({
    classId: "c72610",
    className: "ม.6/10 รุ่น 72 โรงเรียนสารวิทยา",
    nullSubject: {
        name: "❌ไม่มี"
    },
    subjectDays: {
        _1: {
            startTime: 500,
            subjectList: [
                {
                    name: "Math",
                    width: 50
                },
                {
                    name: "Physic",
                    width: 100
                }
            ]
        }
    }
});
```

## Property อำนวยความสะดวก
Property อำนวยความสะดวกที่อยู่ในห้องเรียน(ต้อง update ด้วย)มีดังนี้ :
* currentDate - วันปัจจุบัน
* currentDay - วันที่เป็นเลข 0 ถึง 6 โดย 0 คือวันอาทิตย์ 1 คือวันจันทร์ ... 6 คือวันเสาร์
* currentMinutes - เวลาที่เป็นนาทีนับตั้งแต่ 00:00 นาฬิกาจนถึงปัจจุบัน
* currentSubjectDay - วัตถุที่บรรจุรายวิชาในวันนั้นๆในวันปัจจุบัน
* currentPariod - คาบปัจจุบัน
* currentSubject - วิชาปัจจุบัน

## สำคัญ
คุณจำเป็นจะต้อง update ข้อมูลให้กับห้องเรียนก่อน เพราะว่าระบบจะได้ update property ที่อำนวยความสะดวกให้ด้วย:
```js
update(yourBoolean?, subject_data?);
```
yourBoolean เป็นประพจน์ที่จะใส่หรือไม่ใส่ก็ได้ เมื่อไม่ใส่จะเป็นเท็จโดยอัตโนมัติ ถ้าเป็นจริงระบบจะ console log รายละเอียดในฟังก์ชันนี้มา และ subject_data คือข้อมูลวิชาดิบแบบ json ถ้าใส่ไปห้องเรียนจะไปใช้ข้อมูลใหม่แทน ถ้าไม่ใส่ก็จะยังใช้ข้อมูลเดิมแต่ property ต่างๆก็จะถูก update. ฟังก์ชันนี้จะเรียกใช้ `ClassData.setData(...)` โดยอัตโนมัติ ดังนั้นคุณไม่จำเป็นต้องใช้ `ClassData.setData(...)` เลย แล้วคุณยังสามารถใช้ `update(...)` แทนการใช้ `ClassData.setData(...)`.

## ฟังก์ชันอำนวยความสะดวก
```js
// โหลดข้อมูลวิชาแล้ว update ให้เลยอัตโนมัติ (เป็น asynchonous ฟังก์ชัน) ส่งออก Promise<ClassData>
useUrlData(url);

// โหลดข้อมูลวิชาจาก https://raw.githubusercontent.com/karnhao/HaoWidget/main/subject_data/6-10/6-10.json แล้ว update ให้เลยอัตโนมัติ (เป็น asynchonous ฟังก์ชัน) ส่งออก Promise<ClassData>
useExampleUrlData(url);
```

## Accessing Data การเข้าถึงข้อมูลต่างๆ

![Access](https://raw.githubusercontent.com/karnhao/haosj/main/src/images/haosj.png)
