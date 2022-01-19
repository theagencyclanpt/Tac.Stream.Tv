namespace Tac.Stream.Tv.WebApi.Models
{
    public class GlobalStateModel
    {
        public GlobalStateModel()
        {
            CounterStikeGameState = new CounterStikeGameState();
            ObsState = new ObsState();
        }

        public CounterStikeGameState CounterStikeGameState { get; set; }

        public ObsState ObsState { get; set; }
    }
}
