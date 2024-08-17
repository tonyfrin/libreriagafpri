import React, { useState } from 'react';
import { css, cx } from '@emotion/css';
import styled from '@emotion/styled';
import { Button } from '../Button';

export type SliderHorizontalProps = {
  images: string[];
  title?: string;
  stylesSpan?: SpanSliderStyle;
  remove: (image: string) => void;
};

const MainSliderContainer = css`
  padding-left: 38px;
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0px auto 30px auto;
  overflow: hidden;
  border-radius: 5px;
  padding: 20px;
  border: 1px solid #ccc;
`;

const SliderWrapper = styled.div<{ currentIndex: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  min-height: 160px;
  transform: ${({ currentIndex }) =>
    `translateX(-${currentIndex * (100 / 4)}%)`};
`;

const SliderItem = styled.div`
  flex: 0 0 25%; /* Ajusta el ancho según tus necesidades para mostrar 4 elementos a la vez */
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

const ContainerButtonSlider = css`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
`;

const floatingButtonsContainerStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const floatingCloseButtonStyles = css`
  position: absolute;
  top: 0px;
  transform: translateY(-50%);
  right: 0px;
  cursor: pointer;
  color: #fff;
  background-color: #f44336;
  border-radius: 100%;
  padding: 2px 5px 4px 5px;
  font-size: 8px;
`;

export type SpanSliderStyle = {
  fontSize?: string;
  color?: string;
  paddingLeft?: string;
  props?: string;
};

const SpanSlaiderStyles = (styles: SpanSliderStyle) => css`
  font-size: ${styles?.fontSize || 'x-small'};
  color: ${styles?.color || '#8d8d8d'};
  padding-left: ${styles?.paddingLeft || '5px'};
  ${styles.props || ''}
`;

export const SliderHorizontal: React.FC<SliderHorizontalProps> = ({
  images,
  title,
  stylesSpan = {},
  remove,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 4
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 4 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className={cx(MainSliderContainer)}>
      {title ? (
        <span className={cx(SpanSlaiderStyles(stylesSpan))}>{title}</span>
      ) : (
        ''
      )}
      <SliderContainer>
        <SliderWrapper currentIndex={currentIndex}>
          {images.map((image, index) => (
            <div className={cx(floatingButtonsContainerStyles)} key={index}>
              <span
                className={cx(floatingCloseButtonStyles)}
                onClick={() => remove(image)}
              >
                x
              </span>
              <SliderItem>
                <Image src={image} alt={`Imagen ${index + 1}`} />
              </SliderItem>
            </div>
          ))}
        </SliderWrapper>
        <div className={cx(ContainerButtonSlider)}>
          <Button
            title="<"
            buttonProps={{
              onClick: () => handlePrev(),
            }}
            styles={{
              fontSize: '15px',
              padding: '5px 10px',
              margin: '0px 10px 0px 0px',
            }}
          />
          <Button
            title=">"
            buttonProps={{
              onClick: () => handleNext(),
            }}
            styles={{
              fontSize: '15px',
              padding: '5px 10px',
              margin: '0px 0px 0px 10px',
            }}
          />
        </div>
      </SliderContainer>
    </div>
  );
};
