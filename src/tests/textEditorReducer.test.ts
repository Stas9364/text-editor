import {NOTES_ACTION_TYPE, textEditorReducer} from "../reducer";

const initState = [
    {
        id: '1',
        title: 'first',
        text: 'I bought some milk',
        tags: ['#milk']
    },
    {
        id: '2',
        title: 'second',
        text: 'I bought any lemon',
        tags: ['#lemon', '#bread', '#water']
    }
]

test('create note', () => {
    const endState = textEditorReducer(initState, {
        type: NOTES_ACTION_TYPE.CREATE, payload: {
            title: 'Some title',
            text: 'Some text',
            id: '25',
            tags: []
        }
    });

    expect(endState.length).toBe(3);
    expect(endState[2].text).toBe('Some text');
});

test('delete note', () => {
    const endState = textEditorReducer(initState, {
        type: NOTES_ACTION_TYPE.DELETE,
        payload: {id: '1'}
    });

    expect(endState.length).toBe(1);
});

test('change note text', () => {
    const endState = textEditorReducer(initState, {
        type: NOTES_ACTION_TYPE.CHANGE,
        payload: {id: '1', text: 'This is new text'}
    });

    expect(endState[0].text).toBe('This is new text');
});

test('filtering by tag', () => {
    const endState = textEditorReducer(initState, {
        type: NOTES_ACTION_TYPE.FILTER,
        payload: {tag: '#lemon'}
    });

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe('2');
});

test('delete tag', () => {
    const endState = textEditorReducer(initState, {
        type: NOTES_ACTION_TYPE.DELETE_TAG,
        payload: {id: '2', tag: '#lemon'}
    });

    expect(endState[1].tags.length).toBe(2);
})