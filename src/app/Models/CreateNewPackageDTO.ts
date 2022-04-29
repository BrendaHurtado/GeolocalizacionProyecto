export interface CreateNewPackageDTO{

  EstadoEntrega: boolean; 
  SubtotalPaquete: number;
  IvaPaquete: number;
  TotalPaquete:number;
  OrigenPaquete:string;
  DestinoPaquete:string;
  IdCoordinates:number;
  TypePackage:string;
  Description:string;
  PrecioPackage:number;
  CodePackage:string;
  PackageId:number;
  LatOrigen:number;
  LogOrigen:number;
  LatDestination:number;
  LogDestination:number;

}