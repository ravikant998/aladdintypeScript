export type ServiceDescriptionType={
  _id:string ,
  sellerId:string ,
  title:string ,
  categoryId:string ,
  subcategoryId:string ,
  fixedPrice: boolean,
  forTime:string ,
  description: string,
  remoteService: boolean,
  addressId: string,
  gallery:GalleryType[],
  serviceCover:string,
  sellerData:SellerDataType[],
  addressData:AddressDataType[],
  sellerInformationData: sellerInformationDataType[],
  wishlist: boolean,
  cart: boolean,
  totalReview: 0,
  averageRating: null,
  serviceId: string,
  serviceCreatedDate:string ,
  currency: string,
  minPrice: number,
  maxPrice: number,
  path:string ,
  categoryName:string ,
  subcategoryName: string
  price:string
}

export type GalleryType ={
  description: string,
  media:string ,
  fileType:string
}
export type SellerDataType=  {
  _id:string ,
  firstName:string ,
  lastName:string ,
  phone: string,
  type:string ,
  businessName:string ,
  primaryContactPerson: string
}
export type DaysOpenedType= {
  day: string,
  from:string ,
  to:string 
}

export type AddressDataType=  {
  _id:string ,
  daysOpened:DaysOpenedType[],
  addressLine1:string,
  addressLine2:string ,
  stateId:string ,
  countryId:string ,
  postcode:string ,
  cityId:string ,
  createdAt:string ,
  cityName:string ,
  stateName:string,
  countryName:string
}

export type LanguagesType=  {
  spokenLanguage:string ,
  languageType:string 
}

export type sellerInformationDataType= {
  _id:string ,
  subcategoryIds:[],
  languages: LanguagesType[],
  sellerId: string,
  categoryId:string ,
 description:string ,
  image:string ,
  path:string 
}


