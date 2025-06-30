
import React from "react";
import { FileText } from "lucide-react";

const PromptGuide = () => {
  return (
    <div className="bg-white rounded-lg p-6 card-shadow">
      <div className="flex items-start space-x-4 space-x-reverse">
        <div className="bg-ai-lightBlue p-3 rounded-full">
          <FileText className="h-6 w-6 text-ai-blue" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-6">שיטת מ.ת.פ.ק.ד.ת לכתיבת פרומפט איכותי</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-ai-blue">
                  <th className="py-3 text-right">אות</th>
                  <th className="py-3 text-right">הסבר</th>
                  <th className="py-3 text-right">שאלה מנחה</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 font-bold text-ai-blue">מ</td>
                  <td className="py-4">מי אני</td>
                  <td className="py-4">מי אני?</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 font-bold text-ai-blue">ת</td>
                  <td className="py-4">תפקיד</td>
                  <td className="py-4">מה התפקיד שאתה רוצה שה-AI יגלם?</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 font-bold text-ai-blue">פ</td>
                  <td className="py-4">פלט</td>
                  <td className="py-4">איך אתה רוצה שהפלט יהיה? בנקודות, בטבלה, שפה וכו׳.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 font-bold text-ai-blue">ק</td>
                  <td className="py-4">בקשה</td>
                  <td className="py-4">לפרט את הבקשה שלך ככל הניתן.</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 font-bold text-ai-blue">ד</td>
                  <td className="py-4">דוגמא / הקשר</td>
                  <td className="py-4">לתת דוגמאות רלוונטיות למה שאתה רוצה</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 font-bold text-ai-blue">ת</td>
                  <td className="py-4">תוספות</td>
                  <td className="py-4">לבקש מה-AI לייעץ - תופתעו מההצעות שלו!!</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptGuide;
