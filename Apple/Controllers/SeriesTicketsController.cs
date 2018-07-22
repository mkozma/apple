using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Apple.Controllers
{
    [Route("api/[controller]")]
    public class SeriesTicketsController: Controller
    {
       private static string[] SeriesNames = new[]
        {
            "Monday Night Series 1",
            "Monday Night Series 2",
            "Western Night Series",
            "Autumn Classic Series",
            "Spring Carnival Series",
            "Saturday Series"
        };

        [HttpGet("[action]")]
        public IActionResult GetSeries()
        {
            var series = Enumerable.Range(1,7).Select(index => new Series 
            {
                Id = index,
                Name = SeriesNames[index-1]
            });
            return Ok(series);
        }

        [HttpGet("[action]/{id}")]
        public IActionResult GetSeries(int id)
        {
            var serie = new Series 
            {
                Id = id,
                Name = SeriesNames[id]
            };

            return Ok(serie);
        }
    }

    public class Series
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}