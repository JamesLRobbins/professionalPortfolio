import React from "react";
import "./Portfolio.css";
import Wrapper from "../Wrapper/Wrapper";
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';   

function Projects() {

    const useStyles = makeStyles(theme => ({
        customWidth: {
          maxWidth: 500,
          fontSize: 20,
          textAlign: "center"
        },
        noMaxWidth: {
          maxWidth: 'none',
        },
      }));

    const wordGuess = "Can you guess the correct classic video game?"
    const triviaGame = "How well do you know 90's Nickelodeon?"
    const crystalGame = "Can you figure out what each crystal is worth without going over the limit?"
    const trainSchedule = "A simple to use Train Scheduler"
    const liri = "A simple interface that allows users to search for songs, bands, and concerts"
    const bamazon = "Search for available products as a customer, or manage inventory as a manager"
    const vacation = "Can't decide where to go for vacation?  Let us help!"
    const friendFinder = "Which video game character would you be best friends with?"
    const LBK2GO = "A easy to use queue system for live band karaoke"
    const clickyGame = "A fun memory game.  Don't click the same image twice"
    const burger = "Add a burger, eat a burger"
    const listAssist = "Pick which recipes you want to make and we'll generate your grocery list"
    const classes = useStyles()
    
    return (
        <div className="container projects">
            <Wrapper>
            <div className="row">
               <div className="col-md-4">
                   <Tooltip title={wordGuess} classes={{ tooltip: classes.customWidth }}><a href="https://jameslrobbins.github.io/Word_Guess_Game/" target="_blank" rel="noopener noreferrer"><img src={require("../../Images/Word_Guess.png")} alt="Word Guess" className="projectsImg hvr-grow-shadow ui" data-tooltip="Add users to your feed" data-position="top right" /></a></Tooltip>
                   <p className="project">Word Guess</p>
                   <p className="git hvr-grow"><a href ="https://github.com/JamesLRobbins/Word_Guess_Game" target="_blank" rel="noopener noreferrer">GitHub</a></p>
               </div>
               <div className="col-md-4">
                   <Tooltip title={triviaGame} classes={{ tooltip: classes.customWidth }}><a href="https://jameslrobbins.github.io/TriviaGame/" target="_blank" rel="noopener noreferrer"><img src={require("../../Images/Trivia_Game.png")} alt="Trivia Game" className="projectsImg hvr-grow-shadow "/></a></Tooltip>
                   <p className="project">Trivia Game</p>
                   <p className="git hvr-grow "><a href ="https://github.com/JamesLRobbins/TriviaGame" target="_blank" rel="noopener noreferrer">GitHub</a></p>
               </div>
               <div className="col-md-4">
                    <Tooltip title={crystalGame} classes={{ tooltip: classes.customWidth }}><a href="https://jameslrobbins.github.io/unit-4-game/" target="_blank" rel="noopener noreferrer"><img src={require("../../Images/Crystal_Game.png")} alt="Crystal Game" className="projectsImg hvr-grow-shadow "/></a></Tooltip>
                   <p className="project">Crystal Game</p>
                   <p className="git hvr-grow "><a href ="https://github.com/JamesLRobbins/unit-4-game" target="_blank" rel="noopener noreferrer">GitHub</a></p>
               </div>
           </div>

           <br />

           <div className="row">
               <div className="col-md-4">
                   <Tooltip title={trainSchedule} classes={{ tooltip: classes.customWidth }}><a href="https://jameslrobbins.github.io/TrainScheduler/" target="_blank" rel="noopener noreferrer"><img src={require("../../Images/Train_Schedule.png")} alt="Train Schedule" className="projectsImg hvr-grow-shadow" /></a></Tooltip>
                   <p className="project">Train Schedule</p>
                   <p className="git hvr-grow "><a href ="https://github.com/JamesLRobbins/TrainScheduler" target="_blank" rel="noopener noreferrer">GitHub</a></p>
               </div>
                <div className="col-md-4">
                    <Tooltip title={liri} classes={{ tooltip: classes.customWidth }}><a href="https://github.com/JamesLRobbins/liri-node-app" target="_blank" rel="noopener noreferrer"><img src={require("../../Images/liri.jpg")} alt="Liri" className="projectsImg hvr-grow-shadow" /></a></Tooltip>
                    <p className="project">LIRI</p>
                    <p className="git hvr-grow "><a href ="https://github.com/JamesLRobbins/liri-node-app" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                </div>
                <div className="col-md-4">
                    <Tooltip title={bamazon} classes={{ tooltip: classes.customWidth }}><a href="https://github.com/JamesLRobbins/bamazon" target="_blank" rel="noopener noreferrer"><img src={require("../../Images/bamazon.jpg")} alt="Bamazon" className="projectsImg hvr-grow-shadow" /></a></Tooltip>
                    <p className="project">Bamazon</p>
                    <p className="git hvr-grow "><a href ="https://github.com/JamesLRobbins/bamazon" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                </div>
           </div>  

           <br />

           <div className="row">
            <div className="col-md-4">
                <Tooltip title={vacation} classes={{ tooltip: classes.customWidth }}><a href="https://tardyparty.github.io/groupProjectOne/" target="_blank" rel="noopener noreferrer"><img src={require("../../Images/Vacation Roulette.jpg")} alt="Vacation Roulette" className="projectsImg hvr-grow-shadow" /></a></Tooltip>
                <p className="project">Vacation Roulette</p>
                <p className="git hvr-grow "><a href ="https://github.com/tardyparty/groupProjectOne" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            </div>
             <div className="col-md-4">
                 <Tooltip title={friendFinder} classes={{ tooltip: classes.customWidth }}><a href="https://stark-headland-85145.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={require("../../Images/Friend-FInder.jpg")} alt="Friend-Finder" className="projectsImg hvr-grow-shadow" /></a></Tooltip>
                 <p className="project">Friend Finder</p>
                 <p className="git hvr-grow "><a href="https://github.com/JamesLRobbins/Friend-Finder" target="_blank" rel="noopener noreferrer">GitHub</a></p>
             </div>
             <div className="col-md-4">
                <Tooltip title={LBK2GO} classes={{ tooltip: classes.customWidth }}><a href="https://desolate-bastion-33905.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={require("../../Images/LBK2GO.png")} alt="LBK2GO" className="projectsImg hvr-grow-shadow" /></a></Tooltip>
                <p className="project">LBK2GO</p>
                <p className="git hvr-grow "><a href="https://github.com/tomboygitty/Project-2" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            </div>
        </div> 

        <br />

            <div className="row">
                <div className="col-md-4">
                    <Tooltip title={clickyGame} classes={{ tooltip: classes.customWidth }}><a href="https://jameslrobbins.github.io/clickyGame/" target="_blank" rel="noopener noreferrer"><img src={require("../../Images/clickyGame.png")} alt="Clicky Game" className="projectsImg hvr-grow-shadow" /></a></Tooltip>
                    <p className="project">Clicky Game</p>
                    <p className="git hvr-grow "><a href="https://github.com/JamesLRobbins/clickyGame" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                </div>
                <div className="col-md-4">
                    <Tooltip title={burger} classes={{ tooltip: classes.customWidth }}><a href="https://arcane-brushlands-31256.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={require("../../Images/burger.png")} alt="Burger" className="projectsImg hvr-grow-shadow" /></a></Tooltip>
                    <p className="project">Eat-Da-Burger</p>
                    <p className="git hvr-grow "><a href="https://github.com/JamesLRobbins/burger" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                </div>  
                <div className="col-md-4">
                    <Tooltip title={listAssist} classes={{ tooltip: classes.customWidth }}><a href="https://listassist.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src={require("../../Images/listAssist.png")} alt="List Assist" className="projectsImg hvr-grow-shadow" /></a></Tooltip>
                    <p className="project">List Assist</p>
                    <p className="git hvr-grow "><a href="https://github.com/JamesLRobbins/listAssist" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                </div>
            </div>   
            </Wrapper> 
        </div>   
    )


}

export default Projects;
