import React from 'react';
import propTypes from 'prop-types';

const GuessedWords = props => {
    let contents
    if (props.guessedWords.length === 0) {
        contents = (
            <span data-test="guess-instructions">
                Try to guess the secret word!
            </span>
        );
    } else {
        const guessedWordsRows = props.guessedWords.map((word, index) => (
            <tr data-test="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ));
        contents = (
            <div data-test="guessed-words">
                <h3>Guessed Words</h3>
                <table className="table table-sm">
                    <thead className="thead-dark">
                        <tr><th>Guess</th><th>Matching Letters</th></tr>
                        </thead>
                        <tbody>
                            { guessedWordsRows }
                        </tbody>
                      </table>
                    </div>
                    );
                }

    return (
        <div data-test="component-guessed-words">
            { contents }
        </div>
    );
};

GuessedWords.propTypes = {
    guessedWords: propTypes.arrayOf(
        propTypes.shape({
            guessedWords: propTypes.string.isRequired,
            letterMatchCount: propTypes.number.isRequired
        })
    ).isRequired,
};

export default GuessedWords;
