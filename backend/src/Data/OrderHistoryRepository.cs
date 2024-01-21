using Pz.Cheeseria.Api.Models;
using System;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace Pz.Cheeseria.Api.Data
{
    public class OrderHistoryRepository
    {
        private string _orderHistoryJsonFileName = "orderHistory.json";

        private string getPath() {
            var currentDirectory = Directory.GetCurrentDirectory();
            var relativePath = Path.Combine("", _orderHistoryJsonFileName);
            var jsonFilePath = Path.Combine(currentDirectory ,relativePath);
            return jsonFilePath;
        }

        public bool SaveOrderHistory(OrderHistory record)
        {
            var jsonFilePath = getPath();
            
            if (File.Exists(jsonFilePath))
            {
                string fileContent = File.ReadAllText(jsonFilePath);
                OrderHistory[] currentOrderHistory = JsonSerializer.Deserialize<OrderHistory[]>(fileContent);
                currentOrderHistory = currentOrderHistory.Concat(new OrderHistory[] { record }).ToArray();
                File.WriteAllText(jsonFilePath, JsonSerializer.Serialize(currentOrderHistory));
                return true;
            } 
            else
            {
                File.WriteAllText(jsonFilePath, JsonSerializer.Serialize(new OrderHistory[] { record }));
                return true;
            }
        }
    }
}
