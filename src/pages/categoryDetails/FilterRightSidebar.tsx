import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import ServiceCard from '../../components/serviceDetails/ServiceCard';
import { categorylistdata } from '../../store/CategoryListSlice';
import { getservicedata } from '../../store/GetServiceSlice';
import { useAppDispatch, useAppSelector } from '../../store/Hooks';
import { subcategoryvalidservice } from '../../store/SubCategorySlice';

const FilterRightSidebar = () => {
  const dispatch=useAppDispatch()
  const {catSlug,subCatSlug}=useParams()
  const [catid, setCatid] = useState<string>();
  const [subcatid, setSubcatid] = useState<string>();
  const [subcatname, setSubcatname] = useState<string>();
  const catageoryList=useAppSelector((state)=>state.categoryList)
  const servicesubcategory= useAppSelector((state) => state.servicesubcategory)
// console.log("servicesubcategory",servicesubcategory)
  // for subcategory
  const getvalidservicecategory=useAppSelector((state)=>state.validseticecatgory)

  useEffect(() => {
  dispatch(categorylistdata())
  }, [dispatch]);

  useEffect(() => {
    if (!catid) {
      catageoryList.forEach((element) => {
        if (catSlug == element.slug) {
          setCatid(element._id);
        }
      });
    }
  }, [catageoryList]);

  useEffect(() => {
    if (catid) {
      dispatch(subcategoryvalidservice(catid))
    }
  }, [dispatch, catid]);

if(!subcatid){
  getvalidservicecategory.forEach((elements)=>{
    // console.log("elements",elements)
    if(subCatSlug ==elements.slug){
      setSubcatid(elements._id)
      setSubcatname(elements.name)
    }
  })
}

useEffect (()=>{
  if(catid && subcatid){
    dispatch(getservicedata({catid,subcatid}))
  }
},[dispatch,catid,subcatid])

// Sorting price
const options = [
  { value: "1", label: "Price: Low to High" },
  { value: "-1", label: "Price: High to Low" },
];

const sortingPrice=({name,e}:any)=>{

  let newState=[];
  

}
  return (
    <div>
      <div
        className="right-block"
        style={{ width: "150%", padding: "0 60px 0 26px" }}
         >
        <div className="head-wrap">
          <h1>{subcatname}</h1>
          <div className="sort-select">
            <label>Sort by</label>
            <div className="sort-wrap">
                  <Select
                    placeholder={"Select sort"}
                    classNamePrefix="react-select"
                    className="react-select-container"
                    options={options}
                    onChange={(e) => sortingPrice(e)}
                  />
                </div>
          </div>
        </div>
      
                     
       
      </div>
      {servicesubcategory.length && servicesubcategory?.map((data,index)=>{
          return( 
            <ServiceCard item={data} key={index}/>
          )
        })}
    </div>
  )
}

export default FilterRightSidebar
