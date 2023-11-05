const express = require('express');
const router = express.Router();
const uuid = require('uuid')



const usersData = [

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


router.post('/users', (req, res) => {

    const newUser={
        id: uuid.v4(),
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        carts: []
    }
    usersData.push(newUser)
    res.send(usersData)

})

router.put('/users/:id', (req, res) => {
    let id = req.params.id
    let name = req.body.name
    let username = req.body.username
    let email = req.body.email
    let password = req.body.password
    let carts = req.body.carts
    let index = usersData.findIndex(user => user.id === parseInt(id))
    if (index >= 0) {
        let user = usersData[index]
        user.name = name
        user.username = username
        user.email = email
        user.password = password
        user.carts = carts
        res.send(user)
        
    }
})




module.exports = router
