export interface ProjectApiInterface {
  id: number,
  img: string,
  imgsource:{
    max600: string,
    max992: string,
    max1200: string,
    png: string,
  },
  title:string,
  description: string,
  skills: any[],
  link: string,
  status: string,
  date: string,
  type: string,
}
