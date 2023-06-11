import React from 'react';
import './styles.css'

interface BlockProps {
    element: { id?: string, name: string }
}

const Block = ({element}: BlockProps) => {

    function handleOnDrag(e: React.DragEvent, type: string) {
        e.dataTransfer.setData('type', type)
    }

    return (
        <div draggable onDragStart={(e) => handleOnDrag(e, element.name)} className='block'>
            <h3>{element.name}</h3>
        </div>
    );
};

export default Block;