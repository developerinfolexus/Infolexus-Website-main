from PIL import Image
import numpy as np

def convert_to_transparent(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        data = np.array(img)
        
        # Extract RGB channels
        r, g, b, a = data.T
        
        # Calculate new alpha based on brightness (max of RGB)
        # This preserves the glow.
        # However, if the text is white/solid, we want it 255 alpha.
        # If the background is black, we want 0 alpha.
        # A simple max(r,g,b) works well for "additive" -> "alpha" conversion.
        
        # But wait, looking at the image, it's not just pure glow, it has solid text.
        # Method: "Black is transparent".
        # Let's try a softer approach:
        # 1. Mask = grayscale intensity.
        # 2. Set Alpha = Mask.
        # 3. This assumes the object is light and background is dark.
        
        # Manual pixel iteration for safety without numpy complexities if user env is limited (though PIL is there)
        # Actually simplest heuristic for "Black background to transparent":
        # If pixel is close to black, reduce alpha.
        
        new_data = []
        for item in img.getdata():
            # item is (r, g, b, a)
            r, g, b = item[:3]
            # Heuristic: lighter pixels are more opaque.
            # But the text is white/cyan. 
            # Define a threshold? 
            # Or just use the "Screen to Alpha" logic:
            # Alpha = Max(r, g, b)
            # This makes black transparent and white opaque.
            # But it also makes dark colors transparent.
            # The logo has some dark blues. They might become semi-transparent. 
            # This is actually desirable for blending!
            
            logic_alpha = max(r, g, b)
            
            # Boost alpha slightly to ensure readable text isn't too ghostly
            # If max(r,g,b) > 50, make it fully opaque, else scale it?
            # No, let's try a smart threshold.
            
            if r < 15 and g < 15 and b < 15:
                # Pure-ish black -> Transparent
                new_data.append((r, g, b, 0))
            else:
                # Content -> Opaque
                # This might have jagged edges. 
                # Let's add a small transition or just keep it opaque.
                new_data.append((r, g, b, 255))

        img.putdata(new_data)
        img.save(output_path, "PNG")
        print(f"Saved transparent image to {output_path}")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    input_file = r"c:\Users\Sasikumar\Documents\infolexus\src\assets\infolexus_logo_cropped.png"
    output_file = r"c:\Users\Sasikumar\Documents\infolexus\src\assets\infolexus_logo_transparent.png"
    convert_to_transparent(input_file, output_file)
