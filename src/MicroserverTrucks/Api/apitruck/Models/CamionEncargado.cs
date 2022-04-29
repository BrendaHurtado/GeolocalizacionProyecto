namespace apitruck.Models;


public class CamionEncargado{

  public int EncargadoId{get; set;}
  public int TruckId {get; set;}

  public Encargado encargado {get; set;}
  public Truck truck {get; set;}

}