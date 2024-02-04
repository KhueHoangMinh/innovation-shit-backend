const user = [
    {
        token: "0xFFFFFFFFFF",
        type: 1,
        user_id: "12345",
        username: "Example User",
        first_name:"Example",
        last_name: "User",
        avatar: "https://picsum.photos/800/800?rand=avatar",
        // password: "123",
        email: "exampleuseremail@test.com",
        phone: "+84912345678",
        birth: "11/01/1111",
        address: "Dongda, Hanoi, Vietnam"
    },
    {
        token: "0x0000000000",
        type: 0,
        user_id: "1",
        username: "Example Admin User",
        first_name:"Example Admin",
        last_name: "User",
        avatar: "https://picsum.photos/800/800?rand=avatar",
        // password: "123",
        email: "exampleadminuseremail@test.com",
        phone: "+84912345678",
        birth: "11/01/1111",
        address: "Dongda, Hanoi, Vietnam"
    }
]

const userCards = [
    {
        card_number: "4213 ···· ···· 2344",
        expiry_date: "11/35",
    }
]

const productList = [
    {
        product_id: "123",
        product_name: "sit amet, consectetur",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 1234,
        price_unit: "LUX",
        purchases: 1000
    }, 
    {
        product_id: "456",
        product_name: "labore et dolore",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 134,
        price_unit: "LUX",
        purchases: 900
    }, 
    {
        product_id: "789",
        product_name: "olor sit amet",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 124,
        price_unit: "LUX",
        purchases: 890
    }, 
]

module.exports = {user, productList}

return module.exports