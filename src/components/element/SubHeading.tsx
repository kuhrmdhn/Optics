import { Eye } from "lucide-react";

type Props = {
    children?:React.ReactNode
    className?:string
}

export default function SubHeading({children,className}:Props) {
    return (
        <div className={`text-darkGold font-semibold text-xs sm:text-sm ${className}`}>
            <Eye className="w-4 lg:w-6 h-4 lg:h-6" />
            {children}
        </div>
    )
}