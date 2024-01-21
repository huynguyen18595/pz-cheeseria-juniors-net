using System;

namespace Pz.Cheeseria.Api.Models
{
    public class Order
    {
        public OrderItem[] OrderItems { get; set; }
        public decimal Total { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
