//using Crud.DATA;
//using Crud.MODELS;
//using Crud.MODELS.ENTITY;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;

//namespace Crud.Controllers
//{
//	[Route("api/[controller]")]
//	[ApiController]
//	public class EmployeeController : ControllerBase
//	{
//		private ApplicationDbContext dbContext;
//		public EmployeeController(ApplicationDbContext dbContext)
//		{
//			this.dbContext = dbContext;
//		}

//		[HttpPost]
//		public IActionResult AddEmployee(AddEmployeeDto employeeDto)
//		{
//			var employeeEntity = new Employee()
//			{
//				Name = employeeDto.Name,
//				Email = employeeDto.Email,
//				Phone = employeeDto.Phone,
//				Salary = employeeDto.Salary,
//			};
//			dbContext.Employees.Add(employeeEntity);
//			dbContext.SaveChanges();
//			return Ok(employeeEntity);
//		}

//		[HttpGet]
//		public IActionResult actionResult()
//		{

//			var Employees = dbContext.Employees.ToList();

//			return Ok(Employees);

//		}

//		[HttpGet]
//		[Route("{id}")]
//		public IActionResult getEmobloyeeById(Guid id)
//		{
//			var employee = dbContext.Employees.Find(id);
//			if (employee == null)
//			{
//				return NotFound();
//			}

//			return Ok(employee);
//		}

//		[HttpPut]
//		[Route("{id}")]
//		public IActionResult UpdateEmployeeById(Guid id, UpdateEmployeeDto employeeDto)
//		{
//			var employee = dbContext.Employees.Find(id);
//			employee.Name = employeeDto.Name;
//			employee.Salary = employeeDto.Salary;
//			employee.Email = employeeDto.Email;
//			employee.Phone = employeeDto.Phone;

//			dbContext.SaveChanges();

//			return Ok(employee);
//		}

//		[HttpDelete]
//		[Route("{id}")]
//		public IActionResult deleteEmployeeById(Guid id)
//		{

//			var employee = dbContext.Employees.Find(id);
//			dbContext.Employees.Remove(employee);
//			dbContext.SaveChanges();
//			return Ok("employee deleted successfully");
//		}

//		//[HttpGet("search")]
//		//public IActionResult SearchEmployees([FromQuery] string term)
//		//{
//		//	var employees = dbContext.Employees
//		//		.Where(e => e.Name.Contains(term) || e.Email.Contains(term) || e.Phone.Contains(term))
//		//		.ToList();

//		//	return Ok(employees);
//		//}

//		[HttpGet("search")]
//		public IActionResult searchemployees(string term)
//		{
//			var employees = dbContext.Employees.Where(e => e.Name.Contains(term) || e.Phone!.Contains(term) || e.Email.Contains(term)).ToList();
//			return Ok(employees);

//		}

//	}
//}
