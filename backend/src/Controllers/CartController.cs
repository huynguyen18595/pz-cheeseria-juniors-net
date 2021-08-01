using Microsoft.AspNetCore.Mvc;
using Pz.Cheeseria.Api.Models;
using System;
using System.IO;
using System.Reflection;
using System.Text.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Pz.Cheeseria.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        // POST api/<CartController>
        [HttpPost]
        [ProducesResponseType(typeof(Cart[]), 200)]
        public void CreateCart(Cart cart)
        {
            // implement how to put cart to DB

            string json = JsonSerializer.Serialize(cart);
            string path =  @".\Data\PurchaseHistory.json";
            System.IO.File.AppendAllText(path, "\n");
            System.IO.File.AppendAllText(path, json);

        }
    }
}
