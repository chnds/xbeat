const jwt = require("jsonwebtoken"); 

const authMiddleware = (req, res, next) =>{
    const token = req.header("Authorization") 

    if(!token) return res.status(401).json({error: "Acesso negado"});

    try {
        const decoded = jwt.verify(token.replace("Bearer", ""),"seu_segredo");

        req.user = decoded;
        next();
    }catch(error){
        res.status(400).json({error: "Token inválidp"})
    }

}
module.exports = authMiddleware;