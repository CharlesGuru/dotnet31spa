using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace dotnet31spa.Controllers

{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherForecastController : ControllerBase
    {

        private readonly IWeatherGet weatherget;
        private readonly IWeatherCreate weathercreate;
        private readonly IWeatherUpdate weatherupdate;
        private readonly IWeatherDelete weatherdelete;


        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger,IWeatherCreate weatherCreate,
            IWeatherGet weatherGet, IWeatherUpdate weatherUpdate, IWeatherDelete weatherDelete)
        {
             _logger = logger;
            this.weatherget = weatherGet;
            this.weathercreate = weatherCreate;
            this.weatherupdate = weatherUpdate;
            this.weatherdelete = weatherDelete;
        }

        
        [HttpGet]
        public async Task<IEnumerable<WeatherForecast>> Get()
        {
            //get all records
            return await weatherget.Get();
           
        }


        [HttpPost]
        public async Task Post([FromBody] WeatherForecast weatherForecast)
        {
            //insert a new weather record
            await weathercreate.Create(weatherForecast);
        }


        [HttpPut]
        public async Task Put([FromBody] WeatherForecast weatherForecast)
        {
            //update a new record
            await weatherupdate.Update(weatherForecast);
          
        }


       /* [HttpDelete("{WeatherID}")]
        public async Task Delete(string WeatherID)
        {
            //delete a record by table key value, rowid in sqlite
            await weatherdelete.Delete(WeatherID);
          
        }*/

        [HttpDelete]
        public async Task Delete([FromBody] WeatherForecast weatherForecast)
        {
            //insert a new weather record
            await weatherdelete.Delete(weatherForecast);
        }

    }
}
