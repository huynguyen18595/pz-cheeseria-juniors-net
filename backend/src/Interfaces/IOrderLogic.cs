using Pz.Cheeseria.Api.Models;

namespace Pz.Cheeseria.Api.Interfaces
{
    public interface IOrderLogic
    {
        bool SaveOrderHistory(OrderHistory record);
    }
}
