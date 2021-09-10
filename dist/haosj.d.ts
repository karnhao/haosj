import { ClassData } from "./class_data.js";
declare const haosj: {
    getClass(id: string): ClassData | undefined;
    setClass(id: string, classData: ClassData): void;
    deleteClass(id: string): void;
    getValue(): Map<string, ClassData>;
};
export default haosj;
