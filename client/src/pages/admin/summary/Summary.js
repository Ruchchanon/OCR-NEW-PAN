import React, { useState, useEffect } from 'react';
import SearchBox from '../../../components/UserComponent/SearchBox/SearchBox';
import { ConfigProvider, DatePicker, Button, Table, Radio, Image, Tag, Space, Pagination } from 'antd';
import locale from 'antd/lib/locale/th_TH';
import { AiOutlineVerticalAlignBottom} from "react-icons/ai";
import DownloadLink from "react-download-link";
import { getInSubj } from '../../../functions/insubj';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { PlusOutlined } from '@ant-design/icons';
import '../upload1.css';
import { Link } from 'react-router-dom';
import { getDocByMonthInPerson, getDocByDayInPerson, getDocByYearInPerson, getDocByWeekInPerson, 
    getDocByDayOutPerson, getDocByMonthOutPerson, getDocByYearOutPerson, getDocByWeekOutPerson } from '../../../functions/summary';

import { getDocByMonthInMoney, getDocByDayInMoney, getDocByYearInMoney, getDocByWeekInMoney, 
    getDocByDayOutMoney, getDocByMonthOutMoney, getDocByYearOutMoney, getDocByWeekOutMoney } from '../../../functions/summary';

import { getDocByMonthInObj, getDocByDayInObj, getDocByYearInObj, getDocByWeekInObj, 
    getDocByDayOutObj, getDocByMonthOutObj, getDocByYearOutObj, getDocByWeekOutObj } from '../../../functions/summary';

import { getDocByMonthInRes, getDocByDayInRes, getDocByYearInRes, getDocByWeekInRes,
    getDocByDayOutRes, getDocByMonthOutRes, getDocByYearOutRes, getDocByWeekOutRes } from '../../../functions/summary';

import { getDocByMonthInPlan, getDocByDayInPlan, getDocByYearInPlan, getDocByWeekInPlan,
    getDocByDayOutPlan, getDocByMonthOutPlan, getDocByYearOutPlan, getDocByWeekOutPlan } from '../../../functions/summary';    

import { getDocByMonthInReso, getDocByDayInReso, getDocByYearInReso, getDocByWeekInReso,
    getDocByDayOutReso, getDocByMonthOutReso, getDocByYearOutReso, getDocByWeekOutReso } from '../../../functions/summary';

import { getDocByMonthInEdu, getDocByDayInEdu, getDocByYearInEdu, getDocByWeekInEdu, 
    getDocByDayOutEdu, getDocByMonthOutEdu, getDocByYearOutEdu, getDocByWeekOutEdu } from '../../../functions/summary';

import { getDocByMonthInPlace, getDocByDayInPlace, getDocByYearInPlace, getDocByWeekInPlace,
    getDocByDayOutPlace, getDocByMonthOutPlace, getDocByYearOutPlace, getDocByWeekOutPlace } from '../../../functions/summary';

import { getDocByMonthInSubj, getDocByDayInSubj, getDocByYearInSubj, getDocByWeekInSubj, 
    getDocByDayOutSubj, getDocByMonthOutSubj, getDocByYearOutSubj, getDocByWeekOutSubj } from '../../../functions/summary';

import { getDocByMonthInAle, getDocByDayInAle, getDocByYearInAle, getDocByWeekInAle, 
    getDocByDayOutAle, getDocByMonthOutAle, getDocByYearOutAle, getDocByWeekOutAle } from '../../../functions/summary';

import { getDocByMonthInRul, getDocByDayInRul, getDocByYearInRul, getDocByWeekInRul,
    getDocByDayOutRul, getDocByMonthOutRul, getDocByYearOutRul, getDocByWeekOutRul } from '../../../functions/summary';

const Summary = () => {
    const [searchText, setSearchText] = useState('');
    const [searchNo, setSearchNo] = useState('');
    const [searchFrom, setSearchFrom] = useState('');
    const { RangePicker } = DatePicker;
    const [hackValue, setHackValue] = useState();
    const [dates, setDates] = useState([]);
    const [value, setValue] = useState();
    const [person, setPerson] = useState([]);
    const { user } = useSelector((state) => ({ ...state }))
    const { Column, ColumnGroup } = Table;

    //  InPerson
    const [ docbydayinperson, setDocbydayinperson ] = useState(0);
    const [ docbymonthinperson, setDocbymonthinperson ] = useState(0);
    const [ docbyyearinperson, setDocbyyearinperson ] = useState(0);
    const [ docbyweekinperson, setDocbyweekinperson ] = useState(0);
    //  OutPerson
    const [ docbydayoutperson, setDocbydayoutperson ] = useState(0);
    const [ docbymonthoutperson, setDocbymonthoutperson ] = useState(0);
    const [ docbyyearoutperson, setDocbyyearoutperson ] = useState(0);
    const [ docbyweekoutperson, setDocbyweekoutperson ] = useState(0);
    //  InMoney
    const [ docbydayinmoney, setDocbydayinmoney ] = useState(0);
    const [ docbymonthinmoney, setDocbymonthinmoney ] = useState(0);
    const [ docbyyearinmoney, setDocbyyearinmoney ] = useState(0);
    const [ docbyweekinmoney, setDocbyweekinmoney ] = useState(0);
    //  OutMoney
    const [ docbydayoutmoney, setDocbydayoutmoney ] = useState(0);
    const [ docbymonthoutmoney, setDocbymonthoutmoney ] = useState(0);
    const [ docbyyearoutmoney, setDocbyyearoutmoney ] = useState(0);
    const [ docbyweekoutmoney, setDocbyweekoutmoney ] = useState(0);
    //  InObj
    const [ docbydayinobj, setDocbydayinobj ] = useState(0);
    const [ docbymonthinobj, setDocbymonthinobj ] = useState(0);
    const [ docbyyearinobj, setDocbyyearinobj ] = useState(0);
    const [ docbyweekinobj, setDocbyweekinobj ] = useState(0);
    //  OutObj
    const [ docbydayoutobj, setDocbydayoutobj ] = useState(0);
    const [ docbymonthoutobj, setDocbymonthoutobj ] = useState(0);
    const [ docbyyearoutobj, setDocbyyearoutobj] = useState(0);
    const [ docbyweekoutobj, setDocbyweekoutobj] = useState(0);
    //  InRes
    const [ docbydayinres, setDocbydayinres ] = useState(0);
    const [ docbymonthinres, setDocbymonthinres ] = useState(0);
    const [ docbyyearinres, setDocbyyearinres ] = useState(0);
    const [ docbyweekinres, setDocbyweekinres ] = useState(0);
    //  OutRes
    const [ docbydayoutres, setDocbydayoutres ] = useState(0);
    const [ docbymonthoutres, setDocbymonthoutres ] = useState(0);
    const [ docbyyearoutres, setDocbyyearoutres] = useState(0);
    const [ docbyweekoutres, setDocbyweekoutres] = useState(0);
    //  InPlan
    const [ docbydayinplan, setDocbydayinplan ] = useState(0);
    const [ docbymonthinplan, setDocbymonthinplan ] = useState(0);
    const [ docbyyearinplan, setDocbyyearinplan ] = useState(0);
    const [ docbyweekinplan, setDocbyweekinplan ] = useState(0);
    //  OutPlan
    const [ docbydayoutplan, setDocbydayoutplan ] = useState(0);
    const [ docbymonthoutplan, setDocbymonthoutplan ] = useState(0);
    const [ docbyyearoutplan, setDocbyyearoutplan] = useState(0);
    const [ docbyweekoutplan, setDocbyweekoutplan] = useState(0);
    //  InReso
    const [ docbydayinreso, setDocbydayinreso ] = useState(0);
    const [ docbymonthinreso, setDocbymonthinreso ] = useState(0);
    const [ docbyyearinreso, setDocbyyearinreso ] = useState(0);
    const [ docbyweekinreso, setDocbyweekinreso ] = useState(0);
    //  OutReso
    const [ docbydayoutreso, setDocbydayoutreso ] = useState(0);
    const [ docbymonthoutreso, setDocbymonthoutreso ] = useState(0);
    const [ docbyyearoutreso, setDocbyyearoutreso ] = useState(0);
    const [ docbyweekoutreso, setDocbyweekoutreso ] = useState(0);
    //  InEdu
    const [ docbydayinedu, setDocbydayinedu ] = useState(0);
    const [ docbymonthinedu, setDocbymonthinedu ] = useState(0);
    const [ docbyyearinedu, setDocbyyearinedu ] = useState(0);
    const [ docbyweekinedu, setDocbyweekinedu ] = useState(0);
    //  OutEdu
    const [ docbydayoutedu, setDocbydayoutedu ] = useState(0);
    const [ docbymonthoutedu, setDocbymonthoutedu ] = useState(0);
    const [ docbyyearoutedu, setDocbyyearoutedu ] = useState(0);
    const [ docbyweekoutedu, setDocbyweekoutedu ] = useState(0);
    //  InPlace
    const [ docbydayinplace, setDocbydayinplace ] = useState(0);
    const [ docbymonthinplace, setDocbymonthinplace ] = useState(0);
    const [ docbyyearinplace, setDocbyyearinplace ] = useState(0);
    const [ docbyweekinplace, setDocbyweekinplace ] = useState(0);
    //  OutPlace
    const [ docbydayoutplace, setDocbydayoutplace ] = useState(0);
    const [ docbymonthoutplace, setDocbymonthoutplace ] = useState(0);
    const [ docbyyearoutplace, setDocbyyearoutplace ] = useState(0);
    const [ docbyweekoutplace, setDocbyweekoutplace ] = useState(0);
    //  InSubj
    const [ docbydayinsubj, setDocbydayinsubj ] = useState(0);
    const [ docbymonthinsubj, setDocbymonthinsubj ] = useState(0);
    const [ docbyyearinsubj, setDocbyyearinsubj] = useState(0);
    const [ docbyweekinsubj, setDocbyweekinsubj] = useState(0);
    //  OutSubj
    const [ docbydayoutsubj, setDocbydayoutsubj ] = useState(0);
    const [ docbymonthoutsubj, setDocbymonthoutsubj ] = useState(0);
    const [ docbyyearoutsubj, setDocbyyearoutsubj ] = useState(0);
    const [ docbyweekoutsubj, setDocbyweekoutsubj ] = useState(0);
    //  InAle
    const [ docbydayinale, setDocbydayinale ] = useState(0);
    const [ docbymonthinale, setDocbymonthinale ] = useState(0);
    const [ docbyyearinale, setDocbyyearinale] = useState(0);
    const [ docbyweekinale, setDocbyweekinale ] = useState(0);
    //  OutAle
    const [ docbydayoutale, setDocbydayoutale ] = useState(0);
    const [ docbymonthoutale, setDocbymonthoutale ] = useState(0);
    const [ docbyyearoutale, setDocbyyearoutale ] = useState(0);
    const [ docbyweekoutale, setDocbyweekoutale ] = useState(0);
    //  InRul
    const [ docbydayinrul, setDocbydayinrul ] = useState(0);
    const [ docbymonthinrul, setDocbymonthinrul ] = useState(0);
    const [ docbyyearinrul, setDocbyyearinrul ] = useState(0);
    const [ docbyweekinrul, setDocbyweekinrul ] = useState(0);
    //  OutRul
    const [ docbydayoutrul, setDocbydayoutrul ] = useState(0);
    const [ docbymonthoutrul, setDocbymonthoutrul ] = useState(0);
    const [ docbyyearoutrul, setDocbyyearoutrul ] = useState(0);
    const [ docbyweekoutrul, setDocbyweekoutrul ] = useState(0);
    

    

    useEffect(() => {
        loadPerson(user.token);
        
        getValueOfDocumentSummary();

      }, [])
    






      const loadPerson = (authtoken) => {
        getInSubj(authtoken)
            .then((res) => {
                setPerson(res.data)
                console.log(res.data)
            }).catch((err) => {
                toast.error(err)
                console.log(err)
            })
    }



    const disabledDate = current => {
        if (!dates || dates.length === 0) {
          return false;
        }
        const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
        const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
        return tooEarly || tooLate;
      };


      const onOpenChange = open => {
        if (open) {
          setHackValue([]);
          setDates([]);
        } else {
          setHackValue(undefined);
        }
      };

      const getValueOfDocumentSummary = () => {

          //  InPerson
          getDocByDayInPerson(user.token)
              .then((res) => {
                
                  setDocbydayinperson(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthInPerson(user.token)
              .then((res) => {
                  
                  setDocbymonthinperson(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearInPerson(user.token)
              .then((res) => {

                  setDocbyyearinperson(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekInPerson(user.token)
              .then((res) => {

                  setDocbyweekinperson(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
    
    
          //  OutPerson
          getDocByDayOutPerson(user.token)
              .then((res) => {

                  setDocbydayoutperson(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthOutPerson(user.token)
              .then((res) => {

                  setDocbymonthoutperson(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
      
          getDocByYearOutPerson(user.token)
              .then((res) => {

                  setDocbyyearoutperson(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekOutPerson(user.token)
              .then((res) => {

                  setDocbyweekoutperson(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })

          //  InMoney
          getDocByDayInMoney(user.token)
              .then((res) => {
                
                  setDocbydayinmoney(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthInMoney(user.token)
              .then((res) => {
                  
                  setDocbymonthinmoney(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearInMoney(user.token)
              .then((res) => {

                  setDocbyyearinmoney(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekInMoney(user.token)
              .then((res) => {

                  setDocbyweekinmoney(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          
          //  OutMoney
          getDocByDayOutMoney(user.token)
          .then((res) => {

                  setDocbydayoutmoney(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthOutMoney(user.token)
              .then((res) => {

                  setDocbymonthoutmoney(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
      
          getDocByYearOutMoney(user.token)
              .then((res) => {

                  setDocbyyearoutmoney(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekOutMoney(user.token)
              .then((res) => {

                  setDocbyweekoutmoney(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })


          //  InObj
          getDocByDayInObj(user.token)
              .then((res) => {
                
                  setDocbydayinobj(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthInObj(user.token)
              .then((res) => {
                  
                  setDocbymonthinobj(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearInObj(user.token)
              .then((res) => {

                  setDocbyyearinobj(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekInObj(user.token)
              .then((res) => {

                  setDocbyweekinobj(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          //  OutObj
          getDocByDayOutObj(user.token)
              .then((res) => {
                
                  setDocbydayoutobj(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthOutObj(user.token)
              .then((res) => {
                  
                  setDocbymonthoutobj(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearOutObj(user.token)
              .then((res) => {

                  setDocbyyearoutobj(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekOutObj(user.token)
              .then((res) => {

                  setDocbyweekoutobj(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })


          //  InRes
          getDocByDayInRes(user.token)
              .then((res) => {
                
                  setDocbydayinres(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthInRes(user.token)
              .then((res) => {
                  
                  setDocbymonthinres(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearInRes(user.token)
              .then((res) => {

                  setDocbyyearinres(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekInRes(user.token)
              .then((res) => {

                  setDocbyweekinres(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          //  OutRes
          getDocByDayOutRes(user.token)
              .then((res) => {
                
                  setDocbydayoutres(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthOutRes(user.token)
              .then((res) => {
                  
                  setDocbymonthoutres(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearOutRes(user.token)
              .then((res) => {

                  setDocbyyearoutres(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekOutRes(user.token)
              .then((res) => {

                  setDocbyweekoutres(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })


          //  InPlan
          getDocByDayInPlan(user.token)
              .then((res) => {
                
                  setDocbydayinplan(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthInPlan(user.token)
              .then((res) => {
                  
                  setDocbymonthinplan(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearInPlan(user.token)
              .then((res) => {

                  setDocbyyearinplan(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekInPlan(user.token)
              .then((res) => {

                  setDocbyweekinplan(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          //  OutPlan
          getDocByDayOutPlan(user.token)
              .then((res) => {
                
                  setDocbydayoutplan(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthOutPlan(user.token)
              .then((res) => {
                  
                  setDocbymonthoutplan(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearOutPlan(user.token)
              .then((res) => {

                  setDocbyyearoutplan(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekOutPlan(user.token)
              .then((res) => {

                  setDocbyweekoutplan(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })

          //  InReso
          getDocByDayInReso(user.token)
              .then((res) => {
                
                  setDocbydayinreso(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthInReso(user.token)
              .then((res) => {
                  
                  setDocbymonthinreso(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearInReso(user.token)
              .then((res) => {

                  setDocbyyearinreso(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekInReso(user.token)
              .then((res) => {

                  setDocbyweekinreso(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          //  OutReso
          getDocByDayOutReso(user.token)
              .then((res) => {
                
                  setDocbydayoutreso(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthOutReso(user.token)
              .then((res) => {
                  
                  setDocbymonthoutreso(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearOutReso(user.token)
              .then((res) => {

                  setDocbyyearoutreso(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekOutReso(user.token)
              .then((res) => {

                  setDocbyweekoutreso(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })

          //  InEdu
          getDocByDayInEdu(user.token)
              .then((res) => {
                
                  setDocbydayinedu(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthInEdu(user.token)
              .then((res) => {
                  
                  setDocbymonthinedu(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearInEdu(user.token)
              .then((res) => {

                  setDocbyyearinedu(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekInEdu(user.token)
              .then((res) => {

                  setDocbyweekinedu(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          //  OutEdu
          getDocByDayOutEdu(user.token)
              .then((res) => {
                
                  setDocbydayoutedu(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthOutEdu(user.token)
              .then((res) => {
                  
                  setDocbymonthoutedu(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearOutEdu(user.token)
              .then((res) => {

                  setDocbyyearoutedu(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekOutEdu(user.token)
              .then((res) => {

                  setDocbyweekoutedu(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })



          //  InPlace
          getDocByDayInPlace(user.token)
              .then((res) => {
                
                  setDocbydayinplace(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthInPlace(user.token)
              .then((res) => {
                  
                  setDocbymonthinplace(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearInPlace(user.token)
              .then((res) => {

                  setDocbyyearinplace(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekInPlace(user.token)
              .then((res) => {

                  setDocbyweekinplace(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          //  OutPlace
          getDocByDayOutPlace(user.token)
              .then((res) => {
                
                  setDocbydayoutplace(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthOutPlace(user.token)
              .then((res) => {
                  
                  setDocbymonthoutplace(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearOutPlace(user.token)
              .then((res) => {

                  setDocbyyearoutplace(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekOutPlace(user.token)
              .then((res) => {

                  setDocbyweekoutplace(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })               

          //  InSubj
          getDocByDayInSubj(user.token)
              .then((res) => {
                
                  setDocbydayinsubj(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthInSubj(user.token)
              .then((res) => {
                  
                  setDocbymonthinsubj(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearInSubj(user.token)
              .then((res) => {

                  setDocbyyearinsubj(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          //  OutSubj
          getDocByDayOutSubj(user.token)
              .then((res) => {
                
                  setDocbydayoutsubj(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthOutSubj(user.token)
              .then((res) => {
                  
                  setDocbymonthoutsubj(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearOutSubj(user.token)
              .then((res) => {

                  setDocbyyearoutsubj(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })      
              
          //  InAle
          getDocByDayInAle(user.token)
              .then((res) => {
                
                  setDocbydayinale(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthInAle(user.token)
              .then((res) => {
                  
                  setDocbymonthinale(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearInAle(user.token)
              .then((res) => {

                  setDocbyyearinale(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekInAle(user.token)
              .then((res) => {
                  
                    setDocbyweekinale(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          //  OutAle
          getDocByDayOutAle(user.token)
              .then((res) => {
                
                  setDocbydayoutale(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthOutAle(user.token)
              .then((res) => {
                  
                  setDocbymonthoutale(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearOutAle(user.token)
              .then((res) => {

                  setDocbyyearoutale(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
           getDocByWeekOutAle(user.token)
              .then((res) => {

                  setDocbyweekoutale(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
    


          //  InRul
          getDocByDayInRul(user.token)
              .then((res) => {
                
                  setDocbydayinrul(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthInRul(user.token)
              .then((res) => {
                  
                  setDocbymonthinrul(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearInRul(user.token)
              .then((res) => {

                  setDocbyyearinrul(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekInRul(user.token)
              .then((res) => {

                  setDocbyweekinrul(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          //  OutRul
          getDocByDayOutRul(user.token)
              .then((res) => {
                
                  setDocbydayoutrul(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthOutRul(user.token)
              .then((res) => {
                  
                  setDocbymonthoutrul(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearOutRul(user.token)
              .then((res) => {

                  setDocbyyearoutrul(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })    
          getDocByWeekOutRul(user.token)
              .then((res) => {

                  setDocbyweekoutrul(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })    



              
    
      
      }








      const data = [
        {
          key: '1',
          name: 'ด้านบริหารและธุรการ(ทั่วไป)',
          countIn1: docbydayinperson,
          countIn7: docbyweekinperson,
          countIn30: docbymonthinperson,
          countIn365: docbyyearinperson,
          countOut1: docbydayoutperson,
          countOut7: docbyweekoutperson,
          countOut30: docbymonthoutperson,
          countOut365: docbyyearoutperson,
          
          
          
        },
        {
          key: '2',
          name: 'ด้านการเงิน',
          countIn1: docbydayinmoney,
          countIn7: docbyweekinmoney,
          countIn30: docbymonthinmoney,
          countIn365: docbyyearinmoney,
          countOut1: docbydayoutmoney,
          countOut7: docbyweekoutmoney,
          countOut30: docbymonthoutmoney,
          countOut365: docbyyearoutmoney,
          
          
        },
        {
          key: '3',
          name: 'ด้านพัสดุ',
          countIn1: docbydayinobj,
          countIn7: docbyweekinobj,
          countIn30: docbymonthinobj,
          countIn365: docbyyearinobj,
          countOut1: docbydayoutobj,
          countOut7: docbyweekoutobj,
          countOut30: docbymonthoutobj,
          countOut365: docbyyearoutobj,
          
          
        },
        {
            key: '4',
            name: 'ด้านวิจัย',
            countIn1: docbydayinres,
            countIn7: docbyweekinres,
            countIn30: docbymonthinres,
            countIn365: docbyyearinres,
            countOut1: docbydayoutres,
            countOut7: docbyweekoutres,
            countOut30: docbymonthoutres,
            countOut365: docbyyearoutres,
            
            
          },
        {
          key: '5',
          name: 'ด้านแผนยุทธศาสตร์',
          countIn1: docbydayinplan,
          countIn7: docbyweekinplan,
          countIn30: docbymonthinplan,
          countIn365: docbyyearinplan,
          countOut1: docbydayoutplan,
          countOut7: docbyweekoutplan,
          countOut30: docbymonthoutplan,
          countOut365: docbyyearoutplan,
          
          
        },
        {
            key: '6',
            name: 'ด้านทรัพยากรบุคคล',
            countIn1: docbydayinreso,
            countIn7: docbyweekinreso,
            countIn30: docbymonthinreso,
            countIn365: docbyyearinreso,
            countOut1: docbydayoutreso,
            countOut7: docbyweekoutreso,
            countOut30: docbymonthoutreso,
            countOut365: docbyyearoutreso,
            
            
        },
        {
            key: '7',
            name: 'ด้านการบริการการศึกษา',
            countIn1: docbydayinedu,
            countIn7: docbyweekinedu,
            countIn30: docbymonthinedu,
            countIn365: docbyyearinedu,
            countOut1: docbydayoutedu,
            countOut7: docbyweekoutedu,
            countOut30: docbymonthoutedu,
            countOut365: docbyyearoutedu,
            
            
        },
        {
            key: '8',
            name: 'ด้านอาคารสถานที่',
            countIn1: docbydayinplace,
            countIn7: docbyweekinplace,
            countIn30: docbymonthinplace,
            countIn365: docbyyearinplace,
            countOut1: docbydayoutplace,
            countOut7: docbyweekoutplace,
            countOut30: docbymonthoutplace,
            countOut365: docbyyearoutplace,
            
            
        },
        {
            key: '9',
            name: 'สาขาวิชาต่างๆ',
            countIn1: docbydayinsubj,
            countIn7: docbyweekinsubj,
            countIn30: docbymonthinsubj,
            countIn365: docbyyearinsubj,
            countOut1: docbydayoutsubj,
            countOut7: docbyweekoutsubj,
            countOut30: docbymonthoutsubj,
            countOut365: docbyyearoutsubj,
            
            
        },
        {
            key: '10',
            name: 'คำสั่งประกาศ',
            countIn1: docbydayinale,
            countIn7: docbyweekinale,
            countIn30: docbymonthinale,
            countIn365: docbyyearinale,
            countOut1: docbydayoutale,
            countOut7: docbyweekoutale,
            countOut30: docbymonthoutale,
            countOut365: docbyyearoutale,
       
        },
        {
            key: '11',
            name: 'ระเบียบข้อบังคับ',
            countIn1: docbydayinrul,
            countIn7: docbyweekinrul,
            countIn30: docbymonthinrul,
            countIn365: docbyyearinrul,
            countOut1: docbydayoutrul,
            countOut7: docbyweekoutrul,
            countOut30: docbymonthoutrul,
            countOut365: docbyyearoutrul,
            
            
        },
      ];

      

  return <div>
    <Table dataSource={data} size="small" pagination={false}>
    
    <Column title="หมวดหมู่" dataIndex="name" key="name" />
    <ColumnGroup title="วันนี้">
      <Column title="รับเข้า" dataIndex="countIn1" key="countIn1" />
      <Column title="ส่งออก" dataIndex="countOut1" key="countOut1" />
    </ColumnGroup>

    <ColumnGroup title="สัปดาห์นี้">
      <Column title="รับเข้า" dataIndex="countIn7" key="countIn7" />
      <Column title="ส่งออก" dataIndex="countOut7" key="countOut7" />
    </ColumnGroup>

    <ColumnGroup title="เดือนนี้">
      <Column title="รับเข้า" dataIndex="countIn30" key="countIn30" />
      <Column title="ส่งออก" dataIndex="countOut30" key="countOut30" />
    </ColumnGroup>

    <ColumnGroup title="ปีนี้">
      <Column title="รับเข้า" dataIndex="countIn365" key="countIn365" />
      <Column title="ส่งออก" dataIndex="countOut365" key="countOut365" />
    </ColumnGroup>

  
  </Table>
        
      
        
      </div>;
};

export default Summary