using System;

namespace Pz.Cheeseria.Api.Models
{
    public class OrderItem
    {
        public Cheese Cheese { get; set; }
        public int Quantity { get; set; }
    }
}
