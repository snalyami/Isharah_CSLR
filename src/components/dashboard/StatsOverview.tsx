import { Card, CardContent } from "@/components/ui/card";
import { Users, Video, Clock, Hand } from "lucide-react";

export const StatsOverview = () => {
  const stats = [
    {
      title: "Total Videos",
      value: "30,000",
      icon: Video,
      description: "High-quality SSL recordings",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Total Duration", 
      value: "43.34 hrs",
      icon: Clock,
      description: "Of sign language content",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Fluent Signers",
      value: "18",
      icon: Users,
      description: "Experienced contributors", 
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Unique Glosses",
      value: "1,132",
      icon: Hand,
      description: "Sign vocabulary coverage",
      color: "text-orange-600", 
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {stat.title}
                </p>
                <p className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500">
                  {stat.description}
                </p>
              </div>
              <div className={`p-3 rounded-full ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
