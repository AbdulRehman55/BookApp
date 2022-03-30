const jwt=require('jsonwebtoken');
const db = require('../models')


const User=db.users;


const addUser = async (req, res) => {

    const id = req.params.id
    let data = {
        name: req.body.name,
        password: req.body.password
    }

    const user = await User.create(data)
    res.status(200).send(user)

}
const loginUser = async (req, res) => {

    let name = req.body.name;
    let password=req.body.password;
    let user = await User.findOne({ where: { name: name,password:password }}
        ).then(result=>{

            if(result) {
                console.log(result)
                const payload={
                    name:name,
                    password:password
                }
            
                    //send the payload and secret key
                jwt.sign({payload:payload},'secretkey',(err,token)=>{
                    if(!err){
                res.json({
                    token:token
                    
                })
                
                
                    }else{console.log(err)};
                });
            }else {
            res.send('Register yourself!')}

        }

        )
    

}
module.exports = {
    addUser,
   loginUser
}