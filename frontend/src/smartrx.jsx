import { useState } from "react";
import { Upload } from "lucide-react";
import { motion } from "framer-motion";

const SmartRxApp = () => {
  const [prescriptionText, setPrescriptionText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleFileUpload = (event) => {
    // Placeholder logic for file upload handling
    const file = event.target.files[0];
    if (file) {
      console.log("File uploaded:", file.name);
      setPrescriptionText("Extracted text will appear here.");
    }
  };

  const handleTranslate = () => {
    // Placeholder logic for translation
    setTranslatedText("Translated text will appear here.");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <motion.h1
        className="text-4xl font-bold text-blue-600 mt-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        SmartRx
      </motion.h1>
      <p className="text-lg text-gray-700 mt-2 text-center">
        Scan prescriptions, translate details, and improve healthcare communication.
      </p>

      <div className="bg-white shadow-xl rounded-lg mt-6 w-full max-w-xl p-4">
        <label
          htmlFor="upload"
          className="flex items-center gap-2 text-blue-600 font-medium cursor-pointer"
        >
          <Upload /> Upload Prescription
        </label>
        <input
          id="upload"
          type="file"
          className="hidden"
          onChange={handleFileUpload}
        />

        {prescriptionText && (
          <div className="mt-4 bg-gray-200 p-3 rounded-lg">
            <h3 className="font-semibold">Extracted Prescription:</h3>
            <p className="text-gray-800 mt-2">{prescriptionText}</p>
          </div>
        )}

        <button
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          onClick={handleTranslate}
        >
          Translate
        </button>

        {translatedText && (
          <div className="mt-4 bg-gray-200 p-3 rounded-lg">
            <h3 className="font-semibold">Translated Text:</h3>
            <p className="text-gray-800 mt-2">{translatedText}</p>
          </div>
        )}
      </div>

      <footer className="mt-auto py-4 text-sm text-gray-500">
        © 2025 SmartRx. All rights reserved.
      </footer>
    </div>
  );
};

export default SmartRxApp;
