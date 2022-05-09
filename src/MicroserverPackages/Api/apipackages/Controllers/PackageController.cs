using apipackages.Core.IConfiguration;
using apipackages.DTO;
using apipackages.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace apipackages.Controllers;
[ApiController]
[Route("v1/package")]

public class PackageController : ControllerBase
{
  private readonly IUnitOfWork _unitOfWork;
  private readonly IMapper _mapper;
  private readonly IRoutesProxy _routesProxy;
  public PackageController(IUnitOfWork unitOfWork, IMapper mapper, IRoutesProxy routesProxy)
  {
    this._unitOfWork = unitOfWork;
    this._mapper = mapper;
    this._routesProxy = routesProxy;
  }
  [HttpGet("{id}")]
  public async Task<ActionResult> GetItem(int id)
  {
    var package = await _unitOfWork.Packa.GetById(id);
    return Ok(package);
  }
  [HttpGet]
  public async Task<ActionResult> GetAll(){
    var package = await _unitOfWork.Packa.All();
    return Ok(package);
  }
  
  [HttpGet("user/email/{idroute}")]
  public async Task<ActionResult>GetEmailUser(int idroute){
    await _unitOfWork.Packa.GetEmailUser(idroute);
    return Ok();
  }

  [HttpPost]
  public async Task<ActionResult> PostPackage(CreateNewPackageDTO createNewPackageDTO)
  {
    if (ModelState.IsValid){
      var newpackage = _mapper.Map<Package>(createNewPackageDTO);
      await _unitOfWork.Packa.Add(newpackage);
      await _unitOfWork.CompleteAsync();
      createNewPackageDTO.PackageId = newpackage.Id;
      // Aqui llamamos la proxy
      await this._routesProxy.InsertDetailPackage(createNewPackageDTO);
      return NoContent();
    }
    return new JsonResult("Fail") { StatusCode = 500 };
  }
}

