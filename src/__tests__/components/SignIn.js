import React from "react";
import { render , fireEvent, waitFor} from '@testing-library/react-native';
import { SignInContainer } from "../../components/SignIn";


describe('SignIn', () => {
    it('calls function provided by onSubmit prop after pressing the submit button', async () => {
        const onSubmit = jest.fn();
        const { getByTestId, debug } = render(<SignInContainer onSubmit={onSubmit} />);
        
        fireEvent.changeText(getByTestId('username:input'), 'kalle');
        fireEvent.changeText(getByTestId('password:input'), 'password');
        fireEvent.press(getByTestId('submit:button'));
        
        await waitFor( () => {
            expect(onSubmit).toHaveBeenCalledTimes(1);
             expect(onSubmit.mock.calls[0][0]).toEqual({
                username: 'kalle',
                password: 'password',
          });
        })
    })
})