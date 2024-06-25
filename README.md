# Tic-Tac-Toe Game

This is a simple Tic-Tac-Toe game built with React. It allows two players to play the game, tracks the game turns, determines the winner, and offers a rematch option.

## Features

- **Player Info**: Displays the current players and highlights the active player.
- **Game Board**: Allows players to take turns marking squares.
- **Game Log**: Keeps track of the turns taken by each player.
- **Game Over**: Declares the winner or a draw and offers a rematch option.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/tic-tac-toe.git
cd tic-tac-toe
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

## Components

### App

The main component that maintains the state of the game, including the players, game turns, and the game board.

### PlayerInfo

Displays information about the players, including their names and active status. Allows players to change their names.

### GameBoard

Displays the 3x3 game board. Handles player moves by calling the `onSelectPlayer` prop function.

### Log

Displays a log of all the turns taken in the game.

### GameOver

Displays the winner or a draw message and provides a button to start a new game.

## State Derivation Functions

### deriveActivePlayer

Determines the active player based on the game turns.

### deriveGameBoard

Generates the current state of the game board based on the game turns.

### deriveWinner

Checks the game board for a winning combination and returns the winner, if any.

## Usage

### Starting a Game

- When the app is loaded, it initializes with an empty game board and default player names.
- Players take turns clicking on the squares to mark their symbol (X or O).

### Determining the Winner

- The app checks for a winner after each turn.
- If a player has won, the `GameOver` component displays the winner's name.
- If all squares are filled and there is no winner, the game is declared a draw.

### Rematch

- Players can start a new game by clicking the rematch button in the `GameOver` component.

### Changing Player Names

- Players can change their names using the `PlayerInfo` component


## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details
