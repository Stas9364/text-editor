import React, {Dispatch} from 'react';
import {NOTES_ACTION_TYPE} from "../../reducer/textEditorReducer";
import styles from './Button.module.scss';

type ButtonPropsType = {
    type: NOTES_ACTION_TYPE
    payload: string
    dispatch: Dispatch<any>
}

export const Button: React.FC<ButtonPropsType> = ({type, payload, dispatch}) => {
    const deleteHandler = () => dispatch({type, payload});

    return (
        <span
            className={styles.close_btn}
            onClick={deleteHandler}
        >X</span>
    );
};

