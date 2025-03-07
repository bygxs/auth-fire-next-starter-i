// app/dashboard/page.tsx

import ProtectedRoute from "@/app/components/ProtectedRoute";

export default function DashboardPage() {
  return (
   // <ProtectedRoute>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <p className="text-lg">Welcome to your dashboard!</p>
      </div>
   // </ProtectedRoute>
  );
}

