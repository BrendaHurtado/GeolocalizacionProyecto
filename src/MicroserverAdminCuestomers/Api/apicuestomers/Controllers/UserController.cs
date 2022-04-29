using apicuestomers.Core.IConfiguration;
using apicuestomers.DTO;
using apicuestomers.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;


namespace apicuestomers.Controllers;
[ApiController]
[Route("v1/user")]
public class UserController : ControllerBase
{
  private readonly IUnitOfWork _unitOfWork;
  private readonly IMapper _mapper;
  public UserController(IUnitOfWork unitOfWork, IMapper mapper)
  {
    _unitOfWork = unitOfWork;
    _mapper = mapper;
  }
  [HttpGet("{id}")]
  public async Task<IActionResult> GetItem(int id)
  {
    var user = await _unitOfWork.User.GetById(id);
    return Ok(user);
  }

  [HttpGet("everyone")]
  public async Task<ActionResult<List<UserDTO>>> GetUsers()
  {
    var user = await _unitOfWork.User.All();
    return _mapper.Map<List<UserDTO>>(user);
  }

  [HttpPost]
  public async Task<ActionResult> PostUser(CreateUserDTO createUserDTO)
  {
    if (ModelState.IsValid)
    {
      var newuser = _mapper.Map<User>(createUserDTO);
      await _unitOfWork.User.Add(newuser);
      await _unitOfWork.CompleteAsync();
      return CreatedAtAction("GetItem", new { id = newuser.Id }, createUserDTO);
    }
    return new JsonResult("Fall") { StatusCode = 500 };
  }
}