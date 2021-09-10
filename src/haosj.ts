import { ClassData } from "./class_data.js";

var classes = new Map<string, ClassData>();
const haosj = {
    getClass(id: string): ClassData | undefined {
        return classes.get(id);
    },
    setClass(id: string, classData: ClassData): void {
        classData.update();
        classes.set(id, classData);
    },
    deleteClass(id: string): void {
        classes.delete(id);
    },
    getValue(): Map<string, ClassData> {
        return classes;
    }
}
export default haosj;