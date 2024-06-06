import {createRoot} from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma';
import './index.scss';
import {Root} from "./root";

const container = document.getElementById('root') as HTMLElement;


createRoot(container)
  .render(<Root />);
