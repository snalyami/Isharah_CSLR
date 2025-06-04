
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const DatasetMetrics = () => {
  const data = [
    { name: 'General', videos: 4600, diversityRatio: 0.38846064 },
    { name: 'Healthcare', videos: 4800, diversityRatio: 0.454769737 },
    { name: 'Banking', videos: 4200, diversityRatio: 0.543814433 },
    { name: 'Education', videos: 5100, diversityRatio: 0.591121495 },
    { name: 'Emergency', videos: 3600, diversityRatio: 0.675675676 },
    { name: 'Transportation', videos: 4500, diversityRatio: 0.578823529 },
    { name: 'Legal', videos: 3200, diversityRatio: 0.52345679 },
  ];

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Domain Distribution
        </CardTitle>
        <CardDescription>
          Video count and token diversity ratio across different domains
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" domain={[0.3, 0.7]} />
              <Tooltip 
                formatter={(value, name) => {
                  if (name === 'videos') return [`${value} videos`, 'Videos'];
                  if (name === 'diversityRatio') return [`${(value as number).toFixed(3)}`, 'Token Diversity Ratio'];
                  return [value, name];
                }}
              />
              <Bar yAxisId="left" dataKey="videos" fill="#ea580c" name="videos" />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="diversityRatio" 
                stroke="#1b3448" 
                strokeWidth={2}
                dot={{ fill: '#1b3448', strokeWidth: 2, r: 4 }}
                name="diversityRatio"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
