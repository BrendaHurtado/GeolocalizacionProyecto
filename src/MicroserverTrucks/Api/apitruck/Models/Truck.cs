
namespace apitruck.Models;
public class Truck{

  public int Id {get; set;}
  public string Placa {get; set;}
  public string Serie {get; set;}
  public string Colour {get; set;}
  public string Marca {get; set;}
  public string Modelo {get; set;}
  public int Plazas {get; set;}
  public bool Status {get; set;}
  public int RoutesId {get; set;}

  // Propiedades de Navegacion
  public List<CamionEncargado> camionEncargados {get;set;}

}