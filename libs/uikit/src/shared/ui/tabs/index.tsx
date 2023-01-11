import React, {
  SyntheticEvent, useCallback, useEffect, useMemo, useState,
} from 'react';
import {
  StyledTabItem,
  StyledTabs,
  TabPanel,
  TabsPanelList,
  TabsWrapper,
} from './shared/ui';
import { ITabsProps } from './types';

const Tabs: React.FC<ITabsProps> = ({
  isMinified = false,
  defaultValue = 0,
  value: _value,
  data,
  orientation,
  renderTab,
  onChange: _onChange,
  ...props
}) => {

  const [value, setValue] = useState(defaultValue || _value);

  const items = useMemo(() => data.map(({ value, icon, label }, index) => {
    const itemValue = value || index;

    const specificLabel = (isMinified
      ? label
      : (
        <>
          {icon && (<i>{icon}</i>)}
          <span>{label}</span>
        </>
      ));

    return (
      <StyledTabItem
        disableRipple
        isMinified={isMinified}
        key={`${itemValue}`}
        orientation={orientation}
        label={specificLabel}
        value={itemValue}
      />
    );
  }), [isMinified, orientation, data]);

  const itemsPanel = useMemo(() => {
    if (!renderTab) {
      return;
    }

    // @TODO: refactor Array<Object> comparison
    return data.map((item, index) => {
      const { value: foundValue } = item;
      const itemValue = foundValue || index;
      const isActive = value === itemValue;

      return (
        <TabPanel
          key={`${itemValue}`}
          role="tabpanel"
        >
          {renderTab(item, itemValue, isActive)}
        </TabPanel>
      );
    });
  }, [value, data], );

  const onChange = useCallback((e: SyntheticEvent, value: number) => {
    setValue(value);

    if (_onChange) {
      _onChange(e, value);
    }
  }, [_onChange]);

  useEffect(() => setValue(_value), [_value]);

  return (
    <TabsWrapper>
      <StyledTabs
        isMinified={isMinified}
        orientation={orientation}
        value={value}
        onChange={onChange}
        {...props}
      >
        {items}
      </StyledTabs>

      <TabsPanelList>
        {itemsPanel}
      </TabsPanelList>
    </TabsWrapper>
  );
};

export default React.memo(Tabs);

export * from './types';
