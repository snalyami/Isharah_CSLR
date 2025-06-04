
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatsOverview } from "@/components/dashboard/StatsOverview";
import { DatasetMetrics } from "@/components/dashboard/DatasetMetrics";
import { QualityAnalysis } from "@/components/dashboard/QualityAnalysis";
import { DatasetGrowth } from "@/components/dashboard/DatasetGrowth";
import { WordCloudChart } from "@/components/dashboard/WordCloudChart";
import { EvaluationSetups } from "@/components/dashboard/EvaluationSetups";
import { HearingLevelChart } from "@/components/dashboard/HearingLevelChart";
import { AgeRangeChart } from "@/components/dashboard/AgeRangeChart";
import { GenderChart } from "@/components/dashboard/GenderChart";
import { AnnotationStats } from "@/components/dashboard/AnnotationStats";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header with Logo */}
        <header className="text-center space-y-6">
          <img 
            src="/lovable-uploads/d7f164a5-229f-4d29-be19-87f707b01317.png" 
            alt="Isharah Logo" 
            className="w-48 h-auto mx-auto"
          />
          <img 
            src="/lovable-uploads/a5a6fe8a-697c-4767-a950-a17bc782e437.png" 
            alt="Isharah Signers Banner" 
            className="w-full max-w-4xl h-auto mx-auto rounded-lg shadow-lg"
          />
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600" style={{ color: '#1b3448' }}>
            Isharah Continuous Sign Language Recognition and Translation Dataset
          </h1>
          
          <p className="text-xl font-semibold text-gray-700">The first large-scale continuous Saudi Sign Language (SSL) dataset</p>
          
          {/* Navigation Menu */}
          <nav className="flex justify-center items-center gap-2 text-lg">
            <a 
              href="https://drive.google.com/drive/folders/1rWb4SKT1GqA5Y6_S_0Vb-H9AaX1kBSWf?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:opacity-80"
              style={{ color: '#1b3448' }}
            >
              Download Sample
            </a>
            <span className="text-gray-400">•</span>
            <a 
              href="#"
              className="transition-colors hover:opacity-80"
              style={{ color: '#1b3448' }}
            >
              Read the Paper
            </a>
            <span className="text-gray-400">•</span>
            <a 
              href="#contact"
              className="transition-colors hover:opacity-80"
              style={{ color: '#1b3448' }}
            >
              Contact
            </a>
          </nav>
        </header>

        {/* About Section */}
        <section className="text-center space-y-4 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
            🧾 About
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            <strong>Isharah</strong> is a large-scale dataset for Continuous Saudi Sign Language (SSL) recognition and translation.
            It features over <strong>30,000 video samples</strong> signed by deaf and hearing-impaired individuals using smartphones in varied settings.
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            The dataset supports both <strong>Continuous Sign Language Recognition (CSLR)</strong> and 
            <strong>Sign Language Translation (SLT)</strong>, and includes: Sentence-level <strong>gloss annotations</strong>, the corresponding <strong>Arabic translations</strong> and organized into three benchmark subsets: <strong>Isharah-500</strong>, <strong>Isharah-1000</strong>, and <strong>Isharah-2000</strong>
          </p>
          
        </section>

        {/* Stats Overview */}
        <StatsOverview />

        {/* Main Dashboard Content */}
        <Tabs defaultValue="signers" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:w-fit lg:grid-cols-4" style={{ backgroundColor: '#e8f4f8' }}>
            <TabsTrigger value="signers" className="data-[state=active]:text-white" style={{ '--tw-data-state-active-bg': '#1b3448' } as any}>Signers</TabsTrigger>
            <TabsTrigger value="topics" className="data-[state=active]:text-white" style={{ '--tw-data-state-active-bg': '#1b3448' } as any}>Topics</TabsTrigger>
            <TabsTrigger value="annotations" className="data-[state=active]:text-white" style={{ '--tw-data-state-active-bg': '#1b3448' } as any}>Annotations</TabsTrigger>
            <TabsTrigger value="dataset-split" className="data-[state=active]:text-white" style={{ '--tw-data-state-active-bg': '#1b3448' } as any}>Dataset Split</TabsTrigger>
          </TabsList>

          <TabsContent value="signers" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <HearingLevelChart />
              <AgeRangeChart />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
              <GenderChart />
            </div>
          </TabsContent>

          <TabsContent value="topics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <DatasetMetrics />
              <WordCloudChart />
            </div>
          </TabsContent>

          <TabsContent value="annotations" className="space-y-6">
            <AnnotationStats />
          </TabsContent>

          <TabsContent value="dataset-split" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <DatasetGrowth />
              <EvaluationSetups />
            </div>
          </TabsContent>
        </Tabs>

        {/* Download Section */}
        <section className="text-center space-y-4 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
            🔗 Download
          </h2>
          <p className="text-lg text-gray-700">We are currently preparing the dataset files for public release. The download links will be available soon.</p>
          <ul className="space-y-2 text-lg">
            <li>🔗 <a href="#" className="transition-colors hover:opacity-80" style={{ color: '#1b3448' }}>Isharah-500 (coming soon)</a></li>
            <li>🔗 <a href="#" className="transition-colors hover:opacity-80" style={{ color: '#1b3448' }}>Isharah-1000 (coming soon)</a></li>
            <li>🔗 <a href="#" className="transition-colors hover:opacity-80" style={{ color: '#1b3448' }}>Isharah-2000 (coming soon)</a></li>
          </ul>
        </section>

        {/* Citation Section */}
        <section className="text-center space-y-4 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
            📄 Citation
          </h2>
          <p className="text-lg text-gray-700">If you use Isharah in your work, please cite:</p>
          <pre className="bg-gray-100 p-4 rounded-lg text-left overflow-x-auto">
            {/* Citation content will be added here */}
          </pre>
        </section>

        {/* Contact Footer */}
        <footer id="contact" className="text-center bg-white rounded-xl p-6 shadow-lg">
          <p className="text-gray-600">
            For inquiries or collaboration, contact: 
            <a href="mailto:snalyami@iau.edu.sa" className="transition-colors hover:opacity-80 ml-1" style={{ color: '#1b3448' }}>snalyami@iau.edu.sa</a> or 
            <a href="mailto:hluqman@kfupm.edu.sa" className="transition-colors hover:opacity-80 ml-1" style={{ color: '#1b3448' }}>hluqman@kfupm.edu.sa</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
