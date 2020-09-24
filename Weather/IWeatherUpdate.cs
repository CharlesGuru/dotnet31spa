using System.Threading.Tasks;

//namespace Sqlite.DB.Weather
namespace dotnet31spa
{
    public interface IWeatherUpdate
    {
        Task Update(dotnet31spa.WeatherForecast weatherforcast);
    }
}