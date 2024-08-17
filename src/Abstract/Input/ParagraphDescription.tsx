import React from 'react';
import { DESCRIPTION_INPUT } from '../../constants';
import { Paragraph, ParagraphProps } from './Paragraph';

export type ParagraphDescriptionProps = {
  changeDescription: (description: string) => void;
  props?: ParagraphProps;
};

export const ParagraphDescription = ({
  changeDescription,
  props,
}: ParagraphDescriptionProps) => {
  return (
    <>
      <Paragraph
        inputProps={{
          placeholder: 'Descripción',
          id: DESCRIPTION_INPUT,
          title: 'Descripción',
          ...props?.inputProps,
        }}
        styles={props?.styles}
        paragraphClass={props?.paragraphClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        onChange={changeDescription}
      />
    </>
  );
};
