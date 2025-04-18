import QrFailure from "../components/QrFailure";
import { Suspense } from "react";

export default function QrPage() {
  return (
    <Suspense fallback={<div>Loading QR info...</div>}>
      <QrFailure />
    </Suspense>
  );
}
