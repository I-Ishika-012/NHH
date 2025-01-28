from PIL import Image
import pytesseract

def extract_text_from_image(image_path):
    # Use Tesseract to extract text
    image = Image.open(image_path)
    text = pytesseract.image_to_string(image)
    return text.strip()
