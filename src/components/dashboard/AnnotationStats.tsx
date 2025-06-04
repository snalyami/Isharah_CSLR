
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const AnnotationStats = () => {
  const annotationData = {
    "Isharah-500": {
      signerIndependent: {
        train: { videos: 5000, uniqueSentences: 499, avgLength: 4.19, vocabSize: 388, singletons: 28.09, oov: "-" },
        dev: { videos: 500, uniqueSentences: 499, avgLength: 4.19, vocabSize: 388, singletons: "-", oov: 0 },
        test: { videos: 2000, uniqueSentences: 499, avgLength: 4.19, vocabSize: 388, singletons: "-", oov: 0 }
      },
      unseenSentences: {
        train: { videos: 6000, uniqueSentences: 399, avgLength: 4.06, vocabSize: 353, singletons: 27.76, oov: "-" },
        dev: { videos: 750, uniqueSentences: 50, avgLength: 4.72, vocabSize: 140, singletons: "-", oov: 16.42 },
        test: { videos: 750, uniqueSentences: 50, avgLength: 4.26, vocabSize: 136, singletons: "-", oov: 9.55 }
      },
      arabic: {
        train: { videos: 5000, uniqueSentences: 500, avgLength: 3.88, vocabSize: 785, singletons: 50.70, oov: "-" },
        dev: { videos: 500, uniqueSentences: 500, avgLength: 3.88, vocabSize: 785, singletons: "-", oov: 0 },
        test: { videos: 2000, uniqueSentences: 500, avgLength: 3.88, vocabSize: 785, singletons: "-", oov: 0 }
      }
    },
    "Isharah-1000": {
      signerIndependent: {
        train: { videos: 10000, uniqueSentences: 1136, avgLength: 4.88, vocabSize: 680, singletons: 21.76, oov: "-" },
        dev: { videos: 1000, uniqueSentences: 998, avgLength: 4.8, vocabSize: 677, singletons: "-", oov: 0.44 },
        test: { videos: 4000, uniqueSentences: 1022, avgLength: 4.82, vocabSize: 679, singletons: "-", oov: 0.29 }
      },
      unseenSentences: {
        train: { videos: 10000, uniqueSentences: 1076, avgLength: 4.94, vocabSize: 666, singletons: 23.12, oov: "-" },
        dev: { videos: 750, uniqueSentences: 50, avgLength: 4.72, vocabSize: 140, singletons: "-", oov: 7.85 },
        test: { videos: 750, uniqueSentences: 50, avgLength: 4.26, vocabSize: 136, singletons: "-", oov: 6.61 }
      },
      arabic: {
        train: { videos: 10000, uniqueSentences: 1038, avgLength: 4.36, vocabSize: 1488, singletons: 47.04, oov: "-" },
        dev: { videos: 1000, uniqueSentences: 997, avgLength: 4.34, vocabSize: 1468, singletons: "-", oov: 0.13 },
        test: { videos: 4000, uniqueSentences: 1010, avgLength: 4.36, vocabSize: 1476, singletons: "-", oov: 0.4 }
      }
    },
    "Isharah-2000": {
      signerIndependent: {
        train: { videos: 20000, uniqueSentences: 2358, avgLength: 4.71, vocabSize: 1106, singletons: 25.86, oov: "-" },
        dev: { videos: 2000, uniqueSentences: 1998, avgLength: 4.62, vocabSize: 1097, singletons: "-", oov: 1.27 },
        test: { videos: 8000, uniqueSentences: 2340, avgLength: 4.67, vocabSize: 1114, singletons: "-", oov: 1.43 }
      },
      unseenSentences: {
        train: { videos: 13500, uniqueSentences: 2903, avgLength: 4.23, vocabSize: 1117, singletons: 19.87, oov: "-" },
        dev: { videos: 750, uniqueSentences: 50, avgLength: 4.72, vocabSize: 140, singletons: "-", oov: 5.71 },
        test: { videos: 750, uniqueSentences: 50, avgLength: 4.26, vocabSize: 136, singletons: "-", oov: 5.88 }
      },
      arabic: {
        train: { videos: 20000, uniqueSentences: 2038, avgLength: 4.21, vocabSize: 2690, singletons: 53.57, oov: "-" },
        dev: { videos: 2000, uniqueSentences: 1996, avgLength: 4.19, vocabSize: 2671, singletons: "-", oov: 0.14 },
        test: { videos: 8000, uniqueSentences: 2009, avgLength: 4.2, vocabSize: 2678, singletons: "-", oov: 0.22 }
      }
    }
  };

  const renderTable = (dataKey: string, title: string) => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>
          Singletons: Glosses/words that occur once. OOV: Out-of-vocabulary items in Dev/Test not in training.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2 font-medium">Dataset</th>
                <th className="text-left p-2 font-medium">Split</th>
                <th className="text-center p-2 font-medium">Videos</th>
                <th className="text-center p-2 font-medium">Sentences</th>
                <th className="text-center p-2 font-medium">Avg Length</th>
                <th className="text-center p-2 font-medium">Vocab Size</th>
                <th className="text-center p-2 font-medium">Singletons (%)</th>
                <th className="text-center p-2 font-medium">OOV (%)</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(annotationData).map(([dataset, splits]) => {
                const splitData = splits[dataKey as keyof typeof splits];
                if (!splitData) return null;
                
                return Object.entries(splitData).map(([split, stats], index) => (
                  <tr key={`${dataset}-${split}`} className="border-b hover:bg-gray-50">
                    {index === 0 && (
                      <td className="p-2 font-medium" rowSpan={3}>{dataset}</td>
                    )}
                    <td className="p-2 capitalize">{split}</td>
                    <td className="p-2 text-center">{stats.videos.toLocaleString()}</td>
                    <td className="p-2 text-center">{stats.uniqueSentences.toLocaleString()}</td>
                    <td className="p-2 text-center">{stats.avgLength}</td>
                    <td className="p-2 text-center">{stats.vocabSize.toLocaleString()}</td>
                    <td className="p-2 text-center">{stats.singletons}</td>
                    <td className="p-2 text-center">{stats.oov}</td>
                  </tr>
                ));
              })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Annotation Statistics</h2>
        <p className="text-gray-600">
          Detailed breakdown of annotation statistics regarding the provided gloss and Arabic annotations
        </p>
      </div>
      
      <Tabs defaultValue="signer-independent" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="signer-independent">Signer-Independent CSLR</TabsTrigger>
          <TabsTrigger value="unseen-sentences">Unseen-Sentences CSLR</TabsTrigger>
          <TabsTrigger value="arabic">Signer-Independent SLT</TabsTrigger>
        </TabsList>

        <TabsContent value="signer-independent">
          {renderTable("signerIndependent", "Signer-Independent CSLR")}
        </TabsContent>

        <TabsContent value="unseen-sentences">
          {renderTable("unseenSentences", "Unseen-Sentences CSLR")}
        </TabsContent>

        <TabsContent value="arabic">
          {renderTable("arabic", "Signer-Independent SLT")}
        </TabsContent>
      </Tabs>
    </div>
  );
};
