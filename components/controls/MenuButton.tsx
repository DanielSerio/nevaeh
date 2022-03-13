import React, { ComponentProps } from 'react';
import { CgMenu } from 'react-icons/cg'

interface MenuButtonProps extends ComponentProps<'button'> { }

export default function MenuButton(Props: MenuButtonProps) {
  const { ...props } = Props

  return (
    <button type="button" className="menu-btn" {...props}>
      <CgMenu />
    </button>
  );
}
