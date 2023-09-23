
import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/ListItem/AddArea';

const App = () => {
  const [list, setlist] = useState<Item[]>([
    { id: 1, name: 'Comprar um pão', done: false },
    { id: 2, name: 'Comprar um escova', done: true }
  ]);

  return (
      <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>

          <AddArea />

          {list.map((item, index)=>(
            <ListItem key={index} item={item} />
          ))}

        </C.Area>
      </C.Container>
  );
}

export default App;