import React from "react";
import { Link } from "react-router-dom";

import "./termsAndCondition.css";

export default class TermsAndCondition extends React.Component {
  state = {
    checked: false, // Whether the checknox is checked or not
    utterance: false //Whether the person is speaking or not
  };

  //Proceed button toggle disable
  activateButton = element => {
    if (element.target.checked) {
      document.getElementById("submit").disabled = false;
    } else {
      document.getElementById("submit").disabled = true;
    }
  };

  //Speech utterance function
  onLoad = () => {
    let speech = new SpeechSynthesisUtterance();

    let transcript =
      " You are expressly and emphatically restricted from all of the following publishing any Website material in any media.selling, sublicensing and/or otherwise commercializing any Website material.publicly performing and/or showing any Website material.using this Website in any way that is, or may be, damaging to this Website.using this Website in any way that impacts user access to this Website.using this Website to engage in any advertising or marketing.engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website, or while using this Website";

    speech.lang = "en-US";
    speech.text = transcript;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

    this.setState(
      {
        checked: true,
        utterance: !this.state.utterance
      },
      this.callback()
    );
  };

  //After updation of state callback
  callback = () => {
    var checkbox = document.getElementById("terms");
    checkbox.checked = true;
    document.getElementById("submit").disabled = false;

    if (this.state.utterance) {
      window.speechSynthesis.cancel();
      checkbox.checked = false;
      document.getElementById("submit").disabled = true;
    }
  };

  render() {
    return (
      <div className="entire-page">
        <div className="container-fluid">
          <div className="row terms-and-conditions-section">
            <div className="col-xs-12 text-center">
              <h1 className="title">Terms and Conditions</h1>
            </div>

            <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
              <div className="content">
                <h2 className="section-title">
                  1. You are expressly and emphatically restricted from all of
                  the following
                </h2>
                <ul>
                  <li className="section-title">
                    publishing any Website material in any media.
                  </li>

                  <li className="section-title">
                    selling, sublicensing and/or otherwise commercializing any
                    Website material.
                  </li>

                  <li className="section-title">
                    publicly performing and/or showing any Website material.
                  </li>

                  <li className="section-title">
                    using this Website in any way that is, or may be, damaging
                    to this Website.
                  </li>

                  <li className="section-title">
                    using this Website in any way that impacts user access to
                    this Website
                  </li>

                  <li className="section-title">
                    using this Website to engage in any advertising or
                    marketing.
                  </li>

                  <li className="section-title">
                    engaging in any data mining, data harvesting, data
                    extracting or any other similar activity in relation to this
                    Website, or while using this Website.
                  </li>
                </ul>
              </div>
              <div>
                <button
                  className="btn btn-primary"
                  id="utterance"
                  onClick={this.onLoad}
                  className="agree-section"
                >
                  {this.state.utterance ? "Stop" : "Say out loud"}
                </button>
                <br />
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  onChange={this.activateButton}
                />
                I Agree to Terms & Conditions
                <br />
                <br />
                <Link to="/home">
                  <button
                    id="submit"
                    className="btn btn-primary"
                    className="agree-section"
                    disabled
                  >
                    Proceed to Home page
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
