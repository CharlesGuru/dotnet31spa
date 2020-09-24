using Dapper;
using Microsoft.Data.Sqlite;
using Sqlite.DB;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;

//namespace Sqlite.DB.Weather
namespace dotnet31spa
{
    public class WeatherGet : IWeatherGet
    {
        
        private readonly DBConfig databaseConfig;

        public WeatherGet(DBConfig databaseConfig)
        {
            this.databaseConfig = databaseConfig;
        }

        public async Task<IEnumerable<WeatherForecast>> Get()
        {
            using var conn = new SqliteConnection(databaseConfig.ConnName);

            try{
                return await conn.QueryAsync<WeatherForecast>("SELECT WeatherId, Date, TemperatureC, Summary FROM Weather;");
                } catch (Exception exception) {
                    Console.WriteLine(exception);
                throw;
                }
        }
    }
}
