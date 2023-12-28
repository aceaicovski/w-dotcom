import { FC, useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { DropdownOption } from './DropdownOption';
import { DropdownProps } from './';

const Dropdown: FC<DropdownProps> = ({
  title,
  value,
  defaultOption,
  options,
  onChange,
  disable = false,
  buttonClassName,
  optionsContainerClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onMouseLeave = useCallback((): void => setIsOpen(false), []);

  const toggleDropdown = useCallback((): void => setIsOpen(isOpen => !isOpen), []);

  const selectedLabel = useMemo(() => {
    const selectedOption = options.find(({ value: optionValue }) => optionValue === value);
    return selectedOption?.label;
  }, [options, value]);

  const optionToShow = useMemo(
    () => options.filter(({ value: optionValue }) => optionValue !== value),
    [options, value]
  );

  const onSelect = useCallback(
    (selectedValue?: string) => {
      onChange(selectedValue);
      setIsOpen(false);
    },
    [onChange]
  );

  return (
    <div onMouseLeave={onMouseLeave} className="relative inline-block h-12 w-full">
      <button
        type="button"
        className={classNames(
          'inline-flex h-full w-full items-center justify-between border-2 border-black px-4 font-extrabold uppercase focus:border-slate-300 focus:outline-none',
          { 'text-xs': !!value },
          { 'opacity-50': disable },
          buttonClassName
        )}
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={toggleDropdown}
        disabled={disable}
      >
        {selectedLabel || title}
        <Image
          className={classNames('w-auto', { 'rotate-180': isOpen })}
          width={18}
          height={11}
          src="https://res.cloudinary.com/uniform-demos/image/upload/v1692358232/csk-icons/icon-dropdown_fpirma_dns0cw.svg"
          alt="icon minus"
          unoptimized
        />
      </button>
      {isOpen && (
        <div
          className={classNames(
            'absolute right-0 z-50 w-full origin-top-right rounded-b-md bg-base-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
            optionsContainerClassName
          )}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {defaultOption && value !== defaultOption.value && (
              <DropdownOption isDefault option={defaultOption} onSelect={onSelect} />
            )}
            {optionToShow.map(option => (
              <DropdownOption key={`option-${option.value}`} option={option} onSelect={onSelect} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
