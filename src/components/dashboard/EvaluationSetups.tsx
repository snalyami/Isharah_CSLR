
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video } from "lucide-react";

export const EvaluationSetups = () => {
  const evaluationData = [
    { setup: 'Signer-Independent Train', videos: 20000, hours: 28.76 },
    { setup: 'Signer-Independent Dev', videos: 2000, hours: 2.92 },
    { setup: 'Signer-Independent Test', videos: 8000, hours: 11.51 },
    { setup: 'Unseen-Sentences Train', videos: 13500, hours: 40.95 },
    { setup: 'Unseen-Sentences Dev', videos: 750, hours: 1.09 },
    { setup: 'Unseen-Sentences Test', videos: 750, hours: 1.15 }
  ];

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle>Evaluation Setups</CardTitle>
        <CardDescription>
          Video distribution across different evaluation scenarios
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {evaluationData.map((setup, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Video className="h-4 w-4 text-blue-600" />
                <span className="font-medium text-sm">{setup.setup}</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="font-medium">{setup.videos.toLocaleString()} videos</span>
                <span className="text-gray-600">{setup.hours}hrs</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
