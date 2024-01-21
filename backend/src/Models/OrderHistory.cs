using System;

namespace Pz.Cheeseria.Api.Models
{
    public class OrderHistory
    {
        public OrderItem[] OrderItems { get; set; }
        public decimal Total { get; set; }
        public DateTime Created { get; set; }
    }
}
