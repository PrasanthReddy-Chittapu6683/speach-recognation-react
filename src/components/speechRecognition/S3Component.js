import React, { useState, useEffect } from "react";
import "./S3Component.css";
import CountryList from "./CountryList";

//Used for speaking . Mic will recognize
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.lang = "en-US";

function SpeakSearchSaveComponent() {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState("");
  const [savedNotes, setSavedNotes] = useState([]);
  const [countryListDefault, setCountryListDefault] = useState();
  const [countryList, setCountryList] = useState();
  const [isSearched, setIsSearched] = useState(false);

  //Initial data fetch
  const fetchData = async () => {
    return await fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(data => {
        setCountryList(data);
        setCountryListDefault(data);
      });
  };

  //After the speech data filter
  const updateInput = async note => {
    const filtered = countryListDefault.filter(country => {
      return country.name.toLowerCase().includes(note.toLowerCase());
    });

    if (filtered.length === 0) {
      return setCountryList([]);
    } else {
      setCountryList(filtered);
    }
  };

  useEffect(() => {
    handleListen();
    fetchData();
  }, [isListening]);

  //Responsible for mic speech synthesis.
  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        mic.stop();
      };
    } else {
      mic.stop();
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join("");

      setNote(transcript);

      //Speech utterance library. Will pseak for you
      let speech = new SpeechSynthesisUtterance();

      speech.lang = "en-US";
      speech.text = transcript;
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;

      window.speechSynthesis.speak(speech);
      if (isSearched) {
        updateInput(transcript);
      }
    };
  };

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note]);
    setNote("");
  };

  // Which option is chosen from radio button
  const optionhandler = e => {
    if (e.target.value.toLowerCase() === "search") {
      setIsSearched(true);
    } else {
      setIsSearched(false);
    }
  };

  return (
    <>
      <h1>Speak, Search & Save</h1>
      <h2 className="heading">
        Want to Search something but too tired to type. We are there for you.{" "}
      </h2>

      <div className="container">
        <div className="box">
          <h2>Speak </h2>
          <h5>Please select</h5>
          <span className="radio-class">
            <input
              type="radio"
              value="search"
              name="choice"
              onChange={optionhandler}
            />
            Search
            <input
              type="radio"
              value="save"
              name="choice"
              onChange={optionhandler}
            />{" "}
            Save
          </span>
          <button onClick={() => setIsListening(prevState => !prevState)}>
            {isListening ? (
              <span className="mic-size">🎙️ </span>
            ) : (
              <span className="mic-size">🛑 </span>
            )}
          </button>

          {note && isSearched ? `Hurray you searched for ${note}` : note}
          <button onClick={handleSaveNote} disabled={isSearched}>
            Save Note
          </button>
        </div>

        <div className="box">
          <h2>Searched Result</h2>
          <CountryList countryList={countryList} />
        </div>

        <div className="box">
          <h2>Save </h2>
          {savedNotes.map(n => (
            <p key={n}>{n}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default SpeakSearchSaveComponent;
