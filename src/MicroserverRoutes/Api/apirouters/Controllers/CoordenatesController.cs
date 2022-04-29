using apirouters.Core.IConfiguration;
using apirouters.DTO;
using apirouters.Models;
using apirouters.Services;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
namespace apirouters.Controllers;

[ApiController]
[Route("v1/coordenates")]
public class CoordenatesController : ControllerBase
{
  private readonly IUnitOfWork _unitofwork;
  private readonly IMapper _mapper;
  private readonly IRoutesProxy _routesProxy;
  private readonly IHubContext<RealTime> _hubContext;

  public CoordenatesController(IUnitOfWork unitOfWork, IMapper mapper, IRoutesProxy routesProxy,IHubContext<RealTime> hubContext)
  {
    this._unitofwork = unitOfWork;
    this._mapper = mapper;
    this._routesProxy = routesProxy;
    this._hubContext = hubContext;
  }

  [HttpGet("{id}")]
  public async Task<ActionResult> GetItem(int id)
  {
    var newroutes = await _unitofwork.Coordenate.GetRoutesCoordenates(id);
    return Ok(newroutes);
  }

  [HttpPost("enviar/coordenates")]
  public async Task SendCoordenates([FromBody]RoutesTimeDTO routesTimeDTO){
    Console.WriteLine(routesTimeDTO.latitude+""+routesTimeDTO.longitude);
    await _hubContext.Clients.All.SendAsync("ReceiveMenssage",routesTimeDTO);
  }

  // Ruta para insertar Pedidos
  [HttpPost]
  public async Task<ActionResult> PostCoordenates(CreateNewPackageDTO createNewPackageDTO)
  {
    if (ModelState.IsValid)
    {
      var newcoordenates = _mapper.Map<Coordinates>(createNewPackageDTO);
      await _unitofwork.Coordenate.Add(newcoordenates);
      await _unitofwork.CompleteAsync();

      // Llamamos al controller RoutesController
      createNewPackageDTO.IdCoordinates = newcoordenates.Id;
      await _routesProxy.InsertRoutes(createNewPackageDTO);

      return CreatedAtAction("GetItem", new { id = newcoordenates.Id }, createNewPackageDTO);
    }
    return new JsonResult("Fail") { StatusCode = 500 };
  }
}