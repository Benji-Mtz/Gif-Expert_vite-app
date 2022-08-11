import { render } from '@testing-library/react';
import { GifItem } from '../src/components/GifItem';

describe('Testing a <GifItem />', () => {
  test('Se debe verificar el snapshot', () => {
    const { container } = render(
      <GifItem
        url={'google.com'}
        title={'Gouk'}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
