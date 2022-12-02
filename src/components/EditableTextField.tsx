import React, {ChangeEvent, useState} from 'react';

type EditableTextFieldProps = {
    id: string
    text: string
    changeTextHandler: (id: string, text: string) => void
}

export const EditableTextField: React.FC<EditableTextFieldProps> = ({id, text, changeTextHandler}) => {
    const [editMode, setEditMode] = useState(false);
    const [textValue, setTextValue] = useState(text)

    const activateEditMode = () => setEditMode(true);

    const addStyles = (wor: string) => {
        let styledText: (string | JSX.Element)[] = [];
        let arrText = wor.split(' ');

        arrText.forEach(w => w[0] === '#' ? styledText.push(`<span> ${w} </span>`) : styledText.push(w))
        console.log(styledText.join(' '))
        return styledText.join(' ')
    }

    const activateViewMode = () => {
        setEditMode(false);
        changeTextHandler(id, textValue);
    };

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => setTextValue(e.currentTarget.value);

    return (
        <>
            {
                editMode
                    ? <input
                        type="text"
                        value={textValue}
                        onBlur={activateViewMode}
                        onChange={inputHandler}
                        autoFocus
                    />
                    : <div
                        title={'Double click to change text'}
                        onDoubleClick={activateEditMode}
                    >{text}</div>
            }
            {/*<div>{ addStyles('I bought #some milk') }</div>*/}
        </>
    );
};

