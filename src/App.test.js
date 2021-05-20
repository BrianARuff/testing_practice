import { render, screen , fireEvent} from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';


test('it renders correctly', async () => {
  const Component = renderer.create(<App />);
  const tree = Component.toJSON();
  const container = render(<App />);
  const div = container.getByText('Count: 0');
  setTimeout(() => {
    fireEvent(div, new MouseEvent('click'))
    expect(div.innerHTML).toBe('Count: 1');
    expect(tree).toMatchSnapshot();
  }, 0);
  
})