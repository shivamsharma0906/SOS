import os
from PIL import Image

assets_dir = os.path.join(os.path.dirname(__file__), '..', 'public', 'assets')

def optimize_image(filename, widths=[480, 800, 1200]):
    filepath = os.path.join(assets_dir, filename)
    if not os.path.exists(filepath):
        print(f"Skipping {filename}, not found")
        return

    orig_size = os.path.getsize(filepath)
    base_name, _ = os.path.splitext(filename)
    
    with Image.open(filepath) as img:
        img_rgb = img.convert('RGB')
        w, h = img_rgb.size
        
        # Save standard WebP
        webp_path = os.path.join(assets_dir, f"{base_name}.webp")
        img_rgb.save(webp_path, 'WEBP', quality=82, method=6)
        print(f"Optimized {filename} ({orig_size // 1024} KB) -> {base_name}.webp ({os.path.getsize(webp_path) // 1024} KB)")

        # Save responsive sizes
        for width in widths:
            if width < w:
                new_h = int(h * (width / w))
                resized = img_rgb.resize((width, new_h), Image.Resampling.LANCZOS)
                responsive_path = os.path.join(assets_dir, f"{base_name}-{width}w.webp")
                resized.save(responsive_path, 'WEBP', quality=80, method=6)
                print(f"  -> {base_name}-{width}w.webp ({os.path.getsize(responsive_path) // 1024} KB)")

if __name__ == '__main__':
    images_to_optimize = [
        'robotic-knee-consultation.png',
        'robotic-knee-recovery-mumbai.png',
        'robotic-knee-replacement-procedure-mumbai.png',
        'blog-featured-robotic.jpg',
        'clinic-lounge-reception.jpg',
        'clinic-consultation-suite.jpg',
        'clinic-digital-xray.jpg',
        'clinic-kandivali.jpg'
    ]
    for img in images_to_optimize:
        optimize_image(img)
