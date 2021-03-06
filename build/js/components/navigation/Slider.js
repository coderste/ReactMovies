import React, { Component } from 'react';
import InputRange from 'react-input-range';

class Slider extends Component {
    onChange = range => {
        this.props.onChange({
            type: this.props.data.label,
            value: range,
        });
    };

    render() {
        const { min, max, step, value, label } = this.props.data;

        return (
            <div className="movie-slider movie-nav__item">
                <label>{label}</label>
                <InputRange
                    minValue={min}
                    maxValue={max}
                    step={step}
                    onChange={this.onChange}
                    value={value}
                />
            </div>
        );
    }
}

export default Slider;
