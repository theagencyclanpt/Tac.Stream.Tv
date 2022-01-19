namespace Tac.Stream.Tv.WebApi.Models
{
    public enum ObsStateType
    {
        Opening = 0,
        Opened= 1,
        Closed = 2,
        Closing = 3,
        StartingStream = 4,
        Streaming = 5,
        StopingStream = 6,
        ChangingScene = 7,
        ChangedScene = 8,
        Aborted = 9
    }
}
