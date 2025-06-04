
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

export const HearingLevelChart = () => {
  const hearingData = [
    { name: 'Deaf', value: 11, color: '#1b3448' },
    { name: 'Hard of Hearing', value: 3, color: '#eab308' },
    { name: 'Hearing', value: 4, color: '#16a34a' }
  ];

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle>Hearing Level</CardTitle>
        <CardDescription>
          Distribution of signers by hearing ability
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={hearingData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {hearingData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value, entry) => `${entry.payload.value} ${value}`}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
