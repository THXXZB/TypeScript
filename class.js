"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类的定义
var Person = /** @class */ (function () {
    function Person(n) {
        // 构造函数，实例化类的时候触发该方法，将参数传给构造函数后赋值  
        this.name = n;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var t = new Person('tt');
console.log(t.getName());
t.setName('hh');
console.log(t.getName());
// 实现继承 extends、 super
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person2;
}());
var t2 = new Person2('oo');
console.log(t2.run());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Student;
}(Person2));
var stu = new Student('ll');
console.log(stu.run());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name) {
        return _super.call(this, name) || this;
    }
    Teacher.prototype.run = function () {
        return this.name + '不想运动';
    };
    Teacher.prototype.work = function () {
        console.log(this.name + '在工作');
    };
    return Teacher;
}(Person2));
var tea = new Teacher('Tom');
console.log(tea.run());
tea.work();
console.log(tea.name); // 默认公有，外部可访问
// 类的修饰符  类定义属性时用的修饰符
// public公有:  类里面、子类和类外面皆可以访问
// protected保护：类里面和子类可访问，类外面无法访问
// private私有：类里面可以访问，子类和类外部无法访问
// 不加修饰符，默认是public
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
    }
    Person3.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person3;
}());
var Teacher3 = /** @class */ (function (_super) {
    __extends(Teacher3, _super);
    function Teacher3(name) {
        return _super.call(this, name) || this;
    }
    Teacher3.prototype.work = function () {
        // 子类中可访问
        console.log(this.name + '有很多工作');
    };
    return Teacher3;
}(Person3));
var tea2 = new Teacher3('Lisa');
// console.log(tea2.name) 报错
tea2.work();
var Person4 = /** @class */ (function () {
    function Person4(name) {
        this.name = name;
    }
    Person4.prototype.run = function () {
        // 类里面可以访问
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person4;
}());
var Teacher4 = /** @class */ (function (_super) {
    __extends(Teacher4, _super);
    function Teacher4(name) {
        return _super.call(this, name) || this;
    }
    Teacher4.prototype.work = function () {
        // 子类中无法访问
        // console.log(this.name + '有很多工作')
    };
    return Teacher4;
}(Person4));
var tea3 = new Teacher4('Lisa');
// console.log(tea3.name)  //报错
// 静态属性 静态方法
// es5中, 实例方法和静态方法的名字可以一样
// function Animal() {
//   // 实例方法
//   this.run = function() {}
// }
// // 静态方法
// Animal.run = function() {}
// // 调用实例方法需要先实例化
// let a = new Animal()
// a.run()
// Animal.run()
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        console.log(this.name + " is running");
    };
    Animal.prototype.eat = function () {
        console.log(this.name + " is eating");
    };
    Animal.sexInfo = function () {
        // 只能调用静态属性
        // console.log(`${this.name} is playing ball`) 报错
        console.log('静态方法' + this.sex);
    };
    Animal.sex = 'male';
    return Animal;
}());
var dog = new Animal('Jee');
dog.eat(); // 实例方法
Animal.sexInfo(); // 静态方法
// 多态：父类定义一个方法不去实现，让子类去实现，每个子类都有不同的表现
// 多态也是继承的一种表现
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    Animal2.prototype.run = function () {
        console.log(this.name + " is running");
    };
    // 多态
    Animal2.prototype.eat = function () {
        // 不清楚具体吃啥，让继承的子类去实现
        console.log('吃啥捏？');
    };
    return Animal2;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor(name:string) {
    //   super(name)
    // }
    Dog.prototype.eat = function () {
        console.log(this.name + " \u5403\u9AA8\u5934");
    };
    return Dog;
}(Animal2));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        console.log(this.name + " \u5403\u9C7C");
    };
    return Cat;
}(Animal2));
var d = new Dog('momo');
d.eat();
var c = new Cat('yuyu');
c.eat();
// 抽象类：提供给其他类继承的基类，不能直接被实例化
// 用abstract定义抽象类和抽象方法
// 抽象类中抽象方法不包含具体实现并且必须在派生类中实现
// 抽象方法必须放在抽象类中
var Animal3 = /** @class */ (function () {
    function Animal3(name) {
        this.name = name;
    }
    Animal3.prototype.run = function () {
        console.log("running");
    };
    return Animal3;
}());
// let ani = new Animal3()  无法实例化
var Dog2 = /** @class */ (function (_super) {
    __extends(Dog2, _super);
    function Dog2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 必须实现抽象类中的抽象方法，即必须实现eat方法
    Dog2.prototype.eat = function () {
        console.log(this.name + "\u559C\u6B22\u5403\u9AA8\u5934\u68D2\u5B50");
    };
    return Dog2;
}(Animal3));
var dog2 = new Dog2('maka');
dog2.eat();
