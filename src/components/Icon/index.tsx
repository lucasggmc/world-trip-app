import { forwardRef } from "@chakra-ui/system";
import { ForwardRefRenderFunction } from "toasted-notes/node_modules/@types/react";
import { ReactNode } from "toasted-notes/node_modules/@types/react";

interface IconProps {
    children: ReactNode;
}

const IconBase: ForwardRefRenderFunction<HTMLElement, IconProps> =  ({children, ...rest}, ref) => {
    return(
        <span 
        ref={ref}
        {...rest}
        >
            {children}
        </span>
    )
}

export const Icon = forwardRef(IconBase);
