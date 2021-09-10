var classes = new Map();
const haosj = {
    getClass(id) {
        return classes.get(id);
    },
    setClass(id, classData) {
        classData.update();
        classes.set(id, classData);
    },
    deleteClass(id) {
        classes.delete(id);
    },
    getValue() {
        return classes;
    }
};
export default haosj;
