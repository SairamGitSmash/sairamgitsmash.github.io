import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Skills from './pages/Skills.jsx'
import Experience from './pages/Experience.jsx'
import Projects from './pages/Projects.jsx'
import Education from './pages/Education.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
