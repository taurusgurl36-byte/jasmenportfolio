import { useEffect, useRef, useState } from "react";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import { PageHeader } from "../components/SectionHeader";
import { personalInfo } from "../data/portfolioData";

GlobalWorkerOptions.workerSrc = workerUrl;

const PAGE_SCALE = 2;

function ResumePdfPage({ pdf, pageNumber }) {
  const canvasRef = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let disposed = false;
    let renderTask;
    setError(false);
    pdf
      .getPage(pageNumber)
      .then((page) => {
        if (disposed) return;
        const canvas = canvasRef.current;
        const viewport = page.getViewport({ scale: PAGE_SCALE });
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        renderTask = page.render({ canvas, viewport });
        return renderTask.promise;
      })
      .catch((error) => {
        if (!disposed && error.name !== "RenderingCancelledException") setError(true);
      });
    return () => {
      disposed = true;
      renderTask?.cancel();
    };
  }, [pdf, pageNumber]);

  if (error)
    return (
      <p role="alert" className="text-text-muted">
        Unable to display this page. Please refresh and try again.
      </p>
    );
  return (
    <canvas
      ref={canvasRef}
      className="resume-page-canvas"
      role="img"
      aria-label={`${personalInfo.name} résumé, PDF page ${pageNumber}`}
    />
  );
}

function ResumeContent({ pdf, error }) {
  if (error) {
    return (
      <p role="alert" className="text-text-muted">
        Unable to load the résumé. Please refresh and try again.
      </p>
    );
  }

  if (!pdf) {
    return (
      <p role="status" className="text-text-muted">
        Loading résumé…
      </p>
    );
  }

  return Array.from({ length: pdf.numPages }, (_, index) => (
    <ResumePdfPage key={index + 1} pdf={pdf} pageNumber={index + 1} />
  ));
}

export default function ResumePage() {
  const [pdf, setPdf] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let disposed = false;
    const loadingTask = getDocument({ url: personalInfo.resume });
    loadingTask.promise
      .then((loadedPdf) => {
        if (!disposed) setPdf(loadedPdf);
      })
      .catch(() => {
        if (!disposed) setError(true);
      });
    return () => {
      disposed = true;
      loadingTask.destroy();
    };
  }, []);

  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-10 md:py-14">
      <PageHeader title="Résumé" description={`${personalInfo.name} · ${personalInfo.title}`} />
      <div className="resume-document mt-8">
        <ResumeContent pdf={pdf} error={error} />
      </div>
    </section>
  );
}
