import Student from './Student'

export default class MingStudent extends Student{
    constructor(){
        super('小明','男',18);
    }

    getDescription(){
        return '哈哈-》'+super.getDescription();
    }
}