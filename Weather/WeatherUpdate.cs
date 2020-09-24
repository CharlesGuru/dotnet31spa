using Dapper;
using Microsoft.Data.Sqlite;
using Sqlite.DB;
using System.Threading.Tasks;
using System;

//namespace Sqlite.DB.Weather
namespace dotnet31spa
{
    public class WeatherUpdate : IWeatherUpdate
    {
        private readonly DBConfig databaseConfig;

        public WeatherUpdate(DBConfig databaseConfig)
        {
            this.databaseConfig = databaseConfig;
        }

        public async Task Update(WeatherForecast weather)
        {
            using var conn = new SqliteConnection(databaseConfig.ConnName);

            try{
            await conn.ExecuteAsync("UPDATE Weather SET Date=@Date, Temperaturec=@Temperaturec, Summary=@Summary where WeatherID = @WeatherID;" , new { WeatherID=weather.WeatherID,Date =weather.Date, Temperaturec = weather.TemperatureC, Summary= weather.Summary});
                } catch (Exception exception) {
                    Console.WriteLine(exception);
                throw;
                }
        }
    }
}