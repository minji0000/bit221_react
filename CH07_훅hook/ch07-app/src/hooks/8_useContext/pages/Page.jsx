import React from 'react'
import Content from '../layout/Content'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import {BrowserRouter} from 'react-router-dom';

function Page() {
  return (
    <div>
      <BrowserRouter>
        <Header />
          <Content/>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default Page