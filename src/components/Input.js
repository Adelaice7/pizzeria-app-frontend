import React, { Component } from "react";

class Input extends Component {
  static defaultProps = {
    onChange: () => {},
  };

  render() {
    let inputClassName = "form-control";

    if (this.props.hasError !== undefined) {
      inputClassName += this.props.hasError ? " is-invalid" : " is-valid";
    }

    return (
      <div>
        {this.props.label && (
          <label htmlFor={this.props.name}>{this.props.label}</label>
        )}
        <input
          type={this.props.type || "text"}
          id={this.props.name}
          name={this.props.name}
          className={inputClassName}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
        {this.props.hasError && (
          <span className="invalid-feedback">{this.props.error}</span>
        )}
      </div>
    );
  }
}

export default Input;
