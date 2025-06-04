
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const WordCloudChart = () => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle>Gloss Word Count</CardTitle>
        <CardDescription>
          Most frequent glosses in the dataset
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <div className="relative w-full h-80 overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
          <img 
            src="/lovable-uploads/44013b02-7552-4a80-982d-5ee87b3333e5.png" 
            alt="Arabic Word Cloud"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </CardContent>
    </Card>
  );
};
