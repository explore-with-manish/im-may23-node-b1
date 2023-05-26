const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render("index", { pageTitle: "Index View", sp: '<span>Hello</span>' });
});

router.get('/contact', (req, res, next) => {
    res.render("contact", { pageTitle: "Contact View" });
});

router.get('/about', (req, res, next) => {
    res.render("about", { pageTitle: "About View" });
});

module.exports = router;