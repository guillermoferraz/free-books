/* eslint-disable valid-typeof */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-concat */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useSpeechSynthesis } from 'react-speech-kit';

const Search = () => {
  const { speak, voices } = useSpeechSynthesis();
  
  const [text, setText] = useState('')
  const [stop, setStop] = useState(false)
  const [langActive, setLangActive] = useState('es')
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  useEffect(() => {
    typeof window !== undefined && setLangActive(`${localStorage.getItem('lng')}`)
  },[])
  const voice = voices[langActive === 'es' ? 7 : langActive === 'en' ? 4 : 7];
  /*es 7 */
  /*en 4*/
  /*pr 16 */
  /* useEffect(() => {
    if (transcript){
     setTimeout( speak({
      text: 'Buscar' + ' ' + transcript,
      voice: voice
    }), 1500)
    }
  },[transcript])*/
  useEffect(() => {
    if(transcript) setText(transcript)
  },[transcript])

  const handleSpeak = (type: string) => {
    if(type === 'TALK'){
      SpeechRecognition.startListening()
      setStop(false)
    }
    if(type === 'STOP'){
      SpeechRecognition.stopListening()
      setStop(true)
    }
  }

  useEffect(() => {
    if(text && text !== '' && stop){
      speak({
        text: 'Buscar' + ' ' + transcript,
        voice: voice
      })
      setStop(false)
      setText('')
    }
  },[text, stop])

  

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <br />
      <button onClick={() => handleSpeak('TALK')}>Start</button>
      <br />
      <button onClick={() =>  handleSpeak('STOP')}>Stop</button>
      <br />
      <button onClick={() => resetTranscript()}>Reset</button>
      <br />
      <p>{transcript}</p>
      <h1>{text}</h1>
      <br />
    </div>
  );
};
export default Search;