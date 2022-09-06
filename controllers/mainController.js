const express = require("express");

module.exports = {
    index: (req, res)=>{
        return res.render("home")
    }
}