import os

from PIL import Image

# Define input and output directories
input_folder = os.path.dirname(os.path.abspath(__file__))  # Script's directory
output_folder = os.path.join(input_folder, "webp_output")  # Output folder in script's directory
max_size = (1200, 1200)  # Max width/height for resizing (adjust as needed)

# Create output folder if it doesn't exist
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Get all PNG files in the input folder
png_files = [f for f in os.listdir(input_folder) if f.lower().endswith('.png')]

# Convert and resize each PNG to WebP
for png_file in png_files:
    try:
        # Define output file path (replace .png with .webp)
        output_file = os.path.join(output_folder, os.path.splitext(png_file)[0] + '.webp')
        
        # Skip if WebP file already exists
        if os.path.exists(output_file):
            print(f"Skipping {png_file} - WebP already exists")
            continue
        
        # Open the PNG image
        img_path = os.path.join(input_folder, png_file)
        img = Image.open(img_path)
        
        # Resize image while preserving aspect ratio
        img.thumbnail(max_size, Image.Resampling.LANCZOS)  # High-quality resizing
        
        # Save as WebP with quality setting (80 for lossy, preserves transparency)
        img.save(output_file, 'WEBP', quality=80, method=6)  # method=6 for max compression
        print(f"Converted, resized, and compressed {png_file} to WebP")
        
    except Exception as e:
        print(f"Error processing {png_file}: {str(e)}")

print("Conversion complete!")