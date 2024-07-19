
import { Separator } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

const dataFooter=[
   { id:1,
    name:"Sobre nosotros",
    Link: "h"
},
   { id:2,
    name:"Productos",
    Link: "#"
},
   { id:3,
    name:"Mi cuenta",
    Link: "#"
},
   { id:4,
    name:"Politica de privacidad",
    Link: "#"
},
]


const Footer = () => {
    return (
        <footer className="mt-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <p>
                    <span className="font-bold">
                        DAKATA

                    </span>
                    E-commerce
                </p>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm-mb-0 dark:text-gray-400">
                {dataFooter.map((data)=>(
                    <li key={data.id}>
                        <Link href={data.Link} className="hover:underline me-4 md:me-6">{data.name}</Link>
                    </li>
                ))}

                </ul>

            </div>
            <Separator className="my-6 border-gray200 sm:mx dark:border-gray-700 lg:my-8"/>
           <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            &copy;2024
            <Link href="#">DAKATA. </Link>
            Todos los derechos reservados
           </span>
        </div>
        </footer>

    );
}
export default Footer ; 
    