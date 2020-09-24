using System.Threading.Tasks;

//namespace Sqlite.DB.Weather
namespace dotnet31spa
{
    public interface IWeatherCreate
    {
        Task Create(dotnet31spa.WeatherForecast weatherforcast);
    }
}