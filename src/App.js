import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavigateToLink from './components/NavigateToLink/NavigateToLink'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={'Loading'}>
          <Routes>
            <Route path="l/*" element={<NavigateToLink />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}
