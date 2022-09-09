
export type GetServiceListType=
[
    {
      _id:string ,
      sellerId:string ,
      title:string ,
      categoryId:string ,
      subcategoryId: string,
      fixedPrice: boolean,
      forTime:string ,
      description:string ,
      remoteService: boolean,
      addressId: string,
      gallery:Gallery[],
      serviceCover: string,
      sellerData:SellerData[],
      addressData:AddressData[],
      wishlist: boolean,
      totalReview: number,
      averageRating: number,
      serviceId: string,
      serviceCreatedDate: string,
      price:string ,
      currency:string,
      path:string ,
      categoryName:string ,
      subcategoryName:string
    },
    
  ] 

  export type Gallery = {
        description: string,
        media: string,
        fileType:string 
      }

export type SellerData={
            _id:string ,
            firstName:string,
            lastName:string ,
            phone: number,
            type: string,
            businessName:string ,
            primaryContactPerson:string 
          } 
          export type DaysOpened={
                        day:string ,
                        from: string,
                        to: string
                      }  
     export type AddressData={
        _id:string ,
        daysOpened:DaysOpened[],
        addressLine1:string ,
        addressLine2:string ,
        stateId: string,
        countryId:string ,
        postcode: number,
        cityId:string ,
        createdAt:string ,
        cityName:string ,
        stateName:string ,
        countryName: string
      } 
       