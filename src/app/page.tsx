import MainLayout from "@/components/layouts/Main/MainLayout";
import Home from "./Home";

export default async function Root() {
    return (
        <MainLayout>
            <Home />
        </MainLayout>
    )
}