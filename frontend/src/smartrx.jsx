import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Translate } from "lucide-react";
import { motion } from "framer-motion";

export default function SmartRx() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [extractedText, setExtractedText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);
    // Mock OCR process
    setExtractedText("Take 1 tablet daily after meals. Consult your doctor if side effects occur.");
  };

  const handleTranslate = () => {
    // Mock translation process
    setTranslatedText("Tome 1 tableta diariamente después de las comidas. Consulte a su médico si ocurren efectos secundarios.");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold text-blue-600 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        SmartRx - Your Prescription Assistant
      </motion.h1>

      <Card className="w-full max-w-3xl p-6 shadow-2xl">
        <CardContent>
          <div className="flex flex-col gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Upload Prescription</label>
              <Input type="file" onChange={handleFileUpload} className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            </div>

            {uploadedFile && (
              <div className="mt-4">
                <p className="text-gray-700">File Uploaded: <span className="font-medium">{uploadedFile.name}</span></p>
              </div>
            )}

            {extractedText && (
              <div>
                <label className="block text-gray-700 font-medium mb-2">Extracted Prescription</label>
                <Textarea readOnly value={extractedText} className="resize-none" rows={4} />
              </div>
            )}

            {extractedText && (
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 mt-4" onClick={handleTranslate}>
                <Translate className="mr-2" /> Translate
              </Button>
            )}

            {translatedText && (
              <div>
                <label className="block text-gray-700 font-medium mb-2">Translated Text</label>
                <Textarea readOnly value={translatedText} className="resize-none" rows={4} />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
