import React from 'react';
import { css, cx } from '@emotion/css';
import { Title1, Title1Props } from '../Title';
import { ContainerButton } from '../Containers';

type CircleContentStyleProps = {
  width?: string;
  height?: string;
  fontSize?: string;
  display?: string;
  justifyContent?: string;
  alignContent?: string;
  backgroundColor?: string;
  borderRadius?: string;
  color?: string;
  padding?: string;
  flexWrap?: string;
  marginRight?: string;
  custom?: string;
};

const circleContentStyle = (styles: CircleContentStyleProps) => css`
  width: ${styles.width || '40px'};
  height: ${styles.height || '40px'};
  font-size: ${styles.fontSize || '30px'};
  display: ${styles.display || 'flex'};
  justify-content: ${styles.justifyContent || 'center'};
  align-content: ${styles.alignContent || 'center'};
  background-color: ${styles.backgroundColor || '#324375'};
  border-radius: ${styles.borderRadius || '100%'};
  color: ${styles.color || '#ffffff'};
  padding: ${styles.padding || '5px'};
  flex-wrap: ${styles.flexWrap || 'wrap'};
  margin-right: ${styles.marginRight || '10px'};
  ${styles.custom}
`;

export type CircleStepProps = {
  step: string;
  circleStyle?: CircleContentStyleProps;
  circleProps?: React.HTMLAttributes<HTMLSpanElement>;
  titleStyle?: Title1Props['styles'];
  title?: string;
};

export const CircleStep = ({
  step,
  title = 'Paso',
  circleStyle = {},
  circleProps = {},
  titleStyle = {
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: '30px',
  },
}: CircleStepProps): JSX.Element => {
  const { className: circleClassName, ...restCircleProps } = circleProps;

  return (
    <>
      <ContainerButton
        styles={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          custom: `
                    margin: 20px 0px;
                    padding-left: 5%;
                    `,
        }}
      >
        <>
          <span
            className={cx(circleContentStyle(circleStyle), circleClassName)}
            {...restCircleProps}
          >
            {step}
          </span>
          <Title1 title={title} styles={titleStyle} />
        </>
      </ContainerButton>
    </>
  );
};
