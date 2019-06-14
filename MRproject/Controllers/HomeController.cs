using MRproject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MRproject.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            DateControl date = new DateControl();
            ViewBag.Date = date.Datetoday();
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}