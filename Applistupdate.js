import './App.css';
import ItemList from './ItemList';
import { useState } from 'react'
import ItemUpdate from './ItemUpdate';

function Applistupdate() {
  const [mode, setMode] = useState('READ');
  const [id, setId] = useState(null);
  const [items, setItems] = useState([{ id: 1, name: '책', price: 15000, tag: '교육', count: 2, date: Date.now() },
    { id: 2, name: '노트북', price: 60000, tag: '전자제품', count: 4, date: Date.now() },
    { id: 3, name: 'js', price: 10000, tag: '전산', count: 1, date: Date.now() }]);

  let content = null;
  


  
  const handleDelete = (_id) => {
    const newItems = items.filter(item => item.id !== _id);
    setItems(newItems);
    setMode('READ')
  }
  const handleChangeMode = (_mode, _id = null) => {
    setMode(_mode);
    setId(_id);
  };

  if (mode === 'READ') {
    content = <ItemList 
    items={items}
    onDelete={handleDelete} 
    onChangeMode={handleChangeMode}
    ></ItemList>;
  } else if (mode === 'CREATE') {
    content = <ItemList onCreate={(_name, _price, _tag, _count) => {
      const newItem = { id: items.length + 1, name: _name, price: _price, tag: _tag, count: _count };
      const newItems = [...items];
      newItems.push(newItem);
      setItems(newItems);
      setMode('READ');
      setId(newItem.id);
    }}></ItemList>;
  }else if (mode === 'UPDATE') {
    let itemUpdate = items.find(item => item.id === id);
    
    content = <ItemUpdate 
    data = {ItemUpdate}

    onCancel={() => {
      setMode('READ'); 
    }}

    onUpdate = {(name, price, tag, count) => {
      const newItem = items.map(item => 
        item.id === id ? {...item, name, price, tag, count} : item
      );
      setItems(newItem);
      setMode('READ');
    }}
    >
    </ItemUpdate>
  }
  

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default Applistupdate;


