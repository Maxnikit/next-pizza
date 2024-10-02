import { Container, Header } from "@/shared/components/shared";

export const metadata = {
  title: "Next Pizza | Checkout",
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#F4F1EE]">
      <Container>
        <Header
          hasSearch={false}
          hasCartButton={false}
          className="border-gray-200"
        />
        {children}
      </Container>
    </main>
  );
}
