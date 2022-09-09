import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { categorylistdata } from '../store/CategoryListSlice';

import { useAppDispatch, useAppSelector } from '../store/Hooks';
import { subcategoryvalidservice } from '../store/SubCategorySlice';


const Subcategory = () => {
    const dispatch=useAppDispatch()
    const {catSlug}=useParams()
    // console.log("catSlug",catSlug)
    const [catId, setCatId] = useState<string>();
  
    const[categoryname,setCategoryname]=useState<string>()
    // For category
    const catageoryList=useAppSelector((state)=>state.categoryList)
    // for subcategory
    const getvalidservicecategory=useAppSelector((state)=>state.validseticecatgory)
    
    // for catergory list
    useEffect(() => {
        dispatch(categorylistdata())
    }, [dispatch])

    useEffect(() => {
        setCatId("");
        setCategoryname("")
    }, [catSlug])

      // For Sub category id
      if (!catId) {
        catageoryList.forEach((element) => {
          if (element.slug == catSlug) {
            setCatId(element._id);
            setCategoryname(element.name);
          }
        });
      }
      useEffect(() => {
        if (catId) {
            dispatch(subcategoryvalidservice(catId))
        }
    }, [dispatch, catId])

   const categoryItemId = (categoryID: string) => {
        subcategoryvalidservice(categoryID)
    }

  return (
    <div> 
 <section className="category-block">
    <div className="container">
      <div className="categories">
        <ul>
          {catageoryList
            ? catageoryList?.map((items, index) => {
                return (
                  <li key={index}  
                   onClick={() => { categoryItemId(items._id) }}>
                    <Link to={`/category/${items.slug}`} className="">
                      {items.name}
                    </Link>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
      <div className="particular-category">
        <h1>{categoryname}</h1>
        {getvalidservicecategory
          ? getvalidservicecategory?.map((items, index) => {
              return (
                <div className="services-block" key={index} >
                  <div className="service-wrap">
                    <Link
                    to=
                    {`/category/particular/${catSlug}/${items.slug}`}
                    >
                      <div className="img-wrap">
                        <img
                          src={items.path + items.subcategoryBanner}
                          alt="service"
                        />
                      </div>
                      <div className="service-info">{items.name}</div>
                    </Link>
                  </div>
                </div>
              );
            })
          : null} 
      </div>
    </div>
  </section>
  </div>
  )
}

export default Subcategory