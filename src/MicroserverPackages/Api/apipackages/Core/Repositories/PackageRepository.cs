using apipackages.Core.IRepositories;
using apipackages.Data;
using apipackages.Models;
using AutoMapper;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.EntityFrameworkCore;

namespace apipackages.Core.Repositories;

public class PackageRepository: GenericRepository<Package>, IPackage{

  public PackageRepository(ApplicationDbContext context,ILogger logger, IDataProtector dataProtector, IMapper mapper):base(context,logger,dataProtector,mapper){
    
  }

  public override async Task<bool> Add(Package entity){
    try{
      await dbSet.AddAsync(entity);
      return true;

    }catch(Exception ex){
      _logger.LogError(ex,"{Rrpo} add method error", typeof(PackageRepository));
      return false;
    }
  }
  public override async Task<IEnumerable<Package>> All()
  {
      var packageall = await
      dbSet.Where(x=> x.EstadoEntrega == false && x.IdRuta !=0)
      .ToListAsync();
      return packageall;
  }
  public override Task<string> GetEmailUser(int idroute)
  {
    return base.GetEmailUser(idroute);
  }
}