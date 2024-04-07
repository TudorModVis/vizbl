import { Loader } from "@/components"

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Loader />
            {children}
        </div>
    )
}