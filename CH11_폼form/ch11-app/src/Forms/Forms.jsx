import React from 'react'
import FileInput from './FileInput'
import NameForm from './NameForm'
import FruitSelect from './FruitSelect'

function Forms() {
  return (
    <div className='container mt-5'>
      <NameForm></NameForm>
      <FruitSelect></FruitSelect>
      <FileInput></FileInput>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12661.07833637804!2d127.021089981026!3d37.501559428431825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca158f52f0673%3A0x7e2247a87da80045!2zQ0dWIOqwleuCqA!5e0!3m2!1sko!2skr!4v1659418939594!5m2!1sko!2skr" width="600" height="450" style={{border:0}} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Forms