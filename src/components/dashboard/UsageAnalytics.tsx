
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

export const UsageAnalytics = () => {
  const signerData = [
    { category: 'Deaf', count: 11, percentage: 61.1 },
    { category: 'Hard of Hearing', count: 3, percentage: 16.7 },
    { category: 'Sign Language Translators', count: 4, percentage: 22.2 }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Deaf': 'bg-blue-100 text-blue-800',
      'Hard of Hearing': 'bg-green-100 text-green-800',
      'Sign Language Translators': 'bg-purple-100 text-purple-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle>Signer Demographics</CardTitle>
        <CardDescription>
          Distribution of 18 signers by hearing level and background
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {signerData.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <Users className="h-5 w-5" style={{ color: '#1b3448' }} />
                <div>
                  <h4 className="font-medium">{item.category}</h4>
                  <Badge className={getCategoryColor(item.category)}>
                    {item.percentage}%
                  </Badge>
                </div>
              </div>
              <div className="text-xl font-bold text-gray-900">
                {item.count}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
