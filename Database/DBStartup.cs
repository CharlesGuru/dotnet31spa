using Dapper;
using Microsoft.Data.Sqlite;
using System.Linq;
using System;
using dotnet31spa;

namespace Sqlite.DB
{
    public class DBStartup : IDBStartup
    {
        private readonly DBConfig databaseConfig;

        public DBStartup(DBConfig databaseConfig)
        {
            this.databaseConfig = databaseConfig;
        }

        public void Setup()
        {
            //create table and data if they dont exist for this demo
            using (var conn = new SqliteConnection(databaseConfig.ConnName)){

                string[] Summaries = new[]
                {
                    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
                };

                var table = conn.Query<string>("SELECT name FROM sqlite_master WHERE type='table' AND name = 'Weather';");
                var tableName = table.FirstOrDefault();
                if (!string.IsNullOrEmpty(tableName) && tableName == "Weather"){
                    
                    //clear out the table if it exists to somewhat simulate original behavior of the app
                   // by inserting new random data each time application runs
                    conn.Execute("DELETE FROM Weather;");
                    

                }
                else
                {
                    //Create table since it does not exist
                    //use sql lite rowid if key is needed,  added automatically by Sqlite,  select id as weatherid
                    conn.Execute("Create Table Weather ( WeatherID INTEGER PRIMARY kEY AUTOINCREMENT," +
                        "Date DATETIME NOT NULL," +
                        "TemperatureC INT NOT NULL," +
                        "Summary varchar(255) NULL);");
                }

                //insert the random data into the weather table
                var sql = "INSERT INTO Weather (Date, TemperatureC, Summary) VALUES (@Date, @TemperatureC, @Summary);";
                

                var rng = new Random();
                var weatherdata =  Enumerable.Range(1, 5).Select(index => new WeatherForecast
                    {
                        Date = DateTime.Now.AddDays(index),
                        TemperatureC = rng.Next(-20, 55),
                        Summary = Summaries[rng.Next(Summaries.Length)]
                    })
                    .ToArray();

                var affectedRows =  conn.Execute(sql, weatherdata);
                Console.WriteLine($"Affected Rows: {affectedRows}");
                    

                 
            }
        }
    }
}
