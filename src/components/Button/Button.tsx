import React from 'react';
import {NOTES_ACTION_TYPE} from "../../reducer";

type ButtonPropsType = {
    type?: NOTES_ACTION_TYPE
    payload?: { tag?: string, id: string }
    styles: string
    clickHandler: (type: any, tag: string, id: string) => void
}

export const Button: React.FC<ButtonPropsType> = ({
                                                      type,
                                                      payload,
                                                      styles,
                                                      clickHandler
                                                  }) => {
    const {id, tag} = payload as { tag?: string, id: string };

    const onClickHandler = () => {
        clickHandler(type, tag as string, id)
    };

    return (
        <span
            title='Delete'
            className={styles}
            onClick={onClickHandler}
        >X</span>
    );
};

