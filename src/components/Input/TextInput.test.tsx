import { render } from "@testing-library/react";
import TextInput from './TextInput'
describe('Text Input tests',  () => {

    it('displays label when passed', () => {
        const { getByTestId } = render(
            <TextInput
                value='test'
                handleChange={jest.fn()}
                type='text'
                label='test'
            />
        )

        expect(getByTestId('textInput-label')).toBeDefined()
    })

    it('displays error field when error is defined', () => {
        const { getByTestId } = render(
            <TextInput
                value='test'
                handleChange={jest.fn()}
                type='text'
                error='test'
            />
        )

        expect(getByTestId('textInput-error')).toBeDefined()
    })
})