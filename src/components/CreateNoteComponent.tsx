import React, {useState} from 'react';

type CreateNoteComponentType = {
    setCreator: (creator: boolean) => void
    noteCreate: (title: string, text: string) => void
}

export const CreateNoteComponent: React.FC<CreateNoteComponentType> = ({setCreator, noteCreate}) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const onSaveHandler = () => {
        setCreator(false);
        noteCreate(title, text);
    }
    return (
        <div >
            <div>
                <input
                    type="text"
                    placeholder='Insert title'
                    value={title}
                    onChange={(e)=>setTitle(e.currentTarget.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder='Insert note text'
                    value={text}
                    onChange={(e)=>setText(e.currentTarget.value)}
                />
            </div>
            <button onClick={onSaveHandler}>Save</button>
        </div>
    );
};

