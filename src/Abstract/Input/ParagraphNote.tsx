import React from 'react';
import { NOTE_INPUT } from '../../constants';
import { Paragraph, ParagraphProps } from './Paragraph';

export type ParagraphNoteProps = {
  change: (value: string) => void;
  props?: ParagraphProps;
};

export const ParagraphNote = ({ change, props }: ParagraphNoteProps) => {
  return (
    <>
      <Paragraph
        inputProps={{
          placeholder: 'Notas',
          id: NOTE_INPUT,
          title: 'Notas',
          ...props?.inputProps,
        }}
        styles={props?.styles}
        paragraphClass={props?.paragraphClass}
        containerStyles={props?.containerStyles}
        containerClass={props?.containerClass}
        onChange={change}
      />
    </>
  );
};
