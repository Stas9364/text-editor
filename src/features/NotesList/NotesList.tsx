import React, {useReducer, useState} from 'react';
import {Note} from "../Note/Note";
import {v4} from 'uuid';
import {initialState, NOTES_ACTION_TYPE, NoteTypes, textEditorReducer} from "../../reducer";
import {CreateNoteComponent} from "../../components";
import styles from './NotesList.module.scss'

export const NotesList = () => {
    const [state, dispatch] = useReducer(textEditorReducer, initialState);

    const [creator, setCreator] = useState(false);

    const noteCreate = (title: string, text: string) => {
        dispatch({type: NOTES_ACTION_TYPE.CREATE, payload: {id: v4(), title, text, tags: []}});
    };

    const deleteHandler = (type?: any, tag?: string, id?: string) => {
        dispatch({type: type, payload: {tag, id}});
    };

    const changeTextHandler = (id: string, text: string) => {
        dispatch({type: NOTES_ACTION_TYPE.CHANGE, payload: {id, text}});
    };

    const tagFilterHandler = (tag: string) => {
        dispatch({type: NOTES_ACTION_TYPE.FILTER, payload: {tag}});
    };

    return (
        <div className={styles.notesList_container}>
            <div className={styles.create_wrapper}>
                {creator
                    ? <CreateNoteComponent setCreator={setCreator} noteCreate={noteCreate}/>
                    : <button
                        className={styles.create_btn}
                        onClick={() => setCreator(true)}
                    >Create note</button>
                }
            </div>
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
                    />
                )
            })}

        </div>
    );
};
