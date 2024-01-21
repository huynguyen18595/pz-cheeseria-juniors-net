using Pz.Cheeseria.Api.Models;
using System.Collections.Generic;

namespace Pz.Cheeseria.Api.Interfaces
{
    public interface IOrderLogic
    {
        bool SaveOrderHistory(Order record);

        List<Order> GetOrderHistory();
    }
}
