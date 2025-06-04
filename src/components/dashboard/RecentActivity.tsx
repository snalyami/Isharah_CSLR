
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Upload, Download, Edit, Trash2, Plus } from "lucide-react";

export const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      user: 'Sarah Chen',
      action: 'uploaded',
      target: 'Customer Survey Data Q3',
      timestamp: '2 hours ago',
      type: 'upload',
      icon: Upload
    },
    {
      id: 2,
      user: 'Mike Johnson',
      action: 'downloaded',
      target: 'Sales Performance Analytics',
      timestamp: '4 hours ago',
      type: 'download',
      icon: Download
    },
    {
      id: 3,
      user: 'Emma Wilson',
      action: 'updated',
      target: 'User Behavior Dataset',
      timestamp: '6 hours ago',
      type: 'edit',
      icon: Edit
    },
    {
      id: 4,
      user: 'David Rodriguez',
      action: 'created',
      target: 'Marketing Campaign Results',
      timestamp: '8 hours ago',
      type: 'create',
      icon: Plus
    },
    {
      id: 5,
      user: 'Lisa Park',
      action: 'deleted',
      target: 'Outdated Product Metrics',
      timestamp: '12 hours ago',
      type: 'delete',
      icon: Trash2
    },
    {
      id: 6,
      user: 'Alex Thompson',
      action: 'downloaded',
      target: 'Financial Reports 2024',
      timestamp: '1 day ago',
      type: 'download',
      icon: Download
    }
  ];

  const getActivityColor = (type: string) => {
    const colors = {
      'upload': 'bg-green-100 text-green-800',
      'download': 'bg-blue-100 text-blue-800',
      'edit': 'bg-yellow-100 text-yellow-800',
      'create': 'bg-purple-100 text-purple-800',
      'delete': 'bg-red-100 text-red-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getIconColor = (type: string) => {
    const colors = {
      'upload': 'text-green-600',
      'download': 'text-blue-600',
      'edit': 'text-yellow-600',
      'create': 'text-purple-600',
      'delete': 'text-red-600'
    };
    return colors[type as keyof typeof colors] || 'text-gray-600';
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          Latest actions and changes across your datasets
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className={`p-2 rounded-full bg-white ${getIconColor(activity.type)}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs">
                  {activity.user.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span>
                  {' '}<span className="text-gray-600">{activity.action}</span>
                  {' '}<span className="font-medium">{activity.target}</span>
                </p>
                <p className="text-xs text-gray-500">{activity.timestamp}</p>
              </div>
              
              <Badge className={getActivityColor(activity.type)}>
                {activity.type}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
