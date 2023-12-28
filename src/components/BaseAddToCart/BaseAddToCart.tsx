import { FC, useCallback, useState } from 'react';
import classNames from 'classnames';
import { useUniformCurrentComposition, UniformText } from '@uniformdev/canvas-react';
import { getButtonClass } from '../../utilities/styling';
import ProductQuantityItem from '../../components/ProductQuantityItem';
import { BaseAddToCartProps } from './';

const BaseAddToCart: FC<BaseAddToCartProps> = ({
  buttonCopy,
  buttonStyle,
  onClick,
  useCustomTextElements = false,
  animationType,
}) => {
  const { isContextualEditing } = useUniformCurrentComposition();
  const [quantity, setQuantity] = useState<number>(1);

  const onClickIncrement = useCallback(() => setQuantity(quantity => quantity + 1), []);
  const onClickDecrement = useCallback(() => setQuantity(quantity => quantity - 1 || 1), []);

  const handleButtonClick = useCallback(() => {
    onClick?.(quantity);
  }, [quantity, onClick]);

  return (
    <div className="flex flex-row flex-wrap items-center justify-between gap-5 py-6">
      <div className="flex w-auto grow items-center justify-between gap-4">
        <div className="inline font-bold text-secondary-content">QUANTITY:</div>
        <ProductQuantityItem
          animationType={animationType}
          buttonStyle={buttonStyle}
          quantity={quantity}
          onClickDecrement={onClickDecrement}
          onClickIncrement={onClickIncrement}
        />
      </div>
      <div
        className={classNames('btn ml-auto w-full min-w-[200px] flex-1 rounded-none', getButtonClass(buttonStyle))}
        onClick={handleButtonClick}
      >
        {useCustomTextElements ? (
          <div onClick={isContextualEditing ? e => e.preventDefault() : undefined}>{buttonCopy}</div>
        ) : (
          <UniformText
            placeholder="Button copy goes here"
            parameterId="buttonCopy"
            onClick={isContextualEditing ? e => e.preventDefault() : undefined}
          />
        )}
      </div>
    </div>
  );
};

export default BaseAddToCart;
