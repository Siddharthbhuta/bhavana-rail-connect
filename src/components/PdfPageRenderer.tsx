import { useEffect, useRef, useState } from 'react';
import * as pdfjs from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

interface PdfPageRendererProps {
  src: string;
  maxWidth: number;
  className?: string;
}

const PdfPageRenderer = ({ src, maxWidth, className }: PdfPageRendererProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const canvas = canvasRef.current;

    const renderPage = async () => {
      if (!canvas || maxWidth <= 0) return;

      setLoading(true);
      setError(false);

      try {
        const pdf = await pdfjs.getDocument(src).promise;
        if (cancelled) return;

        const page = await pdf.getPage(1);
        if (cancelled) return;

        const baseViewport = page.getViewport({ scale: 1 });
        const scale = maxWidth / baseViewport.width;
        const viewport = page.getViewport({ scale });

        const context = canvas.getContext('2d');
        if (!context || cancelled) return;

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvas, canvasContext: context, viewport }).promise;
        if (!cancelled) setLoading(false);
      } catch {
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      }
    };

    renderPage();

    return () => {
      cancelled = true;
    };
  }, [src, maxWidth]);

  if (error) {
    return (
      <p className="text-sm text-muted-foreground text-center py-8">
        Unable to load certificate preview.
      </p>
    );
  }

  return (
    <div className={className}>
      {loading && (
        <div className="flex items-center justify-center py-12 text-sm text-muted-foreground">
          Loading certificate…
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={`mx-auto max-w-full h-auto ${loading ? 'hidden' : 'block'}`}
      />
    </div>
  );
};

export default PdfPageRenderer;
