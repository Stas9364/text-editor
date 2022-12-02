import React from 'react';
import styles from './Note.module.scss';
import './../../App.scss'
import {EditableTextField} from "../../components";
import {NOTES_ACTION_TYPE} from "../../reducer";
import {Button} from "../../components";
import {Tag} from "../../components";

type NotePropsType = {
    id: string
    title: string
    text: string
    tags: Array<string>
    deleteHandler: (type: any, tag: string, id: string) => void
    changeTextHandler: (id: string, text: string) => void
    tagFilterHandler: (tag: string) => void
}

export const Note: React.FC<NotePropsType> = ({
                                                  text,
                                                  title,
                                                  id,
                                                  tags,
                                                  deleteHandler,
                                                  changeTextHandler,
                                                  tagFilterHandler,
                                              }) => {
    return (
        <div className={styles.note_container}>
            <div className={styles.title_container}>
                <h2>{title}</h2>
                <Button
                    styles={'delete_btn'}
                    type={NOTES_ACTION_TYPE.DELETE}
                    payload={{id}}
                    clickHandler={deleteHandler}
                />
            </div>
            <EditableTextField
                key={id}
                id={id}
                text={text}
                changeTextHandler={changeTextHandler}
            />
            <Tag
                changeTextHandler={deleteHandler}
                styles={styles.close_btn}
                tags={tags}
                tagFilterHandler={tagFilterHandler}
                id={id}
            />
        </div>
    );
};

