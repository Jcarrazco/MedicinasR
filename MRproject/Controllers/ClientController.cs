using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MRproject.Controllers
{
    public class ClientController : Controller
    {
        // GET: Client
        public ActionResult Form1()
        {
            return View();
        }

        public ActionResult Form2()
        {
            return View();
        }

        public ActionResult Form3()
        {
            return View();
        }

        public ActionResult Form4()
        {
            return View();
        }

        public ActionResult Form5()
        {
            return View();
        }

        public ActionResult Form6()
        {
            string location = "https://www.google.com/maps/embed/v1/search?q=" +
                "CSW%2C%20Avenida%20Adolfo%20L%C3%B3pez%20Mateos%20Sur%2C%20Col.%20Jardines%20de%20Plaza%20del%20Sol%2C%20Guadalajara%2C%20Jalisco%2C%20Mexico&key=AIzaSyByM46Uwj3UlgThMF1bgPZbNWal9Z5hO9E";
            ViewData["Location"] = location;
            return View();
        }

        public ActionResult Form7()
        {
            return View();
        }
    }
}