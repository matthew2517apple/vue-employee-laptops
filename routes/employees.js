var express = require('express')
var Employee = require('../models').Employee
var Laptop = require('../models').Laptop


var router = express.Router() 

router.get('/', function(req, res, next){
    Employee.findAll({order: ['name']}).then( employees => {
        return res.json(employees)
    }).catch( err => next(err) )
})

router.get('/:id', function(req, res, next) {
    Employee.findByPk(req.params.id).then(employee => {
        if (employee) {
            res.json(employee)
        } else {
            res.status(404).send('Employee not found')
        }
    }).catch( err => next(err) )
})

router.post('/', function(req, res, next){
    Employee.create(req.body).then( (data) => {
        return res.send('ok')
    }).catch( err => {
        if (err instanceof Sequelize.ValidationError) {
            let messages = err.errors.map( (e) => e.message)
            return res.status(500).json(messages)
        }
        return next(err)
    } )
})

router.patch('/:id', function(req, res, next){   
    Employee.update(
        req.body, { 
            where: {
                id: req.params.id
            }
    }).then( (rowsModified) => {
        if (!rowsModified[0]) {
            return res.status(404).send('Not found')               
        } else {
            return res.send('Ok')
        }
    }).catch( err => {
        if (err instanceof Sequelize.ValidationError) {
            let messages = err.errors.map( (e) => e.message)
            return res.status(500).json(messages)
        }
        return next(err)
    })
})


// get all laptops for employee
router.get('/:id/laptops', function(req, res, next){
    Laptop.findAll({where: { employeeId: req.params.id}}).then( laptops =>
        res.json(laptops) 
    )
})


router.patch('/:id/laptops', function(req, res, next){
    
    console.log('patching laptop with following data ')
    console.log(req.body)

    if (req.body.employeeId) {
        updateOptions = { employeeId: req.params.id }
    } else {
        updateOptions = { employeeId: null }
    }

    Laptop.update(updateOptions, { where: { id: req.body.laptopId } }).then( (result) => {
        if (result) {
        return res.send('ok')
        } else 
        res.status(404).send('Laptop not found')
    }
    ).catch( err => {
        //todo employee number not found 
    })
})


router.delete('/:id', function(req, res, next){ 
    Employee.destroy({where: {id: req.params.id}}).then( rowsModified => {
        return res.send('ok')
    }).catch( err => next(err) )
})

module.exports = router 