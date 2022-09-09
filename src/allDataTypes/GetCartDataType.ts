
export type GetCartDetailsType=GetCartDataType[]
export type GetCartDataType=
    {
      _id: string,
      quantity: number,
      fromInvoice: boolean,
      sellerData:SellerDataType [],
      serviceId:string ,
      fixedPrice: boolean,
      serviceTitle:string ,
      serviceDeletedAt: string,
      serviceStatus: boolean,
      serviceCover:string ,
      price: string,
      currency:string,
      sellerId:string ,
      path: string
    }   
 
  export type SellerDataType= {
    firstName:string ,
    lastName:string ,
    phone:number ,
    type:string ,
    _id: string
  }