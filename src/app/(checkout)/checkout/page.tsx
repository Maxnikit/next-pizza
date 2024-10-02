import { Container, Title, WhiteBlock } from "@/shared/components/shared";
import CheckoutPriceDetails from "@/shared/components/shared/checkout-price-details";
import { Button, Input, Textarea } from "@/shared/components/ui";
import { ArrowRight, Package, Truck } from "lucide-react";

export default async function Home() {
  const calculateDeliveryFee = (productsPrice: number) => {
    let deliveryFee;
    if (productsPrice < 850) {
      deliveryFee = 100;
    } else {
      deliveryFee = 0;
    }
    return deliveryFee;
  };

  const productsPrice = 1999;
  const deliveryFee = calculateDeliveryFee(productsPrice);
  const totalPrice = productsPrice + deliveryFee;

  return (
    <Container className="mt-10">
      <Title
        text="Оформление заказа"
        size="lg"
        className="mb-8 font-extrabold"
      />
      <div className="flex gap-40">
        {/* Левая часть */}
        <div className="mb-20 flex flex-1 flex-col gap-10">
          <WhiteBlock title="1. Корзина">1231231</WhiteBlock>
          <WhiteBlock title="2. Персональные данные">
            <div className="grid grid-cols-2 gap-5">
              <Input name="firstName" className="text-base" placeholder="Имя" />
              <Input
                name="lastName"
                className="text-base"
                placeholder="Фамилия"
              />
              <Input name="email" className="text-base" placeholder="E-Mail" />
              <Input name="phone" className="text-base" placeholder="Телефон" />
            </div>
          </WhiteBlock>
          <WhiteBlock title="3. Адрес доставки">
            <div className="flex flex-col gap-5">
              <Input
                name="location"
                className="text-base"
                placeholder="Введите адрес..."
              />
              <Textarea
                className="text-base"
                placeholder="Комментарий к заказу"
                rows={5}
              />
            </div>
          </WhiteBlock>
        </div>

        {/* Правая часть */}
        <div className="w-[450px]">
          <WhiteBlock className="sticky top-4 p-6">
            <div className="flex flex-col gap-1">
              <span className="text-xl">Итого:</span>
              <span className="text-3xl font-extrabold">{totalPrice} ₽</span>
            </div>

            <CheckoutPriceDetails
              title="Стоимость товаров:"
              leftAdornment={<Package size={20} />}
              value={productsPrice}
            />
            {/* TODO add info about when deliveryFee is 0 and when not */}
            <CheckoutPriceDetails
              title="Доставка:"
              leftAdornment={<Truck size={20} />}
              value={deliveryFee}
            />

            <Button
              type="submit"
              className="mt-6 h-14 w-full rounded-2xl text-base font-bold"
            >
              Перейти к оплате
              <ArrowRight className="ml-2 w-5" />
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}