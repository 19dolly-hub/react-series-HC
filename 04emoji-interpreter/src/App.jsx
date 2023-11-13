import { useState } from 'react';
import './App.css'

function App() {
  const dataObj = {
    "😅": "i'm a little shy",
    "🤣": "LMAO",
    "🤔": "it's a bit confusing",
    "😍": "i'm feeling lovely"
  };

  const emojiList = Object.keys(dataObj);

  const [meaning, setMeaning] = useState("");
  const [emoji, setEmoji] = useState("");

  const getEmoji = (e) => {
    setEmoji(e.target.value);
  };

  const getMeaning = () => {
    if(dataObj[emoji] !== undefined) setMeaning(dataObj[emoji])
    else setMeaning("Can't interpet this emoji !")
  };

  // const getMeaning = (e) => {
  //   if(dataObj[e.target.value] !== undefined) setMeaning(dataObj[e.target.value])
  //   else setMeaning("Can't interpet this emoji !")
  // };

  return (
    <>
      <h1>Emoji interpreter</h1>
      <input type="text" placeholder='Enter your emoji here...' onChange={getEmoji}/>
      {/* <input type="text" placeholder='Enter your emoji here...' onChange={getMeaning}/> */}

      <p>OR</p>
      <h4>Select from below :</h4>

      {/* <input type="radio" name="emoji" id="emoji1" value="😅" onChange={getEmoji}/>
      <label htmlFor="emoji1">😅</label>

      <input type="radio" name="emoji" id="emoji2" value="🤣" onChange={getEmoji}/>
      <label htmlFor="emoji2">🤣</label>

      <input type="radio" name="emoji" id="emoji3" value="🤔" onChange={getEmoji}/>
      <label htmlFor="emoji3">🤔</label>

      <input type="radio" name="emoji" id="emoji4" value="😍" onChange={getEmoji}/>
      <label htmlFor="emoji4">😍</label> */}

      {
        // emojiList.map(emoji => <span key={emoji}>{emoji}</span>)
        emojiList.map(emoji => <span key={emoji}>
          <input type="radio" name="emoji" id={emoji} value={emoji} onChange={getEmoji}/>
          <label htmlFor={emoji}>{emoji}</label>
        </span>)
      }
      <button type="button" onClick={getMeaning}>Get meaning</button>
      <p className="output">{meaning}</p>
    </>
  )
}

export default App
