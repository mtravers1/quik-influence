import { screen } from '@testing-library/dom';
import EditableWrapper from '.';
import initialState from '__mockData__/storeData';
import { renderWithStore } from 'utils/testUtils';

describe('Editable Wrapper tests', () => {
  test('Should render with the given text', () => {
    renderWithStore(
      <EditableWrapper
        sectionId="desc"
        data={{ content: { desc: 'Thisis a text node' } }}
        sectionName="info"
      >
        <p>This is a text node</p>
      </EditableWrapper>,
      { initialState }
    );

    expect(screen.getByText('This is a text node')).toBeInTheDocument();
  });
});
