import React, {useReducer, useState} from 'react';
import {Note} from "../Note/Note";
import {v4} from 'uuid';
import {initialState, NOTES_ACTION_TYPE, NoteTypes, textEditorReducer} from "../../reducer/textEditorReducer";
import styles from './NotesList.module.scss'
import {CreateNoteComponent} from "../../components/CreateNoteComponent";

export const NotesList = () => {
    const [state, dispatch] = useReducer(textEditorReducer, initialState);

    const [creator, setCreator] = useState(false);

    const noteCreate = (title: string, text: string) => {
        dispatch({type: NOTES_ACTION_TYPE.CREATE, payload: {id: v4(), title, text, tags: []}});
    };

    const deleteHandler = (type: any, id: string) => {
        dispatch({type: type, payload: {id}});
    };

    const changeTextHandler = (id: string, text: string) => {
        dispatch({type: NOTES_ACTION_TYPE.CHANGE, payload: {id, text}});
    };

    const tagFilterHandler = (tag: string) => {
        dispatch({type: NOTES_ACTION_TYPE.FILTER, payload: {tag}});
    };

    return (
        <div className={styles.notesList_container}>
            {creator
                ? <CreateNoteComponent setCreator={setCreator} noteCreate={noteCreate}/>
                : <button onClick={() => setCreator(true)}>Create note</button>
            }
            {state.map((el: NoteTypes) => {
                return (
                    <Note
                        key={el.id}
                        id={el.id}
                        title={el.title}
                        text={el.text}
                        tags={el.tags}
                        deleteHandler={deleteHandler}
                        changeTextHandler={changeTextHandler}
                        tagFilterHandler={tagFilterHandler}
                        dispatch={dispatch}
                    />
                )
            })}

        </div>
    );
};
