#!/bin/bash

# Array of image URLs
images=(
"https://mms.seloger.com/8/7/6/c/876cf20d-dcc8-4bd2-8deb-c40b9af562bb.jpg?ci_seal=50ff1054bdfd9c807be5d6fb4a2e5a7c771daab1"
"https://mms.seloger.com/b/e/a/9/bea917b4-7765-4f5d-8b84-2634a7f3498e.jpg?ci_seal=ca791174343427743af6efa96e592fd04352d061"
"https://mms.seloger.com/d/0/f/b/d0fbdf93-2583-4527-8fcf-6acf7de6a99b.jpg?ci_seal=9691baca3c3c07f6fd722bf202e79c91dbc875ba"
"https://mms.seloger.com/7/2/e/4/72e49abf-84b6-4cb0-a7c3-095cfa810025.jpg?ci_seal=a398c236bbddfa20a7bcbe8d17348050306a9b84"
"https://mms.seloger.com/4/0/3/b/403b5e86-36eb-44b5-a982-01ff05605b19.jpg?ci_seal=4ab5f6939c1b31bbae0bec80f779d4480490b214"
"https://mms.seloger.com/0/e/3/f/0e3f4155-d568-40cc-962b-e68499648b81.jpg?ci_seal=9d70cde949189be44f2950766bb52a787529fcdd"
"https://mms.seloger.com/6/d/9/c/6d9c7220-1ec4-411d-bfff-232a5864e245.jpg?ci_seal=683eb635cd8fe2e980f1b3827372a22cbbdf4e8f"
"https://mms.seloger.com/2/4/6/0/24605211-ea74-4fc0-9e9e-0ae58d888be9.jpg?ci_seal=39b8fc13774f58e157a79dffec72f031fe083baf"
"https://mms.seloger.com/5/7/c/d/57cd0586-61e9-4cb3-b233-3dfc5e788fc5.jpg?ci_seal=99439a5d5461cfce1f5440974a93749cb03e0aa7"
"https://mms.seloger.com/3/e/8/9/3e899c01-1e76-4abc-bf26-f15235857404.jpg?ci_seal=81e842e9933fae61c0d61b01951cec7e8b9b3a38"
"https://mms.seloger.com/0/a/e/1/0ae1c666-5a51-498d-871f-6a6cb05e8e50.jpg?ci_seal=2f9484b93af7f8f2a5876d92bcebe784e5d26cdd"
"https://mms.seloger.com/a/b/d/d/abddd9ea-1aba-4298-951a-f19fa4fbc334.jpg?ci_seal=e3ce34166403d9ff36b942bbe642b5089354a474"
"https://mms.seloger.com/5/4/5/6/5456ca58-492c-46ab-9838-c7ae7f2e3c49.jpg?ci_seal=d0194732d677cb6aac2d6c542e5fda979671a945"
"https://mms.seloger.com/8/c/9/6/8c968e21-2c1b-4fff-b892-e9a5516a5270.jpg?ci_seal=5b2bdc2c8f3bda23fb4e8ac20056609ce3094939"
)

# Output directory
output_dir="public/images/vesinet_t3"

# Counter for image filenames
count=1

for url in "${images[@]}"; do
  # Format filename with leading zero (e.g., img_01.jpg)
  filename=$(printf "img_%02d.jpg" "$count")
  filepath="$output_dir/$filename"

  echo "Downloading $url to $filepath..."
  curl -s -L "$url" -o "$filepath"

  ((count++))
done

echo "All images downloaded to $output_dir"
