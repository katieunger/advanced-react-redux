import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';
import expectExport from 'expect';


it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New Comment']);
});
