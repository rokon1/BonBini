using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BonBiniBackEnd.Models
{
    public class Mail
    {
        [Required]
        [StringLength(20)]
        public string SurName { get; set; }
        [Required]
        [StringLength(20)]
        public string LastName { get; set; }
        public string Comment { get; set; }
        [Required]
        [Phone]
        public string PhoneNumber { get; set; }
        [Required]
        public DateTime ReservationDate { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        public int AmountOfPeople { get; set; } = 1;
    }
}
