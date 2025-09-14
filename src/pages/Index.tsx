import React from "react";
import { ArrowLeft, Heart } from "lucide-react";
import { NavLink } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SummarySection from "@/components/SummarySection";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ai-blue/90 to-ai-purple/80 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn">
            תודה שהשתתפתם בסדנה שלנו על בינה מלאכותית במקצועות הבריאות!
          </h1>

          {/* Logos Section */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
            {/* AI for OTs Logo */}
            <div className="w-32 h-32 bg-white rounded-full p-2">
              <img
                src="/lovable-uploads/f5da2f07-6705-482e-ae02-e94e33ea102e.png"
                alt="AI for OTs Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Summary Content - now includes PromptGuide within it */}
      <SummarySection />

      {/* Call to Action */}
      <section className="py-12 bg-ai-lightBlue">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-ai-blue">
            רוצים ללמוד עוד?
          </h2>
          <p className="text-lg mb-6">
            בדף הסרטונים תמצאו מדריכים שיעזרו לכם להתחיל לעבוד עם כלי AI בצורה
            מעשית
          </p>
          <Button asChild>
            <NavLink to="/videos">צפו בסרטוני ההדרכה</NavLink>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 sm:px-6 text-center text-gray-600 text-sm">
          <p>
            © {new Date().getFullYear()} AI במקצועות הבריאות - כל הזכויות שמורות
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
