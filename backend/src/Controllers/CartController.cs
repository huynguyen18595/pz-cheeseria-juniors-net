using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Pz.Cheeseria.Api.Models;
using Pz.Cheeseria.Api.Services;
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
        private CartService cartService;
        public CartController()
        {
            cartService = new CartService() ;
        }

        // POST api/<CartController>
        [HttpPost]
        [ProducesResponseType(200)]        
        public IActionResult CreateCart(Cart cart)
        {
            cartService.CreateCart(cart);
            return Ok();
        }
        //get API
        [HttpGet]
        [ProducesResponseType(typeof(Cart[]), 200)]
        public IActionResult GetCard()
        {
            Cart[] cart = cartService.GetCard();

            return Ok(cart);
        }
    }
}
