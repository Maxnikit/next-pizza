import {
  Categories,
  Container,
  Filters,
  ProductCard,
  SortPopup,
  Title,
  TopBar,
  ProductsGroupList,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                categoryId={0}
                products={[
                  {
                    id: 0,
                    name: "Пицца 1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 0,
                    name: "Пицца 1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 0,
                    name: "Пицца 1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 0,
                    name: "Пицца 1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 0,
                    name: "Пицца 1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 0,
                    name: "Пицца 1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 0,
                    name: "Пицца 1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                    items: [{ price: 550 }],
                  },
                ]}
              />
              <ProductsGroupList
                title="Завтраки"
                categoryId={1}
                products={[
                  {
                    id: 0,
                    name: "Пицца 1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 0,
                    name: "Пицца 1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 0,
                    name: "Пицца 1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 0,
                    name: "Пицца 1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 0,
                    name: "Пицца 1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 0,
                    name: "Пицца 1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 0,
                    name: "Пицца 1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                    items: [{ price: 550 }],
                  },
                ]}
              />
              <ProductsGroupList
                title="Напитки"
                categoryId={2}
                products={[
                  {
                    id: 0,
                    name: "Пицца 1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 0,
                    name: "Пицца 1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 0,
                    name: "Пицца 1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 0,
                    name: "Пицца 1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 0,
                    name: "Пицца 1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 0,
                    name: "Пицца 1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 0,
                    name: "Пицца 1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEFB595A197C24BA932A0AD1144AFB.avif",
                    items: [{ price: 550 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
