
import { Loader } from "@/components"

export default function Template({ children }: { children: React.ReactNode }) {
    console.log('ddfggdg')
    return (
        <div>
            <Loader />
            {children}
        </div>
    )
}