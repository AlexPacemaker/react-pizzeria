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
    case "magnifier":
      return (
        <svg
          id='magnifier'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 63.44 62.82'
        >
          <g data-name='Layer 2'>
            <g data-name='Layer 1'>
              <path
                fill='#bdc3c7'
                d='M42.74 39.12h4v10h-4z'
                transform='rotate(-45 44.744 44.117)'
              />
              <path
                fill='#e8e8e8'
                d='M42.47 7.29a24.88 24.88 0 0 1 0 35.18c-4.86 4.86-11.22 6.29-17.59 6.29s-12.74-1.43-17.59-6.29A24.88 24.88 0 1 1 42.47 7.29z'
              />
              <path
                fill='#bdc3c7'
                d='M42.47 41.47A24.87 24.87 0 0 1 0 24.38a24.87 24.87 0 1 0 49.73 0 24.79 24.79 0 0 1-7.26 17.09z'
              />
              <circle
                cx='24.88'
                cy='24.88'
                r='19.78'
                fill='#6593ff'
                transform='rotate(-45 24.878 24.885)'
              />
              <ellipse
                cx='24.88'
                cy='25.8'
                fill='#94b9ff'
                rx='17.85'
                ry='16.93'
              />
              <path
                fill='#d9e8ff'
                d='M19.75 20.78a16.57 16.57 0 0 1 18.9-2.52A15.1 15.1 0 0 0 36 14.89a16.53 16.53 0 0 0-22.46 0 14.45 14.45 0 0 0 0 21.24 15.82 15.82 0 0 0 3.56 2.52 14.41 14.41 0 0 1 2.65-17.87z'
                opacity='.4'
              />
              <path
                fill='#5e4d32'
                d='M44.31 43.69C42.1 46 41 48.38 49.05 56.47s10.48 6.95 12.77 4.74 3.34-4.69-4.74-12.78-10.47-6.95-12.77-4.74z'
              />
              <path
                fill='#4b381a'
                d='M60.93 58.64c-2.1 2-4.28 3.09-11.65-4.38-3.66-3.71-5.24-6.12-5.67-7.87-.52 1.85.52 4.5 5.67 9.72 7.37 7.47 9.55 6.43 11.65 4.38 1.01-1.07.61-2.49 0-1.85z'
                opacity='.4'
              />
              <ellipse
                cx='60.41'
                cy='60.03'
                fill='#4b381a'
                rx='2.72'
                ry='1.17'
                transform='rotate(-44.99 60.42 60.028)'
              />
            </g>
          </g>
        </svg>
      );
    default:
      return <svg></svg>;
  }
};
