import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const services = [
  {
    name: "Глибоке чищення килимів",
    description: "Професійне очищення килимів від плям, пилу та алергенів.",
    price: 499.99,
    unit: "м²",
    duration: 60,
    category: "Прибирання",
    is_active: true,
    image_url: "https://s1.kaercher-media.com/media/image/selection/145665/m3/carpet-cleaning-with-se.webp",
    discount: 10,
    is_popular: true,
    service_code: "CLN-001",
    rating: 4.7,
  },
  {
    name: "Мийка вікон",
    description: "Миття вікон з обох сторін, включаючи рами.",
    price: 299.0,
    unit: "вікно",
    duration: 30,
    category: "Прибирання",
    is_active: true,
    image_url: "https://enot.sumy.ua/wp-content/uploads/2023/08/profesionalus-langu-valymas.jpg",
    discount: null,
    is_popular: false,
    service_code: "CLN-002",
    rating: 4.3,
  },
  {
    name: "Хімчистка меблів",
    description: "Глибоке очищення диванів, крісел та стільців.",
    price: 699.5,
    unit: "одиниця",
    duration: 90,
    category: "Прибирання",
    is_active: true,
    image_url: "https://svitanok.kiev.ua/images/myagkaya-mebel-top-bg.jpg",
    discount: 15,
    is_popular: true,
    service_code: "CLN-003",
    rating: 4.8,
  },
  {
    name: "Очищення кондиціонера",
    description: "Діагностика та очищення внутрішнього блоку кондиціонера.",
    price: 350.0,
    unit: "одиниця",
    duration: 45,
    category: "Техобслуговування",
    is_active: true,
    image_url: "https://holodservice.net/storage/uploads/images/chistka-konditsionerov.jpg",
    discount: 5,
    is_popular: false,
    service_code: "TECH-001",
    rating: 4.4,
  },
  {
    name: "Мийка фасаду",
    description: "Високотискова мийка фасадів будівель.",
    price: 1200.0,
    unit: "м²",
    duration: 120,
    category: "Зовнішні роботи",
    is_active: true,
    image_url: "https://gryazee.net/kyiv/wp-content/uploads/sites/3/2020/06/img-dc860d64e0fa9c352c1eeb5c6bd62738-v.jpg",
    discount: null,
    is_popular: false,
    service_code: "OUT-001",
    rating: 4.1,
  },
  {
    name: "Дезінфекція приміщення",
    description: "Професійна дезінфекція з використанням безпечних засобів.",
    price: 950.0,
    unit: "м²",
    duration: 60,
    category: "Спеціальні послуги",
    is_active: true,
    image_url: "https://www.covalent.com.ua/wp-content/webpc-passthru.php?src=https://www.covalent.com.ua/wp-content/uploads/2019/10/cleanroom-cleaning-and-disinfection-covalent.com_.ua_.jpg&nocache=1",
    discount: 20,
    is_popular: true,
    service_code: "SPE-001",
    rating: 4.9,
  },
  {
    name: "Прибирання після ремонту",
    description: "Комплексне прибирання після будівельних робіт.",
    price: 1499.99,
    unit: "м²",
    duration: 180,
    category: "Прибирання",
    is_active: true,
    image_url: "https://sofitem.com.ua/wp-content/uploads/uborka-kv-posle-remonta.jpg",
    discount: null,
    is_popular: true,
    service_code: "CLN-004",
    rating: 4.6,
  },
  {
    name: "Генеральне прибирання",
    description: "Детальне прибирання всієї квартири або офісу.",
    price: 899.99,
    unit: "м²",
    duration: 120,
    category: "Прибирання",
    is_active: true,
    image_url: "https://av-cleaning.com/wp-content/uploads/2022/01/4-5-1024x660.jpg",
    discount: 5,
    is_popular: true,
    service_code: "CLN-005",
    rating: 4.5,
  },
  {
    name: "Очищення дахів від снігу",
    description: "Ручне та механізоване очищення дахів у зимовий період.",
    price: 2000.0,
    unit: "м²",
    duration: 150,
    category: "Зовнішні роботи",
    is_active: false,
    image_url: "https://alpindustriya.com.ua/wp-content/uploads/2021/05/ochistka-krovli.jpg",
    discount: null,
    is_popular: false,
    service_code: "OUT-002",
    rating: null,
  },
  {
    name: "Мийка авто",
    description: "Зовнішнє та внутрішнє миття автомобіля.",
    price: 499.0,
    unit: "авто",
    duration: 40,
    category: "Автосервіс",
    is_active: true,
    image_url: "https://dexpenslive.blob.core.windows.net/dexrpd/AttachedPhotoAlbums/Album117/68395e4f-9277-4494-9a9b-3326e8f45f7e.jpg",
    discount: 10,
    is_popular: true,
    service_code: "AUTO-001",
    rating: 4.2,
  },
];

async function main() {
  console.log("Заповнення бази даних...");
  for (const service of services) {
    await prisma.service.create({
      data: service,
    });
  }
  console.log("База даних успішно заповнена!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });