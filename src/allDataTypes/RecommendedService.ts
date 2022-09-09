
export type RecommendedDataType=
    [
    {
      _id:string ,
      sellerId:string ,
      title:string ,
      categoryId:string,
      subcategoryId:string ,
      fixedPrice: boolean,
      forTime:string,
      description:string,
      remoteService: boolean,
      addressId:string ,
      gallery:Gallery[],
      serviceCover: string,
      sellerData: SellerData[],
      addressData: AddressData[],
      wishlist: boolean,
      totalReview: 0,
      averageRating: null,
      serviceId:string ,
      serviceCreatedDate:string ,
      currency:string ,
      minPrice: 0,
      maxPrice: 0,
      path:string ,
      categoryName:string ,
      subcategoryName: string
    }
  ]

  export type Gallery ={
    description: string,
    media:string ,
    fileType: string
  }
  export type SellerData={
    _id: string,
    firstName: string,
    lastName:string ,
    phone:number ,
    type:string ,
    businessName: string,
    primaryContactPerson: string
  }

  export type Days={
    day:string ,
    from: string,
    to:string
  }

  export type AddressData=  {
    _id: string,
    daysOpened:Days[],
    addressLine1:string ,
    addressLine2:string ,
    stateId:string ,
    countryId:string ,
    postcode:string ,
    cityId:string ,
    createdAt:string ,
    cityName:string ,
    stateName:string ,
    countryName:string 
  }
  