import express from 'express';
var router = express.Router();

import * as homeCtrl from '../controllers/home-controller.js';

router.get("/", homeCtrl.index);

export default router;