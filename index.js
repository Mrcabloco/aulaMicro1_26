const express = require("express");
const serves = express();

serves.get("/:leonardo", (req, res) => {
    const {leonardo} = req.params
    res.status(200).json({
        mensagem:`SEJA BEM-VINDO PARÂMETRO ${leonardo}`
    })
    res.send("Fala Porra tamo ae ");
});

serves.listen(3016, ()=> {
    console.log("Servidor On Junior LEONARDO SOUZA BASTOS ");
});