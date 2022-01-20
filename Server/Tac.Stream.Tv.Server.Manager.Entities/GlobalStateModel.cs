namespace Tac.Stream.Tv.Server.Manager.Entities
{
    public class GlobalState
    {
        public GlobalState()
        {
            CounterStikeGameState = new CounterStikeGameState();
            ObsState = new ObsState();
        }

        public CounterStikeGameState CounterStikeGameState { get; set; }

        public ObsState ObsState { get; set; }
    }
}
