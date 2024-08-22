import React, { Suspense } from "react";
import DemoPageContent from "./PageContent";



export default function DemoPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DemoPageContent />
    </Suspense>
  );
}
