import DashboardLayout from "./components/DashboardLayout";

export default async function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DashboardLayout>{children}</DashboardLayout>
    );
}