
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export const TotalSignersCard = () => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
      <CardContent className="flex flex-col items-center justify-center p-8 text-center">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
          <Users className="h-8 w-8 text-white" />
        </div>
        <div className="text-4xl font-bold text-gray-900 mb-2">18</div>
        <div className="text-lg text-gray-700 font-medium">experienced signers</div>
      </CardContent>
    </Card>
  );
};
