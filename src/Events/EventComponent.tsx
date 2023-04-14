import React from 'react';

const EventComponent: React.FC = () => {

    // TS only does Type inference on change Event handler when
    // it is inline based on the input component which provides
    // already provides type declarations.

    // ChangeEvent only apply to events that can be changed i.e. textInputs, textArea, radio buttons, checkboxes.
    // How do we apply to these other types of events.
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => console.log(event)

    const onDragStart = (event: React.DragEvent<HTMLInputElement>) => console.log('im being dragged')

    return (
        <div>
            <input onChange={changeHandler} />
            <div draggable onDragStart={onDragStart}>
                Drag Me !
            </div>
        </div>

    )
}


export default EventComponent;