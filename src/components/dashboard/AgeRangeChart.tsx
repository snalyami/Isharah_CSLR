
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

export const AgeRangeChart = () => {
  const ageData = [
    { range: '20-30', count: 3, color: '#eab308' },
    { range: '31-40', count: 10, color: '#1b3448' },
    { range: '41-50', count: 4, color: '#16a34a' },
    { range: '51-60', count: 1, color: '#1e293b' }
  ];

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle>Age Range</CardTitle>
        <CardDescription>
          Age distribution of signers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={ageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="range" />
            <YAxis />
            <Bar dataKey="count" fill="#1b3448" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
