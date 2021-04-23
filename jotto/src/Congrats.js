import React from 'react';
import propTypes from 'prop-types';

const Congrats = (props) => {
        if (props.success) {
            return (
            <div data-test="component-congrats" className="alert alert-success" >
                <span data-test="congrats-message">
                Congratulations! You guessed the word!
                </span>
            </div>
            );
        } else {
            return (
                <div data-test="component-congrats" />
            );
        }
    }

    Congrats.propTypes = {
        success: propTypes.bool.isRequired,
    };

export default Congrats;
