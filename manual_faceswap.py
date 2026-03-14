import cv2
import numpy as np
from PIL import Image

def detect_best_face(image_path):
    # Load image
    img = cv2.imread(image_path)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Load Haar cascade
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    
    # Detect faces
    faces = face_cascade.detectMultiScale(gray, 1.1, 4)
    if len(faces) == 0:
        print(f"No face detected in {image_path}")
        return None
        
    # Pick the largest face (probably Arthur)
    faces = sorted(faces, key=lambda f: f[2]*f[3], reverse=True)
    return faces[0]

def swap_face():
    bg_path = "/Users/raphaelsiva/.gemini/antigravity/scratch/atlas-immobilier/public/advisors_team_photo.png"
    arthur_path = "/Users/raphaelsiva/.gemini/antigravity/scratch/atlas-immobilier/public/assets/advisors/artur.png"
    
    # 1. Detect Arthur's face
    arthur_box = detect_best_face(arthur_path)
    if arthur_box is None:
        return
        
    x, y, w, h = arthur_box
    
    # Expand the bounding box a bit to get hair and neck
    margin_w = int(w * 0.3)
    margin_h = int(h * 0.4)
    y_start = max(0, y - margin_h)
    y_end = y + h + int(margin_h*1.2)
    x_start = max(0, x - margin_w)
    x_end = x + w + margin_w
    
    # 2. Extract Arthur's head
    arthur_img = Image.open(arthur_path).convert("RGBA")
    arthur_head = arthur_img.crop((x_start, y_start, x_end, y_end))
    
    # 3. Detect the central person in the team photo
    bg_img = cv2.imread(bg_path)
    gray_bg = cv2.cvtColor(bg_img, cv2.COLOR_BGR2GRAY)
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    bg_faces = face_cascade.detectMultiScale(gray_bg, 1.1, 4)
    
    if len(bg_faces) == 0:
        print("No faces detected in the team photo")
        return
        
    # Find the face closest to the center
    h_bg, w_bg = bg_img.shape[:2]
    center_x, center_y = w_bg // 2, h_bg // 2
    
    closest_face = None
    min_dist = float('inf')
    
    for (fx, fy, fw, fh) in bg_faces:
        fcx = fx + fw // 2
        fcy = fy + fh // 2
        dist = (fcx - center_x)**2 + (fcy - center_y)**2
        if dist < min_dist:
            min_dist = dist
            closest_face = (fx, fy, fw, fh)
            
    if not closest_face:
        return
        
    tx, ty, tw, th = closest_face
    
    # Calculate scale factor to match widths
    scale = (tw + tw*0.6) / arthur_head.width 
    new_size = (int(arthur_head.width * scale), int(arthur_head.height * scale))
    arthur_head_resized = arthur_head.resize(new_size, Image.Resampling.LANCZOS)
    
    # Create soft mask for blending
    mask = Image.new('L', new_size, 0)
    import math
    for i in range(new_size[0]):
        for j in range(new_size[1]):
            # Elliptical distance from center
            nx = (i - new_size[0]/2) / (new_size[0]/2)
            ny = (j - new_size[1]/2) / (new_size[1]/2)
            d = math.sqrt(nx*nx + ny*ny)
            
            # Fade out at edges
            if d < 0.6:
                mask.putpixel((i, j), 255)
            elif d < 1.0:
                val = int(255 * (1 - (d - 0.6) / 0.4))
                mask.putpixel((i, j), val)
                
    # Composite
    bg_pil = Image.open(bg_path).convert("RGBA")
    
    # Calculate paste position (align centers)
    paste_x = tx + tw//2 - new_size[0]//2
    paste_y = ty + th//2 - new_size[1]//2 - int(th*0.1) # little bit higher to account for neck
    
    bg_pil.paste(arthur_head_resized, (paste_x, paste_y), mask)
    
    # Save
    bg_pil.convert("RGB").save(bg_path)
    print("Done compositing Arthur's face.")

if __name__ == "__main__":
    swap_face()
