import * as React from 'react';
import PropTypes from 'prop-types';

interface IGridItemProps {
  columnSize?: number;
  rowSize?: number;
  children: React.ReactElement | React.ReactElement[];
}

const GridItem: React.FunctionComponent<IGridItemProps> = ({
  columnSize,
  rowSize,
  children,
}) => {
  const componentStyle: React.CSSProperties = {
    gridColumn: `span ${columnSize}`,
    gridRow: `span ${rowSize}`,
  };

  return <div style={componentStyle}>{children}</div>;
};

GridItem.defaultProps = {
  columnSize: 1,
  rowSize: 1,
};

GridItem.propTypes = {
  columnSize: PropTypes.number,
  rowSize: PropTypes.number,
  children: PropTypes.element.isRequired,
};

export default GridItem;
