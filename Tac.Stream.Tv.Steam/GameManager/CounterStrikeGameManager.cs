﻿using CSGSI;
using Microsoft.Extensions.Logging;
using System;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Tac.Stream.Tv.State;
using Tac.Stream.Tv.WebApi.Models;

namespace Tac.Stream.Tv.Steam.Games
{
    public class CounterStrikeGameManager
    {
        private GlobalStateManager _globalStateManager;
        private GameStateListener _gameStateListener;
        private ILogger<CounterStrikeGameManager> _logger;

        public CounterStrikeGameManager(ILogger<CounterStrikeGameManager> logger,
            GlobalStateManager globalStateManager)
        {
            _logger = logger;
            _gameStateListener = new GameStateListener(3000);
            _globalStateManager = globalStateManager;
        }

        public async Task StartAndConnect(string ip)
        {
            if (IsRunning())
            {
                _logger.LogWarning("The game already running.");
                return;
            }

            var oldState = _globalStateManager.GlobalState;
            oldState.CounterStikeGameState.State = CounterStikeGameStateType.Connecting;
            oldState.CounterStikeGameState.ServerAddress = ip;

            await _globalStateManager.UpdateState(oldState);

            //TODO: Adapt to UBUNTU
            ProcessStartInfo proc = new ProcessStartInfo();
            proc.FileName = @"C:\windows\system32\cmd.exe";
            proc.Arguments = "/c start steam://run/730//+connect%20"+ ip;
            Process.Start(proc);

            var timer = 0;
            _gameStateListener.NewGameState += new NewGameStateHandler((GameState gs) => OnNewGameState(gs, ip, ref timer));

            if (!_gameStateListener.Start())
            {
                _logger.LogError("Cant start the game state listener!");
                throw new Exception("Cant start the game state listener!");
            }
        }

        public void Close(bool HasCustomState)
        {
            if (!HasCustomState)
            {
                var oldState = _globalStateManager.GlobalState;
                oldState.CounterStikeGameState.State = CounterStikeGameStateType.Closed;
                oldState.CounterStikeGameState.ErrorMessages.Clear();

                _globalStateManager.UpdateState(oldState).GetAwaiter().GetResult();
            }

            Process.GetProcessesByName("csgo").FirstOrDefault()?.Kill();
        }

        public bool IsRunning()
        {
            //TODO: Adapt to UBUNTU
            return Process.GetProcessesByName("csgo").Any();
        }

        private void OnNewGameState(GameState gameState, string ip, ref int timer)
        {
            if (!String.IsNullOrEmpty(gameState.Map.Name))
            {
                var oldState = _globalStateManager.GlobalState;
                oldState.CounterStikeGameState.State = CounterStikeGameStateType.Connected;
                oldState.CounterStikeGameState.ErrorMessages.Clear();

                _globalStateManager.UpdateState(oldState).GetAwaiter().GetResult();

                _gameStateListener.Stop();
                return;
            }

            if (timer == 2 && String.IsNullOrEmpty(gameState.Map.Name))
            {
                _gameStateListener.Stop();
                
                var oldState = _globalStateManager.GlobalState;
                oldState.CounterStikeGameState.State = CounterStikeGameStateType.Aborted;
                oldState.CounterStikeGameState.ErrorMessages.Add($"Faild to connect server ip: {ip}, Counter Strike will be closed.");

                _globalStateManager.UpdateState(oldState).GetAwaiter().GetResult();

                _logger.LogError("Faild to connect server ip: {ip}, Counter Strike will be closed.", ip);
                Close(true);
            }

            timer++;
        }
    }
}
