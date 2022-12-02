import React from 'react';
import {v4} from "uuid";
import {Button} from "../Button/Button";
import {NOTES_ACTION_TYPE} from "../../reducer";
import styles from "./Tag.module.scss"
import './../../App.scss'

type TagPropsType = {
    tags: Array<string>
    tagFilterHandler: (tag: string) => void
    id: string
    styles: string
    changeTextHandler: (type: any, tag: string, id: string) => void
}

export const Tag: React.FC<TagPropsType> = ({
                                                tags,
                                                tagFilterHandler,
                                                id
    , changeTextHandler
}) => {
    const onTagFilterHandler = (tag: string) => tagFilterHandler(tag);

    return (
        <ul className={styles.wrapper}>
            {tags.map(tag => {
                return (
                    <div  key={v4()}>
                        <span
                            className={styles.tag}
                            title={'Push to filter by tag'}
                            onClick={() => onTagFilterHandler(tag)}
                        >{tag}</span>
                        <Button
                            clickHandler={changeTextHandler}
                            styles={'delete_btn'}
                            type={NOTES_ACTION_TYPE.DELETE_TAG}
                            payload={{tag, id}}
                        />
                    </div>
                )
            })}
        </ul>
    );
};

