import { FC } from 'react';
import classNames from 'classnames';
import IconMinus from '../IconMinus';
import IconPlus from '../IconPlus';
import { getButtonClass, getButtonAnimationClass } from '../../utilities/styling';
import { ProductQuantityItemProps } from '.';

const ProductQuantityItem: FC<ProductQuantityItemProps> = ({
  quantity,
  buttonStyle,
  onClickIncrement,
  onClickDecrement,
  animationType,
}) => (
  <div className="h-13 flex w-44 flex-row justify-between border border-gray-100">
    <div
      className={classNames(
        'btn rounded-none',
        animationType ? getButtonAnimationClass(buttonStyle, animationType) : getButtonClass(buttonStyle),
        {
          'pointer-events-none opacity-50': quantity === 1,
        }
      )}
      onClick={onClickDecrement}
    >
      <IconMinus />
    </div>
    <div className="flex w-full items-center justify-center border-x border-gray-100">
      <span className="select-none font-bold text-secondary-content">{quantity}</span>
    </div>
    <div
      className={classNames(
        'btn rounded-none',
        animationType ? getButtonAnimationClass(buttonStyle, animationType) : getButtonClass(buttonStyle)
      )}
      onClick={onClickIncrement}
    >
      <IconPlus />
    </div>
  </div>
);

export default ProductQuantityItem;
