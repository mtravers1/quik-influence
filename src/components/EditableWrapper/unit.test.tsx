import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import EditableWrapper from '.';

describe('Editable Wrapper tests', () => {
  test('Should render with the given text', () => {
    render(
      <EditableWrapper sectionId="test-section">
        <p>This is a text node</p>
      </EditableWrapper>
    );

    expect(screen.getByText('This is a text node')).toBeInTheDocument();
  });
});
