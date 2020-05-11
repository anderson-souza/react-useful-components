import * as React from 'react';

interface IGridItemProps {
  tamanhoColunas?: number;
  tamanhoLinhas?: number;
  children: React.ReactElement | React.ReactElement[];
}

const GridItem: React.FunctionComponent<IGridItemProps> = ({
  tamanhoColunas = 1,
  tamanhoLinhas = 1,
  children,
}) => (
  <div
    style={{
      gridColumn: `span ${tamanhoColunas}`,
      gridRow: `span ${tamanhoLinhas}`,
    }}
  >
    {children}
  </div>
);

export default GridItem;
