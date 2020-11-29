/*
let toothPaste;

function myDay(dayOff, cb) {

    setTimeout(() => {
        console.log("7.00 - Спрацював будильник....");

        if (dayOff) {
            cb("Продовжуємо спати..", null);
        } else {
            cb(null, "Робочий день...",);
        }
    }, 1500)
}

function workingDay(isToothPastу, cb) {
    console.log("Пора вставати та чистити зуби");
    setTimeout(() => {
        if (!isToothPastу) {
            cb("Закінчилась зубна пасата... Пішов снідати...", null);
            toothPaste=false;
        } else {
            cb(null, "Почистив зуби, а потім пішов снідати");
            toothPaste=true;
        }
    }, 2000)
};

function bus(isMaska, cb) {
    console.log("Закрив квартиру та пішов на автобус");
    setTimeout(() => {
        if (!isMaska) {
            cb("Забув одягнути маску. Потрібно повертатися за маскою.. Не встиг на автобус...", null);
        } else {
            cb(null, "Автобус прибув вчасно.. Прямуємо на роботу..");
        }
    }, 1000)

};

function day(isWasLate, cb){
    console.log("Робочий день розпочався...");
    setTimeout(()=>{
        if(isWasLate){
            cb("Робочий день закінчився, але потрібно ще попрацювати, тому що запізнився вранці на роботу...", null);
        }else {
            cb(null, "Робочий день закінчився!!!");
        }
    }, 1500)
};

function endDay (tooth, cb){
    console.log("Потрібно збиратися додому...");
    setTimeout(()=>{
        if (!tooth){
            cb("Не забути купити зубну пасту!", null);
        }else {
            cb(null, "Пішов на автобус..");
        }
    },2500)
};

function owu (isCourseToday, cb){
    setTimeout(()=>{
        if(!isCourseToday){
            cb("Приїхав додому... Сьогодні лекції не буде, потрібно робити домашні завдання.", null);
        }else{
            cb(null, "Приїхав додому... Сьогодні лекція по JS.");
        }
    }, 1500)
};






myDay(false, (err, res) => {
    if (err) {
        console.log(`${err} Сьогодні вихідниий ))`);
        setTimeout(() => {
            console.log("9.00 - Вже можна вставати та вчити JS");
        }, 1500)
        return;
    }

    console.log(`${res} Необхідно збиратися на роботу, сьогодні робочий день`);
    workingDay(true, (er, data) => {
        if (er) {
            console.log(er, "Снідаю та потрібно виходити. Не забути купити зубну пасту");

        } else {
            console.log(data, "Почистив зуби... cнідаю та потрібно виходити");
        }

        bus(false, (er, data) => {
            if (er) {
                console.log(er, "Запізнився на роботу. Потрібно працювати на півгодини довше..");
            } else {
                console.log(data, "Прибув на роботу вчасно");
            }
            day(false, (err, data)=>{
                if(err){
                    console.log(err);
                }else {
                    console.log(data);
                }
                endDay(toothPaste, (err, data)=>{
                    if(err){
                        console.log(`Зубна паста : ;${toothPaste}`);
                        console.log(err);
                    } else{
                        console.log(`Зубна паста : ${toothPaste}`);
                        console.log(data);
                    }
                    owu(true, (err, data)=>{
                        if(err){
                            console.log(err);
                        }else{
                            console.log(data);
                        }
                    })
                })
            })
        })
    })
});*/


// ***********************************************


let toothPaste;

function myDay(dayOff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("7.00 - Спрацював будильник....");

            if (dayOff) {
                reject("Продовжуємо спати..");
            } else {
                resolve("Робочий день...");
            }
        }, 1500)
    })
};

function workingDay(isToothPastу) {
    return new Promise((resolve, reject) => {
        console.log("Пора вставати та чистити зуби");
        setTimeout(() => {
            if (!isToothPastу) {
                reject("Закінчилась зубна пасата... Пішов снідати...");
                toothPaste = false;
            } else {
                resolve("Почистив зуби, а потім пішов снідати");
                toothPaste = true;
            }
        }, 2000)
    })
};

function bus(isMaska) {
    return new Promise((resolse, reject) => {
        console.log("Закрив квартиру та пішов на автобус");
        setTimeout(() => {
            if (!isMaska) {
                reject("Забув одягнути маску. Потрібно повертатися за маскою.. Не встиг на автобус...");
            } else {
                resolse("Автобус прибув вчасно.. Прямуємо на роботу..");
            }
        }, 1000)
    })
};

function day(isWasLate) {
    return new Promise((resolve, reject) => {
        console.log("Робочий день розпочався...");
        setTimeout(() => {
            if (isWasLate) {
                reject("Робочий день закінчився, але потрібно ще попрацювати, тому що запізнився вранці на роботу...");
            } else {
                resolve("Робочий день закінчився!!!");
            }
        }, 1500)
    })
};

function endDay(tooth) {
    console.log("Потрібно збиратися додому...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!tooth) {
                reject("Не забути купити зубну пасту!");
            } else {
                resolve("Пішов на автобус..");
            }
        }, 2500)
    })
};

function owu(isCourseToday) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isCourseToday) {
                reject("Приїхав додому... Сьогодні лекції не буде, потрібно робити домашні завдання.");
            } else {
                resolve("Приїхав додому... Сьогодні лекція по JS.");
            }
        }, 1500)
    })
};


myDay(false)
    .then(value => {
        console.log(value);
        return (workingDay(true))
    })
    .then(value => {
        console.log(value);
        return (bus(true))
    })
    .then(value => {
        console.log(value);
        console.log("Прибув на роботу вчасно");
        return (day(false))
    })
    .then(value => {
        console.log(value);
        return (endDay(true))
    })
    .then(value => {
        console.log(value);
        return (owu(false))
    })
    .then(value => {
        console.log(value);
    })
    .catch(reason => {
        console.log("**********");
        console.log(reason);
        console.log("**********");
    })