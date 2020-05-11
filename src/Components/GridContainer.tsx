/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';

interface IGridContainerProps {
  columns?: number;
  rowGap?: number;
  columnGap?: number;
  children: React.ReactElement | React.ReactElement[];
}

const GridContainer: React.FunctionComponent<IGridContainerProps> = ({
  columns = 1,
  children,
  rowGap = 10,
  columnGap = 10,
}) => {
  let gridTemplateColumns: string = '';
  for (let index = 0; index < columns; index++) {
    gridTemplateColumns += ' 1fr';
  }

  const componentStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns,
    columnGap,
    rowGap,
  };

  return <div style={componentStyle}>{children}</div>;
};

export default GridContainer;
