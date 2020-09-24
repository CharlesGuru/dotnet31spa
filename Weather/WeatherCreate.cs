using Dapper;
using Microsoft.Data.Sqlite;
using Sqlite.DB;
using System.Threading.Tasks;
using System;

//namespace Sqlite.DB.Weather
namespace dotnet31spa
{
    public class WeatherCreate : IWeatherCreate
    {
        private readonly DBConfig databaseConfig;

        public WeatherCreate(DBConfig databaseConfig)
        {
            this.databaseConfig = databaseConfig;
        }

        public async Task Create(WeatherForecast weather)
        {
            using var conn = new SqliteConnection(databaseConfig.ConnName);

        try{
            //WeatherID is auto increment
            await conn.ExecuteAsync("INSERT INTO Weather (Date, Temperaturec, Summary)" +
                "VALUES (@Date, @Temperaturec, @Summary);", new { Date =weather.Date, Temperaturec = weather.TemperatureC, Summary= weather.Summary} );

            }
                catch (Exception exception) {
                Console.WriteLine(exception);
                throw;
            }


        }
    }
}
