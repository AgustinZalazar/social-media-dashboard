import React, { useRef, useEffect, useState } from "react";
import './styles/switch.css';

const Switch = () => {

  const ref = useRef(null)
  const [checked , setChecked] = useState(false)

  const handleChange = () =>{
      setChecked(ref.current.checked)
      if (ref.current.checked) {
        document.body.classList.remove('is-light-mode')
        document.body.classList.add('is-dark-mode')
      } else {
        document.body.classList.add('is-light-mode')
        document.body.classList.remove('is-dark-mode')
      }
  }

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setChecked(true)
    }
  }, [])

  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Dark Mode</p>
      <input  ref={ ref } onChange = { handleChange } checked= { checked } className="checkbox" type="checkbox" id="checkbox" />
      <label className="switch" htmlFor="checkbox"></label>
    </div>
  );
};

export default Switch;
