using apicuestomers.Core.IRepositories;
using apicuestomers.Data;
using apicuestomers.Models;
using AutoMapper;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.EntityFrameworkCore;

namespace apicuestomers.Repositories;

public class UserRepository : GenericRepository<User>, IUserRepository
{

  public UserRepository(ApplicationDbContext context, ILogger logger, IDataProtector dataProtector, IMapper mapper) : base(context, logger, dataProtector, mapper)
  { }

  // Aqui vamos a guardar los usuarios

  public override async Task<bool> Add(User entity)
  {
    try
    {
      var existuser = await dbSet.AnyAsync(x => x.Email.Equals(entity.Email));
      if (existuser)
      {
        return false;
      }
      await dbSet.AddAsync(entity);
      return true;
    }
    catch (Exception ex)
    {
      _logger.LogError(ex, "{Rrpo} add method error", typeof(UserRepository));
      return false;
    }
  }

}