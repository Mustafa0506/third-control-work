let courses = [

    {

        title: 'SMM',

        howLong: 3

    },

    {

        title: 'Dev',

        howLong: 6

    },

    {

        title: 'Graph',

        howLong: 4

    },

]

let earnings = {

    total: 0,

    max: 0,

    min: 0

}

let m = Number

let w = Number

let average_age = Number

let smm = Number

let dev = Number

let graph = Number

let students = [

    {

        sex: 'm',

        age: 14,

        payment: 1220000,

        course: {

            title: 'SMM',

        }

    },

    {

        sex: 'm',

        age: 24,

        payment: 1883000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 16,

        payment: 2190000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 19,

        payment: 718000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 15,

        payment: 2195000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 24,

        payment: 460000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'w',

        age: 14,

        payment: 560000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'w',

        age: 22,

        payment: 160000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 26,

        payment: 883000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 26,

        payment: 750000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 23,

        payment: 212000,

        course: {

            title: 'Graph',

        }

    },

    {

        sex: 'w',

        age: 24,

        payment: 883000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 27,

        payment: 190000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'w',

        age: 19,

        payment: 210000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 21,

        payment: 770000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'm',

        age: 18,

        payment: 1200000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'w',

        age: 51,

        payment: 880000,

        course: {

            title: 'SMM'

        }

    },

    {

        sex: 'm',

        age: 51,

        payment: 2430000,

        course: {

            title: 'Dev'

        }

    },

    {

        sex: 'w',

        age: 33,

        payment: 1277000,

        course: {

            title: 'Graph'

        }

    },

    {

        sex: 'w',

        age: 21,

        payment: 2750000,

        course: {

            title: 'Dev'

        }

    },

]

// В этом примере перед вами учебный центр, в котором учиться несколько студентов. Каждый из них учиться на каком-то курсе и платит за обучение. У студентов мы видим пол, возраст, оплату, а также курс, которые они выбрали.*

// 1. Добавить студентам ключ howLong внутри ключа course, рядом с title. HowLong - цифра, означающая сколько месяцев длиться курс*

// 2. Сохранить количество девочек и мальчиков внутри переменных m и w*

// 3. Сохранить заработок учебного центра в earning.total*

// 4. Узнать кто больше всех платит за обучение в earning.max*

// 5. Узнать кто меньше всех платит за обучение в earning.min*

// 6. Посчитать сколько студентов учиться на курсах внутри dev, smm и graph*

// 7. Посчитать средний возраст студентов в average_age*

const setup = () => {

    m = 0
    w = 0
    average_age = 0
    smm = 0
    dev = 0
    graph = 0

    let all = []
    let allAges = []

    for (let item of students) {

        // Задания 1

        for (let itemTwo of courses) {
            if (item.course.title === itemTwo.title) {
                item.course.howLong = itemTwo.howLong
            }
        }

        // Задания 2

        if (item.sex === 'w') {
            w++
        } else {
            m++
        }

        // Задания 3

        earnings.total += item.payment

        // Задания 4

        all.push(item.payment)

        earnings.max = Math.max(...all)

        // Задания 5

        earnings.min = Math.min(...all)

        // Задания 6

        switch (item.course.title) {
            case 'SMM':
                smm++
                break;
            case 'Dev':
                dev++
                break;
            case 'Graph':
                graph++
                break;

        }

        // Задания 7

        allAges.push(item.age)

        let a = allAges.reduce((a, b) => a + b)
        let b = allAges.length

        average_age = a / b

    }
}

setup()

console.log('students ->', students);
console.log('earnings ->', earnings);
console.log('w ->', w);
console.log('m ->', m);
console.log('average_age ->', average_age);
console.log('smm ->', smm);
console.log('dev ->', dev);
console.log('graph ->', graph);
