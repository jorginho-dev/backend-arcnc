const User = require("../models/User");

module.exports = { 
    
    async store(req, res) {    
        try {
            const { email } = req.body;
            const user = await User.create({ email });
            return res.json(user);
        }catch(e){
            console.log(e);
        }         
        
    }
};