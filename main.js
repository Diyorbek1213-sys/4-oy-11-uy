// 1. find va findIndex metodlari bo‘yicha masalalar

// Massiv ichida 5 ga karrali bo‘lgan birinchi elementni toping.
alert("1-vazifa")
let num_1 = [54, 69, 47, 23, 47, 85,]

let res_1 = num_1.find(value => {
    return value % 5 === 0
})

console.log(res_1)

// Massiv ichida 20 dan kichik bo‘lgan birinchi toq sonning indeksini toping.
alert("2-vazifa")
let num_2 = [52, 63, 21, 17, 89, 11]

let res_2 = num_2.findIndex(value => {
    if (value < 20 && value % 2 === 1) {
        return value
    }
})

console.log(res_2)

// Massiv ichida 0 bilan tugaydigan birinchi elementni toping.
alert("3-vazifa")
let num_3 = [85, 96, 14, 23, 0, 47]

let res_3 = num_3.find(value => {
    return value === 0
})

console.log(res_3)

// 2. some metodi bo‘yicha masalalar

// Massivda 50 ga teng yoki undan katta elementlar bor-yo‘qligini aniqlang.
alert("4-vazifa")
let num_4 = [20, 3, 6, 52, 50, 69]

let res_4 = num_4.some(value => {
    if (value === 50 || value > 50) {
        return value
    }
})

console.log(res_4)

// Massivda manfiy sonlar bor-yo‘qligini aniqlang.
alert("5-vazifa")
let num_5 = [56, 69, 51, 47, -9, 36, -8]

let res_5 = num_5.some(value => {
    return value < 0
})

console.log(res_5)

// Massivda 3 ga karrali bo‘lgan sonlar bor-yo‘qligini tekshiring.
alert("6-vazifa")
let num_6 = [69, 5, 74, 69, 32, 44]

let res_6 = num_6.some(value => {
    return value % 3 === 0
})

console.log(res_6)

// 3. every metodi bo‘yicha masalalar

// Massivdagi barcha sonlar musbat ekanligini tekshiring.
alert("7-vazifa")
let num_7 = [14, 56, 36, 44, -1, 4 - 9]

let res_7 = num_7.every(value => {
    return value > 0
})

console.log(res_7)

// Massivdagi barcha sonlar 10 dan katta ekanligini tekshiring.
alert("8-vazifa")
let num_8 = [14, 36, 25, 1, 2, 3, 4]

let res_8 = num_8.every(value => {
    return value > 10
})

console.log(res_8)

// Massivdagi barcha sonlar toq ekanligini aniqlang.
alert("9-vazifa")
let num_9 = [14, 69, 14, 25, 36, 7, 4]

let res_9 = num_9.every(value => {
    return value % 2 === 1
})

console.log(res_9)

// String metodlar

// Berilgan matnning uchinchi belgisi nima ekanligini aniqlang.
alert("10-vazifa") // ustoz menimcha buni mapda qilganim yaxshi ekan
let num_10 = ["iphone", "16 pro max"]

let res_10 = num_10.map(value => {
    return value.charAt(2)
})

console.log(res_10)

// Matnning oxiridan ikkinchi belgisini toping.
alert("11-vazifa") // came to my brain the idea ahahah
let num_11 = ["iphone", "14 pro max"]

let res_11 = num_11.map(value => {
    return value.charAt(value.length - 2)
})

console.log(res_11)

// Berilgan matnning birinchi belgisi uchun Unicode qiymatini aniqlang.
alert("12-vazifa")
let num_12 = ["iphone", "16 pro max"]

let res_12 = num_12.map(value => {
    return value.charCodeAt(0)
})

console.log(res_12)

// Matnning beshinchi belgisining Unicode qiymatini toping.
alert("13-vazifa")
let num_13 = ["birnarsa"]

let res_13 = num_13.map(value => {
    return value.charCodeAt(4)
})

console.log(res_13)

// Berilgan matndan birinchi 5 ta belgini ajratib oling.
alert("14-vazifa")
let num_14 = ["passing world"]

let res_14 = num_14.map(value => {
    return value.slice(0, 5)
})

console.log(res_14)

// Matnning oxirgi 3 ta belgisini ajratib oling.
alert("15-vazifa")
let num_15 = ["transient world"]

let res_15 = num_15.map(value => {
    return value.slice(6, 9)
})

console.log(res_15)

// Matnning 2-pozitsiyadan boshlab 6-pozitsiyagacha bo‘lgan qismini ajrating.
alert("16-vazifa")
let num_16 = ["Hello World", "GoodBye"]

let res_16 = num_16.map(value => {
    return value.substring(2, 6)
})

console.log(res_16)

// Matnning oxirgi uchta belgisini substring yordamida oling.
alert("17-vazifa")
let num_17 = ["Hello World", "GoodBye"]

let res_17 = num_17.map(value => {
    return value.substring(8)
})

console.log(res_17)

// Matnning 4-pozitsiyadan boshlab 5 ta belgisini oling.
alert("18-vazifa")
let num_18 = ["suvdan ko'tardim ko'za"]

let res_18 = num_18.map(value => {
    return value.substr(5, 5)
})

console.log(res_18)

// Berilgan matnning boshidan 7 ta belgisini substr yordamida ajrating.
alert("19-vazifa")
let num_19 = ["suvdan ko'tardim ko'za"]

let res_19 = num_19.map(value => {
    return value.substr(0, 7)
})

console.log(res_19)

// Berilgan matnni faqat katta harflar bilan yozing.
alert("20-vazifa")
let num_20 = ["suvdan ko'tardim ko'za"]

let res_20 = num_20.map(value => {
    return value.toUpperCase()
})

console.log(res_20)

// Matnning birinchi yarmidan kichik harflar, ikkinchi yarmidan katta harflar yarating.
alert("21-vazifa") // ?

// Berilgan ikkita matnni birlashtiring.
alert("22-vazifa")
let num_21 = "salom"
let nimadir = "xayr"

let res_21 = num_21.concat(nimadir)

console.log(res_21)

// Matnga qo‘shimcha qilib "!" belgisi qo‘shing va yangi matn yarating.
alert("23-vazifa")
let num_22 = "salom"
let nimadir_2 = "!"

let res_22 = num_22.concat(nimadir_2)

console.log(res_22)

// Matnning boshidagi va oxiridagi bo‘sh joylarni olib tashlang.
alert("24-vazifa")
let num_23 = " salom "

let res_23 = num_23.trim()

console.log(res_23)

// Matnning faqat boshidagi bo‘sh joylarni olib tashlang.
alert("25-vazifa")
let num_24 = " salom "

let res_24 = num_24.trimStart()

console.log(res_24)

// Berilgan matnni boshidan 10 belgiga to‘ldiring, “*” belgisi bilan.
alert("26-vazifa")
let num_25 = "salom"

let res_25 = num_25.padStart(10, "*")

console.log(res_25)

// Matnni oxiridan 15 belgiga “#” bilan to‘ldiring.
alert("27-vazifa")
let num_26 = "salom"

let res_26 = num_26.padEnd(15, "#")

console.log(res_26)

// Matnni 3 marta takrorlab yangi matn yarating.
alert("28-vazifa")
let num_27 = "bmw"

let res_27 = num_27.repeat(3)

console.log(res_27)

// Belgini 5 marta takrorlab, string yaratib oling.
alert("29-vazifa")
let num_28 = "!"

let res_28 = num_28.repeat(5)

console.log(res_28)

// Matnning ichidagi birinchi "a" harfini "o" harfiga almashtiring.
alert("30-vazifa")
let num_29 = "og'riq bormi"

let res_29 = num_29.replace("o", "b")

console.log(res_29)

// Matnning barcha “ ” (bo‘sh joy) belgilarini “_” belgilariga almashtiring.
alert("31-vazifa")
let num_30 = "ooo ulug' shaman"

let res_30 = num_30.replaceAll(" ", "_")

console.log(res_30)

// Matnni har bir so‘zdan ajratib massivga aylantiring.
alert("32-vazifa")
let num_31 = "haaa otam bormi og'riq"

let res_31 = num_31.split("so'z")

console.log(res_31)

// Matnni har bir belgidan ajratib massiv yarating.
alert("33-vazifa")
let num_32 = "nima deb yozay"

let res_32 = num_32.split('')

console.log(res_32)

// Matndagi "a" harfi birinchi marta qayerda uchrayotganini aniqlang.
alert("34-vazifa")
let num_33 = "salom"

let res_33 = num_33.indexOf("a")

console.log(res_33)

// Matndagi "e" harfi oxirgi marta qayerda uchrayotganini toping.
alert("35-vazifa")
let num_34 = "alek"

let res_34 = num_34.lastIndexOf("e")

console.log(res_34)

// Matn ichida "hello" so‘zi bor-yo‘qligini tekshiring.
alert("36-vazifa")
let num_35 = "salom alik biror narsa hello opera"

let res_35 = num_35.includes("hello")

console.log(res_35)

// Matn ichida "!" belgisi mavjudligini aniqlang.
alert("37-vazifa")
let num_36 = "something or anything or !"

let res_36 = num_36.includes("!")

console.log(res_36)

// Matn ichida birinchi "good" so‘zi qayerda joylashganini aniqlang.
alert("38-vazifa")
let num_37 = "i am good today"

let res_37 = num_37.search("good")

console.log(res_37)

// Matnda raqam uchraydigan joyni aniqlang.
alert("39-vazifa")
let num_38 = "something or anything2 369"

let res_38 = num_38.search(Number(num_38))

console.log(res_38)

// Matn "Hello" so‘zi bilan boshlanadimi yoki yo‘qmi, tekshiring.
alert("40-vazifa")
let num_39 = "Hello GoodBye"

let res_39 = num_39.startsWith("Hello")

console.log(res_39)

// Matn oxirida "bye" so‘zi borligini aniqlang.
alert("41-vazifa")
let num_40 = "Hello Goodbye"

let res_40 = num_40.endsWith("bye")

console.log(res_40)

// Massiv ichida obyektlar

// 1. users massivida age qiymati 25 dan katta bo‘lgan foydalanuvchilarni toping.
alert("42-vazifa")
let users = [
    { id: 1, name: "Ali", age: 25, isActive: true },
    { id: 2, name: "Bobur", age: 30, isActive: false },
    { id: 3, name: "Zara", age: 22, isActive: true }
];

let res_41 = users.filter(value => {
    return value.age > 25
})

console.log(res_41)

// 2. products massivida price qiymati 500 dan kichik bo‘lgan mahsulotlarni aniqlang.
alert("43-vazifa")
let products = [
    { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
    { id: 102, name: "Phone", price: 500, rating: 4.2 },
    { id: 103, name: "Tablet", price: 300, rating: 4.8 }
];

let res_42 = products.filter(value => {
    return value.price < 500
})

console.log(res_42)

// 3. tasks massivida status qiymati "pending" bo‘lgan vazifalarni boshqa massivga ajrating.
alert("44-vazifa")
let tasks = [
    { id: 1, title: "Do homework", status: "completed" },
    { id: 2, title: "Clean room", status: "pending" },
    { id: 3, title: "Go shopping", status: "pending" }
];

let res_43 = tasks.filter(value => {
    return value.status.includes("pending")
})

console.log(res_43)

// 4. users massivida isActive qiymati true bo‘lgan foydalanuvchilar sonini hisoblang.
alert("45-vazifa")
let yigindi = 0

let users_2 = [
    { id: 1, name: "Ali", age: 25, isActive: true },
    { id: 2, name: "Bobur", age: 30, isActive: false },
    { id: 3, name: "Zara", age: 22, isActive: true }
];

let res_44 = users_2.filter(value => {
    if (value.isActive === true) {
        return yigindi++
    }
})

console.log("nechtaligi: ", yigindi)

// 5. products massivida rating qiymati eng yuqori bo‘lgan mahsulotni toping.
alert("46-vazifa") // ?

// 6. users massividagi har bir foydalanuvchining faqat name va age qiymatlarini ajratib oling.
alert("47-vazifa") // kod googledan o'rganib oldim ozi birxil qilgandim lekin yonidagi qavslarni qoymasdan qigan ekanman
let users_3 = [
    { id: 1, name: "Ali", age: 25, isActive: true },
    { id: 2, name: "Bobur", age: 30, isActive: false },
    { id: 3, name: "Zara", age: 22, isActive: true }
];

let res_45 = users_3.map(value => {
    return { ism: value.name, yosh: value.age }
})

console.log(res_45)

// products massivida price qiymati eng kichik bo‘lgan mahsulotni aniqlang.
alert("48-vazifa") // ?

// tasks massivida title qiymati "Clean room" bo‘lgan vazifaning indeksini aniqlang.
alert("49-vazifa") // o'xshatolmadim
let tasks_2 = [
    { id: 1, title: "Do homework", status: "completed" },
    { id: 2, title: "Clean room", status: "pending" },
    { id: 3, title: "Go shopping", status: "pending" }
];

let res_46 = tasks_2.filter(value => {
    return value.title.indexOf("Clean room")
})

console.log(res_46)

// users massivida barcha foydalanuvchilarning age qiymatlari yig‘indisini hisoblang.
alert("50-vazifa")
let yigindi_2 = 0

let users_4 = [
    { id: 1, name: "Ali", age: 25, isActive: true },
    { id: 2, name: "Bobur", age: 30, isActive: false },
    { id: 3, name: "Zara", age: 22, isActive: true }
];

let res_47 = users_4.filter(value => {
    return yigindi_2 += value.age
})

console.log(yigindi_2)

// 10. products massividagi har bir mahsulotning price qiymatini 10% ga kamaytirib yangi massiv yarating.
alert("51-vazifa") // 10% ni topdim lekin 3ta price ni qanday qilib olishni bilmadim bu massivlarga oxshab massiv[1] qilsa chiqmaskan

// 11. users massivida name qiymati "Ali" bo‘lgan foydalanuvchini toping.
alert("52-vazifa")
let users_5 = [
    { id: 1, name: "Ali", age: 25, isActive: true },
    { id: 2, name: "Bobur", age: 30, isActive: false },
    { id: 3, name: "Zara", age: 22, isActive: true }
];

let res_48 = users_5.filter(value => {
    return value.name === "Ali"
})

console.log(res_48)

// 12. tasks massivida barcha status qiymatlari "completed" ekanligini tekshiring.
alert("53-vazifa")
let tasks_3 = [
    { id: 1, title: "Do homework", status: "completed" },
    { id: 2, title: "Clean room", status: "completed" },
    { id: 3, title: "Go shopping", status: "completed" }
];

let res_49 = tasks_3.every(value => {
    return value.status === "completed"
})

console.log(res_49)

// 14. users massivida age qiymati eng katta bo‘lgan foydalanuvchini aniqlang.
alert("54-vazifa") // ?

// 15. tasks massivida har bir title qiymatini bosh harfini katta qilib yangi massiv yarating.
alert("55-vazifa") // capitalize yo'qku ?