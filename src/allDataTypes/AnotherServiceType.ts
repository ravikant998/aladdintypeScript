
export type GetAnotherServiceDataType=
[
    {
      _id:string,
      sellerId:string,
      title:string ,
      categoryId: string,
      subcategoryId:string ,
      fixedPrice: true,
      forTime:string,
      description:string,
      remoteService: false,
      addressId:string ,
      gallery:GalleryType[],
      serviceCover:string ,
      sellerData:SellerData[],
      addressData:AddressData[],
      wishlist: false,
      totalReview: 0,
      averageRating: null,
      serviceId:string ,
      serviceCreatedDate:string,
      price: string,
      currency:string
      path:string,
      categoryName: string,
      subcategoryName: string
    }]
  
    export type GalleryType= {
      description:string,
      media: string,
      fileType: File
    }
  
    export type SellerData= {
      _id: string,
      firstName:string ,
      lastName:string ,
      phone:number,
      type: string
    }
  
    export type DayOpend= {
      day:string,
      from: string,
      to:string
    }
    export type AddressData= {
      _id: string,
      addressLine1:string ,
      addressLine2:string ,
      cityId:string ,
      stateId:string ,
      countryId:string ,
      postcode: string,
      daysOpened:DayOpend[],
      createdAt:string ,
      cityName:string,
      stateName:string ,
      countryName:string
    }