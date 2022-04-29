using Microsoft.EntityFrameworkCore;
namespace apipackages.Data;
using Models;

public class ApplicationDbContext:DbContext{

  public virtual DbSet<Package> Packages {get; set;}
  public virtual DbSet<DetailPackage> DetailPackages {get; set;}

  public ApplicationDbContext(DbContextOptions<ApplicationDbContext> dbContextOptions):base(dbContextOptions){

  }
  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    base.OnModelCreating(modelBuilder);
  }

}