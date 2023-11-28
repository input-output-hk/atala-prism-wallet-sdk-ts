import {MouseEventHandler, useCallback, useEffect, useState} from 'react';
import {AnimatePresence} from 'framer-motion';
import {DropdownContentItemUI, DropdownContentUI, DropdownHeaderUI, DropdownWrapperUI,} from './style';
import Icon from '../icon';

export default function Dropdown({
                                   placeholder,
                                   initialSelected,
                                   options,
                                   suffix,
                                   onSelect,
                                 }: {
  initialSelected?: string;
  placeholder: string;
  suffix?: string;
  options: string[];
  onSelect: (value: string) => void;
}) {
  const [selected, setSelected] = useState<string | undefined>();
  const [visible, setVisible] = useState<boolean>(false);
  const toggle = useCallback(() => {
    setVisible((v) => !v);
  }, [setVisible]);

  const handleClick = useCallback<MouseEventHandler<HTMLDivElement>>(
      (event) => {
        const {
          currentTarget: {
            dataset: {value},
          },
        } = event;
        setSelected(value);
        setVisible(false);
        onSelect(value ?? '');
      },
      [onSelect]
  );

  useEffect(() => {
    initialSelected && !selected && setSelected(initialSelected);
  }, [initialSelected, selected]);

  return (
      <DropdownWrapperUI>
        <DropdownHeaderUI onClick={toggle} $active={visible} $hasSelected={!!selected}>
          {selected ? (
              <div className="selected">
                {selected} <span className="suffix">{suffix}</span>
              </div>
          ) : (
              placeholder
          )}
          <Icon name="chevron-down" color="gray" tint="500" size={20}/>
        </DropdownHeaderUI>
        {
          <AnimatePresence initial={true} presenceAffectsLayout={true}>
            <DropdownContentUI
                onMouseLeave={() => setVisible(false)}
                initial={{opacity: 0}}
                variants={{active: {opacity: 1}, inactive: {opacity: 0, pointerEvents: "none"}}}
                animate={visible ? 'active' : "inactive"}
                exit={{opacity: 0}}
            >
              {options.map((text, index) => (
                  <DropdownContentItemUI
                      key={index}
                      $active={selected === text}
                      onClick={handleClick}
                      data-value={text}
                  >
                    {text}
                  </DropdownContentItemUI>
              ))}
            </DropdownContentUI>
          </AnimatePresence>
        }
      </DropdownWrapperUI>
  );
}
