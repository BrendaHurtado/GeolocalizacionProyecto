using apipackages.Core.IRepositories;
using apipackages.Data;
using apipackages.Models;
using AutoMapper;
using Microsoft.AspNetCore.DataProtection;

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




}