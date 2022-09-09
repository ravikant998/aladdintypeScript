export type Userdata = {
    email: string;
    firstName: string;
    lastName: string;
    path: string;
    phone: string;
    phoneNumberVerified: string;
    type: string;
  }[];
export type Gethomepagetype = {
    categoryData: Category[];
    subcategoryData: Category[];
    bannerData: Banner[];
    topAdvertiserBannerData: Topbanner[];
    bottomAdvertiserBannerData: Topbanner[];
    categoryImagePath: string;
    subcategoryImagePath: string;
    bannerImagePath: string;
  };
  export type Translation = {
    languageId: string;
    languageName: string;
    name: string;
    slug: string;
    description: string;
    metaTitle: string;
    metaKeyword: string;
    metaDescription: string;
  };
  export type Category = {
    _id: String;
    translationData: Translation[];
    status: boolean;
    deletedAt: number;
    name: string;
    slug: string;
    description: string;
    metaTitle: string;
    metaKeyword: string;
    metaDescription: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    categoryIcon: string;
  };
  
  export type Banner = {
    _id: string;
    webImage: string;
    addedBy: string;
    isApproved: boolean;
    status: boolean;
    deletedAt: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  
  export type Topbanner = {
    _id: string;
    isApproved: boolean;
    status: boolean;
    deletedAt: number;
    createdAt: string;
    updatedAt: string;
    title: string;
    alt: string;
    addedBy: string;
    userId: string;
    webImage: string;
    __v: number;
  };
  
  

  

   
  
  
  
  