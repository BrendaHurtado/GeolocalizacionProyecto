using apitruck.Core.IConfiguration;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using apitruck.DTO;
using apitruck.Models;

[ApiController]
[Route("v1/camion")]
public class CamionController:ControllerBase{

  private readonly IUnitOfWork _unitOfWork;
  private readonly IMapper _mapper;

  public CamionController(IUnitOfWork unitOfWork,IMapper mapper){
    _unitOfWork = unitOfWork;
    _mapper = mapper;
  }


  [HttpGet("{id}")]
  public async Task<ActionResult>Getitem(int id){
    var result = await _unitOfWork.truck.GetById(id);
    return Ok(result);
  }

  [HttpPost]
  public async Task<ActionResult> PostCamion(CreateCamionDTO createCamionDTO){
    if(ModelState.IsValid){
        var newcamion = _mapper.Map<Truck>(createCamionDTO);
        var respuesta = await _unitOfWork.truck.Add(newcamion);
        if(!respuesta){
          return NotFound(new {
            ok= false,
            msg ="Camion Ya Registrado"
          });      
        }
        await _unitOfWork.CompleteAsync();
        return CreatedAtAction("GetItem", new {id = newcamion.Id}, createCamionDTO);
    }
     return new JsonResult("FAIL"){StatusCode =500};
  }


}