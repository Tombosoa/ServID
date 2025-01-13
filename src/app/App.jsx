import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import { AuthProvider } from '@descope/react-sdk'
import Dashboard from '../pages/Dashboard'

function App() {
  return (
    <AuthProvider projectId={import.meta.env.VITE_APP_DESCOPE_PROJECT_ID}>
      <div>
      <Router>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/login" Component={Login}/>
            <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </div>
    </AuthProvider>
  )
}

export default App
