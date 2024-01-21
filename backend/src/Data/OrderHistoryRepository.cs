using Pz.Cheeseria.Api.Models;
using System;
using System.Collections.Generic;
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

        public bool SaveOrderHistory(Order record)
        {
            var jsonFilePath = getPath();
            
            if (File.Exists(jsonFilePath))
            {
                string fileContent = File.ReadAllText(jsonFilePath);
                Order[] currentOrderHistory = JsonSerializer.Deserialize<Order[]>(fileContent);
                currentOrderHistory = currentOrderHistory.Concat(new Order[] { record }).ToArray();
                File.WriteAllText(jsonFilePath, JsonSerializer.Serialize(currentOrderHistory));
                return true;
            } 
            else
            {
                File.WriteAllText(jsonFilePath, JsonSerializer.Serialize(new Order[] { record }));
                return true;
            }
        }

        public List<Order> getOrderHistory() 
        {
            var jsonFilePath = getPath();
            if(File.Exists(jsonFilePath))
            {
                string fileContent = File.ReadAllText(jsonFilePath);
                Order[] currentOrderHistory = JsonSerializer.Deserialize<Order[]>(fileContent);
                return currentOrderHistory.ToList();
            }
            else
            {
                return new List<Order>();
            }
        }
    }
}
