
import { Layout } from "@/components/Layout";
import { Header } from "@/components/Header";
import { StatsCard } from "@/components/StatsCard";
import { UserTable } from "@/components/UserTable";
import { Database, DollarSign, Users } from "lucide-react";

export default function Index() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
            <StatsCard
              title="Stock Total"
              value="$150000"
              increase="60%"
              icon={Database}
              className="bg-purple-500"
            />
            <StatsCard
              title="Total Profit"
              value="$25000"
              increase="30%"
              icon={DollarSign}
              className="bg-blue-500"
            />
            <StatsCard
              title="Unique Visitors"
              value="250000"
              increase="30%"
              icon={Users}
              className="bg-coral-500"
            />
          </div>
          <UserTable />
        </div>
      </div>
    </Layout>
  );
}
