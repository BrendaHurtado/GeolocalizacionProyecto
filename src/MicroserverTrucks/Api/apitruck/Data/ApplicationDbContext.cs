using Microsoft.EntityFrameworkCore;
using apitruck.Models;


namespace apitruck.Data;

public class ApplicationDbContext:DbContext{

  public virtual DbSet<Encargado> Encargados {get; set;}
  public virtual DbSet<Truck> Trucks {get; set;}
  public virtual DbSet<CamionEncargado> CamionEncargados {get; set;}

  public ApplicationDbContext(DbContextOptions<ApplicationDbContext> dbContextOptions):base(dbContextOptions){

  }
  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    base.OnModelCreating(modelBuilder);
    modelBuilder.Entity<CamionEncargado>().HasKey(al => new {al.EncargadoId,al.TruckId});
  }

}