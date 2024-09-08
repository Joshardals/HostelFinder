import React from "react";

export default function HostelDetailsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <div>{id}</div>;
}
