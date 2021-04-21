const phones = [{
        id: 1,
        name: "iPhone",
        maker: "Apple",
        operatingSystem: "iOS",
        price: 900,
        weight: 1.2
    },
    {
        id: 2,
        name: "Galaxy",
        maker: "Samsung",
        operatingSystem: "Android",
        price: 600,
        weight: 1.4
    }
]

const addPhoneToInventory = (phoneObject) => {
    const lastIndex = phones.length - 1
    const currentLastPhone = phones[lastIndex] //why phones[lastIndex? because it identifies the last object/item in the array so it can be assigned to currentLastPhone?]
    const maxId = currentLastPhone.id
    const idForNewPhone = maxId + 1

    phoneObject.id = idForNewPhone //so the new phoneObject's id will be assigned to (or the same as) idForNewPhone?
    phones.push(phoneObject) //push onto the phones array phoneObject
}

const pixel = { //object to push added below arrow function and above function call
    name: "Pixel",
    maker: "Google",
    operatingSystem: "Android",
    price: 399,
    weight: 1.2
}

addPhoneToInventory(pixel) //call the function addPhone... calling pixel as the parameter 

for (const phone of phones) { //while iterating through phones array, interpolate these values into this log
    console.log(`The ${phone.maker} ${phone.name} costs ${phone.price} dollars. It weighs ${phone.weight} grams.`)
}


const phoneToFind = 2
for (phone of phones) {
    if (phone.id === phoneToFind) {
        phone.weight = phone.weight + .04
        console.log(`The ${phone.maker} ${phone.name} costs ${phone.price} dollars. It weighs ${phone.weight} grams.`)
    }

}
console.log(phones)