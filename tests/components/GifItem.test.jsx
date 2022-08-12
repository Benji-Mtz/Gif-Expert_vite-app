import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Testing a <GifItem />', () => {
  const titulo = 'Saitama';
  const url = 'https://codigodelfuturo.com/';

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(
      <GifItem
        url={url}
        title={titulo}
      />
    );

    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
    render(
      <GifItem
        url={url}
        title={titulo}
      />
    );

    // screen.debug();
    // console.log(screen.getByRole('img').alt);

    // expect(screen.getByRole('img').src).toBe(url);

    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(titulo);
  });

  test('Debe mostrar el titulo en el componente', () => {
    render(
      <GifItem
        url={url}
        title={titulo}
      />
    );

    expect(screen.getByText(titulo)).toBeTruthy();
  });
});
