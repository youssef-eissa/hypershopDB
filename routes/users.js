const express = require('express');
const router = express.Router();

const usersData = [{
        id: 1,
        name: "youssef eissa",
        username: "aaaaa",
        email: "aa@ds.commm",
        password: "11111111",
        carts: [
        {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
        }
    ]
},

]

router.get('/users', (req, res) => {
    res.send(usersData);
})

router.get('/users/:id', (req, res) => {
    const found = usersData.some(user => user.id === parseInt(req.params.id))
    if(found){
        res.json(usersData.filter(user => user.id === parseInt(req.params.id)))
    }else{
        res.status(400).json({msg:`no user with id ${req.params.id}`})
    }

})

module.exports = router