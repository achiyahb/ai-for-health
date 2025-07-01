import React from "react";
import Navbar from "@/components/Navbar";
import VideoCard from "@/components/VideoCard";

const Videos = () => {
  // Videos data
  const videos = [
    {
      embedId: "oiZQa94TkpQ",
      title: "שמירה על הפרטיות עם ChatGPT",
      description: "כל מה שצריך לדעת על שמירת הפרטיות בעבודה עם ChatGPT",
      icon: "shield" as const,
    },
    {
      embedId: "Ks-2YPNCfA4",
      title: "סקירה על Google AI Studio",
      description:
        "סקירה קצרה על Google AI Studio שמאפשר יצירת סרטונים, מוזיקה, הקראת טקסט, תמונות, ושיתוף מסך עם הAI",
      icon: "bot" as const,
    },
    {
      embedId: "h6Y6BX2D4nU",
      title: "שימוש ב-Explore GPTs",
      description:
        "איך להשתמש ב-Explore GPTs כדי לקבל בוט יותר ממוקד לעולם התוכן שלנו",
      icon: "search" as const,
    },
    {
      embedId: "VTaLBpbFndI",
      title: "יצירת אתר עם Base44",
      description: "יצירת אתר בעזרת AI בחינם עם Base44",
      icon: "globe" as const,
    },
    {
      embedId: "xmYLjHa3fVo",
      title: "שימוש בפרומפטינג כדי לבקש בניית תכנית טיפול",
      description: "איך לדייק את Claude בבניית תכנית טיפול בעזרת פרומפטינג",
      icon: "message-square" as const,
    },
    {
      embedId: "XcPSmsRtN6o",
      title: "בניית אתר באמצעות קלוד",
      description: "למד.י איך להשתמש ב-Claude לבניית אתרים",
      icon: "message-square" as const,
    },
    {
      embedId: "uRv963mVDgs",
      title: "מדריך להעלאת אתר שבנינו עם קלוד",
      description:
        "אחרי שבנינו אתר עם קלוד, איך מעלים אותו לאינטרנט בקלות ובחינם",
      icon: "message-square" as const,
    },
    {
      embedId: "-Csg9lIAGNA",
      title: "יצירת תמונות Remini",
      description: "יצירת תמונות מגניבות שלנו בחינם באמצעות אפליקציית Remini",
      icon: "brain" as const,
    },
    {
      embedId: "yWzOVZywYwA",
      title: "יצירת שירים - Suno",
      description: "איך ליצור, לכתוב ולהלחין שירים במגוון סגנונות עם Suno",
      icon: "bot" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Videos Header */}
      <section className="bg-white py-10 md:py-16 border-b">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h1 className="text-3xl font-bold mb-3 text-center">
            מדריכי שימוש במערכות AI 🤖
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            להלן סרטוני הדרכה קצרים שיעזרו לכם להתחיל להשתמש בכלים חדשניים
            בעבודה הטיפולית שלכם. כל הסרטונים באורך קצר ומונגשים בשפה פשוטה.
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <VideoCard
                key={index}
                embedId={video.embedId}
                title={video.title}
                description={video.description}
                icon={video.icon}
              />
            ))}
          </div>
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

export default Videos;
