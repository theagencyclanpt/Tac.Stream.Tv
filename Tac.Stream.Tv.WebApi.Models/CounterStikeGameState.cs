using System.Collections.Generic;

namespace Tac.Stream.Tv.WebApi.Models
{
    public class CounterStikeGameState
    {
        public CounterStikeGameState()
        {
            ErrorMessages = new List<string>();
            State = CounterStikeGameStateType.Closed;
        }

        public string ServerAddress { get; set; }

        public CounterStikeGameStateType State { get; set; }

        public List<string> ErrorMessages { get; set; }
    }
}
