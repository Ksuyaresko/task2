/*
import _ from 'lodash'

function test1(options) {
    console.log("called", options)
    return (target) => {
        console.log('applied')
        return target;
    }
}

@test1("asdf")
class Test1 {
    method1(arg1) {
        this.m1a1 = arg1;
    }
}

export class C {
    @enumerable(false)
    method() { }
}

function enumerable(value) {
    return function (target, key, descriptor) {
        descriptor.enumerable = value;
        return descriptor;
    }
}
export default Test1;
*/