import {  Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return(
        <Popover>
            <PopoverTrigger>
                <Menu/>
                </PopoverTrigger>
                <PopoverContent>
                <Link href="/categories/Camisas">Camisas</Link>
                <Link href="/categories/Pantalones">Pantalones</Link>
                <Link href="/categories/Accesorios">Accesorios</Link>
                <Link href="/categories/Zapatos">Zapatos</Link>
                    

                </PopoverContent>

        </Popover>
    );
}
export default  ItemsMenuMobile ;