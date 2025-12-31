import { TransitionProvider } from './context/TransitionContext.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout.jsx';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <TransitionProvider>
                <MainLayout />
            </TransitionProvider>
        </Router>
    )
}

export default App;