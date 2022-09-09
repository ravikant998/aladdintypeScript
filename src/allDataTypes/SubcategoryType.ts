export type Servicesubcategorytype=[
    {
       _id: string,
      translationData:TranslationType[],
      status: true,
      deletedAt: 0,
      name:string,
      slug:string,
      description:string,
      metaTitle: string,
      metaKeyword:string,
      metaDescription:string,
      categoryId:string,
      createdAt:string,
      updatedAt: string,
      __v: 0,
      subcategoryBanner:string,
      subcategoryBannerMobile:string,
      subcategoryIcon: string,
      subcategoryIconMobile:string,
      path:string
    }]
  
    export type TranslationType={
          languageId: string,
          languageName: string,
          name:string ,
          slug:string ,
          description:string ,
          metaTitle:string,
          metaKeyword:string,
          metaDescription: string   
    }