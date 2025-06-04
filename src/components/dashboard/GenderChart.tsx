
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

export const GenderChart = () => {
  const genderData = [
    { gender: 'Male', count: 13, total: 18, color: '#16a34a' },
    { gender: 'Female', count: 5, total: 18, color: '#eab308' }
  ];

  const renderGenderBar = (data: typeof genderData[0]) => {
    const percentage = (data.count / data.total) * 100;
    const filledBars = Math.round((data.count / data.total) * 20);
    
    return (
      <div key={data.gender} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
        <User className="h-6 w-6 text-gray-600" />
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-2">
            <span className="font-medium">{data.gender}</span>
            <span className="text-sm text-gray-600">{data.count}/{data.total}</span>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                className={`w-4 h-3 rounded-sm ${
                  i < filledBars ? 'bg-current' : 'bg-gray-300'
                }`}
                style={{ color: data.color }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle>Gender</CardTitle>
        <CardDescription>
          Gender distribution of signers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {genderData.map(renderGenderBar)}
        </div>
      </CardContent>
    </Card>
  );
};
