using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MRproject.Models
{
    public class DateControl
    {
        public string Datetoday()
        {
            string days = DateTime.Now.DayOfWeek.ToString();
            switch (days)
            {
                case "Monday":
                    days = "Lunes";
                    break;
                case "Tuesday":
                    days = "Martes";
                    break;
                case "Wednesday":
                    days = "Miercoles";
                    break;
                case "Thursday":
                    days = "Jueves";
                    break;
                case "Friday":
                    days = "Viernes";
                    break;
                case "Saturday":
                    days = "Sabado";
                    break;
                case "Sunday":
                    days = "Domingo";
                    break;
            }
            string[] Months = new string[] { "Enero", "Febreo", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" };
            int day = DateTime.Now.Day;
            int month = DateTime.Now.Month;
            int year = DateTime.Now.Year;
            //Constructor of strings
            return days + " " + day + " de " + Months[month-1] + " del " +year;
        }
    }
}