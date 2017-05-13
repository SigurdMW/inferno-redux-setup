import { render } from 'inferno';
import AppRoutes from './components/AppRoutes'
import './index.css';

// enable react devtools for inferno
import * as devtools from 'inferno-devtools';

// Render the routes and thereby the application
render(<AppRoutes />, document.getElementById('app'));
