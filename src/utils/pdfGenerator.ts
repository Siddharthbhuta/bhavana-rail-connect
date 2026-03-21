import jsPDF from 'jspdf';

const loadImage = (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(e);
  });
};

export const generateCatalogPDF = async (categoryName: string, products: { name: string; image: string }[]) => {
  const doc = new jsPDF();
  let currentY = 20;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const imageSize = 40;
  const gap = 10;
  const productsPerRow = 3;
  const itemWidth = (pageWidth - (margin * 2) - (gap * (productsPerRow - 1))) / productsPerRow;

  // Header
  doc.setFontSize(22);
  doc.setTextColor(31, 41, 55); // Primary color (approx)
  doc.text(categoryName.toUpperCase(), margin, currentY);
  currentY += 15;

  // Subtitle
  doc.setFontSize(12);
  doc.setTextColor(107, 114, 128); // Muted foreground (approx)
  doc.text('Bhavana Trading Company - Product Catalog', margin, currentY);
  currentY += 20;

  // Separator
  doc.setDrawColor(229, 231, 235);
  doc.line(margin, currentY - 5, pageWidth - margin, currentY - 5);

  let col = 0;
  for (const product of products) {
    if (currentY + imageSize + 20 > pageHeight - margin) {
      doc.addPage();
      currentY = margin + 10;
      col = 0;
    }

    const x = margin + (col * (itemWidth + gap));
    
    try {
      const img = await loadImage(product.image);
      const imgProps = doc.getImageProperties(img);
      const ratio = imgProps.width / imgProps.height;
      
      let drawWidth = imageSize;
      let drawHeight = imageSize / ratio;
      
      if (drawHeight > imageSize) {
        drawHeight = imageSize;
        drawWidth = imageSize * ratio;
      }

      // Center image in the item box
      const imgX = x + (itemWidth - drawWidth) / 2;
      const imgY = currentY;
      
      doc.addImage(img, 'PNG', imgX, imgY, drawWidth, drawHeight);
    } catch (error) {
      console.error(`Failed to load image for ${product.name}:`, error);
      doc.setFontSize(10);
      doc.text('[Image error]', x + 5, currentY + 10);
    }

    // Product Name
    doc.setFontSize(10);
    doc.setTextColor(40, 40, 40);
    const splitName = doc.splitTextToSize(product.name, itemWidth);
    doc.text(splitName, x + (itemWidth / 2), currentY + imageSize + 10, { align: 'center' });

    col++;
    if (col >= productsPerRow) {
      col = 0;
      currentY += imageSize + 30;
    }
  }

  doc.save(`${categoryName.toLowerCase().replace(/\s+/g, '-')}-catalog.pdf`);
};
