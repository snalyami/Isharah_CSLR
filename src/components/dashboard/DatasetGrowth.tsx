
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useState } from "react";

export const DatasetGrowth = () => {
  const subsets = [
    { name: 'Isharah-2000', value: 2000, color: '#1e293b', videos: 30000, duration: 43.34, glosses: 1132, arabicWords: 2700, percentage: 100 },
    { name: 'Isharah-1000', value: 1000, color: '#eab308', videos: 15750, duration: 24.63, glosses: 680, arabicWords: 1488, percentage: 50 },
    { name: 'Isharah-500', value: 500, color: '#16a34a', videos: 7500, duration: 10.57, glosses: 388, arabicWords: 785, percentage: 25 }
  ];

  const [selectedSubset, setSelectedSubset] = useState(subsets[0]);

  // Prepare data for pie chart with correct proportions
  const pieData = subsets.map(subset => ({
    ...subset,
    // Use percentage for proper pie slice sizing
    chartValue: subset.percentage
  }));

  const chartConfig = {
    'Isharah-2000': { label: 'Isharah-2000', color: '#1e293b' },
    'Isharah-1000': { label: 'Isharah-1000', color: '#eab308' },
    'Isharah-500': { label: 'Isharah-500', color: '#16a34a' }
  };

  const handlePieClick = (data: any) => {
    const subset = subsets.find(s => s.name === data.name);
    if (subset) {
      setSelectedSubset(subset);
    }
  };

  const handleLabelClick = (subset: any) => {
    setSelectedSubset(subset);
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle>Dataset Subsets Comparison</CardTitle>
        <CardDescription>
          Isharah-500, Isharah-1000, and Isharah-2000 subsets visualization
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          {/* Legend */}
          <div className="space-y-4">
            {subsets.map((subset) => (
              <div 
                key={subset.name} 
                className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                onClick={() => handleLabelClick(subset)}
              >
                <div 
                  className={`w-12 h-8 rounded flex items-center justify-center text-white font-bold text-sm ${
                    selectedSubset.name === subset.name ? 'ring-2 ring-blue-500' : ''
                  }`}
                  style={{ backgroundColor: subset.color }}
                >
                  {subset.value}
                </div>
                <div className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  selectedSubset.name === subset.name ? 'bg-blue-100 text-blue-800' : 'bg-gray-200'
                }`}>
                  {subset.name}
                </div>
              </div>
            ))}
          </div>

          {/* Pie Chart */}
          <div className="w-80 h-80">
            <ChartContainer config={chartConfig} className="w-full h-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={120}
                    startAngle={90}
                    endAngle={450}
                    paddingAngle={2}
                    dataKey="chartValue"
                    onClick={handlePieClick}
                    className="cursor-pointer"
                  >
                    {pieData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        stroke={selectedSubset.name === entry.name ? '#3b82f6' : 'transparent'}
                        strokeWidth={selectedSubset.name === entry.name ? 3 : 0}
                      />
                    ))}
                  </Pie>
                  <ChartTooltip 
                    content={<ChartTooltipContent 
                      formatter={(value, name) => [
                        `${value}%`,
                        chartConfig[name as keyof typeof chartConfig]?.label || name
                      ]}
                    />} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
        
        {/* Dynamic Stats Summary */}
        <div className="mt-6 grid grid-cols-4 gap-4 pt-4 border-t">
          <div className="text-center">
            <div className="text-sm text-gray-600">Total Videos</div>
            <div className="text-lg font-bold">{selectedSubset.videos.toLocaleString()}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600">Total Hours</div>
            <div className="text-lg font-bold">{selectedSubset.duration}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600">Unique Glosses</div>
            <div className="text-lg font-bold">{selectedSubset.glosses.toLocaleString()}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600">Arabic Words</div>
            <div className="text-lg font-bold">{selectedSubset.arabicWords.toLocaleString()}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
