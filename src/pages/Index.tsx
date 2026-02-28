import Header from "@/components/Header";
import LetterSection from "@/components/LetterSection";
import MemoryTimeline from "@/components/MemoryTimeline";
import PromiseSection from "@/components/PromiseSection";
import AudioToggle from "@/components/AudioToggle";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg relative overflow-x-hidden">
      <div className="relative z-10">
        <Header />
        <LetterSection />
        <MemoryTimeline />
        <PromiseSection />
        <div className="h-16" />
      </div>
      <AudioToggle />
    </div>
  );
};

export default Index;
