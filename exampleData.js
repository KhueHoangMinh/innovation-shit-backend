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
    },
]

const userArchived = [
    {
        product_id: "123",
        product_name: "sit amet, consectetur",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 1234,
        price_unit: "LUX",
        volume: 1000
    }, 
    {
        product_id: "123",
        product_name: "sit amet, consectetur",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 1234,
        price_unit: "LUX",
        volume: 1000
    }, 
    {
        product_id: "123",
        product_name: "sit amet, consectetur",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 1234,
        price_unit: "LUX",
        volume: 1000
    }, 
    {
        product_id: "123",
        product_name: "sit amet, consectetur",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 1234,
        price_unit: "LUX",
        volume: 1000
    }, 
]

const userBalance = {
    total: 1000
}

const userCards = [
    {
        type: "VISA",
        card_number: "4213 ···· ···· 2344",
    },
    {
        type: "VISA",
        card_number: "4213 ···· ···· 2344",
    },
    {
        type: "VISA",
        card_number: "4213 ···· ···· 2344",
    },
    {
        type: "VISA",
        card_number: "4213 ···· ···· 2344",
    },
]

const transactions = [
    {
        token_id: "0x34ZQvx8gNRyUHL2",
        token_name: "LUX",
        sender: "0xkn2TDMYj6H9ykFi",
        receiver: "0xoGjsso9d0LuxA1g",
        hash: "0xaxBDFlhWCkDcdUN",
        timestamp: "2024-01-30T12:34:56Z",
        fee: "0.5761487425460061",
        signature: "0xDrXiIq76U13L3CH"
    },
    {
        token_id: "0x34ZQvx8gNRyUHL2",
        token_name: "LUX",
        sender: "0xkn2TDMYj6H9ykFi",
        receiver: "0xoGjsso9d0LuxA1g",
        hash: "0xaxBDFlhWCkDcdUN",
        timestamp: "2024-01-30T12:34:56Z",
        fee: "0.5761487425460061",
        signature: "0xDrXiIq76U13L3CH"
    },
    {
        token_id: "0x34ZQvx8gNRyUHL2",
        token_name: "LUX",
        sender: "0xkn2TDMYj6H9ykFi",
        receiver: "0xoGjsso9d0LuxA1g",
        hash: "0xaxBDFlhWCkDcdUN",
        timestamp: "2024-01-30T12:34:56Z",
        fee: "0.5761487425460061",
        signature: "0xDrXiIq76U13L3CH"
    },
    {
        token_id: "0x34ZQvx8gNRyUHL2",
        token_name: "LUX",
        sender: "0xkn2TDMYj6H9ykFi",
        receiver: "0xoGjsso9d0LuxA1g",
        hash: "0xaxBDFlhWCkDcdUN",
        timestamp: "2024-01-30T12:34:56Z",
        fee: "0.5761487425460061",
        signature: "0xDrXiIq76U13L3CH"
    },
    {
        token_id: "0x34ZQvx8gNRyUHL2",
        token_name: "LUX",
        sender: "0xkn2TDMYj6H9ykFi",
        receiver: "0xoGjsso9d0LuxA1g",
        hash: "0xaxBDFlhWCkDcdUN",
        timestamp: "2024-01-30T12:34:56Z",
        fee: "0.5761487425460061",
        signature: "0xDrXiIq76U13L3CH"
    },
    {
        token_id: "0x34ZQvx8gNRyUHL2",
        token_name: "LUX",
        sender: "0xkn2TDMYj6H9ykFi",
        receiver: "0xoGjsso9d0LuxA1g",
        hash: "0xaxBDFlhWCkDcdUN",
        timestamp: "2024-01-30T12:34:56Z",
        fee: "0.5761487425460061",
        signature: "0xDrXiIq76U13L3CH"
    },
    {
        token_id: "0x34ZQvx8gNRyUHL2",
        token_name: "LUX",
        sender: "0xkn2TDMYj6H9ykFi",
        receiver: "0xoGjsso9d0LuxA1g",
        hash: "0xaxBDFlhWCkDcdUN",
        timestamp: "2024-01-30T12:34:56Z",
        fee: "0.5761487425460061",
        signature: "0xDrXiIq76U13L3CH"
    },
    {
        token_id: "0x34ZQvx8gNRyUHL2",
        token_name: "LUX",
        sender: "0xkn2TDMYj6H9ykFi",
        receiver: "0xoGjsso9d0LuxA1g",
        hash: "0xaxBDFlhWCkDcdUN",
        timestamp: "2024-01-30T12:34:56Z",
        fee: "0.5761487425460061",
        signature: "0xDrXiIq76U13L3CH"
    },
    {
        token_id: "0x34ZQvx8gNRyUHL2",
        token_name: "LUX",
        sender: "0xkn2TDMYj6H9ykFi",
        receiver: "0xoGjsso9d0LuxA1g",
        hash: "0xaxBDFlhWCkDcdUN",
        timestamp: "2024-01-30T12:34:56Z",
        fee: "0.5761487425460061",
        signature: "0xDrXiIq76U13L3CH"
    },
    {
        token_id: "0x34ZQvx8gNRyUHL2",
        token_name: "LUX",
        sender: "0xkn2TDMYj6H9ykFi",
        receiver: "0xoGjsso9d0LuxA1g",
        hash: "0xaxBDFlhWCkDcdUN",
        timestamp: "2024-01-30T12:34:56Z",
        fee: "0.5761487425460061",
        signature: "0xDrXiIq76U13L3CH"
    },
    {
        token_id: "0x34ZQvx8gNRyUHL2",
        token_name: "LUX",
        sender: "0xkn2TDMYj6H9ykFi",
        receiver: "0xoGjsso9d0LuxA1g",
        hash: "0xaxBDFlhWCkDcdUN",
        timestamp: "2024-01-30T12:34:56Z",
        fee: "0.5761487425460061",
        signature: "0xDrXiIq76U13L3CH"
    },
    {
        token_id: "0x34ZQvx8gNRyUHL2",
        token_name: "LUX",
        sender: "0xkn2TDMYj6H9ykFi",
        receiver: "0xoGjsso9d0LuxA1g",
        hash: "0xaxBDFlhWCkDcdUN",
        timestamp: "2024-01-30T12:34:56Z",
        fee: "0.5761487425460061",
        signature: "0xDrXiIq76U13L3CH"
    },
    {
        token_id: "0x34ZQvx8gNRyUHL2",
        token_name: "LUX",
        sender: "0xkn2TDMYj6H9ykFi",
        receiver: "0xoGjsso9d0LuxA1g",
        hash: "0xaxBDFlhWCkDcdUN",
        timestamp: "2024-01-30T12:34:56Z",
        fee: "0.5761487425460061",
        signature: "0xDrXiIq76U13L3CH"
    },
    {
        token_id: "0x34ZQvx8gNRyUHL2",
        token_name: "LUX",
        sender: "0xkn2TDMYj6H9ykFi",
        receiver: "0xoGjsso9d0LuxA1g",
        hash: "0xaxBDFlhWCkDcdUN",
        timestamp: "2024-01-30T12:34:56Z",
        fee: "0.5761487425460061",
        signature: "0xDrXiIq76U13L3CH"
    },
    {
        token_id: "0x34ZQvx8gNRyUHL2",
        token_name: "LUX",
        sender: "0xkn2TDMYj6H9ykFi",
        receiver: "0xoGjsso9d0LuxA1g",
        hash: "0xaxBDFlhWCkDcdUN",
        timestamp: "2024-01-30T12:34:56Z",
        fee: "0.5761487425460061",
        signature: "0xDrXiIq76U13L3CH"
    },
    {
        token_id: "0x34ZQvx8gNRyUHL2",
        token_name: "LUX",
        sender: "0xkn2TDMYj6H9ykFi",
        receiver: "0xoGjsso9d0LuxA1g",
        hash: "0xaxBDFlhWCkDcdUN",
        timestamp: "2024-01-30T12:34:56Z",
        fee: "0.5761487425460061",
        signature: "0xDrXiIq76U13L3CH"
    },
    {
        token_id: "0x34ZQvx8gNRyUHL2",
        token_name: "LUX",
        sender: "0xkn2TDMYj6H9ykFi",
        receiver: "0xoGjsso9d0LuxA1g",
        hash: "0xaxBDFlhWCkDcdUN",
        timestamp: "2024-01-30T12:34:56Z",
        fee: "0.5761487425460061",
        signature: "0xDrXiIq76U13L3CH"
    },
    {
        token_id: "0x34ZQvx8gNRyUHL2",
        token_name: "LUX",
        sender: "0xkn2TDMYj6H9ykFi",
        receiver: "0xoGjsso9d0LuxA1g",
        hash: "0xaxBDFlhWCkDcdUN",
        timestamp: "2024-01-30T12:34:56Z",
        fee: "0.5761487425460061",
        signature: "0xDrXiIq76U13L3CH"
    },
]


const productList = [
    {
        product_id: "123",
        product_name: "sit amet, consectetur",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 1234,
        price_unit: "LUX",
        volume: 1000
    }, 
    {
        product_id: "456",
        product_name: "labore et dolore",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 134,
        price_unit: "LUX",
        volume: 900
    }, 
    {
        product_id: "789",
        product_name: "olor sit amet",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 124,
        price_unit: "LUX",
        volume: 890
    }, 
    {
        product_id: "789",
        product_name: "olor sit amet",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 124,
        price_unit: "LUX",
        volume: 890
    }, 
    {
        product_id: "789",
        product_name: "olor sit amet",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 124,
        price_unit: "LUX",
        volume: 890
    }, 
    {
        product_id: "789",
        product_name: "olor sit amet",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 124,
        price_unit: "LUX",
        volume: 890
    }, 
]

const product = 
{
    product_id: "789",
    product_name: "olor sit amet",
    image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
    product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    best_price: 124,
    price_unit: "LUX",
    volume: 890
}

const buyingRequest = [
    {
        user_id: "231",
        username: "Username",
        amount: "100",
        price_unit: "LUX",
        rate: 1234.56
    },
    {
        user_id: "231",
        username: "Username",
        amount: "100",
        price_unit: "LUX",
        rate: 1234.56
    },
    {
        user_id: "231",
        username: "Username",
        amount: "100",
        price_unit: "LUX",
        rate: 1234.56
    },
    {
        user_id: "231",
        username: "Username",
        amount: "100",
        price_unit: "LUX",
        rate: 1234.56
    },
    {
        user_id: "231",
        username: "Username",
        amount: "100",
        price_unit: "LUX",
        rate: 1234.56
    },
]

const sellingRequest = [
    {
        user_id: "231",
        username: "Username",
        amount: "100",
        price_unit: "LUX",
        rate: 1234.56
    },
    {
        user_id: "231",
        username: "Username",
        amount: "100",
        price_unit: "LUX",
        rate: 1234.56
    },
    {
        user_id: "231",
        username: "Username",
        amount: "100",
        price_unit: "LUX",
        rate: 1234.56
    },
    {
        user_id: "231",
        username: "Username",
        amount: "100",
        price_unit: "LUX",
        rate: 1234.56
    },
    {
        user_id: "231",
        username: "Username",
        amount: "100",
        price_unit: "LUX",
        rate: 1234.56
    },
]

const home = {
    carousel: [
        {
            product_id: "789",
            product_name: "olor sit amet",
            image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
            product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            best_price: 124,
        },
        {
            product_id: "789",
            product_name: "olor sit amet",
            image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
            product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            best_price: 124,
        },
        {
            product_id: "789",
            product_name: "olor sit amet",
            image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
            product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            best_price: 124,
        },
        {
            product_id: "789",
            product_name: "olor sit amet",
            image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
            product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            best_price: 124,
        },
        {
            product_id: "789",
            product_name: "olor sit amet",
            image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
            product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            best_price: 124,
        },
    ],
    categories: [
        {
            name: "Home and Interior",
            list: [
                {
                    product_id: "789",
                    product_name: "olor sit amet",
                    image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
                    product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    best_price: 124,
                    price_unit: "LUX",
                    volume: 890
                }, 
                {
                    product_id: "789",
                    product_name: "olor sit amet",
                    image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
                    product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    best_price: 124,
                    price_unit: "LUX",
                    volume: 890
                }, 
                {
                    product_id: "789",
                    product_name: "olor sit amet",
                    image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
                    product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    best_price: 124,
                    price_unit: "LUX",
                    volume: 890
                }, 
                {
                    product_id: "789",
                    product_name: "olor sit amet",
                    image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
                    product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    best_price: 124,
                    price_unit: "LUX",
                    volume: 890
                }, 
                {
                    product_id: "789",
                    product_name: "olor sit amet",
                    image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
                    product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    best_price: 124,
                    price_unit: "LUX",
                    volume: 890
                }, 
                {
                    product_id: "789",
                    product_name: "olor sit amet",
                    image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
                    product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    best_price: 124,
                    price_unit: "LUX",
                    volume: 890
                }, 
            ]
        },
        {
            name: "Watches and Jewelry",
            list: [
                {
                    product_id: "789",
                    product_name: "olor sit amet",
                    image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
                    product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    best_price: 124,
                    price_unit: "LUX",
                    volume: 890
                }, 
                {
                    product_id: "789",
                    product_name: "olor sit amet",
                    image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
                    product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    best_price: 124,
                    price_unit: "LUX",
                    volume: 890
                }, 
                {
                    product_id: "789",
                    product_name: "olor sit amet",
                    image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
                    product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    best_price: 124,
                    price_unit: "LUX",
                    volume: 890
                }, 
                {
                    product_id: "789",
                    product_name: "olor sit amet",
                    image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
                    product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    best_price: 124,
                    price_unit: "LUX",
                    volume: 890
                }, 
                {
                    product_id: "789",
                    product_name: "olor sit amet",
                    image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
                    product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    best_price: 124,
                    price_unit: "LUX",
                    volume: 890
                }, 
            ]
        },
        {
            name: "Fashion and Apparel",
            list: [
                {
                    product_id: "789",
                    product_name: "olor sit amet",
                    image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
                    product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    best_price: 124,
                    price_unit: "LUX",
                    volume: 890
                }, 
                {
                    product_id: "789",
                    product_name: "olor sit amet",
                    image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
                    product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    best_price: 124,
                    price_unit: "LUX",
                    volume: 890
                }, 
                {
                    product_id: "789",
                    product_name: "olor sit amet",
                    image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
                    product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    best_price: 124,
                    price_unit: "LUX",
                    volume: 890
                }, 
                {
                    product_id: "789",
                    product_name: "olor sit amet",
                    image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
                    product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    best_price: 124,
                    price_unit: "LUX",
                    volume: 890
                }, 
                {
                    product_id: "789",
                    product_name: "olor sit amet",
                    image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
                    product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    best_price: 124,
                    price_unit: "LUX",
                    volume: 890
                }, 
                {
                    product_id: "789",
                    product_name: "olor sit amet",
                    image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
                    product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    best_price: 124,
                    price_unit: "LUX",
                    volume: 890
                }, 
                {
                    product_id: "789",
                    product_name: "olor sit amet",
                    image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
                    product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    best_price: 124,
                    price_unit: "LUX",
                    volume: 890
                }, 
            ]
        }
    ]
}

const search = [
    {
        product_id: "789",
        product_name: "olor sit amet",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 124,
        price_unit: "LUX",
        volume: 890
    }, 
    {
        product_id: "789",
        product_name: "olor sit amet",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 124,
        price_unit: "LUX",
        volume: 890
    }, 
    {
        product_id: "789",
        product_name: "olor sit amet",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 124,
        price_unit: "LUX",
        volume: 890
    }, 
    {
        product_id: "789",
        product_name: "olor sit amet",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 124,
        price_unit: "LUX",
        volume: 890
    }, 
    {
        product_id: "789",
        product_name: "olor sit amet",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 124,
        price_unit: "LUX",
        volume: 890
    }, 
    {
        product_id: "789",
        product_name: "olor sit amet",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 124,
        price_unit: "LUX",
        volume: 890
    }, 
    {
        product_id: "789",
        product_name: "olor sit amet",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 124,
        price_unit: "LUX",
        volume: 890
    }, 
    {
        product_id: "789",
        product_name: "olor sit amet",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 124,
        price_unit: "LUX",
        volume: 890
    }, 
    {
        product_id: "789",
        product_name: "olor sit amet",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 124,
        price_unit: "LUX",
        volume: 890
    }, 
    {
        product_id: "789",
        product_name: "olor sit amet",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 124,
        price_unit: "LUX",
        volume: 890
    }, 
    {
        product_id: "789",
        product_name: "olor sit amet",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 124,
        price_unit: "LUX",
        volume: 890
    }, 
    {
        product_id: "789",
        product_name: "olor sit amet",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 124,
        price_unit: "LUX",
        volume: 890
    }, 
    {
        product_id: "789",
        product_name: "olor sit amet",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 124,
        price_unit: "LUX",
        volume: 890
    }, 
    {
        product_id: "789",
        product_name: "olor sit amet",
        image_url: "https://picsum.photos/800/800?rand=" + Math.random(),
        product_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        best_price: 124,
        price_unit: "LUX",
        volume: 890
    }, 
]

const marketRate = {rate: 1234.56}

const trendingCategories = [
    "All",
    "Jewelry",
    "Cosmetics",
    "Interior",
    "Electronics",
    "Fashion",
    "Arts"]

module.exports = {user, userArchived, userBalance, userCards, transactions, productList, product, marketRate, buyingRequest, sellingRequest, home, trendingCategories, search}

return module.exports