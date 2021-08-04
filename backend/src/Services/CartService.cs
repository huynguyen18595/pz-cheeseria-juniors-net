using System.Collections.Generic;
using Newtonsoft.Json;
using Pz.Cheeseria.Api.Models;

namespace Pz.Cheeseria.Api.Services
{
    public class CartService
    {
        public void CreateCart(Cart cart)
        {
            List<Cart> purchaseHistory = new List<Cart>();
            string path = $"{System.IO.Directory.GetCurrentDirectory()}/Data/PurchaseHistory.json";
            //1. get the list of purchases in JSON file
            string json = System.IO.File.ReadAllText(path);
            purchaseHistory = JsonConvert.DeserializeObject<List<Cart>>(json);
            //2. Add recent orders to the list
            if (purchaseHistory == null)
            {
                purchaseHistory = new List<Cart>();
            }
            purchaseHistory.Add(cart);
            //3. Write the list back to JSON file
            System.IO.File.WriteAllText(path, JsonConvert.SerializeObject(purchaseHistory));
        }

        public Cart[] GetCard()
        {
            string path = $"{System.IO.Directory.GetCurrentDirectory()}/Data/PurchaseHistory.json"; ;
            List<Cart> purchaseHistory = new List<Cart>();
            //1. Read JSON file to get JSON objects
            string json = System.IO.File.ReadAllText(path);
            //2. Parse JSON object to Cart object
            if (string.IsNullOrEmpty(json))
            {
                return new Cart[] { };
            }
            purchaseHistory = JsonConvert.DeserializeObject<List<Cart>>(json);
            return purchaseHistory.ToArray();
        }
    }
}