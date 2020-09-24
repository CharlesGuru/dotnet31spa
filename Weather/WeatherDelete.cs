using Dapper;
using Microsoft.Data.Sqlite;
using Sqlite.DB;
using System.Threading.Tasks;
using System;

//namespace Sqlite.DB.Weather
namespace dotnet31spa
{
    public class WeatherDelete : IWeatherDelete
    {
        private readonly DBConfig databaseConfig;

        public WeatherDelete(DBConfig databaseConfig)
        {
            this.databaseConfig = databaseConfig;
        }

        public async Task Delete(WeatherForecast weather)
        {
            using var conn = new SqliteConnection(databaseConfig.ConnName);

            try {

                await conn.ExecuteAsync("DELETE FROM Weather where  WeatherID = @WeatherID;" , new { WeatherID =weather.WeatherID});
                
                } catch (Exception exception) {
                    Console.WriteLine(exception);
                throw;
                }

            }



    }
}

