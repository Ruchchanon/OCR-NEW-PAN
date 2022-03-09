const express = require('express');
const router = express.Router();
const { authCheck } = require('../middleware/auth')

const { getDocByMonthInPerson, getDocByDayInPerson, getDocByYearInPerson, getDocByWeekInPerson } = require('../controllers/summaryinperson');
const { getDocByMonthOutPerson, getDocByDayOutPerson, getDocByYearOutPerson, getDocByWeekOutPerson } = require('../controllers/summaryoutperson');

const { getDocByMonthInMoney, getDocByDayInMoney, getDocByYearInMoney, getDocByWeekInMoney } = require('../controllers/summaryinmoney');
const { getDocByMonthOutMoney, getDocByDayOutMoney, getDocByYearOutMoney, getDocByWeekOutMoney } = require('../controllers/summaryoutmoney');

const { getDocByMonthInObj, getDocByDayInObj, getDocByYearInObj, getDocByWeekInObj } = require('../controllers/summaryinobj');
const { getDocByMonthOutObj, getDocByDayOutObj, getDocByYearOutObj, getDocByWeekOutObj } = require('../controllers/summaryoutobj');

const { getDocByMonthInRes, getDocByDayInRes, getDocByYearInRes, getDocByWeekInRes } = require('../controllers/summaryinres');
const { getDocByMonthOutRes, getDocByDayOutRes, getDocByYearOutRes,getDocByWeekOutRes } = require('../controllers/summaryoutres');

const { getDocByMonthInPlan, getDocByDayInPlan, getDocByYearInPlan, getDocByWeekInPlan } = require('../controllers/summaryinplan');
const { getDocByMonthOutPlan, getDocByDayOutPlan, getDocByYearOutPlan, getDocByWeekOutPlan } = require('../controllers/summaryoutplan');

const { getDocByMonthInReso, getDocByDayInReso, getDocByYearInReso, getDocByWeekInReso } = require('../controllers/summaryinreso');
const { getDocByMonthOutReso, getDocByDayOutReso, getDocByYearOutReso, getDocByWeekOutReso } = require('../controllers/summaryoutreso');

const { getDocByMonthInEdu, getDocByDayInEdu, getDocByYearInEdu, getDocByWeekInEdu } = require('../controllers/summaryinedu');
const { getDocByMonthOutEdu, getDocByDayOutEdu, getDocByYearOutEdu, getDocByWeekOutEdu } = require('../controllers/summaryoutedu');

const { getDocByMonthInPlace, getDocByDayInPlace, getDocByYearInPlace, getDocByWeekInPlace } = require('../controllers/summaryinplace');
const { getDocByMonthOutPlace, getDocByDayOutPlace, getDocByYearOutPlace, getDocByWeekOutPlace } = require('../controllers/summaryoutplace');

const { getDocByMonthInSubj, getDocByDayInSubj, getDocByYearInSubj, getDocByWeekInSubj } = require('../controllers/summaryinsubj');
const { getDocByMonthOutSubj, getDocByDayOutSubj, getDocByYearOutSubj, getDocByWeekOutSubj } = require('../controllers/summaryoutsubj');

const { getDocByMonthInAle, getDocByDayInAle, getDocByYearInAle , getDocByWeekInAle} = require('../controllers/summaryinale');
const { getDocByMonthOutAle, getDocByDayOutAle, getDocByYearOutAle, getDocByWeekOutAle } = require('../controllers/summaryoutale');

const { getDocByMonthInRul, getDocByDayInRul, getDocByYearInRul, getDocByWeekInRul } = require('../controllers/summaryinrul');
const { getDocByMonthOutRul, getDocByDayOutRul, getDocByYearOutRul, getDocByWeekOutRul } = require('../controllers/summaryoutrul');




//@route    InPerson
router.get('/summary/docbyday/inperson', authCheck, getDocByDayInPerson);
router.get('/summary/docbymonth/inperson', authCheck, getDocByMonthInPerson);
router.get('/summary/docbyyear/inperson', authCheck, getDocByYearInPerson);
router.get('/summary/docbyweek/inperson', authCheck, getDocByWeekInPerson);
//@route    OutPerson
router.get('/summary/docbyday/outperson', authCheck, getDocByDayOutPerson);
router.get('/summary/docbymonth/outperson', authCheck, getDocByMonthOutPerson);
router.get('/summary/docbyyear/outperson', authCheck, getDocByYearOutPerson);
router.get('/summary/docbyweek/outperson', authCheck, getDocByWeekOutPerson);



//@route    InMoney
router.get('/summary/docbyday/inmoney', authCheck, getDocByDayInMoney);
router.get('/summary/docbymonth/inmoney', authCheck, getDocByMonthInMoney);
router.get('/summary/docbyyear/inmoney', authCheck, getDocByYearInMoney);
router.get('/summary/docbyweek/inmoney', authCheck, getDocByWeekInMoney);
//@route    OutMoney
router.get('/summary/docbyday/outmoney', authCheck, getDocByDayOutMoney);
router.get('/summary/docbymonth/outmoney', authCheck, getDocByMonthOutMoney);
router.get('/summary/docbyyear/outmoney', authCheck, getDocByYearOutMoney);
router.get('/summary/docbyweek/outmoney', authCheck, getDocByWeekOutMoney);



//@route    InObj
router.get('/summary/docbyday/inobj', authCheck, getDocByDayInObj);
router.get('/summary/docbymonth/inobj', authCheck, getDocByMonthInObj);
router.get('/summary/docbyyear/inobj', authCheck, getDocByYearInObj);
router.get('/summary/docbyweek/inobj', authCheck, getDocByWeekInObj);
//@route    OutObj
router.get('/summary/docbyday/outobj', authCheck, getDocByDayOutObj);
router.get('/summary/docbymonth/outobj', authCheck, getDocByMonthOutObj);
router.get('/summary/docbyyear/outobj', authCheck, getDocByYearOutObj);
router.get('/summary/docbyweek/outobj', authCheck, getDocByWeekOutObj);



//@route    InRes
router.get('/summary/docbyday/inres', authCheck, getDocByDayInRes);
router.get('/summary/docbymonth/inres', authCheck, getDocByMonthInRes);
router.get('/summary/docbyyear/inres', authCheck, getDocByYearInRes);
router.get('/summary/docbyweek/inres', authCheck, getDocByWeekInRes);
//@route    OutRes
router.get('/summary/docbyday/outres', authCheck, getDocByDayOutRes);
router.get('/summary/docbymonth/outres', authCheck, getDocByMonthOutRes);
router.get('/summary/docbyyear/outres', authCheck, getDocByYearOutRes);
router.get('/summary/docbyweek/outres', authCheck, getDocByWeekOutRes);


//@route    InPlan
router.get('/summary/docbyday/inplan', authCheck, getDocByDayInPlan);
router.get('/summary/docbymonth/inplan', authCheck, getDocByMonthInPlan);
router.get('/summary/docbyyear/inplan', authCheck, getDocByYearInPlan);
router.get('/summary/docbyweek/inplan', authCheck, getDocByWeekInPlan);

//@route    OutPlan
router.get('/summary/docbyday/outplan', authCheck, getDocByDayOutPlan);
router.get('/summary/docbymonth/outplan', authCheck, getDocByMonthOutPlan);
router.get('/summary/docbyyear/outplan', authCheck, getDocByYearOutPlan);
router.get('/summary/docbyweek/outplan', authCheck, getDocByWeekOutPlan);


//@route    InReso
router.get('/summary/docbyday/inreso', authCheck, getDocByDayInReso);
router.get('/summary/docbymonth/inreso', authCheck, getDocByMonthInReso);
router.get('/summary/docbyyear/inreso', authCheck, getDocByYearInReso);
router.get('/summary/docbyweek/inreso', authCheck, getDocByWeekInReso);
//@route    OutReso
router.get('/summary/docbyday/outreso', authCheck, getDocByDayOutReso);
router.get('/summary/docbymonth/outreso', authCheck, getDocByMonthOutReso);
router.get('/summary/docbyyear/outreso', authCheck, getDocByYearOutReso);
router.get('/summary/docbyweek/outreso', authCheck, getDocByWeekOutReso);

//@route    InEdu
router.get('/summary/docbyday/inedu', authCheck, getDocByDayInEdu);
router.get('/summary/docbymonth/inedu', authCheck, getDocByMonthInEdu);
router.get('/summary/docbyyear/inedu', authCheck, getDocByYearInEdu);
router.get('/summary/docbyweek/inedu', authCheck, getDocByWeekInEdu);
//@route    OutEdu
router.get('/summary/docbyday/outedu', authCheck, getDocByDayOutEdu);
router.get('/summary/docbymonth/outedu', authCheck, getDocByMonthOutEdu);
router.get('/summary/docbyyear/outedu', authCheck, getDocByYearOutEdu);
router.get('/summary/docbyweek/outedu', authCheck, getDocByWeekOutEdu);


//@route    InPlace
router.get('/summary/docbyday/inplace', authCheck, getDocByDayInPlace);
router.get('/summary/docbymonth/inplace', authCheck, getDocByMonthInPlace);
router.get('/summary/docbyyear/inplace', authCheck, getDocByYearInPlace);
router.get('/summary/docbyweek/inplace', authCheck, getDocByWeekInPlace);
//@route    OutPlace
router.get('/summary/docbyday/outplace', authCheck, getDocByDayOutPlace);
router.get('/summary/docbymonth/outplace', authCheck, getDocByMonthOutPlace);
router.get('/summary/docbyyear/outplace', authCheck, getDocByYearOutPlace);
router.get('/summary/docbyweek/outplace', authCheck, getDocByWeekOutPlace);

//@route    InSubj
router.get('/summary/docbyday/insubj', authCheck, getDocByDayInSubj);
router.get('/summary/docbymonth/insubj', authCheck, getDocByMonthInSubj);
router.get('/summary/docbyyear/insubj', authCheck, getDocByYearInSubj);
router.get('/summary/docbyweek/insubj', authCheck, getDocByWeekInSubj);
//@route    OutSubj
router.get('/summary/docbyday/outsubj', authCheck, getDocByDayOutSubj);
router.get('/summary/docbymonth/outsubj', authCheck, getDocByMonthOutSubj);
router.get('/summary/docbyyear/outsubj', authCheck, getDocByYearOutSubj);
router.get('/summary/docbyweek/outsubj', authCheck, getDocByWeekOutSubj);

//@route    InAle
router.get('/summary/docbyday/inale', authCheck, getDocByDayInAle);
router.get('/summary/docbymonth/inale', authCheck, getDocByMonthInAle);
router.get('/summary/docbyyear/inale', authCheck, getDocByYearInAle);
router.get('/summary/docbyweek/inale', authCheck, getDocByWeekInAle);
//@route    OutAle
router.get('/summary/docbyday/outale', authCheck, getDocByDayOutAle);
router.get('/summary/docbymonth/outale', authCheck, getDocByMonthOutAle);
router.get('/summary/docbyyear/outale', authCheck, getDocByYearOutAle);
router.get('/summary/docbyweek/outale', authCheck, getDocByWeekOutAle);

//@route    InRul
router.get('/summary/docbyday/inrul', authCheck, getDocByDayInRul);
router.get('/summary/docbymonth/inrul', authCheck, getDocByMonthInRul);
router.get('/summary/docbyyear/inrul', authCheck, getDocByYearInRul);
router.get('/summary/docbyweek/inrul', authCheck, getDocByWeekInRul);
//@route    OutRul
router.get('/summary/docbyday/outrul', authCheck, getDocByDayOutRul);
router.get('/summary/docbymonth/outrul', authCheck, getDocByMonthOutRul);
router.get('/summary/docbyyear/outrul', authCheck, getDocByYearOutRul);
router.get('/summary/docbyweek/outrul', authCheck, getDocByWeekOutRul);











module.exports = router;