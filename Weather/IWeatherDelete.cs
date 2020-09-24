using System.Threading.Tasks;

//namespace Sqlite.DB.Weather
namespace dotnet31spa
{
    public interface IWeatherDelete
    {
        Task Delete(dotnet31spa.WeatherForecast weatherforcast);
    }
}