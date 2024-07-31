import React from "react";

type Props = {
  params: { id: string };
};

export default function ProductPage({ params: { id } }: Props) {
  return <div>ProductPage</div>;
}
