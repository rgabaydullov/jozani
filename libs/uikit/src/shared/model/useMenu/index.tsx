import {
  SyntheticEvent,
  useCallback,
  useMemo,
  useState,
} from 'react';
import cn from 'classnames';
import {
  Button,
  IconTriplePoints,
  Menu as OriginMenu,
  StyledMenuItem,
} from '../../ui';
import { IUseMenuProps } from './types';

const useMenu = ({
  id,
  list,
  transformOrigin,
  renderItem,
  onButtonClick,
  onItemClick,
}: IUseMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [sharedData, setSharedData] = useState<null | unknown>(null);

  const open = useCallback((e: SyntheticEvent, sharedData?: unknown) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget as never);

    if (sharedData) {
      setSharedData(sharedData);
    }
  }, []);

  const close = useCallback((e: SyntheticEvent) => {
    e.stopPropagation();
    setAnchorEl(null);

    if (sharedData) {
      setSharedData(null);
    }
  }, [sharedData]);

  const onMenuButtonClick = useCallback((e: SyntheticEvent) => {
    if (onButtonClick) {
      onButtonClick(e, open);

      return;
    }

    open(e);
  }, [open, onButtonClick]);

  const onMenuItemClick = useCallback((e: SyntheticEvent, item: unknown) => {
    if (onItemClick) {
      onItemClick(e, item, sharedData);
    }

    close(e);
  }, [sharedData, onItemClick]);

  const menuList = useMemo(() => list.map(item => {
    const menuItem = renderItem(item, sharedData);

    if (!menuItem) {
      return null;
    }

    return (
      <StyledMenuItem onClick={(e) => onMenuItemClick(e, item)}>
        {menuItem}
      </StyledMenuItem>
    );
  }), [list, sharedData, renderItem]);

  const menu = useMemo(() => {
    return (
      <OriginMenu
        anchorEl={anchorEl}
        open={!!anchorEl}
        transformOrigin={transformOrigin}
        onClose={close}
      >
        {menuList}
      </OriginMenu>
    );
  }, [anchorEl, transformOrigin, menuList]);

  const MenuButton = useMemo((): React.FC<{ onClick?(e: SyntheticEvent): void }> => ({ onClick }) => (
    <Button
      className={cn('flex', 'ml-7', 'w-4', 'justify-center')}
      onClick={(e: SyntheticEvent) => {
        if (onClick) {
          onClick(e);

          return;
        }

        onMenuButtonClick(e);
      }}
    >
      <i>
        <IconTriplePoints />
      </i>
    </Button>
  ), [onMenuButtonClick]);

  return {
    anchorEl,
    MenuButton,
    menu,
    open,
    close,
  };
};

export default useMenu;

export * from './types';
