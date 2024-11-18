"use client";
import { useState, useEffect } from "react";
import {
  Root,
  Trigger,
  Portal,
  Content,
  Arrow,
} from "@radix-ui/react-dropdown-menu";

import { Menu as MenuIcon } from "lucide-react";
import "./styles.css";
import { Nav } from "~/components/nav";
import { Button } from "../button";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Закрытие меню при изменении размера окна
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <Trigger asChild>
        <div className="flex items-center">
          <Button>
            <MenuIcon size={24} />
          </Button>
        </div>
      </Trigger>

      <Portal>
        <Content
          className="DropdownMenuContent shadow-custom-light dark:shadow-custom-dark"
          sideOffset={5}
        >
          <Nav />
          {/* <Item className="DropdownMenuItem">
            New Tab <div className="RightSlot">⌘+T</div>
          </Item>
          <Item className="DropdownMenuItem">
            New Window <div className="RightSlot">⌘+N</div>
          </Item>
          <Item className="DropdownMenuItem" disabled>
            New Private Window <div className="RightSlot">⇧+⌘+N</div>
          </Item> */}
          <Arrow className="fill-white dark:fill-black" />
        </Content>
      </Portal>
    </Root>
  );
};
