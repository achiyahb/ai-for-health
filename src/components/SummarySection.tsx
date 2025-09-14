import React from "react";
import { Shield, Lightbulb, Link, FileText } from "lucide-react";
import PromptGuide from "./PromptGuide";

const SummarySection = () => {
  return (
    <section className="py-8 container mx-auto px-4 sm:px-6 max-w-4xl">
      <h2 className="text-2xl font-bold mb-6 text-ai-blue">סיכום הסדנה</h2>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 card-shadow">
          <div className="flex items-start space-x-4 space-x-reverse">
            <div className="bg-ai-lightBlue p-3 rounded-full">
              <Lightbulb className="h-6 w-6 text-ai-blue" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-4">מה למדנו?</h3>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  במהלך הסדנה עברנו יחד הרצאת מבוא שהציגה את מהפכת ה-AI, ולמה
                  כדאי ללמוד ולהשתמש בו. למדנו גם מושגים מעולמות הAI וכיצד הוא
                  עובד מאחורי הקלעים.
                </p>
                <p>
                  צפינו בהדגמות של מגוון אפשרויות בהן יישומי AI יכולים לתמוך
                  בעבודתכם המקצועית, הן בניהול והן בתהליכי טיפול.
                </p>
                <p>
                  למדנו גם על מצב הרגולציה בישראל, וכן על סכנות הטמונות בשימוש
                  בו וכיצד ניתן להיזהר מהן
                </p>
                <p>
                  לסיום, קיימנו סדנה מעשית, שבה תרגלתם פרומטינג ושימוש ביישומי
                  AI תוך חיבור ישיר לעשייה הטיפולית היומיומית שלכם.
                </p>
                <p className="pt-2 border-t border-gray-200 mt-4">
                  אנחנו מצרפים לכם כאן רשימת כלי AI וקישורים עליהם דיברנו בסדנה,
                  וטבלה המסכמת את שיטת מ.ת.פ.ק.ד.ת לכתיבת פרומפט איכותי.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Adding PromptGuide component here */}
        <PromptGuide />

        <div className="bg-white rounded-lg p-6 card-shadow">
          <div className="flex items-start space-x-4 space-x-reverse">
            <div className="bg-ai-lightPurple p-3 rounded-full">
              <Shield className="h-6 w-6 text-ai-purple" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">רשימת כלים וקישורים</h3>
              <ul className="space-y-3 mt-3">
                <li className="flex items-start">
                  <span className="font-semibold ml-2">צ׳אט GPT:</span>
                  <span className="text-gray-700">
                    ניתן להתכתב, ליצור טקסט או תמונה. הרשמה והורדה של האפליקציה
                    תפתח לכם יותר אפשרויות גם בחינם -{" "}
                  </span>
                  <a
                    href="https://chat.openai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ai-blue hover:underline mr-1"
                  >
                    לאתר
                  </a>
                </li>

                <li className="flex items-start">
                  <span className="font-semibold ml-2">Google AI Studio:</span>
                  <span className="text-gray-700">
                    ממשק של גוגל שמכיל הרבה אפשרויות במקום אחד, סרטונים, תמונות
                    וצ׳אט
                  </span>
                  <a
                    href="https://aistudio.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ai-blue hover:underline mr-1"
                  >
                    לאתר
                  </a>
                </li>

                <li className="flex items-start">
                  <span className="font-semibold ml-2">סונו (Suno):</span>
                  <span className="text-gray-700">יצירה והלחנת שירים - </span>
                  <a
                    href="https://suno.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ai-blue hover:underline mr-1"
                  >
                    לאתר
                  </a>
                </li>

                <li className="flex items-start">
                  <span className="font-semibold ml-2">הייג׳ן (HeyGen):</span>
                  <span className="text-gray-700">
                    פלטפורמה ליצירת סרטוני וידיאו, אווטר או תרגום סרטון -{" "}
                  </span>
                  <a
                    href="https://heygen.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ai-blue hover:underline mr-1"
                  >
                    לאתר
                  </a>
                </li>

                <li className="flex items-start">
                  <span className="font-semibold ml-2">רמיני (Remini):</span>
                  <span className="text-gray-700">
                    תוכנה ליצירת תמונות אישיות (כתבו Remini בחנות האפליקציות)
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="font-semibold ml-2">סקץ׳ (Sketch):</span>
                  <span className="text-gray-700">כלי להנפשת תמונות - </span>
                  <a
                    href="https://sketch.metademolab.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ai-blue hover:underline mr-1"
                  >
                    לאתר
                  </a>
                </li>

                <li className="flex items-start">
                  <span className="font-semibold ml-2">גמה (Gamma):</span>
                  <span className="text-gray-700">כלי ליצירת מצגות - </span>
                  <a
                    href="https://gamma.app/he"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ai-blue hover:underline mr-1"
                  >
                    לאתר
                  </a>
                </li>

                <li className="flex items-start">
                  <span className="font-semibold ml-2">בייס44 (Base44):</span>
                  <span className="text-gray-700">
                    כלי ליצירת אתרים בחינם -{" "}
                  </span>
                  <a
                    href="https://base44.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ai-blue hover:underline mr-1"
                  >
                    לאתר
                  </a>
                  <span className="text-gray-700 mr-1">מצורף סרטון הדרכה</span>
                </li>

                <li className="flex items-start">
                  <span className="font-semibold ml-2">לאבבל (Lovable):</span>
                  <span className="text-gray-700">
                    הפלטפורמה שבה נבנה האתר הזה -{" "}
                  </span>
                  <a
                    href="https://lovable.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ai-blue hover:underline mr-1"
                  >
                    לאתר
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 card-shadow">
          <div className="flex items-start space-x-4 space-x-reverse">
            <div className="bg-ai-lightTeal p-3 rounded-full">
              <Link className="h-6 w-6 text-ai-teal" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">קישורים נוספים</h3>
              <ul className="space-y-3 mt-3">
                <li className="flex items-start">
                  <span className="font-semibold ml-2">אינסטגרם מקצועי:</span>
                  <a
                    href="https://www.instagram.com/rachel.haviv.ot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ai-blue hover:underline"
                  >
                    חשבון האינסטגרם של רייצ׳ל
                  </a>
                  <span className="text-gray-700 mr-2">
                    שבו היא משתפת תכנים מקצועיים ומצחיקים בעולמות הריפוי בעיסוק
                    וה-AI. מוזמנים לעקוב!
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 card-shadow">
          <div className="flex items-start space-x-4 space-x-reverse">
            <div className="bg-ai-lightBlue p-3 rounded-full">
              <FileText className="h-6 w-6 text-ai-blue" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">נשמח לשמוע מכם</h3>
              <p className="text-gray-700 leading-relaxed">
                נשמח שתעזרו להנגיש את הידע הזה לקהלים נוספים, ותוכלו לכתוב לנו
                <a
                  href="https://forms.gle/B1T7PKrkbcKjJCo29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline mx-1"
                >
                  המלצה
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
