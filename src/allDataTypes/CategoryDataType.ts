export type CategotyType=[{
    _id: string,
    translationData:TranslationData [],
    status: true,
    deletedAt: 0,
    name: string,
    slug: string,
    description: string,
    metaTitle:string,
    metaKeyword:string,
    metaDescription:string,
    createdAt: string,
    updatedAt:string,
    __v: 0,
    categoryBanner:string,
    categoryBannerMobile: string,
    categoryIcon:string,
    categoryIconMobile:string,
    path: string
  }]
  export type TranslationData={
      languageId: string,
        languageName: string,
        name: string,
        slug: string,
        description:string,
        metaTitle:string,
        metaKeyword:string,
        metaDescription: string
  }