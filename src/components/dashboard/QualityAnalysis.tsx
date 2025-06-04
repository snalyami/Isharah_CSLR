
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";

export const QualityAnalysis = () => {
  const qualityData = [
    { name: 'Excellent', value: 65, color: '#10b981' },
    { name: 'Good', value: 23, color: '#3b82f6' },
    { name: 'Fair', value: 8, color: '#f59e0b' },
    { name: 'Poor', value: 4, color: '#ef4444' }
  ];

  const qualityMetrics = [
    { label: 'Completeness', score: 96, icon: CheckCircle, color: 'text-green-600' },
    { label: 'Accuracy', score: 92, icon: CheckCircle, color: 'text-green-600' },
    { label: 'Consistency', score: 89, icon: AlertTriangle, color: 'text-yellow-600' },
    { label: 'Validity', score: 94, icon: CheckCircle, color: 'text-green-600' },
    { label: 'Uniqueness', score: 87, icon: AlertTriangle, color: 'text-yellow-600' },
    { label: 'Timeliness', score: 91, icon: CheckCircle, color: 'text-green-600' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle>Quality Distribution</CardTitle>
          <CardDescription>
            Overall quality assessment across all datasets
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={qualityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {qualityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {qualityData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm">{item.name}: {item.value}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle>Quality Metrics</CardTitle>
          <CardDescription>
            Detailed breakdown of data quality dimensions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {qualityMetrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <metric.icon className={`h-4 w-4 ${metric.color}`} />
                  <span className="text-sm font-medium">{metric.label}</span>
                </div>
                <span className="text-sm font-bold">{metric.score}%</span>
              </div>
              <Progress value={metric.score} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
