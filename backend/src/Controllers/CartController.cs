using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Pz.Cheeseria.Api.Models;
using System;
using System.Collections.Generic;
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
            List<Cart> purchaseHistory = new List<Cart>();
            string path = @".\Data\PurchaseHistory.json";
            //1. get the list of purchases in JSON file
            string json = System.IO.File.ReadAllText(path);
            purchaseHistory = JsonConvert.DeserializeObject<List<Cart>>(json);
            //2. Add recent orders to the list
            if (purchaseHistory == null)
            {
                purchaseHistory = new List<Cart>();
            }
            purchaseHistory.Add(cart);
            //3. Write the list back to JSON file
            System.IO.File.WriteAllText(path, JsonConvert.SerializeObject(purchaseHistory));

        }
        //get API
        [HttpGet]
        [ProducesResponseType(typeof(Cart[]),200)]
        public IActionResult GetCard()
        {
            string path = @".\Data\PurchaseHistory.json";
            List<Cart> purchaseHistory = new List<Cart>();
            //1. Read JSON file to get JSON objects
            string json = System.IO.File.ReadAllText(path);
            //2. Parse JSON object to Cart object
            purchaseHistory = JsonConvert.DeserializeObject<List<Cart>>(json);
            return Ok(purchaseHistory.ToArray());
        }
    }
}
