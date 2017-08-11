import { renderComponent , expect } from '../test_helper';
import TableList from '../../src/components/tablelist';

describe('TableList' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(TableList);
  });

  it('renders table', () => {
    expect(component).to.exist;
  });
});
