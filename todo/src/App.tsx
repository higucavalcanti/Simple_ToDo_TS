import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';

const App = () => {
  const [list, setlist] = useState<Item[]>([
    { id: 1, name: 'Comprar um pão', done: false },
    { id: 2, name: 'Comprar um escova', done: false }
  ]);

  return (
      <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>

          {/* Área de adicionar nova Tarefa */}

          {list.map((item, index)=>(
            <div>...</div>
          ))}

        </C.Area>
      </C.Container>
  );
}

export default App;