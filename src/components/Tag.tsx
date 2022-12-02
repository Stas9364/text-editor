import React, {Dispatch} from 'react';
import {v4} from "uuid";
import {Button} from "./Button/Button";
import {NOTES_ACTION_TYPE} from "../reducer/textEditorReducer";

type TagPropsType = {
    tags: Array<string>
    tagFilterHandler: (tag: string) => void
    dispatch: Dispatch<any>
}

export const Tag: React.FC<TagPropsType> = ({tags, tagFilterHandler, dispatch}) => {
    const onTagFilterHandler = (tag: string) => tagFilterHandler(tag);

    return (
        <ul>
            {tags.map(tag => {
                return (
                    <div key={v4()}>
                        <span
                            onClick={() => onTagFilterHandler(tag)}
                        >{tag}</span>
                        <Button type={NOTES_ACTION_TYPE.DELETE_TAG} payload={tag} dispatch={dispatch}/>
                    </div>

                )
            })}
        </ul>
    );
};

