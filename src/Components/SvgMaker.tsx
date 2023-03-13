//компонент с коллекцией svg

interface Props {
  id: string;
}

export const SvgMaker = ({ id }: Props) => {
  switch (id) {
    case "plus":
      return (
        <svg
          id='plus'
          xmlns='http://www.w3.org/2000/svg'
          width='92'
          height='92'
          fill='#fe5f1e'
          viewBox='0 0 92 92'
        >
          <path d='M72.5 46.5c0 2.5-2 4.5-4.5 4.5H50v17c0 2.5-2 4.5-4.5 4.5S41 70.5 41 68V51H24c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5h17V24c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5v18h18c2.5 0 4.5 2 4.5 4.5z' />
        </svg>
      );
    case "minus":
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          id='Layer_1'
          x='0'
          y='0'
          version='1.1'
          viewBox='0 0 29 29'
        >
          <path d='M14.5 27.071c-6.893 0-12.5-5.607-12.5-12.5s5.607-12.5 12.5-12.5S27 7.678 27 14.571s-5.607 12.5-12.5 12.5zm0-23c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5S25 20.36 25 14.571s-4.71-10.5-10.5-10.5z' />
          <path d='M20.5 15.571h-12a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z' />
        </svg>
      );
    case "close":
      return (
        <svg
          id='close'
          xmlns='http://www.w3.org/2000/svg'
          data-name='Layer 1'
          viewBox='0 0 64 64'
        >
          <line
            x1='60.92'
            x2='3.08'
            y1='5.92'
            y2='58.08'
            fill='none'
            stroke='#010101'
            stroke-miterlimit='10'
            stroke-width='4'
          />
          <line
            x1='3.08'
            x2='60.92'
            y1='5.92'
            y2='58.08'
            fill='none'
            stroke='#010101'
            stroke-miterlimit='10'
            stroke-width='4'
          />
        </svg>
      );
    default:
      return <svg></svg>;
  }
};
