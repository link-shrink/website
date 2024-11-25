import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Loading from './pages/Loading/Loading'
import Footer from './components/Footer/Footer'
import './style/App.css'

const Home = React.lazy(() => import('./pages/Home/Home'))
const Developer = React.lazy(() => import('./pages/Developer/Developer'))
const NavigateToLink = React.lazy(() =>
  import('./components/NavigateToLink/NavigateToLink')
)

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dev" element={<Developer />} />
            <Route path="l/*" element={<NavigateToLink />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  )
}
