using Pz.Cheeseria.Api.Data;
using Pz.Cheeseria.Api.Interfaces;
using Pz.Cheeseria.Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Pz.Cheeseria.Api.Services
{
    public class OrderLogic : IOrderLogic
    {
        private readonly OrderHistoryRepository _orderHistoryRepository;

        public OrderLogic(OrderHistoryRepository orderHistoryRepository)
        {
            _orderHistoryRepository = orderHistoryRepository;
        }

        public bool SaveOrderHistory(Order record)
        {
            return _orderHistoryRepository.SaveOrderHistory(record);
        }

        public List<Order> GetOrderHistory()
        {
            return _orderHistoryRepository.getOrderHistory();
        }
    }
}
