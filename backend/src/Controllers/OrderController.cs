using Microsoft.AspNetCore.Mvc;
using Pz.Cheeseria.Api.Interfaces;
using Pz.Cheeseria.Api.Models;
using System.Threading.Tasks;

namespace Pz.Cheeseria.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController: ControllerBase
    {
        private readonly IOrderLogic _orderLogic;
        public OrderController(IOrderLogic orderLogic)
        {
            _orderLogic = orderLogic;
        }

        [HttpPost]
        public bool PlaceOrder([FromBody] Order record)
        {
             return _orderLogic.SaveOrderHistory(record);
        }
    }
}
