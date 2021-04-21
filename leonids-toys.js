const toys = [{
        id: 1,
        toyName: "MegaBubbleBlaster",
        manufacturer: "Local Bubble",
        inStock: true,
        backOrdered: false,
        height: 26,
        weight: 2.75,
        price: 39.99,
        numberInStock: 8
    },

    {
        id: 2,
        toyName: "Mr. Bouncy",
        manufacturer: "Rubber Crafters",
        inStock: false,
        backOrdered: true,
        height: 38,
        weight: 54,
        price: 129.99,
        numberInStock: 0
    },

    {
        id: 3,
        toyName: "Baby's First Tweezers",
        manufacturer: "Home Salon",
        inStock: true,
        backOrdered: false,
        height: 0.25,
        weight: 0.75,
        price: 6.99,
        numberInStock: 12
    }
]

const realWings = {
    id: 4,
    toyName: "You Can Really Fly!",
    manufacturer: "AeroNature",
    inStock: true,
    backOrdered: false,
    height: 8,
    weight: 18,
    price: 349.99,
    numberInStock: 7

}

const skateboardSidecar = {
    id: 6,
    toyName: "Skateboard Sidecar",
    manufacturer: "Low",
    inStock: true,
    backOrdered: false,
    height: 28,
    weight: 22,
    price: 69.99,
    numberInStock: 3

}

toys.push(skateboardSidecar)
toys.push(realWings)

console.log(toys);

for (const toy of toys) {
    toy.price = toy.price * .05;
    console.log(`The ${toy.manufacturer} ${toy.toyName} costs $${toy.price}.`)
}

const addToyToInventory = (toyObject) => {
    // Step 1: Get the current maximum id number in array
    // a: get index of last item
    const lastIndex = toys.length - 1
        // b: get last object in array
    const currentLastToy = toys[lastIndex]
        // c: get id property of last object
    const maxId = currentLastToy.id

    // Step 2: Increase current max id by 1
    const idForNewToy = maxId + 1

    // Step 3: Add id property to new toy object
    toyObject.id = idForNewToy
        // Step 4: add toy object to array
    toys.push(toyObject)
}

const periscope = {
        toyName: "Periscope",
        manufacturer: "ScopeTime",
        inStock: true,
        backOrdered: false,
        height: 10,
        weight: 2,
        price: 49.99,
        numberInStock: 13
    }
    // call function
addToyToInventory(periscope)

for (const toy of toys) {
    console.log(`The ${toy.manufacturer} ${toy.toyName} costs ${toy.price} dollars. It weighs ${toy.weight} pounds.`)
}