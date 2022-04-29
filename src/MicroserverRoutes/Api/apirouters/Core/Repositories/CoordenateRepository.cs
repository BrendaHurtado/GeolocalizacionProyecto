using apirouters.Core.Repositories;
using AutoMapper;
using Microsoft.AspNetCore.DataProtection;
using apirouters.Models;
using apirouters.Core.IRepositories;
using apirouters.Data;
using Microsoft.EntityFrameworkCore;
using apipackages.DTO;

namespace apipackages.Core.Repositories;


public class CoordenateRepository:GenericRepository<Coordinates>,ICoordenateRepository{

  public CoordenateRepository(ApplicationDbContext context, ILogger logger,IDataProtector dataProtector,IMapper mapper): base(context,logger,dataProtector,mapper){
   
  }
  public override async Task<RoutesCoordenatesDTO> GetRoutesCoordenates(int idroute){

      var getroutes = await _dbSet
          .Include(routesdb => routesdb.Routes).Where(c => c.Routes.Any(x => x.Id == idroute)).FirstOrDefaultAsync();

     return _mapper.Map<RoutesCoordenatesDTO>(getroutes);
  }
}