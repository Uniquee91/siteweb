import { fileUrlFor } from "../sanityClient";

export const downloadPDF = async (file: any) => {
  if (!file) return;

  if (file && file.asset && file.asset._ref) {
    const pdfUrl = fileUrlFor(file.asset._ref);

    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `retreat-info.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Optional: Clean up the object URL
      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Failed to download PDF:", err);
    }
  }
};
