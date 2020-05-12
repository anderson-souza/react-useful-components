import * as React from 'react';
import PropTypes from 'prop-types';

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
  let gridTemplateColumns = '';
  for (let index = 0; index < columns; index += 1) {
    gridTemplateColumns += '1fr ';
  }

  const componentStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns,
    columnGap,
    rowGap,
  };

  return <div style={componentStyle}>{children}</div>;
};

GridContainer.defaultProps = {
  columns: 1,
  rowGap: 10,
  columnGap: 10,
};

GridContainer.propTypes = {
  columns: PropTypes.number,
  rowGap: PropTypes.number,
  columnGap: PropTypes.number,
  children: PropTypes.element.isRequired,
};

export default GridContainer;
