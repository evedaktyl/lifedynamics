import fs from 'fs';
import path from 'path';
import Image from 'next/image';

export default function GalleryPage() {
  // Read filenames from public/gallery directory at build time
  const galleryDir = path.join(process.cwd(), 'public', 'gallery');
  let images: string[] = [];
  try {
    images = fs.readdirSync(galleryDir)
      .filter((file) => /\.(jpe?g|png|gif|webp)$/i.test(file));
  } catch (err) {
    console.error('Error reading gallery directory:', err);
  }

  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
      {images.length > 0 ? (
        // 3 columns layout: three images per row
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((filename) => (
            <div key={filename} className="relative w-full h-48 rounded-lg overflow-hidden shadow">
              <Image
                src={`/gallery/${filename}`}
                alt={filename}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No images found in the gallery.</p>
      )}
    </main>
  );
}