import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import TodoListPage from './pages/TodoListPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="todos" element={<TodoListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
