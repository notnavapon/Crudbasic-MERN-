const Product = require("../Models/Product")

const read = async(req,res)=>{
    try {
        //
        const id = req.params.id

        const producted = await Product.findOne({_id: id}).exec();
        res.send(producted)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
}

const list = async(req,res)=>{
    try {
        //
        const producted = await Product.find({}).exec();
        res.send(producted)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
}

const create = async(req,res)=>{
    try {
        //
        console.log(req.body)
        const producted = await Product(req.body).save()
        res.send(producted)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
}

const update = async(req,res)=>{
    try {
        const id = req.params.id
        const updated = await Product.findOneAndUpdate({_id: id},req.body,{ new: true}).exec()
        res.send(updated)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
}

const remove = async(req,res)=>{
    try {
        const id = req.params.id
        const removed = await Product.findOneAndDelete({_id: id}).exec()
        res.send(removed)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
}

// exports.read = read
// exports.list = list
// exports.create = create
// exports.update = update
// exports.remove = remove

module.exports = {read,list,create,update,remove}