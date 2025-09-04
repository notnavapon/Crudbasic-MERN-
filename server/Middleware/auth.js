const jwt = require('jsonwebtoken')

exports.auth = async (req, res, next) =>{
    try{
        const token = req.headers["authtoken"]
        // console.log(token)

        if(!token){
            return res.status(401).send('No token')
        }

        const decode = jwt.verify(token , 'jwtsecret')
        console.log(decode)


        next();

    } catch (error){
        console.log(error)
        res.send('Token invalid').status(500)
    }
}