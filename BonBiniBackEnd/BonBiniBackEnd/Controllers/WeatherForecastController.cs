using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MailKit.Net.Smtp;
using MimeKit;
using Microsoft.AspNetCore.Hosting;
using SendGrid;
using SendGrid.Helpers.Mail;
using BonBiniBackEnd.Models;
using System.Globalization;

namespace BonBiniBackEnd.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, IHostingEnvironment env)
        {
            _logger = logger;
        }

        [HttpPost]
        public ActionResult<Mail>  Get([FromBody] Mail mail)
        {
            CultureInfo ci = new CultureInfo("nl-BE");
            CultureInfo.CurrentCulture = ci;
            //var dtfi = CultureInfo.CurrentCulture.DateTimeFormat;
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Test Project", "arren.van.dosselaer@hotmail.com"));
            message.To.Add(new MailboxAddress("arren test", "s095849@ap.be"));
            message.Subject = "Reservering: " + mail.SenderName + " "+ mail.ReservationDate.ToLongDateString();
            message.Body = new TextPart("plain")
            {
                Text =   mail.ReservationDate.ToLongDateString() + "\n" +
                 "\n" + 
                 mail.Comment + "\n"+
                "\n" +
                mail.SenderName + "\n" +
                mail.PhoneNumber + "\n" +
                mail.Email

            };
            using (var client = new SmtpClient())
            {
                client.Connect("smtp.live.com", 587, false);
                client.Authenticate("arren.van.dosselaer@hotmail.com", "ayelar113");
                client.Send(message);
                client.Disconnect(true);
            }
            return Ok(mail);
        }
    }
}
