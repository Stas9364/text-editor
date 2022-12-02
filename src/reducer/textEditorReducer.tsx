import {v4} from "uuid";
import {tagsCreator} from "../utils/tagsCreator";

export enum NOTES_ACTION_TYPE {
    CREATE = 'CREATE',
    CHANGE = 'CHANGE',
    DELETE = 'DELETE',
    FILTER = 'FILTER',
    DELETE_TAG = 'DELETE_TAG'
}

type TextEditorActions = {
    type: NOTES_ACTION_TYPE,
    payload: {
        id?: string
        title?: string
        text?: string
        tags?: Array<string>
        tag?: string
    }
}

export type NoteTypes = {
    id: string
    title: string
    text: string
    tags: Array<string>
};

export const initialState: Array<NoteTypes> = [
    {
        id: v4(),
        title: 'first',
        text: 'I bought some milk',
        tags: []
    },
    {
        id: v4(),
        title: 'second',
        text: 'I bought some coffee',
        tags: []
    },
    {
        id: v4(),
        title: 'third',
        text: 'I bought some water',
        tags: []
    },
];


export function textEditorReducer(state: Array<NoteTypes>, action: TextEditorActions): any {
    switch (action.type) {
        case NOTES_ACTION_TYPE.CREATE:
            return [...state, action.payload];
        case NOTES_ACTION_TYPE.DELETE:
            return state.filter(el => el.id !== action.payload);
        case NOTES_ACTION_TYPE.CHANGE:
            return state.map(el => el.id === action.payload.id
                ? {...el, text: action.payload.text, tags: tagsCreator(action.payload.text)}
                : el);
        case NOTES_ACTION_TYPE.FILTER:
            return state.filter(el => el.tags.indexOf(action.payload.tag as string) !== -1
                ? el
                : '');
        case NOTES_ACTION_TYPE.DELETE_TAG:
            return state.filter(el => el.tags.indexOf(action.payload as string) !== -1
                ? el
                : '');
        default:
            throw new Error();
    }
}