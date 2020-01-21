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
        [StringLength(42)] // max 42, -> dus maximum email subject length is 78 characters, aangeraden https://tools.ietf.org/html/rfc5322#section-2.1.1
        public string SenderName { get; set; }
        [Required]
        public string Comment { get; set; }
        [Required]
        [Phone]
        public string PhoneNumber { get; set; }
        [Required]
        public DateTime ReservationDate { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
