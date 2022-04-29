using apipackages.DTO;

namespace apitruck.Models;
public interface ITrucksProxy{
  Task<RoutesCoordenatesDTO> NameRoutes(int id);  
}