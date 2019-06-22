using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AotC.OnlineSchool.Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AotC.OnlineSchool.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormController : ControllerBase
    { 
        [HttpPost]
        public void Post([FromBody] String value)
        {
        }
    }
}