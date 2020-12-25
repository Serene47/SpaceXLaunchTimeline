

export class Launch{

  missionName:string;
  lauchDate:Date;
  missionDetails:string;
  imageUrl:string;

  constructor(name:string,lauchDate:string,
    details:string,imageUrl:string) {

      this.missionName = name;
      this.lauchDate = new Date(lauchDate);
      this.imageUrl = imageUrl;
      this.missionDetails = details;

  }

}
