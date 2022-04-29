using apitruck.DTO;
using apitruck.Models;
using AutoMapper;

public class AutoMapperProfile:Profile{

  public AutoMapperProfile(){

    // origen a destino

    // Camion
    CreateMap<CreateCamionDTO,Truck>();
    CreateMap<Encargado,EncargadoDTO>();
    CreateMap<Encargado,EncargadoCamionDTO>()
      .ForMember(encargadodto =>encargadodto.trucks, opciones => opciones.MapFrom(MapEncargadoCamionDTO));



    // Encargado
    CreateMap<CreateEncargadoDTO,Encargado>()
      .ForMember(encargado => encargado.camionEncargados, opciones => opciones.MapFrom(MapCamionEncargados));

  }

  // Eelaciones de muchos a muchos
  private List<TruckDTO>MapEncargadoCamionDTO(Encargado encargado,EncargadoDTO encargadoDTO){
    var resultado = new List<TruckDTO>();

    if(encargado.camionEncargados == null ){return resultado;}
    foreach(var data in encargado.camionEncargados){
      resultado.Add(new TruckDTO(){
        Id = data.TruckId,
        RoutesId = data.truck.RoutesId
      });
    }
    return resultado;

  }



  private List<CamionEncargado>MapCamionEncargados(CreateEncargadoDTO createEncargadoDTO, Encargado encargado){

    var resultado = new List<CamionEncargado>();
    if(createEncargadoDTO.CamionId == null){
      return resultado;
    }
    foreach(int encargo in createEncargadoDTO.CamionId){
      resultado.Add( new CamionEncargado{
        TruckId= encargo,
      });
    }
    return resultado;
  }

}