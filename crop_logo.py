from PIL import Image
import os
import sys

def crop_image(input_path, output_path):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        datas = img.getdata()
        
        # Determine bounding box
        width, height = img.size
        left, top, right, bottom = width, height, 0, 0
        
        found = False
        for y in range(height):
            for x in range(width):
                r, g, b, a = img.getpixel((x, y))
                # Consider non-black pixels (allowing some tolerance) or non-transparent
                # Assuming black backround: check for lightness
                if r > 10 or g > 10 or b > 10:
                    found = True
                    if x < left: left = x
                    if x > right: right = x
                    if y < top: top = y
                    if y > bottom: bottom = y
        
        if found:
            # Add a small padding
            padding = 10
            left = max(0, left - padding)
            top = max(0, top - padding)
            right = min(width, right + padding)
            bottom = min(height, bottom + padding)
            
            img_cropped = img.crop((left, top, right, bottom))
            img_cropped.save(output_path)
            print(f"Cropped image saved to {output_path}")
        else:
            print("No content found to crop")
            img.save(output_path) # Fallback

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    input_file = r"C:\Users\Sasikumar\.gemini\antigravity\brain\575f1e28-a302-4a68-bf7c-47f8579a9955\uploaded_image_1765774067384.png"
    output_file = r"c:\Users\Sasikumar\Documents\infolexus\src\assets\infolexus_logo_cropped.png"
    crop_image(input_file, output_file)
