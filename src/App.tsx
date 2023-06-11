import React, {useState} from 'react';
import Block from "./components/Block";
import './styles.css'
import Modal from "./components/Modal";

function App() {
    const arrayElement = [
        {id: '0', name: '0'},
        {id: '1', name: '1'},
        {id: '2', name: '2'},
        {id: '3', name: '3'},
        {id: '4', name: '4'},
        {id: '5', name: '5'},
        {id: '6', name: '+'},
        {id: '7', name: '/'},
    ]
    const [elements, setElements] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);


    const handleOnDrop = (e: React.DragEvent) => {
        if (elements.length < 3) {
            const type = e.dataTransfer.getData('type') as string;
            if ((elements.length === 0 || elements.length === 2) && (Number(type) >= 0)) {
                setElements([...elements, type]);
            } else if (elements.length === 1 && !(Number(type) >= 0)) {
                setElements([...elements, type]);
            }
        }
    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    }

    const result = () => {
        if(elements.length > 2) {
            setIsOpen(true)
        }
    }

    return (
        <div className='main'>
            <div className='block_list'>
                {arrayElement.map(element => <Block key={element.id} element={element}/>)}
            </div>
            <div className='canvas' onDrop={handleOnDrop} onDragOver={handleDragOver}>
                {elements.map(el => <Block key={el} element={{name: el}}/>)}
            </div>
            <div className="btn_container">
                <button className='btn' onClick={result}>Результат</button>
                <button className='btn' onClick={() => setElements([])}>Рестарт</button>
            </div>
            {isOpen && (
                <Modal isOpen={isOpen} setIsOpen={setIsOpen} elements={elements} />
            )}
        </div>
    );
}

export default App;
