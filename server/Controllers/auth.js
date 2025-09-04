const User = require('../Models/Users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async(req,res) => {
    
    try{
        //code 1.check user 
        const {name , password} = req.body
        console.log(name)


        var user = await User.findOne({ name })
        console.log(user)

        if(user){
            return res.send('User already exists').status(400)
        }

        //2.encrypt 
        const salt = await bcrypt.genSalt(10)

        user = new User({
            name , password
        })

        user.password = await bcrypt.hash(password, salt)
        // console.log(user)


        // 3.save
        user.save()

        res.send("Register Success")

    }catch (error){
        console.log(error)
        res.status(500).send('Server Error')
    }
}


exports.login = async(req,res) => {
    try{
        //code
        //1.Check User
        const {name , password} = req.body
        var user = await User.findOneAndUpdate({ name } , {new: true})
        console.log(user)

        if(user){
            const isMatch = await bcrypt.compare(password, user.password)

            if(!isMatch){
                return res.status(400).send('Password dont match')
            }

            //2.Payload
            var payload = {
                user:{
                    name: user.name
                }
            }
            //3.Generate
            jwt.sign(payload, 'jwtsecret', {expiresIn: 30 }, (error, token)=>{
                if(error) throw error;
                res.json({ token , payload})
            })
        }else{
            return res.status(400).send('User not found!!!')
        }

    }catch (error){
        console.log(error)
        res.status(500).send('Server Error')
    }
}