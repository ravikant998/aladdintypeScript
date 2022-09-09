import React,{useEffect} from 'react'
import { useDispatch} from 'react-redux';
import { AppDispatch } from '../../store';
import { homepage } from '../../store/HomepageSlice'
import BannerList from './Banner';
import Treading from './Treading'
import OurService from './OurService';

const Home = () => {
 const dispatch:AppDispatch=useDispatch();
  useEffect(() => {
    dispatch(homepage())
  }, [])
  return (
    <div>
      <BannerList/>
      <Treading/>
      <OurService/>
    </div>
  )
}

export default Home
