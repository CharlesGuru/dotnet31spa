using System.Collections.Generic;
using System.Threading.Tasks;

//namespace Sqlite.DB.Weather
namespace dotnet31spa
{
    public interface IWeatherGet
    {
        Task<IEnumerable<WeatherForecast>> Get();
    }
}