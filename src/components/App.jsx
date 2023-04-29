import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { AppBar } from './AppBar/AppBar';
import { Column } from './Column/Column';

export const App = () => {
  return (
    <div>
      <AppBar />
      <DndProvider backend={HTML5Backend}>
        <div
          style={{ display: 'flex', justifyContent: 'center', height: '100%' }}
        >
          <Column />
        </div>
      </DndProvider>
    </div>
  );
};
