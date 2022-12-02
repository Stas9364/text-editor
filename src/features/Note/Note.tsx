import React, {Dispatch} from 'react';
import styles from './Note.module.scss';
import {EditableTextField} from "../../components/EditableTextField";
import {NOTES_ACTION_TYPE} from "../../reducer/textEditorReducer";
import {Button} from "../../components/Button/Button";
import {Tag} from "../../components/Tag";

type NotePropsType = {
    id: string
    title: string
    text: string
    tags: Array<string>
    deleteHandler: (type: any, id: string) => void
    changeTextHandler: (id: string, text: string) => void
    tagFilterHandler: (tag: string) => void
    dispatch: Dispatch<any>
}

export const Note: React.FC<NotePropsType> = ({
                                                  text,
                                                  title,
                                                  id,
                                                  tags,
                                                  deleteHandler,
                                                  changeTextHandler,
                                                  tagFilterHandler,
                                                  dispatch
                                              }) => {

    return (
        <div className={styles.note_container}>
            <div className={styles.title_container}>
                <h2>{title}</h2>
                <Button
                    type={NOTES_ACTION_TYPE.DELETE}
                    payload={id}
                    dispatch={dispatch}/>
            </div>
            <EditableTextField
                id={id}
                text={text}
                changeTextHandler={changeTextHandler}
            />
            <Tag tags={tags} tagFilterHandler={tagFilterHandler} dispatch={dispatch}/>
        </div>
    );
};

