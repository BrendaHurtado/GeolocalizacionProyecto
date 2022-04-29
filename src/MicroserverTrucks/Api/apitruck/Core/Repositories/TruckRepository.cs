

using apitruck.Core.IRepositories;
using apitruck.Core.Repositories;
using apitruck.Data;
using apitruck.Models;
using AutoMapper;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.EntityFrameworkCore;

public class TruckRepository : GenericRepository<Truck>, ITruckRespository
{

  public TruckRepository(ApplicationDbContext dbContext, ILogger logger, IDataProtector dataProtector, IMapper mapper) : base(dbContext, logger, dataProtector, mapper)
  {

  }

  public override async Task<bool> Add(Truck entity)
  {
    try
    {

      var existtruck = await _dbSet.Where(x => x.Serie.Equals(entity.Serie) && x.Placa.Equals(entity.Placa)).FirstOrDefaultAsync();
      if(existtruck == null){  
        await _dbSet.AddAsync(entity);
        return true;  
      }
      return false;
    }
    catch (Exception ex)
    {
      _logger.LogError(ex, "{Rrpo} Upsert method error", typeof(TruckRepository));
      return false;

    }
  }
}