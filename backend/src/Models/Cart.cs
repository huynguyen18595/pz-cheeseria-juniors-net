namespace Pz.Cheeseria.Api.Models
{
    public class Cart
    {
        /// <summary>
        /// total amount for recent order
        /// </summary>
        public decimal TotalAmount { get; set; }

        /// <summary>
        /// list of purchased cheese items
        /// </summary>
        public PurchasedCheese[] CheeseList { get; set; }


    }
}
