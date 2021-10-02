export interface RawSubject {
    id?: string;
    name: string;
    teacher?: string[];
    roomId?: string;
    width?: number;
    classroom?: string;
    meet?: string;
}
export interface RawSubjectDay {
    day: number;
    startTime: number;
    subjectList: RawSubject[];
}
export interface RawClassData {
    classId: string;
    className: string;
    nullSubject: RawSubject;
    /**
     * ตั้งวิชาและเวลาเริ่มต้นคาบแรกของวัน monday tuesday wednesday thursday friday saturday sunday
     */
    subjectList: {
        /**
         * Sunday พรุ่งนี้วันจันทร์แล้วหรอเนี่ย!?
         */
        _0?: RawSubjectDay;
        /**
         * Monday วันแรกของสัปดาห์ที่ต้องทำงานหรือเรียนของคนส่วนมาก.
         */
        _1?: RawSubjectDay;
        /**
         * Tuesday วันศุกร์ยังยาวไกล
         */
        _2?: RawSubjectDay;
        /**
         * Wednesday มาถึงครึ่งทางแล้วนะ สู้ๆ
         */
        _3?: RawSubjectDay;
        /**
         * Thursday
         * ### รูป
         *
         * ![jupiter](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/300px-Jupiter_by_Cassini-Huygens.jpg)
         *
         * รู้หรือไม่ว่าดาวพฤหัสบดีเป็นเป็นดาวเคราะห์ที่อยู่ห่างจากดวงอาทิตย์เป็นลำดับที่ 5 ใหญ่ที่สุดในระบบสุริยะ นอกจากดาวพฤหัสบดี ดาวเคราะห์แก๊สดวงอื่นๆ ในระบบสุริยะได้แก่ ดาวเสาร์ ดาวยูเรนัส และดาวเนปจูน.
         *
         * ดาวพฤหัสบดีมีมวลสูงกว่ามวลของดาวเคราะห์อื่นรวมกันราว 2.5 เท่า ทำให้ศูนย์ระบบมวลระหว่างดาวพฤหัสบดีกับดวงอาทิตย์ อยู่เหนือผิวดวงอาทิตย์ (1.068 เท่าของรัศมีดวงอาทิตย์ เมื่อวัดจากศูนย์กลางดวงอาทิตย์) ดาวพฤหัสบดีหนักว่าโลก 318 เท่า เส้นผ่านศูนย์กลางยาวกว่าโลก 11 เท่า และมีปริมาตรคิดเป็น 1,300 เท่าของโลก เชื่อกันว่าหากดาวพฤหัสบดีมีมวลมากกว่านี้สัก 60-70 เท่า อาจเพียงพอที่จะให้เกิดปฏิกิริยานิวเคลียร์จนกลายเป็นดาวฤกษ์ได้.
         *
         * ดาวพฤหัสบดีหมุนรอบตัวเองด้วยอัตราเร็วสูงที่สุด เมื่อเทียบกับดาวเคราะห์ดวงอื่นในระบบสุริยะ ทำให้มีรูปร่างแป้นเมื่อดูผ่านกล้องโทรทรรศน์ นอกจากชั้นเมฆที่ห่อหุ้มดาวพฤหัสบดี ร่องรอยที่เด่นชัดที่สุดบนดาวพฤหัสบดี คือ จุดแดงใหญ่ ซึ่งเป็นพายุหมุนที่มีขนาดใหญ่กว่าโลก.
         *
         * โดยทั่วไป ดาวพฤหัสบดีเป็นวัตถุที่สว่างที่สุดเป็นอันดับที่ 4 ในท้องฟ้า (รองจากดวงอาทิตย์ ดวงจันทร์ และดาวศุกร์ อย่างไรก็ตาม บางครั้งดาวอังคารก็ปรากฏสว่างกว่าดาวพฤหัสบดี) จึงเป็นที่รู้จักมาตั้งแต่ยุคก่อนประวัติศาสตร์ การค้นพบดาวบริวารขนาดใหญ่ 4 ดวง ได้แก่ ไอโอ, ยูโรปา, แกนีมีด และคัลลิสโต โดยกาลิเลโอ กาลิเลอี เมื่อ ค.ศ. 1610 เป็นการค้นพบวัตถุที่ไม่ได้โคจรรอบโลกเป็นครั้งแรก นับเป็นจุดที่สนับสนุนทฤษฎีดวงอาทิตย์เป็นศูนย์กลางที่เสนอโดยโคเปอร์นิคัส การออกมาสนับสนุนทฤษฎีนี้ทำให้กาลิเลโอต้องเผชิญกับการไต่สวน ดาวพฤหัสบดี หมุนรอบตัวเองใช้เวลา 10 ชั่วโมง.
         *
         * ## วงแหวนของดาวพฤหัสบดี
         * ดาวพฤหัสบดีมีวงแหวนเช่นเดียวกับดาวเสาร์ แต่มีความเลือนลางและขนาดเล็กกว่า สามารถเห็นได้ในรังสีอินฟราเรดทั้งจากกล้องโทรทรรศน์ที่พื้นโลกและจากยานกาลิเลโอ วงแหวนของดาวพฤหัสค่อนข้างมืด ซึ่งอาจประกอบด้วยเศษหินขนาดเล็ก และไม่พบน้ำแข็ง เหมือนที่พบในวงแหวนของดาวเสาร์ วัตถุที่อยู่ในวงแหวนของดาวพฤหัสอาจไม่อยู่ในวงแหวนนาน เนื่องจากแรงเหวี่ยงที่เกิดจากบรรยากาศและสนามแม่เหล็ก มีหลักฐานที่แสดงให้เห็นว่าวงแหวนได้วัตถุเพิ่มเติมจากฝุ่นที่เกิดจากอุกกาบาตตกชนดาวบริวารวงใน ซึ่งเนื่องจากพลังงานมหาศาลจากแรงดึงดูดขนาดใหญ่ของดาวพฤหัสบดี.
         */
        _4?: RawSubjectDay;
        /**
         * Friday
         *
         * ดาวศุกร์เป็นดาวเคราะห์ที่อยู่ห่างจากดวงอาทิตย์เป็นลำดับที่ 2 ดาวศุกร์มีเส้นผ่านศูนย์กลางเป็น 3 เท่าของดวงจันทร์ และ มีขนาดใหญ่กว่าดาวพุธและดาวอังคาร 2 เท่าตัว ชื่อละตินของดาวศุกร์ (Venus) มาจากเทพีแห่งความรักของโรมัน ดาวศุกร์เป็นดาวเคราะห์หิน มีขนาดใกล้เคียงกับโลก บางครั้งเรียกว่า "น้องสาว" ของโลก แม้ว่าวงโคจรของดาวเคราะห์ทุกดวงจะเป็นวงรี วงโคจรของดาวศุกร์จัดว่าเกือบเป็นวงกลม มีความเยื้องศูนย์กลาง (ความรี) น้อยที่สุด.
         *
         * สำหรับวัตถุในธรรมชาติ ดาวศุกร์เป็นวัตถุท้องฟ้าที่สว่างที่สุดเป็นลำดับที่ 3 รองจากดวงอาทิตย์และดวงจันทร์ เนื่องจากดาวศุกร์มีวงโคจรใกล้ดวงอาทิตย์มากกว่าโลก จึงมีมุมห่างจากดวงอาทิตย์ไม่เกิน 47.8° มองเห็นได้เฉพาะในเวลาเช้ามืดหรือหัวค่ำเท่านั้น ขณะปรากฏในท้องฟ้าเวลาหัวค่ำทางทิศตะวันตก เรียกว่า "ดาวประจำเมือง" และเมื่อปรากฏในท้องฟ้าเวลาเช้ามืดทางทิศตะวันออก เรียกว่า "ดาวประกายพรึก" หรือ "ดาวรุ่ง".
         *
         * ชาวบาบิโลนโบราณรู้จักดาวศุกร์มาตั้งแต่ราว 1,600 ปีก่อนคริสตกาล แต่เชื่อว่าด้วยความสว่างสุกใสของดาวศุกร์ น่าจะเป็นที่รู้จักมาก่อนหน้านั้นนานแล้วนับตั้งแต่ยุคก่อนประวัติศาสตร์ สัญลักษณ์แทนดาวศุกร์ คือ ♀
         *
         * ## บรรยากาศ
         * บรรยากาศของดาวศุกร์ ประกอบด้วยก๊าซคาร์บอนไดออกไซด์ 97% ไนโตรเจน 3.5% ซัลเฟอร์ไดออกไซด์และ อาร์กอน 0.5% มีชั้นเมฆคาร์บอนไดออกไซด์ที่หนาทึบมาก ปกคลุมดาวศุกร์ทั้งดวงทำให้สะท้อนแสงอาทิตย์ได้ดี จึงเห็นดาวศุกร์เป็นดาวเคราะห์ที่สว่างสุกใสมาก และยานอวกาศที่ไปสำรวจดาวศุกร์ก็ไม่สามารถถ่ายภาพพื้นผิว โดยตรงได้ ต้องอาศัยคลื่นเรดาห์ผ่านทะลุชั้นเมฆแล้วนำมาวิเคราะห์ด้วยคอมพิวเตอร์อีกครั้ง.
         * อุณหภูมิของดาวศุกร์ ด้วยชั้นเมฆหนาของดาวศุกร์ทำให้เกิดสภาวะเรือนกระจก อุณหภูมิบนดาวศุกร์สูงมาก ประมาณ 400 องศาเซลเซียส ตลอดทั้งกลางวันและกลางคืน.
         *
         * ## การเคลื่อนที่
         * ดาวศุกร์หมุนรอบตัวเอง 1 รอบใช้เวลานานกว่าการเคลื่อนที่รอบดวงอาทิตย์ 1 รอบ และถ้าเราอยู่บนดาวศุกร์เวลา 1 วัน จะไม่ยาวเท่ากับเวลาที่ดาวศุกร์หมุนรอบตัวเอง 1 รอบ นี่คือลักษณะพิเศษที่ดาวศุกร์ไม่เหมือนดาวเคราะห์ดวงใดๆ นอกจากนี้ดาวศุกร์ยังหมุนตามเข็มนาฬิกาหรือหมุนจากทิศตะวันออกไปทิศตะวันตก ในขณะที่เคลื่อนที่รอบดวงอาทิตย์จากทิศตะวันตกไปทิศตะวันออก ดาวศุกร์จึงหมุนสวนทางกับดาวเคราะห์ดวงอื่น และหมุนสวนทางกับการเคลื่อนที่รอบดวงอาทิตย์ ดาวศุกร์หมุนรอบตัวเองรอบละ 243 วัน แต่ 1 วันของดาวศุกร์ยาวนานเท่ากับ 117 วันของโลก เพราะตั้งแต่ดวงอาทิตย์ขึ้นจนถึงดวงอาทิตย์ตกยาวนาน 58.5 วันของโลก ดาวศุกร์เคลื่อนรอบดวงอาทิตย์รอบละ 225 วัน 1 ปีของดาวศุกร์จึงยาวนาน 225 วันของโลก.
         */
        _5?: RawSubjectDay;
        /**
         * Saturday
         *
         * กระต่ายเป็นสัตว์ที่จัดอยู่ใน[ไฟลัม](https://th.wikipedia.org/wiki/%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B8%B1%E0%B8%A1)[สัตว์มีกระดูกสันหลัง](https://th.wikipedia.org/wiki/%E0%B8%AA%E0%B8%B1%E0%B8%95%E0%B8%A7%E0%B9%8C%E0%B8%A1%E0%B8%B5%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B9%E0%B8%81%E0%B8%AA%E0%B8%B1%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87) ชั้น[สัตว์เลี้ยงลูกด้วยนม](https://th.wikipedia.org/wiki/%E0%B8%AA%E0%B8%B1%E0%B8%95%E0%B8%A7%E0%B9%8C%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%87%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%99%E0%B8%A1) [อันดับกระต่าย](https://th.wikipedia.org/wiki/Lagomorpha) ในวงศ์ [Leporidae](https://th.wikipedia.org/wiki/Leporidae).
         */
        _6?: RawSubjectDay;
    };
}
