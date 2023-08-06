import { useWindowScroll } from "@mantine/hooks";
import React from "react";
import { Affix, Button, Transition, UnstyledButton, rem } from "@mantine/core";
import { IconArrowUp } from "@tabler/icons-react";
const AffixScroll = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div>
      <Affix position={{ bottom: rem(20), left: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.gray[1]
                    : theme.colors.cyan[8],
                borderColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.blue[8]
                    : theme.black[1],
              })}
              // leftIcon={}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              <IconArrowUp size="1rem" />
            </Button>
          )}
        </Transition>
      </Affix>
    </div>
  );
};

export default AffixScroll;
