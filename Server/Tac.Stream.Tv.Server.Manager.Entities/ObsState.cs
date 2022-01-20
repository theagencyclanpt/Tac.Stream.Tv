using System.Collections.Generic;

namespace Tac.Stream.Tv.Server.Manager.Entities
{
    public class ObsState
    {
        public ObsState()
        {
            ErrorMessages = new List<string>();
            State = ObsStateType.Closed;
        }

        public ObsStateType State { get; set; }

        public List<string> ErrorMessages { get; set; }

        public string CurrenteScene { get; set; }

        public string PreviewScene { get; set; }
    }
}
